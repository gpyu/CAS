package com.cas.entity.kqcoursetimeinfo;

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
 * @Description: 课程时间维护表
 * @author zhangdaihao
 * @date 2018-06-09 00:15:03
 * @version V1.0   
 *
 */
@Entity
@Table(name = "kq_course_time_info", schema = "")
@DynamicUpdate(true)
@DynamicInsert(true)
@SuppressWarnings("serial")
public class KqCourseTimeInfoEntity implements java.io.Serializable {
	/**ID*/
	private java.lang.String id;
	/**周几*/
	private java.lang.Integer week;
	/**第几节开始*/
	private java.lang.Integer beinTime;
	/**第几节结束*/
	private java.lang.Integer endTime;
	/**课程id*/
	private java.lang.String courseId;
	/**创建时间*/
	private java.util.Date createDate;
	/**createBy*/
	private java.lang.String createBy;
	/**创建时间*/
	private java.lang.String createName;
	/**修改时间*/
	private java.util.Date updateDate;
	/**修改人*/
	private java.lang.String updateBy;
	/**修改人名字*/
	private java.lang.String updateName;
	
	/**
	 *方法: 取得java.lang.String
	 *@return: java.lang.String  ID
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
	 *@param: java.lang.String  ID
	 */
	public void setId(java.lang.String id){
		this.id = id;
	}
	/**
	 *方法: 取得java.lang.Integer
	 *@return: java.lang.Integer  周几
	 */
	@Column(name ="WEEK",nullable=true,precision=10,scale=0)
	public java.lang.Integer getWeek(){
		return this.week;
	}

	/**
	 *方法: 设置java.lang.Integer
	 *@param: java.lang.Integer  周几
	 */
	public void setWeek(java.lang.Integer week){
		this.week = week;
	}
	/**
	 *方法: 取得java.lang.Integer
	 *@return: java.lang.Integer  第几节开始
	 */
	@Column(name ="BEIN_TIME",nullable=true,precision=10,scale=0)
	public java.lang.Integer getBeinTime(){
		return this.beinTime;
	}

	/**
	 *方法: 设置java.lang.Integer
	 *@param: java.lang.Integer  第几节开始
	 */
	public void setBeinTime(java.lang.Integer beinTime){
		this.beinTime = beinTime;
	}
	/**
	 *方法: 取得java.lang.Integer
	 *@return: java.lang.Integer  第几节结束
	 */
	@Column(name ="END_TIME",nullable=true,precision=10,scale=0)
	public java.lang.Integer getEndTime(){
		return this.endTime;
	}

	/**
	 *方法: 设置java.lang.Integer
	 *@param: java.lang.Integer  第几节结束
	 */
	public void setEndTime(java.lang.Integer endTime){
		this.endTime = endTime;
	}
	/**
	 *方法: 取得java.lang.String
	 *@return: java.lang.String  课程id
	 */
	@Column(name ="COURSE_ID",nullable=true,length=32)
	public java.lang.String getCourseId(){
		return this.courseId;
	}

	/**
	 *方法: 设置java.lang.String
	 *@param: java.lang.String  课程id
	 */
	public void setCourseId(java.lang.String courseId){
		this.courseId = courseId;
	}
	/**
	 *方法: 取得java.util.Date
	 *@return: java.util.Date  创建时间
	 */
	@Column(name ="CREATE_DATE",nullable=true)
	public java.util.Date getCreateDate(){
		return this.createDate;
	}

	/**
	 *方法: 设置java.util.Date
	 *@param: java.util.Date  创建时间
	 */
	public void setCreateDate(java.util.Date createDate){
		this.createDate = createDate;
	}
	/**
	 *方法: 取得java.lang.String
	 *@return: java.lang.String  createBy
	 */
	@Column(name ="CREATE_BY",nullable=true,length=96)
	public java.lang.String getCreateBy(){
		return this.createBy;
	}

	/**
	 *方法: 设置java.lang.String
	 *@param: java.lang.String  createBy
	 */
	public void setCreateBy(java.lang.String createBy){
		this.createBy = createBy;
	}
	/**
	 *方法: 取得java.lang.String
	 *@return: java.lang.String  创建时间
	 */
	@Column(name ="CREATE_NAME",nullable=true,length=96)
	public java.lang.String getCreateName(){
		return this.createName;
	}

	/**
	 *方法: 设置java.lang.String
	 *@param: java.lang.String  创建时间
	 */
	public void setCreateName(java.lang.String createName){
		this.createName = createName;
	}
	/**
	 *方法: 取得java.util.Date
	 *@return: java.util.Date  修改时间
	 */
	@Column(name ="UPDATE_DATE",nullable=true)
	public java.util.Date getUpdateDate(){
		return this.updateDate;
	}

	/**
	 *方法: 设置java.util.Date
	 *@param: java.util.Date  修改时间
	 */
	public void setUpdateDate(java.util.Date updateDate){
		this.updateDate = updateDate;
	}
	/**
	 *方法: 取得java.lang.String
	 *@return: java.lang.String  修改人
	 */
	@Column(name ="UPDATE_BY",nullable=true,length=96)
	public java.lang.String getUpdateBy(){
		return this.updateBy;
	}

	/**
	 *方法: 设置java.lang.String
	 *@param: java.lang.String  修改人
	 */
	public void setUpdateBy(java.lang.String updateBy){
		this.updateBy = updateBy;
	}
	/**
	 *方法: 取得java.lang.String
	 *@return: java.lang.String  修改人名字
	 */
	@Column(name ="UPDATE_NAME",nullable=true,length=96)
	public java.lang.String getUpdateName(){
		return this.updateName;
	}

	/**
	 *方法: 设置java.lang.String
	 *@param: java.lang.String  修改人名字
	 */
	public void setUpdateName(java.lang.String updateName){
		this.updateName = updateName;
	}
}
