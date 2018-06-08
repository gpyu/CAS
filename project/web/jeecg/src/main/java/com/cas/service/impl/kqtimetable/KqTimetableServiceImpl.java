package com.cas.service.impl.kqtimetable;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cas.service.kqtimetable.KqTimetableServiceI;
import org.jeecgframework.core.common.service.impl.CommonServiceImpl;

@Service("kqTimetableService")
@Transactional
public class KqTimetableServiceImpl extends CommonServiceImpl implements KqTimetableServiceI {
	
}