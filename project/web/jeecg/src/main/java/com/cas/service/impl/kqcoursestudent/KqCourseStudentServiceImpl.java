package com.cas.service.impl.kqcoursestudent;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cas.service.kqcoursestudent.KqCourseStudentServiceI;
import org.jeecgframework.core.common.service.impl.CommonServiceImpl;

@Service("kqCourseStudentService")
@Transactional
public class KqCourseStudentServiceImpl extends CommonServiceImpl implements KqCourseStudentServiceI {
	
}