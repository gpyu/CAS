package com.cas.controller.kqclassnotice;
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

import com.cas.entity.kqclassnotice.KqClassNoticeEntity;
import com.cas.service.kqclassnotice.KqClassNoticeServiceI;

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
 * @Description: 班级公告
 * @author zhangdaihao
 * @date 2018-05-05 09:53:10
 * @version V1.0   
 *
 */
@Controller
@RequestMapping("/kqClassNoticeController")
public class KqClassNoticeController extends BaseController {
	/**
	 * Logger for this class
	 */
	private static final Logger logger = Logger.getLogger(KqClassNoticeController.class);

	@Autowired
	private KqClassNoticeServiceI kqClassNoticeService;
	@Autowired
	private SystemService systemService;
	@Autowired
	private Validator validator;
	


	/**
	 * 班级公告列表 页面跳转
	 * 
	 * @return
	 */
	@RequestMapping(params = "list")
	public ModelAndView list(HttpServletRequest request) {
		return new ModelAndView("com/cas/kqclassnotice/kqClassNoticeList");
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
	public void datagrid(KqClassNoticeEntity kqClassNotice,HttpServletRequest request, HttpServletResponse response, DataGrid dataGrid) {
		CriteriaQuery cq = new CriteriaQuery(KqClassNoticeEntity.class, dataGrid);
		//查询条件组装器
		org.jeecgframework.core.extend.hqlsearch.HqlGenerateUtil.installHql(cq, kqClassNotice, request.getParameterMap());
		this.kqClassNoticeService.getDataGridReturn(cq, true);
		TagUtil.datagrid(response, dataGrid);
	}

	/**
	 * 删除班级公告
	 * 
	 * @return
	 */
	@RequestMapping(params = "del")
	@ResponseBody
	public AjaxJson del(KqClassNoticeEntity kqClassNotice, HttpServletRequest request) {
		String message = null;
		AjaxJson j = new AjaxJson();
		kqClassNotice = systemService.getEntity(KqClassNoticeEntity.class, kqClassNotice.getId());
		message = "班级公告删除成功";
		kqClassNoticeService.delete(kqClassNotice);
		systemService.addLog(message, Globals.Log_Type_DEL, Globals.Log_Leavel_INFO);
		
		j.setMsg(message);
		return j;
	}


	/**
	 * 添加班级公告
	 * 
	 * @param ids
	 * @return
	 */
	@RequestMapping(params = "save")
	@ResponseBody
	public AjaxJson save(KqClassNoticeEntity kqClassNotice, HttpServletRequest request) {
		String message = null;
		AjaxJson j = new AjaxJson();
		if (StringUtil.isNotEmpty(kqClassNotice.getId())) {
			message = "班级公告更新成功";
			KqClassNoticeEntity t = kqClassNoticeService.get(KqClassNoticeEntity.class, kqClassNotice.getId());
			try {
				MyBeanUtils.copyBeanNotNull2Bean(kqClassNotice, t);
				kqClassNoticeService.saveOrUpdate(t);
				systemService.addLog(message, Globals.Log_Type_UPDATE, Globals.Log_Leavel_INFO);
			} catch (Exception e) {
				e.printStackTrace();
				message = "班级公告更新失败";
			}
		} else {
			message = "班级公告添加成功";
			kqClassNoticeService.save(kqClassNotice);
			systemService.addLog(message, Globals.Log_Type_INSERT, Globals.Log_Leavel_INFO);
		}
		j.setMsg(message);
		return j;
	}

	/**
	 * 班级公告列表页面跳转
	 * 
	 * @return
	 */
	@RequestMapping(params = "addorupdate")
	public ModelAndView addorupdate(KqClassNoticeEntity kqClassNotice, HttpServletRequest req) {
		if (StringUtil.isNotEmpty(kqClassNotice.getId())) {
			kqClassNotice = kqClassNoticeService.getEntity(KqClassNoticeEntity.class, kqClassNotice.getId());
			req.setAttribute("kqClassNoticePage", kqClassNotice);
		}
		return new ModelAndView("com/cas/kqclassnotice/kqClassNotice");
	}
	
	@RequestMapping(method = RequestMethod.GET)
	@ResponseBody
	public List<KqClassNoticeEntity> list() {
		List<KqClassNoticeEntity> listKqClassNotices=kqClassNoticeService.getList(KqClassNoticeEntity.class);
		return listKqClassNotices;
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	@ResponseBody
	public ResponseEntity<?> get(@PathVariable("id") String id) {
		KqClassNoticeEntity task = kqClassNoticeService.get(KqClassNoticeEntity.class, id);
		if (task == null) {
			return new ResponseEntity(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity(task, HttpStatus.OK);
	}

	@RequestMapping(method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public ResponseEntity<?> create(@RequestBody KqClassNoticeEntity kqClassNotice, UriComponentsBuilder uriBuilder) {
		//调用JSR303 Bean Validator进行校验，如果出错返回含400错误码及json格式的错误信息.
		Set<ConstraintViolation<KqClassNoticeEntity>> failures = validator.validate(kqClassNotice);
		if (!failures.isEmpty()) {
			return new ResponseEntity(BeanValidators.extractPropertyAndMessage(failures), HttpStatus.BAD_REQUEST);
		}

		//保存
		kqClassNoticeService.save(kqClassNotice);

		//按照Restful风格约定，创建指向新任务的url, 也可以直接返回id或对象.
		String id = kqClassNotice.getId();
		URI uri = uriBuilder.path("/rest/kqClassNoticeController/" + id).build().toUri();
		HttpHeaders headers = new HttpHeaders();
		headers.setLocation(uri);

		return new ResponseEntity(headers, HttpStatus.CREATED);
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> update(@RequestBody KqClassNoticeEntity kqClassNotice) {
		//调用JSR303 Bean Validator进行校验，如果出错返回含400错误码及json格式的错误信息.
		Set<ConstraintViolation<KqClassNoticeEntity>> failures = validator.validate(kqClassNotice);
		if (!failures.isEmpty()) {
			return new ResponseEntity(BeanValidators.extractPropertyAndMessage(failures), HttpStatus.BAD_REQUEST);
		}

		//保存
		kqClassNoticeService.saveOrUpdate(kqClassNotice);

		//按Restful约定，返回204状态码, 无内容. 也可以返回200状态码.
		return new ResponseEntity(HttpStatus.NO_CONTENT);
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable("id") String id) {
		kqClassNoticeService.deleteEntityById(KqClassNoticeEntity.class, id);
	}
}
