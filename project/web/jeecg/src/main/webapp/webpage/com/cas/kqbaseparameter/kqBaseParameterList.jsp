<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/context/mytags.jsp"%>
<t:base type="jquery,easyui,tools,DatePicker"></t:base>
<div class="easyui-layout" fit="true">
  <div region="center" style="padding:0px;border:0px">
  <t:datagrid name="kqBaseParameterList" title="系统参数维护表" actionUrl="kqBaseParameterController.do?datagrid" idField="id" fit="true">
   <t:dgCol title="编号" field="id" hidden="true"></t:dgCol>
   <t:dgCol title="最大定位误差距离" field="maxLocationDistance"   width="120"></t:dgCol>
   <t:dgCol title="上课前几分钟可签到" field="siginBeginTime"   width="120"></t:dgCol>
   <t:dgCol title="上课后几分钟可签到" field="siginEndTime"   width="120"></t:dgCol>
   <t:dgCol title="下课前几分钟可签退" field="signoffBeginTime"   width="120"></t:dgCol>
   <t:dgCol title="下课后几分钟可签退" field="signoffEndTime"   width="120"></t:dgCol>
   <t:dgCol title="操作" field="opt" width="100"></t:dgCol>
   <t:dgDelOpt title="删除" url="kqBaseParameterController.do?del&id={id}" urlclass="ace_button"  urlfont="fa-trash-o"/>
   <t:dgToolBar title="录入" icon="icon-add" url="kqBaseParameterController.do?addorupdate" funname="add"></t:dgToolBar>
   <t:dgToolBar title="编辑" icon="icon-edit" url="kqBaseParameterController.do?addorupdate" funname="update"></t:dgToolBar>
   <t:dgToolBar title="查看" icon="icon-search" url="kqBaseParameterController.do?addorupdate" funname="detail"></t:dgToolBar>
  </t:datagrid>
  </div>
 </div>