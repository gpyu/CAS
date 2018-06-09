package com.cas.service.impl.kqbaseparameter;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cas.service.kqbaseparameter.KqBaseParameterServiceI;
import org.jeecgframework.core.common.service.impl.CommonServiceImpl;

@Service("kqBaseParameterService")
@Transactional
public class KqBaseParameterServiceImpl extends CommonServiceImpl implements KqBaseParameterServiceI {
	
}