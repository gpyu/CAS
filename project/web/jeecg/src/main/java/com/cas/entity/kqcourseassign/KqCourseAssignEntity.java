package com.cas.entity.kqcourseassign;

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
 * @Description: 课程信息
 * @author zhangdaihao
 * @date 2018-06-08 23:25:48
 * @version V1.0   
 *
 */
@Entity
@Table(name = "kq_course_assign", schema = "")
@DynamicUpdate(true)
@DynamicInsert(true)
@SuppressWarnings("serial")
public class KqCourseAssignEntity implements java.io.Serializable {
	/**ID*/
	private java.lang.String id;
	/**课程*/
	private java.lang.String kqCourseInfoId;
	/**地点*/
	private java.lang.String kqPlace;
	/**老师id*/
	private java.lang.String teacherId;
	/**课程编号*/
	private java.lang.String courseCode;
	/**课程状态*/
	private java.lang.String courseStatus;
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
	 *方法: 取得java.lang.String
	 *@return: java.lang.String  课程
	 */
	@Column(name ="KQ_COURSE_INFO_ID",nullable=true,length=32)
	public java.lang.String getKqCourseInfoId(){
		return this.kqCourseInfoId;
	}

	/**
	 *方法: 设置java.lang.String
	 *@param: java.lang.String  课程
	 */
	public void setKqCourseInfoId(java.lang.String kqCourseInfoId){
		this.kqCourseInfoId = kqCourseInfoId;
	}
	/**
	 *方法: 取得java.lang.String
	 *@return: java.lang.String  地点
	 */
	@Column(name ="KQ_PLACE",nullable=true,length=32)
	public java.lang.String getKqPlace(){
		return this.kqPlace;
	}

	/**
	 *方法: 设置java.lang.String
	 *@param: java.lang.String  地点
	 */
	public void setKqPlace(java.lang.String kqPlace){
		this.kqPlace = kqPlace;
	}
	/**
	 *方法: 取得java.lang.String
	 *@return: java.lang.String  老师id
	 */
	@Column(name ="TEACHER_ID",nullable=true,length=32)
	public java.lang.String getTeacherId(){
		return this.teacherId;
	}

	/**
	 *方法: 设置java.lang.String
	 *@param: java.lang.String  老师id
	 */
	public void setTeacherId(java.lang.String teacherId){
		this.teacherId = teacherId;
	}
	/**
	 *方法: 取得java.lang.String
	 *@return: java.lang.String  课程编号
	 */
	@Column(name ="COURSE_CODE",nullable=true,length=50)
	public java.lang.String getCourseCode(){
		return this.courseCode;
	}

	/**
	 *方法: 设置java.lang.String
	 *@param: java.lang.String  课程编号
	 */
	public void setCourseCode(java.lang.String courseCode){
		this.courseCode = courseCode;
	}
	/**
	 *方法: 取得java.lang.String
	 *@return: java.lang.String  课程状态
	 */
	@Column(name ="COURSE_STATUS",nullable=true,length=32)
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
