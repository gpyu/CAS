package com.cas.service.impl.kqclassnotice;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cas.entity.kqclassnotice.KqClassNoticeEntity;
import com.cas.service.kqclassnotice.KqClassNoticeServiceI;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.criterion.Order;
import org.jeecgframework.core.common.service.impl.CommonServiceImpl;

@Service("kqClassNoticeService")
@Transactional
public class KqClassNoticeServiceImpl extends CommonServiceImpl implements KqClassNoticeServiceI {

	
	@Override
	public List<KqClassNoticeEntity> getAllList() {
		Criteria criteria = getSession().createCriteria(KqClassNoticeEntity.class);
		criteria.addOrder(Order.desc("time"));
		return criteria.list();
	}
	
}