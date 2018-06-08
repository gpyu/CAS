package com.cas.service.kqcourse;

import java.util.List;

import org.jeecgframework.core.common.service.CommonService;

public interface KqCourseServiceI extends CommonService{
	
	public List<String> getUsers(String userType);

}
