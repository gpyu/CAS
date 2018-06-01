<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/context/mytags.jsp"%>
<t:base type="jquery,easyui,tools,DatePicker"></t:base>
<div class="easyui-layout" fit="true">
  <div region="center" style="padding:0px;border:0px">
  <t:datagrid name="kqCourseList" title="阿萨德" actionUrl="kqCourseController.do?datagrid" idField="id" fit="true">
   <t:dgCol title="编号" field="id" hidden="true"></t:dgCol>
   <t:dgCol title="课程名称" field="courseName"   width="100"></t:dgCol>
   <t:dgCol title="课程编号" field="courseNum"   width="100"></t:dgCol>
   <t:dgCol title="课程开始时间" field="courseBeginDate" formatter="yyyy-MM-dd"  width="100"></t:dgCol>
   <t:dgCol title="课程结束时间" field="courseEndDate" formatter="yyyy-MM-dd"  width="100"></t:dgCol>
   <t:dgCol title="任课老师" field="courseTeacherId"   width="100"></t:dgCol>
   <t:dgCol title="周几上课" field="courseWeek"  dictionary="courWeek" width="100"></t:dgCol>
   <t:dgCol title="第几节" field="courseClasses" dictionary="courClass"  width="100"></t:dgCol>
   <t:dgCol title="课程地点" field="coursePlace"   width="100"></t:dgCol>
   <t:dgCol title="课程状态" field="courseStatus" dictionary="courStatus"  width="100"></t:dgCol>
   <t:dgCol title="签到状态" field="signStatus"  dictionary="sign" width="100"></t:dgCol>
   <t:dgCol title="操作" field="opt" width="100"></t:dgCol>
   <t:dgDelOpt title="删除" url="kqCourseController.do?del&id={id}" urlclass="ace_button"  urlfont="fa-trash-o"/>
   <t:dgFunOpt  funname="qiandao(id)" title="签到" exp="signStatus#eq#0"></t:dgFunOpt>
   <t:dgToolBar title="录入" icon="icon-add" url="kqCourseController.do?addorupdate" funname="add"></t:dgToolBar>
   <t:dgToolBar title="编辑" icon="icon-edit" url="kqCourseController.do?addorupdate" funname="update"></t:dgToolBar>
   <t:dgToolBar title="查看" icon="icon-search" url="kqCourseController.do?addorupdate" funname="detail"></t:dgToolBar>
  </t:datagrid>
  
  <script type="text/javascript">
  function qiandao(id){
	         $.ajax({
	             type: "POST",
	             url: "kqCourseController.do?sign",
	             data: {'id':id},
	             dataType: "json",
	             async:false,
	             success: function(data){
	                        if (data.success){
	                        	tip("开始签到！");
	                        	kqCourseListsearch();
	                        	
	                        }else{
	                        	alert(data.msg);
	                        }
	                      }
	         });
  }
  
  </script>
  </div>
 </div>