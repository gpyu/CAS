<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/context/mytags.jsp"%>
<t:base type="jquery,easyui,tools,DatePicker"></t:base>
<div class="easyui-layout" fit="true">
  <div region="center" style="padding:0px;border:0px">
  <t:datagrid name="kqCourseAssignList" title="课程信息" actionUrl="kqCourseAssignController.do?datagrid" idField="id" fit="true">
   <t:dgCol title="编号" field="id" hidden="true"></t:dgCol>
   <t:dgCol title="课程" field="kqCourseInfoId"  dictionary="kq_course_info,id,course_name" width="120"></t:dgCol>
   <t:dgCol title="地点" field="kqPlace" dictionary="t_s_depart,id,description"  width="120"></t:dgCol>
   <t:dgCol title="老师" field="teacherId" dictionary="t_s_base_user,id,realname"  width="120"></t:dgCol>
   <t:dgCol title="课程编号" field="courseCode"   width="120"></t:dgCol>
   <t:dgCol title="课程状态" field="courseStatus" dictionary="courStatus"  width="120"></t:dgCol>
   <t:dgCol title="操作" field="opt" width="100"></t:dgCol>
   <t:dgDelOpt title="删除" url="kqCourseAssignController.do?del&id={id}" urlclass="ace_button"  urlfont="fa-trash-o"/>
   <t:dgToolBar title="录入" icon="icon-add" url="kqCourseAssignController.do?addorupdate" funname="add"></t:dgToolBar>
   <t:dgToolBar title="编辑" icon="icon-edit" url="kqCourseAssignController.do?addorupdate" funname="update"></t:dgToolBar>
   <t:dgToolBar title="查看" icon="icon-search" url="kqCourseAssignController.do?addorupdate" funname="detail"></t:dgToolBar>
  </t:datagrid>
</div>
 </div>
  <div region="east" style="width: 300px;" split="true">
	<t:datagrid name="kqCourseTimeInfoList" title="课程时间维护表" actionUrl="kqCourseTimeInfoController.do?datagrid" idField="id" fit="true">
   <t:dgCol title="编号" field="id" hidden="true"></t:dgCol>
   <t:dgCol title="周几" field="week"   width="120"></t:dgCol>
   <t:dgCol title="第几节开始" field="beinTime"   width="120"></t:dgCol>
   <t:dgCol title="第几节结束" field="endTime"   width="120"></t:dgCol>
   <t:dgCol title="课程id" field="courseId"  hidden="true"  width="120"></t:dgCol>
   <t:dgCol title="操作" field="opt" width="100"></t:dgCol>
   <t:dgDelOpt title="删除" url="kqCourseTimeInfoController.do?del&id={id}" urlclass="ace_button"  urlfont="fa-trash-o"/>
   <t:dgToolBar title="录入" icon="icon-add" url="kqCourseTimeInfoController.do?addorupdate" funname="add"></t:dgToolBar>
   <t:dgToolBar title="编辑" icon="icon-edit" url="kqCourseTimeInfoController.do?addorupdate" funname="update"></t:dgToolBar>
   <t:dgToolBar title="查看" icon="icon-search" url="kqCourseTimeInfoController.do?addorupdate" funname="detail"></t:dgToolBar>
  </t:datagrid>
  </div>