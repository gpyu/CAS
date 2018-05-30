<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/context/mytags.jsp"%>
<!DOCTYPE html>
<html>
 <head>
  <title>班级学生表</title>
  <t:base type="jquery,easyui,tools,DatePicker"></t:base>
 </head>
 <body style="overflow-y: hidden" scroll="no">
  <t:formvalid formid="formobj" dialog="true" usePlugin="password" layout="table" action="kqClassStudentController.do?save">
			<input id="id" name="id" type="hidden" value="${kqClassStudentPage.id }">
			<table style="width: 600px;" cellpadding="0" cellspacing="1" class="formtable">
				<tr>
					<td align="right">
						<label class="Validform_label">
							班级名称:
						</label>
					</td>
					<td class="value">
					<t:dictSelect field="classId" defaultVal="${kqClassStudentPage.classId}" dictTable="kq_class" dictText="class_name" dictField="id"></t:dictSelect>
						<span class="Validform_checktip"></span>
					</td>
				</tr>
				<tr>
					<td align="right">
						<label class="Validform_label">
							学生名称:
						</label>
					</td>
					<td class="value">
					<t:dictSelect field="studentId" defaultVal="${kqClassStudentPage.studentId}" dictTable="t_s_base_user" dictText="realname" dictField="id"></t:dictSelect>
						<span class="Validform_checktip"></span>
					</td>
				</tr>
			</table>
		</t:formvalid>
 </body>