package com.cas.service.impl.kqattendance;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cas.service.kqattendance.KqAttendanceServiceI;
import org.jeecgframework.core.common.service.impl.CommonServiceImpl;

@Service("kqAttendanceService")
@Transactional
public class KqAttendanceServiceImpl extends CommonServiceImpl implements KqAttendanceServiceI {
	
}