package com.cas.controller.kqbaseparameter;
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

import com.cas.entity.kqbaseparameter.KqBaseParameterEntity;
import com.cas.service.kqbaseparameter.KqBaseParameterServiceI;

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
 * @Description: 系统参数维护表
 * @author zhangdaihao
 * @date 2018-06-09 09:43:35
 * @version V1.0   
 *
 */
@Controller
@RequestMapping("/kqBaseParameterController")
public class KqBaseParameterController extends BaseController {
	/**
	 * Logger for this class
	 */
	private static final Logger logger = Logger.getLogger(KqBaseParameterController.class);

	@Autowired
	private KqBaseParameterServiceI kqBaseParameterService;
	@Autowired
	private SystemService systemService;
	@Autowired
	private Validator validator;
	


	/**
	 * 系统参数维护表列表 页面跳转
	 * 
	 * @return
	 */
	@RequestMapping(params = "list")
	public ModelAndView list(HttpServletRequest request) {
		return new ModelAndView("com/cas/kqbaseparameter/kqBaseParameterList");
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
	public void datagrid(KqBaseParameterEntity kqBaseParameter,HttpServletRequest request, HttpServletResponse response, DataGrid dataGrid) {
		CriteriaQuery cq = new CriteriaQuery(KqBaseParameterEntity.class, dataGrid);
		//查询条件组装器
		org.jeecgframework.core.extend.hqlsearch.HqlGenerateUtil.installHql(cq, kqBaseParameter, request.getParameterMap());
		this.kqBaseParameterService.getDataGridReturn(cq, true);
		TagUtil.datagrid(response, dataGrid);
	}

	/**
	 * 删除系统参数维护表
	 * 
	 * @return
	 */
	@RequestMapping(params = "del")
	@ResponseBody
	public AjaxJson del(KqBaseParameterEntity kqBaseParameter, HttpServletRequest request) {
		String message = null;
		AjaxJson j = new AjaxJson();
		kqBaseParameter = systemService.getEntity(KqBaseParameterEntity.class, kqBaseParameter.getId());
		message = "系统参数维护表删除成功";
		kqBaseParameterService.delete(kqBaseParameter);
		systemService.addLog(message, Globals.Log_Type_DEL, Globals.Log_Leavel_INFO);
		
		j.setMsg(message);
		return j;
	}


	/**
	 * 添加系统参数维护表
	 * 
	 * @param ids
	 * @return
	 */
	@RequestMapping(params = "save")
	@ResponseBody
	public AjaxJson save(KqBaseParameterEntity kqBaseParameter, HttpServletRequest request) {
		String message = null;
		AjaxJson j = new AjaxJson();
		if (StringUtil.isNotEmpty(kqBaseParameter.getId())) {
			message = "系统参数维护表更新成功";
			KqBaseParameterEntity t = kqBaseParameterService.get(KqBaseParameterEntity.class, kqBaseParameter.getId());
			try {
				MyBeanUtils.copyBeanNotNull2Bean(kqBaseParameter, t);
				kqBaseParameterService.saveOrUpdate(t);
				systemService.addLog(message, Globals.Log_Type_UPDATE, Globals.Log_Leavel_INFO);
			} catch (Exception e) {
				e.printStackTrace();
				message = "系统参数维护表更新失败";
			}
		} else {
			message = "系统参数维护表添加成功";
			kqBaseParameterService.save(kqBaseParameter);
			systemService.addLog(message, Globals.Log_Type_INSERT, Globals.Log_Leavel_INFO);
		}
		j.setMsg(message);
		return j;
	}

	/**
	 * 系统参数维护表列表页面跳转
	 * 
	 * @return
	 */
	@RequestMapping(params = "addorupdate")
	public ModelAndView addorupdate(KqBaseParameterEntity kqBaseParameter, HttpServletRequest req) {
		if (StringUtil.isNotEmpty(kqBaseParameter.getId())) {
			kqBaseParameter = kqBaseParameterService.getEntity(KqBaseParameterEntity.class, kqBaseParameter.getId());
			req.setAttribute("kqBaseParameterPage", kqBaseParameter);
		}
		return new ModelAndView("com/cas/kqbaseparameter/kqBaseParameter");
	}
	
	@RequestMapping(method = RequestMethod.GET)
	@ResponseBody
	public List<KqBaseParameterEntity> list() {
		List<KqBaseParameterEntity> listKqBaseParameters=kqBaseParameterService.getList(KqBaseParameterEntity.class);
		return listKqBaseParameters;
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	@ResponseBody
	public ResponseEntity<?> get(@PathVariable("id") String id) {
		KqBaseParameterEntity task = kqBaseParameterService.get(KqBaseParameterEntity.class, id);
		if (task == null) {
			return new ResponseEntity(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity(task, HttpStatus.OK);
	}

	@RequestMapping(method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public ResponseEntity<?> create(@RequestBody KqBaseParameterEntity kqBaseParameter, UriComponentsBuilder uriBuilder) {
		//调用JSR303 Bean Validator进行校验，如果出错返回含400错误码及json格式的错误信息.
		Set<ConstraintViolation<KqBaseParameterEntity>> failures = validator.validate(kqBaseParameter);
		if (!failures.isEmpty()) {
			return new ResponseEntity(BeanValidators.extractPropertyAndMessage(failures), HttpStatus.BAD_REQUEST);
		}

		//保存
		kqBaseParameterService.save(kqBaseParameter);

		//按照Restful风格约定，创建指向新任务的url, 也可以直接返回id或对象.
		String id = kqBaseParameter.getId();
		URI uri = uriBuilder.path("/rest/kqBaseParameterController/" + id).build().toUri();
		HttpHeaders headers = new HttpHeaders();
		headers.setLocation(uri);

		return new ResponseEntity(headers, HttpStatus.CREATED);
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> update(@RequestBody KqBaseParameterEntity kqBaseParameter) {
		//调用JSR303 Bean Validator进行校验，如果出错返回含400错误码及json格式的错误信息.
		Set<ConstraintViolation<KqBaseParameterEntity>> failures = validator.validate(kqBaseParameter);
		if (!failures.isEmpty()) {
			return new ResponseEntity(BeanValidators.extractPropertyAndMessage(failures), HttpStatus.BAD_REQUEST);
		}

		//保存
		kqBaseParameterService.saveOrUpdate(kqBaseParameter);

		//按Restful约定，返回204状态码, 无内容. 也可以返回200状态码.
		return new ResponseEntity(HttpStatus.NO_CONTENT);
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable("id") String id) {
		kqBaseParameterService.deleteEntityById(KqBaseParameterEntity.class, id);
	}
}
