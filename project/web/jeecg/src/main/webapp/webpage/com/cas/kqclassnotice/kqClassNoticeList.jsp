<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/context/mytags.jsp"%>
<t:base type="jquery,easyui,tools,DatePicker"></t:base>
<div class="easyui-layout" fit="true">
  <div region="center" style="padding:0px;border:0px">
  <t:datagrid name="kqClassNoticeList" queryMode="group" title="班级公告" actionUrl="kqClassNoticeController.do?datagrid" idField="id" fit="true">
   <t:dgCol title="编号" field="id" hidden="true"></t:dgCol>
   <t:dgCol title="标题" field="title" query="true"  width="120"></t:dgCol>
   <t:dgCol title="通知内容" field="content"  query="true"  width="120"></t:dgCol>
   <t:dgCol title="时间" field="time" formatter="yyyy-MM-dd hh:mm:ss"  width="120"></t:dgCol>
   <t:dgCol title="操作" field="opt" width="100"></t:dgCol>
   <t:dgDelOpt title="删除" url="kqClassNoticeController.do?del&id={id}" urlclass="ace_button"  urlfont="fa-trash-o"/>
   <t:dgToolBar title="录入" icon="icon-add" url="kqClassNoticeController.do?addorupdate" funname="add"></t:dgToolBar>
   <t:dgToolBar title="编辑" icon="icon-edit" url="kqClassNoticeController.do?addorupdate" funname="update"></t:dgToolBar>
   <t:dgToolBar title="查看" icon="icon-search" url="kqClassNoticeController.do?addorupdate" funname="detail"></t:dgToolBar>
  </t:datagrid>
  <script>
  $(document).ready(function(){
		//给时间控件加上样式
		$("#kqClassNoticeListtb").find("input[name='time_begin']").attr("class","Wdate").click(function(){WdatePicker({dateFmt:'yyyy-MM-dd'});});
		$("#kqClassNoticeListtb").find("input[name='time_end']").attr("class","Wdate").click(function(){WdatePicker({dateFmt:'yyyy-MM-dd'});});
});
  </script>
  </div>
 </div>