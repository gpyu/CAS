package com.cas.entity.kqclassroom;

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
 * @Description: 记录教室信息
 * @author zhangdaihao
 * @date 2018-06-08 08:53:16
 * @version V1.0   
 *
 */
@Entity
@Table(name = "kq_classroom", schema = "")
@DynamicUpdate(true)
@DynamicInsert(true)
@SuppressWarnings("serial")
public class KqClassroomEntity implements java.io.Serializable {
	/**id*/
	private java.lang.String id;
	/**orgName*/
	private java.lang.String orgName;
	/**classroom*/
	private java.lang.String classroom;
	/**longitude*/
	private BigDecimal longitude;
	/**lantitude*/
	private BigDecimal lantitude;
	
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
	 *@return: java.lang.String  orgName
	 */
	@Column(name ="ORG_NAME",nullable=true,length=300)
	public java.lang.String getOrgName(){
		return this.orgName;
	}

	/**
	 *方法: 设置java.lang.String
	 *@param: java.lang.String  orgName
	 */
	public void setOrgName(java.lang.String orgName){
		this.orgName = orgName;
	}
	/**
	 *方法: 取得java.lang.String
	 *@return: java.lang.String  classroom
	 */
	@Column(name ="CLASSROOM",nullable=true,length=300)
	public java.lang.String getClassroom(){
		return this.classroom;
	}

	/**
	 *方法: 设置java.lang.String
	 *@param: java.lang.String  classroom
	 */
	public void setClassroom(java.lang.String classroom){
		this.classroom = classroom;
	}
	/**
	 *方法: 取得BigDecimal
	 *@return: BigDecimal  longitude
	 */
	@Column(name ="LONGITUDE",nullable=true,precision=20,scale=17)
	public BigDecimal getLongitude(){
		return this.longitude;
	}

	/**
	 *方法: 设置BigDecimal
	 *@param: BigDecimal  longitude
	 */
	public void setLongitude(BigDecimal longitude){
		this.longitude = longitude;
	}
	/**
	 *方法: 取得BigDecimal
	 *@return: BigDecimal  lantitude
	 */
	@Column(name ="LANTITUDE",nullable=true,precision=20,scale=17)
	public BigDecimal getLantitude(){
		return this.lantitude;
	}

	/**
	 *方法: 设置BigDecimal
	 *@param: BigDecimal  lantitude
	 */
	public void setLantitude(BigDecimal lantitude){
		this.lantitude = lantitude;
	}
}
