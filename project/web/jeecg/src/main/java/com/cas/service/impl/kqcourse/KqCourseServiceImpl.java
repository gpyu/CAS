package com.cas.service.impl.kqcourse;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cas.service.kqcourse.KqCourseServiceI;
import org.jeecgframework.core.common.service.impl.CommonServiceImpl;

@Service("kqCourseService")
@Transactional
public class KqCourseServiceImpl extends CommonServiceImpl implements KqCourseServiceI {
	
}