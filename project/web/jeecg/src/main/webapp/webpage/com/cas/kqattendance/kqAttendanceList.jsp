<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/context/mytags.jsp"%>
<t:base type="jquery,easyui,tools,DatePicker"></t:base>
<div class="easyui-layout" fit="true">
  <div region="center" style="padding:0px;border:0px">
  <t:datagrid name="kqAttendanceList" title="考勤管理" queryMode="group" actionUrl="kqAttendanceController.do?datagrid" idField="id" fit="true">
   <t:dgCol title="编号" field="id" hidden="true"></t:dgCol>
   <t:dgCol title="学生" field="studentId" dictionary="t_s_base_user,id,realname" query="true" width="120"></t:dgCol>
   <t:dgCol title="课程" field="courseId" dictionary="kq_course_info,id,course_name" query="true"  width="120"></t:dgCol>
   <t:dgCol title="类型：出勤、缺勤、迟到、早退" field="type" dictionary="siginType"  width="120"></t:dgCol>
   <t:dgCol title="上课日期" field="date" formatter="yyyy-MM-dd"  width="120"></t:dgCol>
 </t:datagrid>
  </div>
 </div>