package org.jeecgframework.web.rest.controller;

import java.net.URI;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.validation.ConstraintViolation;
import javax.validation.Validator;

import org.jeecgframework.core.beanvalidator.BeanValidators;
import org.jeecgframework.web.system.service.SystemService;
import org.jeecgframework.web.system.util.MapUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.util.UriComponentsBuilder;

import com.alibaba.fastjson.JSONObject;
import com.cas.entity.kqattendance.KqAttendanceEntity;
import com.cas.entity.kqclassnotice.KqClassNoticeEntity;
import com.cas.service.kqclassnotice.KqClassNoticeServiceI;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;

/**
 * KqClassNotice的Restful API
 * 
 *  path/ POST    --> 新增 (CREATE)
 *  path/id  GET -->  查询 (READ)
 *  path/id  PUT  -->  更新 (UPDATE)
 *  path/id  DELETE --> 删除 (DELETE)
 * 
 * @author liuht
 */

@Api(value="classSigninInfoRest",description="班级公告信息管理",tags="SigninRestController")

@Controller
@RequestMapping(value = "/classSigninInfo")
public class SigninRestController {

	@Autowired
	private KqClassNoticeServiceI kqClassNoticeService;
	

	@Autowired
	private Validator validator;

	/**
	 * 访问地址：http://localhost:8080/jeecg/rest/classNotice
	 * @return
	 */
	@RequestMapping(method = RequestMethod.GET)
	@ResponseBody

	@ApiOperation(value="课程签到信息获取",produces="application/json",httpMethod="GET")

	public JSONObject list() {
		String sql = "select c.realname,b.course_name,b.ID,d.id from kq_course_student a "
				+ " left join kq_course b on a.course_id = b.ID"
				+ " left join t_s_base_user c on c.ID = a.student_id"
				+ " left join kq_attendance d on d.course_id = a.course_id and d.student_id = a.student_id"
				+ " where b.sign_status = '1' and c.realname = '';";
		List<Map<String,Object>> kqClassesList =kqClassNoticeService.findForJdbc(sql);
		JSONObject jsonObj = new JSONObject();
		jsonObj.put("sessions", kqClassesList);
		return jsonObj;
	}

	/**
	 * 访问地址：http://localhost:8080/jeecg/rest/user/{id}
	 * @param id
	 * @return
	 */
	@RequestMapping(value = "/{studentId}", method = RequestMethod.GET)
	@ResponseBody
	@ApiOperation(value="根据ID获取课程签到内容",notes="根据ID获取课程签到内容",httpMethod="GET",produces="application/json")

	public ResponseEntity<?> get(@ApiParam(required=true,name="studentId",value="学生ID") @PathVariable("studentId") String studentId) {
		JSONObject sessions = new JSONObject();
		JSONObject speakers = new JSONObject();
		
		String sql="select c.* from kq_course_student t "
					+"left join kq_course c on t.course_id=c.ID "
					+"left join t_s_base_user u on u.ID=t.student_id"
					+"where c.course_status=1 and  t.student_id='"+studentId+"';";
		
		
//		String sql = "select c.realname,b.course_name,b.ID,d.id from kq_course_student a "
//				+ " left join kq_course b on a.course_id = b.ID"
//				+ " left join t_s_base_user c on c.ID = a.student_id"
//				+ " left join kq_attendance d on d.course_id = a.course_id and d.student_id = a.student_id"
//				+ " where b.sign_status = '1' and c.username = '"+username+"';";
		
		List<Map<String,Object>> kqClassesList =kqClassNoticeService.findForJdbc(sql);
		if (kqClassesList.size()>0){	//返回课程列表
			speakers.put("data", kqClassesList);
			speakers.put("isSign", true);
			
		}else{
			speakers.put("isSign", false);
		}
			
		
		return new ResponseEntity(speakers, HttpStatus.OK);
	}
	/**
	 * 访问地址：http://localhost:8080/jeecg/rest/user/{id}
	 * @param id
	 * @return
	 */
	@RequestMapping(value = "/signin", method = RequestMethod.GET)
	@ResponseBody
	@ApiOperation(value="根据地理位置签到",notes="根据地理位置签到",httpMethod="GET",produces="application/json")
	public boolean signin(
			@ApiParam(name = "studentid", value = "学生id", required = true) String studentid,
			@ApiParam(name = "courseid", value = "课程id", required = true) String courseid,
			@ApiParam(name = "slongitude", value = "学生经度", required = true) Double slongitude,
			@ApiParam(name = "slatitude", value = "学生纬度", required = true) Double slatitude){
		String sql1="select a.longitude,a.latitude from kq_classroom a"
				+"left join kq_course_assign b on a.id=b.kq_place"
				+"where b.kq_course_info_id='"+courseid+"';";
		List<Map<String,Object>> roominfo =kqClassNoticeService.findForJdbc(sql1);
		double rlongitude=(double)roominfo.get(0).get("longitude");
		double rlatitude=(double)roominfo.get(0).get("latitude");
		MapUtils mapUtils=new MapUtils();
		double distance=mapUtils.getDistance(slongitude,slatitude,rlongitude,rlatitude);
		String sql2="select max_location_distance from kq_base_parameter";
		List<Map<String,Object>> baseinfo =kqClassNoticeService.findForJdbc(sql2);
		double sdistance=(double)baseinfo.get(0).get("max_location_distance");
		if (distance<=sdistance) {
			KqAttendanceEntity kqAttendanceEntity=new KqAttendanceEntity();
			kqAttendanceEntity.setCourseId(courseid);
			kqAttendanceEntity.setStudentId(studentid);
			kqAttendanceEntity.setType("1");
			systemService.save(kqAttendanceEntity);
			return true;
		}else {
			return false;
		}
	}
	/*@RequestMapping(method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody

	@ApiOperation(value="创建班级公告信息")
	public ResponseEntity<?> create(@ApiParam(name="班级对象")@RequestBody KqClassNoticeEntity kqClass, UriComponentsBuilder uriBuilder) {

		//调用JSR303 Bean Validator进行校验，如果出错返回含400错误码及json格式的错误信息.
		Set<ConstraintViolation<KqClassNoticeEntity>> failures = validator.validate(kqClass);
		if (!failures.isEmpty()) {
			return new ResponseEntity(BeanValidators.extractPropertyAndMessage(failures), HttpStatus.BAD_REQUEST);
		}

		//保存用户
		kqClassNoticeService.save(kqClass);

		//按照Restful风格约定，创建指向新任务的url, 也可以直接返回id或对象.
		String id = kqClass.getId();
		URI uri = uriBuilder.path("/rest/classNotice/" + id).build().toUri();
		HttpHeaders headers = new HttpHeaders();
		headers.setLocation(uri);

		return new ResponseEntity(headers, HttpStatus.CREATED);
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody

	@ApiOperation(value="更新班级公告信息",notes="更新班级公告信息")
	public ResponseEntity<?> update(@ApiParam(name="班级公告",value="传入对应的JSON")@RequestBody KqClassNoticeEntity kqClass) {

		//调用JSR303 Bean Validator进行校验，如果出错返回含400错误码及json格式的错误信息.
		Set<ConstraintViolation<KqClassNoticeEntity>> failures = validator.validate(kqClass);
		if (!failures.isEmpty()) {
			return new ResponseEntity(BeanValidators.extractPropertyAndMessage(failures), HttpStatus.BAD_REQUEST);
		}

		//保存
		kqClassNoticeService.saveOrUpdate(kqClass);

		//按Restful约定，返回204状态码, 无内容. 也可以返回200状态码.
		return new ResponseEntity(HttpStatus.NO_CONTENT);
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	@ResponseStatus(HttpStatus.NO_CONTENT)
	@ApiOperation(value="删除班级公告信息")
	public void delete(@ApiParam(name="id",value="班级公告ID",required=true)@PathVariable("id") String id) {
		kqClassNoticeService.deleteEntityById(KqClassNoticeEntity.class, id);
	}*/
}
