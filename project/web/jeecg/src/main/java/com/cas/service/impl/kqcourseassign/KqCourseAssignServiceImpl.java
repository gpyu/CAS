package com.cas.service.impl.kqcourseassign;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cas.service.kqcourseassign.KqCourseAssignServiceI;
import org.jeecgframework.core.common.service.impl.CommonServiceImpl;

@Service("kqCourseAssignService")
@Transactional
public class KqCourseAssignServiceImpl extends CommonServiceImpl implements KqCourseAssignServiceI {
	
}