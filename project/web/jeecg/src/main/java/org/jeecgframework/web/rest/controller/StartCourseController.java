package org.jeecgframework.web.rest.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.cas.entity.kqclassnotice.KqClassNoticeEntity;
import com.cas.service.kqclassnotice.KqClassNoticeServiceI;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;

@Api(value="Startcourse",description="获取可以签到课程",tags="StartClassController")

@Controller
@RequestMapping(value = "/startcourse")
public class StartCourseController {
	@Autowired
	private KqClassNoticeServiceI kqClassNoticeService;
	@RequestMapping(value = "/{studentid}", method = RequestMethod.GET)
	@ResponseBody

	@ApiOperation(value="根据学生ID获取可以签到课程",notes="根据学生ID获取可以签到课程",httpMethod="GET",produces="application/json")

	public List<Map<String,Object>> getstartcourse(@ApiParam(required=true,name="studentid",value="学生ID") @PathVariable("studentid") String id) {
		String sql="select a.course_id from kq_course_student a "+"LEFT JOIN kq_course b"
				+"ON a.course_id=b.course_id where b.sign_status=1 and where a.student ="+id;
		List<Map<String,Object>> kqstartcourseList =kqClassNoticeService.findForJdbc(sql);
		return kqstartcourseList;
	}
}
