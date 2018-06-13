package com.cas.entity.kqbaseparameter;

import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.GenericGenerator;
import javax.persistence.SequenceGenerator;

/**   
 * @Title: Entity
 * @Description: 系统参数维护表
 * @author zhangdaihao
 * @date 2018-06-09 09:43:36
 * @version V1.0   
 *
 */
@Entity
@Table(name = "kq_base_parameter", schema = "")
@DynamicUpdate(true)
@DynamicInsert(true)
@SuppressWarnings("serial")
public class KqBaseParameterEntity implements java.io.Serializable {
	/**id*/
	private java.lang.String id;
	/**最大定位误差距离*/
	private java.lang.Integer maxLocationDistance;
	/**上课前几分钟可签到*/
	private java.lang.Integer siginBeginTime;
	/**上课后几分钟可签到*/
	private java.lang.Integer siginEndTime;
	/**下课前几分钟可签退*/
	private java.lang.Integer signoffBeginTime;
	/**下课后几分钟可签退*/
	private java.lang.Integer signoffEndTime;
	/**开学时间*/
	private java.lang.String startTerm;
	/**放假时间*/
	private java.lang.String endTerm;
	@Column(name ="START_TERM",nullable=true)
	public java.lang.String getStartTerm() {
		return startTerm;
	}

	public void setStartTerm(java.lang.String startTerm) {
		this.startTerm = startTerm;
	}
	@Column(name ="END_TERM",nullable=true)
	public java.lang.String getEndTerm() {
		return endTerm;
	}

	public void setEndTerm(java.lang.String endTerm) {
		this.endTerm = endTerm;
	}

	
	
	
	
	/**
	 *方法: 取得java.lang.String
	 *@return: java.lang.String  id
	 */
	
	@Id
	@GeneratedValue(generator = "paymentableGenerator")
	@GenericGenerator(name = "paymentableGenerator", strategy = "uuid")
	@Column(name ="ID",nullable=true,length=32)
	public java.lang.String getId(){
		return this.id;
	}

	/**
	 *方法: 设置java.lang.String
	 *@param: java.lang.String  id
	 */
	public void setId(java.lang.String id){
		this.id = id;
	}
	/**
	 *方法: 取得java.lang.Integer
	 *@return: java.lang.Integer  最大定位误差距离
	 */
	@Column(name ="MAX_LOCATION_DISTANCE",nullable=true,precision=10,scale=0)
	public java.lang.Integer getMaxLocationDistance(){
		return this.maxLocationDistance;
	}

	/**
	 *方法: 设置java.lang.Integer
	 *@param: java.lang.Integer  最大定位误差距离
	 */
	public void setMaxLocationDistance(java.lang.Integer maxLocationDistance){
		this.maxLocationDistance = maxLocationDistance;
	}
	/**
	 *方法: 取得java.lang.Integer
	 *@return: java.lang.Integer  上课前几分钟可签到
	 */
	@Column(name ="SIGIN_BEGIN_TIME",nullable=true,precision=10,scale=0)
	public java.lang.Integer getSiginBeginTime(){
		return this.siginBeginTime;
	}

	/**
	 *方法: 设置java.lang.Integer
	 *@param: java.lang.Integer  上课前几分钟可签到
	 */
	public void setSiginBeginTime(java.lang.Integer siginBeginTime){
		this.siginBeginTime = siginBeginTime;
	}
	/**
	 *方法: 取得java.lang.Integer
	 *@return: java.lang.Integer  上课后几分钟可签到
	 */
	@Column(name ="SIGIN_END_TIME",nullable=true,precision=10,scale=0)
	public java.lang.Integer getSiginEndTime(){
		return this.siginEndTime;
	}

	/**
	 *方法: 设置java.lang.Integer
	 *@param: java.lang.Integer  上课后几分钟可签到
	 */
	public void setSiginEndTime(java.lang.Integer siginEndTime){
		this.siginEndTime = siginEndTime;
	}
	/**
	 *方法: 取得java.lang.Integer
	 *@return: java.lang.Integer  下课前几分钟可签退
	 */
	@Column(name ="SIGNOFF_BEGIN_TIME",nullable=true,precision=10,scale=0)
	public java.lang.Integer getSignoffBeginTime(){
		return this.signoffBeginTime;
	}

	/**
	 *方法: 设置java.lang.Integer
	 *@param: java.lang.Integer  下课前几分钟可签退
	 */
	public void setSignoffBeginTime(java.lang.Integer signoffBeginTime){
		this.signoffBeginTime = signoffBeginTime;
	}
	/**
	 *方法: 取得java.lang.Integer
	 *@return: java.lang.Integer  下课后几分钟可签退
	 */
	@Column(name ="SIGNOFF_END_TIME",nullable=true,precision=10,scale=0)
	public java.lang.Integer getSignoffEndTime(){
		return this.signoffEndTime;
	}

	/**
	 *方法: 设置java.lang.Integer
	 *@param: java.lang.Integer  下课后几分钟可签退
	 */
	public void setSignoffEndTime(java.lang.Integer signoffEndTime){
		this.signoffEndTime = signoffEndTime;
	}
}
