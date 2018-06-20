package org.jeecgframework.web.rest.controller;

import java.net.URI;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.validation.ConstraintViolation;
import javax.validation.Validator;

import org.jeecgframework.core.beanvalidator.BeanValidators;
import org.jeecgframework.web.system.pojo.base.TSUser;
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

@Api(value="classSigninInfoRest",description="签到信息管理",tags="SigninRestController")

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
	@RequestMapping(value = "/{username}", method = RequestMethod.GET)
	@ResponseBody
	@ApiOperation(value="根据ID获取课程签到内容",notes="根据ID获取课程签到内容",httpMethod="GET",produces="application/json")

	public ResponseEntity<?> get(@ApiParam(required=true,name="username",value="用户名") @PathVariable("username") String username) {
		JSONObject sessions = new JSONObject();
		JSONObject speakers = new JSONObject();
		

		
		
		
		String sql="select distinct info.course_name,t.id,info.course_class_hour,us.realname,ct.week,ct.bein_time,ct.end_time from kq_course_assign t"
				+" left join kq_course_info info on t.kq_course_info_id=info.id"
				+" left join kq_course_student stu on stu.course_id=t.id"
				+" left join t_s_base_user us on us.ID=stu.student_id"
				+" left join kq_course_time_info ct on t.id=ct.course_id"
				+" left join kq_timetable tt on tt.classnumber=ct.bein_time"
				+" left join kq_timetable ttt on ttt.classnumber=ct.end_time"
				+" left join kq_base_parameter tttt on 1=1"
				+" left join kq_attendance att on att.course_id=t.kq_course_info_id"
				+" where t.course_status='1' and ct.week=date_format(curdate(),'%w') and"
				+" (curtime() between date_sub(tt.begin_time, interval (tttt.sigin_begin_time ) minute) and date_add(tt.begin_time, interval (tttt.sigin_end_time) minute)"
				+" or curtime() between date_sub(ttt.end_time, interval (tttt.signoff_begin_time ) minute) and date_add(ttt.end_time, interval (tttt.signoff_end_time) minute))"
				+" and ( att.type=4 or att.date is null) "
				+" and us.username='"+username+"';";
		
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
	@RequestMapping(value = "/signin/{studentid}&&{slatitude}&&{slongitude}&&{courseid}", method = RequestMethod.GET)
	@ResponseBody
	@ApiOperation(value="根据地理位置签到",notes="根据地理位置签到",httpMethod="GET",produces="application/json")
	public ResponseEntity<?> signin(
			@ApiParam(name = "studentid", value = "学生id", required = true) @PathVariable("studentid")String studentid,
			@ApiParam(name = "courseid", value = "课程id", required = true) @PathVariable("courseid")String courseid1,
			@ApiParam(name = "slongitude", value = "学生经度", required = true)@PathVariable("slongitude") String slongitude,
			@ApiParam(name = "slatitude", value = "学生纬度", required = true)@PathVariable("slatitude") String slatitude){
		JSONObject speakers = new JSONObject();
		String sql0="select kq_course_info_id from kq_course_assign where id='"+courseid1+"';";
		List<Map<String,Object>> cidinfo =kqClassNoticeService.findForJdbc(sql0);
		String courseid=cidinfo.get(0).get("kq_course_info_id").toString();
		String sql1="select a.longitude,a.lantitude from kq_classroom a "
				+"RIGHT join kq_course_assign b on a.id=b.kq_place "
				+"where b.id='"+courseid1+"';";
		List<Map<String,Object>> roominfo =kqClassNoticeService.findForJdbc(sql1);
		double rlongitude=Double.parseDouble(roominfo.get(0).get("longitude").toString());
		double rlatitude=Double.parseDouble(roominfo.get(0).get("lantitude").toString());
		MapUtils mapUtils=new MapUtils();
		double distance=mapUtils.getDistance(Double.valueOf(slongitude),Double.valueOf(slatitude),rlongitude,rlatitude);
		String sql2="select max_location_distance from kq_base_parameter;";
		List<Map<String,Object>> baseinfo =kqClassNoticeService.findForJdbc(sql2);
		double sdistance=Double.parseDouble(baseinfo.get(0).get("max_location_distance").toString());
		Date date=new Date();
		//判断当前日期是周几
		Calendar calendar = Calendar.getInstance();      

		    if(date != null){        

		         calendar.setTime(date);      

		    }        

		    int w = calendar.get(Calendar.DAY_OF_WEEK) - 1;      

		    if (w < 0){        
		        w = 0;      
		    }
		String sql3="select bein_time,end_time from kq_course_time_info where course_id='"+courseid1+"'and week='"+w+"';";
		List<Map<String,Object>> courseinfo =kqClassNoticeService.findForJdbc(sql3);
		String begin=courseinfo.get(0).get("bein_time").toString();
		String end=courseinfo.get(0).get("end_time").toString();
		String sql4="select begin_time from kq_timetable where classnumber='"+begin+"';";
		String sql5="select end_time from kq_timetable where classnumber='"+end+"';";
		List<Map<String,Object>> be =kqClassNoticeService.findForJdbc(sql4);
		List<Map<String,Object>> en =kqClassNoticeService.findForJdbc(sql5);
		String begin_time=be.get(0).get("begin_time").toString();
		String end_time=en.get(0).get("end_time").toString();
		String sql6="select * from kq_base_parameter;";
		List<Map<String,Object>> base =kqClassNoticeService.findForJdbc(sql6);
		boolean flag=isInDate(date, begin_time, begin_time, base.get(0).get("sigin_begin_time").toString(),  base.get(0).get("sigin_end_time").toString());
		if (distance<=sdistance) {															
			KqAttendanceEntity kqAttendanceEntity=new KqAttendanceEntity();
			kqAttendanceEntity.setCourseId(courseid);
			Map<String,Object> map = kqClassNoticeService.findOneForJdbc("select * from t_s_base_user a where a.username = '"+studentid+"'");
			kqAttendanceEntity.setStudentId(map.get("id").toString());
			kqAttendanceEntity.setDate(new Date());
			if (flag) { //上课签到				
			kqAttendanceEntity.setType("4");//上课签到
			kqClassNoticeService.save(kqAttendanceEntity);
			}else {     //下课签到						
			//String sql7="select * from kq_attendance where student_id='"+map.get("id").toString()+"' and course_id ='"+courseid+"'and date='"+new Date()+"'";
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd"); 
			String hql="from KqAttendanceEntity where studentId= '"+map.get("id").toString()+"' and courseId='"+courseid+"'and date ='"+sdf.format(new Date())+"'";
			List<Object> list= kqClassNoticeService.findHql(hql);
			//List<Object> list = kqClassNoticeService.findHql("from KqAttendanceEntity where studentId=?  and courseId=? and date = ?", map.get("id").toString(),courseid,new Date());
			KqAttendanceEntity temp = new KqAttendanceEntity();
			if(list.size() == 0){
				kqAttendanceEntity.setType("3");//上课签到
				kqClassNoticeService.save(kqAttendanceEntity);
			}else{
				temp = (KqAttendanceEntity) list.get(0);
				temp.setType("1");
				kqClassNoticeService.saveOrUpdate(temp);			
			//kqAttendanceEntity.setType("2");//下课签到
			}
			
			}
			
			//return true;
			speakers.put("data", "误差距离："+distance+",签到成功");
			speakers.put("isSign", true);
		}else {
			speakers.put("data", "误差距离："+distance+"米,大于"+sdistance+"米,签到失败");
			speakers.put("isSign", false);
		}
		return new ResponseEntity(speakers, HttpStatus.OK);
			
	}
	/** 
	 * 判断时间是否在时间段内 
	 *  
	 * @param date 
	 *            当前时间 yyyy-MM-dd HH:mm:ss 
	 * @param strDateBegin 
	 *            开始时间 00:00:00 
	 * @param strDateEnd 
	 *            结束时间 00:05:00 
	 * @return 
	 */  
	public static boolean isInDate(Date date, String strDateBegin,  
	        String strDateEnd,String signinB,String signinE) {  
		int B=Integer.valueOf(signinB);
		int E=Integer.valueOf(signinE);
		
	    SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");  
	    String strDate = sdf.format(date);  
	    // 截取当前时间时分秒  
	    int strDateH = Integer.parseInt(strDate.substring(11, 13));  
	    int strDateM = Integer.parseInt(strDate.substring(14, 16));  
	    int strDateS = Integer.parseInt(strDate.substring(17, 19));  
	    // 截取开始时间时分秒  
	    int strDateBeginH = Integer.parseInt(strDateBegin.substring(0, 2));  
	    int strDateBeginM = Integer.parseInt(strDateBegin.substring(3, 5));  
	    int strDateBeginS = Integer.parseInt(strDateBegin.substring(6, 8));
	    if (B>=60) {
			strDateBeginH-=B/60;
			B=B%60;
		}
	    if (strDateBeginM-B<0) {
			strDateBeginH-=1;
			strDateBeginM=strDateBeginM+60-B;
		}else {
			strDateBeginM=strDateBeginM-B;
		}
	    // 截取结束时间时分秒  
	    int strDateEndH = Integer.parseInt(strDateEnd.substring(0, 2));  
	    int strDateEndM = Integer.parseInt(strDateEnd.substring(3, 5));  
	    int strDateEndS = Integer.parseInt(strDateEnd.substring(6, 8));
	    if (strDateEndM+E>=60) {
			strDateEndH+=(strDateEndM+E)/60;
			strDateEndM=(strDateEndM+E)%60;
		}else {
			strDateEndM=strDateEndM+E;
		}
	    if ((strDateH >= strDateBeginH && strDateH <= strDateEndH)) {  
	        // 当前时间小时数在开始时间和结束时间小时数之间  
	        if (strDateH > strDateBeginH && strDateH < strDateEndH) {  
	            return true;  
	            // 当前时间小时数等于开始时间小时数，分钟数在开始和结束之间  
	        } else if (strDateH == strDateBeginH && strDateM >= strDateBeginM  
	                && strDateM <= strDateEndM) {  
	            return true;  
	            // 当前时间小时数等于开始时间小时数，分钟数等于开始时间分钟数，秒数在开始和结束之间  
	        } else if (strDateH == strDateBeginH && strDateM == strDateBeginM  
	                && strDateS >= strDateBeginS && strDateS <= strDateEndS) {  
	            return true;  
	        }  
	        // 当前时间小时数大等于开始时间小时数，等于结束时间小时数，分钟数小等于结束时间分钟数  
	        else if (strDateH >= strDateBeginH && strDateH == strDateEndH  
	                && strDateM <= strDateEndM) {  
	            return true;  
	            // 当前时间小时数大等于开始时间小时数，等于结束时间小时数，分钟数等于结束时间分钟数，秒数小等于结束时间秒数  
	        } else if (strDateH >= strDateBeginH && strDateH == strDateEndH  
	                && strDateM == strDateEndM && strDateS <= strDateEndS) {  
	            return true;  
	        } else {  
	            return false;  
	        }  
	    } else {  
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
