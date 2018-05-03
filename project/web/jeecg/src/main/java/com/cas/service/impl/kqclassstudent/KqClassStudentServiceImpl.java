package com.cas.service.impl.kqclassstudent;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cas.service.kqclassstudent.KqClassStudentServiceI;
import org.jeecgframework.core.common.service.impl.CommonServiceImpl;

@Service("kqClassStudentService")
@Transactional
public class KqClassStudentServiceImpl extends CommonServiceImpl implements KqClassStudentServiceI {
	
}