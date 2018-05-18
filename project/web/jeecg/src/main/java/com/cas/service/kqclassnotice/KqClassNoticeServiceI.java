package com.cas.service.kqclassnotice;

import java.util.List;

import org.jeecgframework.core.common.service.CommonService;

import com.cas.entity.kqclassnotice.KqClassNoticeEntity;

public interface KqClassNoticeServiceI extends CommonService{
	List<KqClassNoticeEntity> getAllList();
}
