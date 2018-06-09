<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/context/mytags.jsp"%>
<!DOCTYPE html>
<html>
 <head>
  <title>课程名称维护</title>
  <t:base type="jquery,easyui,tools,DatePicker"></t:base>
 </head>
 <body style="overflow-y: hidden" scroll="no">
  <t:formvalid formid="formobj" dialog="true" usePlugin="password" layout="table" action="kqCourseInfoController.do?save">
			<input id="id" name="id" type="hidden" value="${kqCourseInfoPage.id }">
			<table style="width: 600px;" cellpadding="0" cellspacing="1" class="formtable">
				<tr>
					<td align="right">
						<label class="Validform_label">
							课程名称:
						</label>
					</td>
					<td class="value">
						<input class="inputxt" id="courseName" name="courseName" ignore="ignore"  value="${kqCourseInfoPage.courseName}" />
						<span class="Validform_checktip"></span>
					</td>
				</tr>
				<tr>
					<td align="right">
						<label class="Validform_label">
							课时:
						</label>
					</td>
					<td class="value">
						<input class="inputxt" id="courseClassHour" name="courseClassHour"   value="${kqCourseInfoPage.courseClassHour}" datatype="n" />
						<span class="Validform_checktip"></span>
					</td>
				</tr>
				
			</table>
		</t:formvalid>
 </body>