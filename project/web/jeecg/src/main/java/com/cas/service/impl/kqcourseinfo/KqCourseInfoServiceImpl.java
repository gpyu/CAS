package com.cas.service.impl.kqcourseinfo;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cas.service.kqcourseinfo.KqCourseInfoServiceI;
import org.jeecgframework.core.common.service.impl.CommonServiceImpl;

@Service("kqCourseInfoService")
@Transactional
public class KqCourseInfoServiceImpl extends CommonServiceImpl implements KqCourseInfoServiceI {
	
}