package com.cas.controller.kqcourseassign;
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
import org.jeecgframework.web.system.pojo.base.TSUser;
import org.jeecgframework.web.system.service.SystemService;
import org.jeecgframework.core.util.MyBeanUtils;
import org.jeecgframework.core.util.ResourceUtil;

import com.cas.entity.kqcourseassign.KqCourseAssignEntity;
import com.cas.service.kqcourseassign.KqCourseAssignServiceI;

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
 * @Description: 课程信息
 * @author zhangdaihao
 * @date 2018-06-08 23:25:47
 * @version V1.0   
 *
 */
@Controller
@RequestMapping("/kqCourseAssignController")
public class KqCourseAssignController extends BaseController {
	/**
	 * Logger for this class
	 */
	private static final Logger logger = Logger.getLogger(KqCourseAssignController.class);

	@Autowired
	private KqCourseAssignServiceI kqCourseAssignService;
	@Autowired
	private SystemService systemService;
	@Autowired
	private Validator validator;
	


	/**
	 * 课程信息列表 页面跳转
	 * 
	 * @return
	 */
	@RequestMapping(params = "list")
	public ModelAndView list(HttpServletRequest request) {
		return new ModelAndView("com/cas/kqcourseassign/kqCourseAssignList");
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
	public void datagrid(KqCourseAssignEntity kqCourseAssign,HttpServletRequest request, HttpServletResponse response, DataGrid dataGrid) {
		CriteriaQuery cq = new CriteriaQuery(KqCourseAssignEntity.class, dataGrid);
		//查询条件组装器
		org.jeecgframework.core.extend.hqlsearch.HqlGenerateUtil.installHql(cq, kqCourseAssign, request.getParameterMap());
		this.kqCourseAssignService.getDataGridReturn(cq, true);
		TagUtil.datagrid(response, dataGrid);
	}

	/**
	 * 删除课程信息
	 * 
	 * @return
	 */
	@RequestMapping(params = "del")
	@ResponseBody
	public AjaxJson del(KqCourseAssignEntity kqCourseAssign, HttpServletRequest request) {
		String message = null;
		AjaxJson j = new AjaxJson();
		kqCourseAssign = systemService.getEntity(KqCourseAssignEntity.class, kqCourseAssign.getId());
		message = "课程信息删除成功";
		kqCourseAssignService.delete(kqCourseAssign);
		systemService.addLog(message, Globals.Log_Type_DEL, Globals.Log_Leavel_INFO);
		
		j.setMsg(message);
		return j;
	}


	/**
	 * 添加课程信息
	 * 
	 * @param ids
	 * @return
	 */
	@RequestMapping(params = "save")
	@ResponseBody
	public AjaxJson save(KqCourseAssignEntity kqCourseAssign, HttpServletRequest request) {
 		String message = null;
		AjaxJson j = new AjaxJson();
		if (StringUtil.isNotEmpty(kqCourseAssign.getId())) {
			message = "课程信息更新成功";
			KqCourseAssignEntity t = kqCourseAssignService.get(KqCourseAssignEntity.class, kqCourseAssign.getId());
			try {
				MyBeanUtils.copyBeanNotNull2Bean(kqCourseAssign, t);
				kqCourseAssignService.saveOrUpdate(t);
				systemService.addLog(message, Globals.Log_Type_UPDATE, Globals.Log_Leavel_INFO);
			} catch (Exception e) {
				e.printStackTrace();
				message = "课程信息更新失败";
			}
		} else {
			message = "课程信息添加成功";
			kqCourseAssignService.save(kqCourseAssign);
			systemService.addLog(message, Globals.Log_Type_INSERT, Globals.Log_Leavel_INFO);
		}
		j.setMsg(message);
		return j;
	}

	/**
	 * 课程信息列表页面跳转
	 * 
	 * @return
	 */
	@RequestMapping(params = "addorupdate")
	public ModelAndView addorupdate(KqCourseAssignEntity kqCourseAssign, HttpServletRequest req) {
		if (StringUtil.isNotEmpty(kqCourseAssign.getId())) {
			kqCourseAssign = kqCourseAssignService.getEntity(KqCourseAssignEntity.class, kqCourseAssign.getId());
			req.setAttribute("kqCourseAssignPage", kqCourseAssign);
		}
		if(kqCourseAssign.getId() == null){	
			TSUser user = ResourceUtil.getSessionUser();
			kqCourseAssign.setTeacherId(user.getId());
		}
		req.setAttribute("kqCourseAssignPage", kqCourseAssign);
		req.setAttribute("orgs", systemService.findForJdbc("select a.id id,a.org_name description from kq_classroom a order by a.org_name asc"));
		return new ModelAndView("com/cas/kqcourseassign/kqCourseAssign");
	}
	
	@RequestMapping(method = RequestMethod.GET)
	@ResponseBody
	public List<KqCourseAssignEntity> list() {
		List<KqCourseAssignEntity> listKqCourseAssigns=kqCourseAssignService.getList(KqCourseAssignEntity.class);
		return listKqCourseAssigns;
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	@ResponseBody
	public ResponseEntity<?> get(@PathVariable("id") String id) {
		KqCourseAssignEntity task = kqCourseAssignService.get(KqCourseAssignEntity.class, id);
		if (task == null) {
			return new ResponseEntity(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity(task, HttpStatus.OK);
	}

	@RequestMapping(method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public ResponseEntity<?> create(@RequestBody KqCourseAssignEntity kqCourseAssign, UriComponentsBuilder uriBuilder) {
		//调用JSR303 Bean Validator进行校验，如果出错返回含400错误码及json格式的错误信息.
		Set<ConstraintViolation<KqCourseAssignEntity>> failures = validator.validate(kqCourseAssign);
		if (!failures.isEmpty()) {
			return new ResponseEntity(BeanValidators.extractPropertyAndMessage(failures), HttpStatus.BAD_REQUEST);
		}

		//保存
		kqCourseAssignService.save(kqCourseAssign);

		//按照Restful风格约定，创建指向新任务的url, 也可以直接返回id或对象.
		String id = kqCourseAssign.getId();
		URI uri = uriBuilder.path("/rest/kqCourseAssignController/" + id).build().toUri();
		HttpHeaders headers = new HttpHeaders();
		headers.setLocation(uri);

		return new ResponseEntity(headers, HttpStatus.CREATED);
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> update(@RequestBody KqCourseAssignEntity kqCourseAssign) {
		//调用JSR303 Bean Validator进行校验，如果出错返回含400错误码及json格式的错误信息.
		Set<ConstraintViolation<KqCourseAssignEntity>> failures = validator.validate(kqCourseAssign);
		if (!failures.isEmpty()) {
			return new ResponseEntity(BeanValidators.extractPropertyAndMessage(failures), HttpStatus.BAD_REQUEST);
		}

		//保存
		kqCourseAssignService.saveOrUpdate(kqCourseAssign);

		//按Restful约定，返回204状态码, 无内容. 也可以返回200状态码.
		return new ResponseEntity(HttpStatus.NO_CONTENT);
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable("id") String id) {
		kqCourseAssignService.deleteEntityById(KqCourseAssignEntity.class, id);
	}
}
