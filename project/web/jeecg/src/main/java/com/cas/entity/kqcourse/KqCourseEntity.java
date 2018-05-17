package com.cas.entity.kqcourse;

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
 * @Description: 课程管理
 * @author zhangdaihao
 * @date 2018-05-02 21:01:00
 * @version V1.0   
 *
 */
@Entity
@Table(name = "kq_course", schema = "")
@DynamicUpdate(true)
@DynamicInsert(true)
@SuppressWarnings("serial")
public class KqCourseEntity implements java.io.Serializable {
	/**ID*/
	private java.lang.String id;
	/**课程名称*/
	private java.lang.String courseName;
	/**课程编号*/
	private java.lang.String courseNum;
	/**课程开始时间*/
	private java.util.Date courseBeginDate;
	/**课程结束时间*/
	private java.util.Date courseEndDate;
	/**任课老师*/
	private java.lang.String courseTeacherId;
	/**周几上课*/
	private java.lang.String courseWeek;
	/**第几节*/
	private java.lang.String courseClasses;
	/**课程地点*/
	private java.lang.String coursePlace;
	/**课程状态*/
	private java.lang.String courseStatus;
	/**创建时间*/
	private java.util.Date createDate;
	/**创建人*/
	private java.lang.String createBy;
	/**创建人名字*/
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
	 *方法: 取得java.lang.String
	 *@return: java.lang.String  课程名称
	 */
	@Column(name ="COURSE_NAME",nullable=false,length=300)
	public java.lang.String getCourseName(){
		return this.courseName;
	}

	/**
	 *方法: 设置java.lang.String
	 *@param: java.lang.String  课程名称
	 */
	public void setCourseName(java.lang.String courseName){
		this.courseName = courseName;
	}
	/**
	 *方法: 取得java.lang.String
	 *@return: java.lang.String  课程编号
	 */
	@Column(name ="COURSE_NUM",nullable=false,length=300)
	public java.lang.String getCourseNum(){
		return this.courseNum;
	}

	/**
	 *方法: 设置java.lang.String
	 *@param: java.lang.String  课程编号
	 */
	public void setCourseNum(java.lang.String courseNum){
		this.courseNum = courseNum;
	}
	/**
	 *方法: 取得java.util.Date
	 *@return: java.util.Date  课程开始时间
	 */
	@Column(name ="COURSE_BEGIN_DATE",nullable=false)
	public java.util.Date getCourseBeginDate(){
		return this.courseBeginDate;
	}

	/**
	 *方法: 设置java.util.Date
	 *@param: java.util.Date  课程开始时间
	 */
	public void setCourseBeginDate(java.util.Date courseBeginDate){
		this.courseBeginDate = courseBeginDate;
	}
	/**
	 *方法: 取得java.util.Date
	 *@return: java.util.Date  课程结束时间
	 */
	@Column(name ="COURSE_END_DATE",nullable=false)
	public java.util.Date getCourseEndDate(){
		return this.courseEndDate;
	}

	/**
	 *方法: 设置java.util.Date
	 *@param: java.util.Date  课程结束时间
	 */
	public void setCourseEndDate(java.util.Date courseEndDate){
		this.courseEndDate = courseEndDate;
	}
	/**
	 *方法: 取得java.lang.String
	 *@return: java.lang.String  任课老师
	 */
	@Column(name ="COURSE_TEACHER_ID",nullable=false,length=32)
	public java.lang.String getCourseTeacherId(){
		return this.courseTeacherId;
	}

	/**
	 *方法: 设置java.lang.String
	 *@param: java.lang.String  任课老师
	 */
	public void setCourseTeacherId(java.lang.String courseTeacherId){
		this.courseTeacherId = courseTeacherId;
	}
	/**
	 *方法: 取得java.lang.String
	 *@return: java.lang.String  周几上课
	 */
	@Column(name ="COURSE_WEEK",nullable=false,length=100)
	public java.lang.String getCourseWeek(){
		return this.courseWeek;
	}

	/**
	 *方法: 设置java.lang.String
	 *@param: java.lang.String  周几上课
	 */
	public void setCourseWeek(java.lang.String courseWeek){
		this.courseWeek = courseWeek;
	}
	/**
	 *方法: 取得java.lang.String
	 *@return: java.lang.String  第几节
	 */
	@Column(name ="COURSE_CLASSES",nullable=false,length=100)
	public java.lang.String getCourseClasses(){
		return this.courseClasses;
	}

	/**
	 *方法: 设置java.lang.String
	 *@param: java.lang.String  第几节
	 */
	public void setCourseClasses(java.lang.String courseClasses){
		this.courseClasses = courseClasses;
	}
	/**
	 *方法: 取得java.lang.String
	 *@return: java.lang.String  课程地点
	 */
	@Column(name ="COURSE_PLACE",nullable=false,length=300)
	public java.lang.String getCoursePlace(){
		return this.coursePlace;
	}

	/**
	 *方法: 设置java.lang.String
	 *@param: java.lang.String  课程地点
	 */
	public void setCoursePlace(java.lang.String coursePlace){
		this.coursePlace = coursePlace;
	}
	/**
	 *方法: 取得java.lang.String
	 *@return: java.lang.String  课程状态
	 */
	@Column(name ="COURSE_STATUS",nullable=false,length=1)
	public java.lang.String getCourseStatus(){
		return this.courseStatus;
	}

	/**
	 *方法: 设置java.lang.String
	 *@param: java.lang.String  课程状态
	 */
	public void setCourseStatus(java.lang.String courseStatus){
		this.courseStatus = courseStatus;
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
	 *@return: java.lang.String  创建人
	 */
	@Column(name ="CREATE_BY",nullable=true,length=96)
	public java.lang.String getCreateBy(){
		return this.createBy;
	}

	/**
	 *方法: 设置java.lang.String
	 *@param: java.lang.String  创建人
	 */
	public void setCreateBy(java.lang.String createBy){
		this.createBy = createBy;
	}
	/**
	 *方法: 取得java.lang.String
	 *@return: java.lang.String  创建人名字
	 */
	@Column(name ="CREATE_NAME",nullable=true,length=96)
	public java.lang.String getCreateName(){
		return this.createName;
	}

	/**
	 *方法: 设置java.lang.String
	 *@param: java.lang.String  创建人名字
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
