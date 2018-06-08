package com.cas.service.impl.kqclassroom;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cas.service.kqclassroom.KqClassroomServiceI;
import org.jeecgframework.core.common.service.impl.CommonServiceImpl;

@Service("kqClassroomService")
@Transactional
public class KqClassroomServiceImpl extends CommonServiceImpl implements KqClassroomServiceI {
	
}