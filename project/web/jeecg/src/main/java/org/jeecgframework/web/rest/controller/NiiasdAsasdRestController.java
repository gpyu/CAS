package org.jeecgframework.web.rest.controller;

import java.net.URI;
import java.util.List;
import java.util.Set;

import javax.validation.ConstraintViolation;
import javax.validation.Validator;

import org.jeecgframework.core.beanvalidator.BeanValidators;
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

@Api(value="NiiasdAsasdRest",description="ABC公告信息管理",tags="NiiasdAsasdRestController")

@Controller
@RequestMapping(value = "/niiasdAsasd")
public class NiiasdAsasdRestController {

	@Autowired
	private KqClassNoticeServiceI kqClassNoticeService;
	

	@Autowired
	private Validator validator;

	/**
	 * 访问地址：http://localhost:8080/jeecg/rest/niiasdAsasd
	 * @return
	 */
	@RequestMapping(method = RequestMethod.GET)
	@ResponseBody

	@ApiOperation(value="ABC公告信息",produces="application/json",httpMethod="GET")

	public List<KqClassNoticeEntity> list() {
		List<KqClassNoticeEntity> kqClassesList =kqClassNoticeService.getList(KqClassNoticeEntity.class);
		return kqClassesList;
	}

	/**
	 * 访问地址：http://localhost:8080/jeecg/rest/user/{id}
	 * @param id
	 * @return
	 */
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	@ResponseBody

	@ApiOperation(value="根据ID获取用户公告信息",notes="根据ID获取ABC公告信息",httpMethod="GET",produces="application/json")

	public ResponseEntity<?> get(@ApiParam(required=true,name="id",value="ABCID") @PathVariable("id") String id) {
		KqClassNoticeEntity task = kqClassNoticeService.get(KqClassNoticeEntity.class, id);
		if (task == null) {
			return new ResponseEntity(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity(task, HttpStatus.OK);
	}

	@RequestMapping(method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody

	@ApiOperation(value="创建ABC公告信息")
	public ResponseEntity<?> create(@ApiParam(name="ABC对象")@RequestBody KqClassNoticeEntity kqClass, UriComponentsBuilder uriBuilder) {

		//调用JSR303 Bean Validator进行校验，如果出错返回含400错误码及json格式的错误信息.
		Set<ConstraintViolation<KqClassNoticeEntity>> failures = validator.validate(kqClass);
		if (!failures.isEmpty()) {
			return new ResponseEntity(BeanValidators.extractPropertyAndMessage(failures), HttpStatus.BAD_REQUEST);
		}

		//保存用户
		kqClassNoticeService.save(kqClass);

		//按照Restful风格约定，创建指向新任务的url, 也可以直接返回id或对象.
		String id = kqClass.getId();
		URI uri = uriBuilder.path("/rest/niiasdAsasd/" + id).build().toUri();
		HttpHeaders headers = new HttpHeaders();
		headers.setLocation(uri);

		return new ResponseEntity(headers, HttpStatus.CREATED);
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody

	@ApiOperation(value="更新ABC公告信息",notes="更新ABC公告信息")
	public ResponseEntity<?> update(@ApiParam(name="ABC公告",value="传入对应的JSON")@RequestBody KqClassNoticeEntity kqClass) {

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
	@ApiOperation(value="删除ABC公告信息")
	public void delete(@ApiParam(name="id",value="ABC公告ID",required=true)@PathVariable("id") String id) {
		kqClassNoticeService.deleteEntityById(KqClassNoticeEntity.class, id);
	}
}
