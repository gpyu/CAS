package com.cas.service.impl.kqclass;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cas.service.kqclass.KqClassServiceI;
import org.jeecgframework.core.common.service.impl.CommonServiceImpl;

@Service("kqClassService")
@Transactional
public class KqClassServiceImpl extends CommonServiceImpl implements KqClassServiceI {
	
}