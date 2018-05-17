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
							班级id:
						</label>
					</td>
					<td class="value">
						<input class="inputxt" id="classId" name="classId" ignore="ignore"  value="${kqClassStudentPage.classId}" />
						<span class="Validform_checktip"></span>
					</td>
				</tr>
				<tr>
					<td align="right">
						<label class="Validform_label">
							学生id:
						</label>
					</td>
					<td class="value">
						<input class="inputxt" id="studentId" name="studentId" ignore="ignore"  value="${kqClassStudentPage.studentId}" />
						<span class="Validform_checktip"></span>
					</td>
				</tr>
			</table>
		</t:formvalid>
 </body>