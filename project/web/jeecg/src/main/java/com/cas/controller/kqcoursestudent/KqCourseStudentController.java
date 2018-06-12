package com.cas.controller.kqcoursestudent;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import org.jeecgframework.core.common.controller.BaseController;
import org.jeecgframework.core.common.hibernate.qbc.CriteriaQuery;
import org.jeecgframework.core.common.model.json.AjaxJson;
import org.jeecgframework.core.common.model.json.DataGrid;
import org.jeecgframework.core.constant.Globals;
import org.jeecgframework.core.util.StringUtil;
import org.jeecgframework.tag.core.easyui.TagUtil;
import org.jeecgframework.web.system.pojo.base.TSDepart;
import org.jeecgframework.web.system.service.SystemService;
import org.jeecgframework.core.util.MyBeanUtils;

import com.cas.entity.kqcoursestudent.KqCourseStudentEntity;
import com.cas.service.kqcoursestudent.KqCourseStudentServiceI;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.jeecgframework.core.beanvalidator.BeanValidators;
import java.util.Set;
import javax.validation.ConstraintViolation;
import javax.validation.Validator;
import java.net.URI;
import org.springframework.http.MediaType;
import org.springframework.web.util.UriComponentsBuilder;

/**   
 * @Title: Controller
 * @Description: 课程学生关联表
 * @author zhangdaihao
 * @date 2018-05-02 21:01:31
 * @version V1.0   
 *
 */
@Controller
@RequestMapping("/kqCourseStudentController")
public class KqCourseStudentController extends BaseController {
	/**
	 * Logger for this class
	 */
	private static final Logger logger = Logger.getLogger(KqCourseStudentController.class);

	@Autowired
	private KqCourseStudentServiceI kqCourseStudentService;
	@Autowired
	private SystemService systemService;
	@Autowired
	private Validator validator;
	


	/**
	 * 课程学生关联表列表 页面跳转
	 * 
	 * @return
	 */
	@RequestMapping(params = "list")
	public ModelAndView list(HttpServletRequest request) {
		return new ModelAndView("com/cas/kqcoursestudent/kqCourseStudentList");
	}

	/**
	 * easyui AJAX请求数据
	 * 
	 * @param request
	 * @param response
	 * @param dataGrid
	 * @param user
	 */

	@RequestMapping(params = "datagrid")
	public void datagrid(KqCourseStudentEntity kqCourseStudent,HttpServletRequest request, HttpServletResponse response, DataGrid dataGrid) {
		CriteriaQuery cq = new CriteriaQuery(KqCourseStudentEntity.class, dataGrid);
		//查询条件组装器
		String courseId = request.getParameter("courseId");
		if(StringUtils.isNotEmpty(courseId)) {
			cq.add(Restrictions.eq("courseId", courseId));
		}else {
			cq.add(Restrictions.eq("courseId", ""));
		}
		org.jeecgframework.core.extend.hqlsearch.HqlGenerateUtil.installHql(cq, kqCourseStudent, request.getParameterMap());
		this.kqCourseStudentService.getDataGridReturn(cq, true);
		TagUtil.datagrid(response, dataGrid);
	}

	/**
	 * 删除课程学生关联表
	 * 
	 * @return
	 */
	@RequestMapping(params = "del")
	@ResponseBody
	public AjaxJson del(KqCourseStudentEntity kqCourseStudent, HttpServletRequest request) {
		String message = null;
		AjaxJson j = new AjaxJson();
		kqCourseStudent = systemService.getEntity(KqCourseStudentEntity.class, kqCourseStudent.getId());
		message = "课程学生关联表删除成功";
		kqCourseStudentService.delete(kqCourseStudent);
		systemService.addLog(message, Globals.Log_Type_DEL, Globals.Log_Leavel_INFO);
		
		j.setMsg(message);
		return j;
	}


	/**
	 * 添加课程学生关联表
	 * 
	 * @param ids
	 * @return
	 */
	@RequestMapping(params = "save")
	@ResponseBody
	public AjaxJson save(KqCourseStudentEntity kqCourseStudent, HttpServletRequest request) {
		String message = null;
		AjaxJson j = new AjaxJson();
		if (StringUtil.isNotEmpty(kqCourseStudent.getId())) {
			message = "课程学生关联表更新成功";
			KqCourseStudentEntity t = kqCourseStudentService.get(KqCourseStudentEntity.class, kqCourseStudent.getId());
			try {
				MyBeanUtils.copyBeanNotNull2Bean(kqCourseStudent, t);
				kqCourseStudentService.saveOrUpdate(t);
				systemService.addLog(message, Globals.Log_Type_UPDATE, Globals.Log_Leavel_INFO);
			} catch (Exception e) {
				e.printStackTrace();
				message = "课程学生关联表更新失败";
			}
		} else {
			message = "课程学生关联表添加成功";
			kqCourseStudentService.save(kqCourseStudent);
			systemService.addLog(message, Globals.Log_Type_INSERT, Globals.Log_Leavel_INFO);
		}
		j.setMsg(message);
		return j;
	}

	/**
	 * 课程学生关联表列表页面跳转
	 * 
	 * @return
	 */
	@RequestMapping(params = "addorupdate")
	public ModelAndView addorupdate(KqCourseStudentEntity kqCourseStudent, HttpServletRequest req) {
		if (StringUtil.isNotEmpty(kqCourseStudent.getId())) {
			kqCourseStudent = kqCourseStudentService.getEntity(KqCourseStudentEntity.class, kqCourseStudent.getId());
			req.setAttribute("kqCourseStudentPage", kqCourseStudent);
		}
		String sql = "select a.id,a.realname from t_s_base_user a left join t_s_role_user b on a.ID = b.userid left join t_s_role c on c.ID = b.roleid where c.rolename = '学生' order by convert(a.realname using gbk) asc";
		req.setAttribute("studentList", systemService.findForJdbc(sql));
		return new ModelAndView("com/cas/kqcoursestudent/kqCourseStudent");
	}
	
	@RequestMapping(method = RequestMethod.GET)
	@ResponseBody
	public List<KqCourseStudentEntity> list() {
		List<KqCourseStudentEntity> listKqCourseStudents=kqCourseStudentService.getList(KqCourseStudentEntity.class);
		return listKqCourseStudents;
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	@ResponseBody
	public ResponseEntity<?> get(@PathVariable("id") String id) {
		KqCourseStudentEntity task = kqCourseStudentService.get(KqCourseStudentEntity.class, id);
		if (task == null) {
			return new ResponseEntity(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity(task, HttpStatus.OK);
	}

	@RequestMapping(method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public ResponseEntity<?> create(@RequestBody KqCourseStudentEntity kqCourseStudent, UriComponentsBuilder uriBuilder) {
		//调用JSR303 Bean Validator进行校验，如果出错返回含400错误码及json格式的错误信息.
		Set<ConstraintViolation<KqCourseStudentEntity>> failures = validator.validate(kqCourseStudent);
		if (!failures.isEmpty()) {
			return new ResponseEntity(BeanValidators.extractPropertyAndMessage(failures), HttpStatus.BAD_REQUEST);
		}

		//保存
		kqCourseStudentService.save(kqCourseStudent);

		//按照Restful风格约定，创建指向新任务的url, 也可以直接返回id或对象.
		String id = kqCourseStudent.getId();
		URI uri = uriBuilder.path("/rest/kqCourseStudentController/" + id).build().toUri();
		HttpHeaders headers = new HttpHeaders();
		headers.setLocation(uri);

		return new ResponseEntity(headers, HttpStatus.CREATED);
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> update(@RequestBody KqCourseStudentEntity kqCourseStudent) {
		//调用JSR303 Bean Validator进行校验，如果出错返回含400错误码及json格式的错误信息.
		Set<ConstraintViolation<KqCourseStudentEntity>> failures = validator.validate(kqCourseStudent);
		if (!failures.isEmpty()) {
			return new ResponseEntity(BeanValidators.extractPropertyAndMessage(failures), HttpStatus.BAD_REQUEST);
		}

		//保存
		kqCourseStudentService.saveOrUpdate(kqCourseStudent);

		//按Restful约定，返回204状态码, 无内容. 也可以返回200状态码.
		return new ResponseEntity(HttpStatus.NO_CONTENT);
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable("id") String id) {
		kqCourseStudentService.deleteEntityById(KqCourseStudentEntity.class, id);
	}
}
