package com.cas.entity.kqtimetable;

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
 * @Description: 记录作息时间
 * @author zhangdaihao
 * @date 2018-06-08 08:51:15
 * @version V1.0   
 *
 */
@Entity
@Table(name = "kq_timetable", schema = "")
@DynamicUpdate(true)
@DynamicInsert(true)
@SuppressWarnings("serial")
public class KqTimetableEntity implements java.io.Serializable {
	/**id*/
	private java.lang.String id;
	/**school*/
	private java.lang.String school;
	/**classnumber*/
	private java.lang.String classnumber;
	/**beginTime*/
	private java.lang.String beginTime;
	/**endTime*/
	private java.lang.String endTime;
	
	/**
	 *方法: 取得java.lang.String
	 *@return: java.lang.String  id
	 */
	
	@Id
	@GeneratedValue(generator = "paymentableGenerator")
	@GenericGenerator(name = "paymentableGenerator", strategy = "uuid")
	@Column(name ="ID",nullable=false,length=32)
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
	 *方法: 取得java.lang.String
	 *@return: java.lang.String  school
	 */
	@Column(name ="SCHOOL",nullable=true,length=300)
	public java.lang.String getSchool(){
		return this.school;
	}

	/**
	 *方法: 设置java.lang.String
	 *@param: java.lang.String  school
	 */
	public void setSchool(java.lang.String school){
		this.school = school;
	}
	/**
	 *方法: 取得java.lang.String
	 *@return: java.lang.String  classnumber
	 */
	@Column(name ="CLASSNUMBER",nullable=true,length=50)
	public java.lang.String getClassnumber(){
		return this.classnumber;
	}

	/**
	 *方法: 设置java.lang.String
	 *@param: java.lang.String  classnumber
	 */
	public void setClassnumber(java.lang.String classnumber){
		this.classnumber = classnumber;
	}
	/**
	 *方法: 取得java.util.Date
	 *@return: java.util.Date  beginTime
	 */
	@Column(name ="BEGIN_TIME",nullable=true)
	public java.lang.String getBeginTime(){
		return this.beginTime;
	}

	/**
	 *方法: 设置java.util.Date
	 *@param: java.util.Date  beginTime
	 */
	public void setBeginTime(java.lang.String beginTime){
		this.beginTime = beginTime;
	}
	/**
	 *方法: 取得java.util.Date
	 *@return: java.util.Date  endTime
	 */
	@Column(name ="END_TIME",nullable=true)
	public java.lang.String getEndTime(){
		return this.endTime;
	}

	/**
	 *方法: 设置java.util.Date
	 *@param: java.util.Date  endTime
	 */
	public void setEndTime(java.lang.String endTime){
		this.endTime = endTime;
	}
}
