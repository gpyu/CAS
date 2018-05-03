package com.cas.controller.kqclassstudent;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
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

import com.cas.entity.kqclassstudent.KqClassStudentEntity;
import com.cas.service.kqclassstudent.KqClassStudentServiceI;

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
 * @Description: 班级学生表
 * @author zhangdaihao
 * @date 2018-05-02 21:00:20
 * @version V1.0   
 *
 */
@Controller
@RequestMapping("/kqClassStudentController")
public class KqClassStudentController extends BaseController {
	/**
	 * Logger for this class
	 */
	private static final Logger logger = Logger.getLogger(KqClassStudentController.class);

	@Autowired
	private KqClassStudentServiceI kqClassStudentService;
	@Autowired
	private SystemService systemService;
	@Autowired
	private Validator validator;
	


	/**
	 * 班级学生表列表 页面跳转
	 * 
	 * @return
	 */
	@RequestMapping(params = "list")
	public ModelAndView list(HttpServletRequest request) {
		return new ModelAndView("com/cas/kqclassstudent/kqClassStudentList");
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
	public void datagrid(KqClassStudentEntity kqClassStudent,HttpServletRequest request, HttpServletResponse response, DataGrid dataGrid) {
		CriteriaQuery cq = new CriteriaQuery(KqClassStudentEntity.class, dataGrid);
		//查询条件组装器
		org.jeecgframework.core.extend.hqlsearch.HqlGenerateUtil.installHql(cq, kqClassStudent, request.getParameterMap());
		this.kqClassStudentService.getDataGridReturn(cq, true);
		TagUtil.datagrid(response, dataGrid);
	}

	/**
	 * 删除班级学生表
	 * 
	 * @return
	 */
	@RequestMapping(params = "del")
	@ResponseBody
	public AjaxJson del(KqClassStudentEntity kqClassStudent, HttpServletRequest request) {
		String message = null;
		AjaxJson j = new AjaxJson();
		kqClassStudent = systemService.getEntity(KqClassStudentEntity.class, kqClassStudent.getId());
		message = "班级学生表删除成功";
		kqClassStudentService.delete(kqClassStudent);
		systemService.addLog(message, Globals.Log_Type_DEL, Globals.Log_Leavel_INFO);
		
		j.setMsg(message);
		return j;
	}


	/**
	 * 添加班级学生表
	 * 
	 * @param ids
	 * @return
	 */
	@RequestMapping(params = "save")
	@ResponseBody
	public AjaxJson save(KqClassStudentEntity kqClassStudent, HttpServletRequest request) {
		String message = null;
		AjaxJson j = new AjaxJson();
		if (StringUtil.isNotEmpty(kqClassStudent.getId())) {
			message = "班级学生表更新成功";
			KqClassStudentEntity t = kqClassStudentService.get(KqClassStudentEntity.class, kqClassStudent.getId());
			try {
				MyBeanUtils.copyBeanNotNull2Bean(kqClassStudent, t);
				kqClassStudentService.saveOrUpdate(t);
				systemService.addLog(message, Globals.Log_Type_UPDATE, Globals.Log_Leavel_INFO);
			} catch (Exception e) {
				e.printStackTrace();
				message = "班级学生表更新失败";
			}
		} else {
			message = "班级学生表添加成功";
			kqClassStudentService.save(kqClassStudent);
			systemService.addLog(message, Globals.Log_Type_INSERT, Globals.Log_Leavel_INFO);
		}
		j.setMsg(message);
		return j;
	}

	/**
	 * 班级学生表列表页面跳转
	 * 
	 * @return
	 */
	@RequestMapping(params = "addorupdate")
	public ModelAndView addorupdate(KqClassStudentEntity kqClassStudent, HttpServletRequest req) {
		if (StringUtil.isNotEmpty(kqClassStudent.getId())) {
			kqClassStudent = kqClassStudentService.getEntity(KqClassStudentEntity.class, kqClassStudent.getId());
			req.setAttribute("kqClassStudentPage", kqClassStudent);
		}
		return new ModelAndView("com/cas/kqclassstudent/kqClassStudent");
	}
	
	@RequestMapping(method = RequestMethod.GET)
	@ResponseBody
	public List<KqClassStudentEntity> list() {
		List<KqClassStudentEntity> listKqClassStudents=kqClassStudentService.getList(KqClassStudentEntity.class);
		return listKqClassStudents;
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	@ResponseBody
	public ResponseEntity<?> get(@PathVariable("id") String id) {
		KqClassStudentEntity task = kqClassStudentService.get(KqClassStudentEntity.class, id);
		if (task == null) {
			return new ResponseEntity(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity(task, HttpStatus.OK);
	}

	@RequestMapping(method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public ResponseEntity<?> create(@RequestBody KqClassStudentEntity kqClassStudent, UriComponentsBuilder uriBuilder) {
		//调用JSR303 Bean Validator进行校验，如果出错返回含400错误码及json格式的错误信息.
		Set<ConstraintViolation<KqClassStudentEntity>> failures = validator.validate(kqClassStudent);
		if (!failures.isEmpty()) {
			return new ResponseEntity(BeanValidators.extractPropertyAndMessage(failures), HttpStatus.BAD_REQUEST);
		}

		//保存
		kqClassStudentService.save(kqClassStudent);

		//按照Restful风格约定，创建指向新任务的url, 也可以直接返回id或对象.
		String id = kqClassStudent.getId();
		URI uri = uriBuilder.path("/rest/kqClassStudentController/" + id).build().toUri();
		HttpHeaders headers = new HttpHeaders();
		headers.setLocation(uri);

		return new ResponseEntity(headers, HttpStatus.CREATED);
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> update(@RequestBody KqClassStudentEntity kqClassStudent) {
		//调用JSR303 Bean Validator进行校验，如果出错返回含400错误码及json格式的错误信息.
		Set<ConstraintViolation<KqClassStudentEntity>> failures = validator.validate(kqClassStudent);
		if (!failures.isEmpty()) {
			return new ResponseEntity(BeanValidators.extractPropertyAndMessage(failures), HttpStatus.BAD_REQUEST);
		}

		//保存
		kqClassStudentService.saveOrUpdate(kqClassStudent);

		//按Restful约定，返回204状态码, 无内容. 也可以返回200状态码.
		return new ResponseEntity(HttpStatus.NO_CONTENT);
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable("id") String id) {
		kqClassStudentService.deleteEntityById(KqClassStudentEntity.class, id);
	}
}
