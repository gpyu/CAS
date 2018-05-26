package com.cas.service.impl.kqcourse;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cas.service.kqcourse.KqCourseServiceI;

import org.jeecgframework.core.common.service.impl.CommonServiceImpl;

@Service("kqCourseService")
@Transactional
public class KqCourseServiceImpl extends CommonServiceImpl implements KqCourseServiceI {
	/**
	 * 根据用户类型获取数据
	 * @param userType
	 * @return
	 */
	public List<String> getUsers(String userType){
		List<Map<String,Object>> list = findForJdbc("");
		return null;
	}
}