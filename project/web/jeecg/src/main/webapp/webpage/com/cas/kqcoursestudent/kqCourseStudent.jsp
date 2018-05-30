<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/context/mytags.jsp"%>
<!DOCTYPE html>
<html>
 <head>
  <title>课程学生关联表</title>
  <t:base type="jquery,easyui,tools,DatePicker"></t:base>
 </head>
 <body style="overflow-y: hidden" scroll="no">
  <t:formvalid formid="formobj" dialog="true" usePlugin="password" layout="table" action="kqCourseStudentController.do?save">
			<input id="id" name="id" type="hidden" value="${kqCourseStudentPage.id }">
			<table style="width: 600px;" cellpadding="0" cellspacing="1" class="formtable">
				<tr>
					<td align="right">
						<label class="Validform_label">
							课程名称:
						</label>
					</td>
					<td class="value">
						<t:dictSelect field="courseId" defaultVal="${kqCourseStudentPage.courseId}" dictTable="kq_course" dictText="course_name" dictField="id"></t:dictSelect>
						<span class="Validform_checktip"></span>
					</td>
				</tr>
				<tr>
					<td align="right">
						<label class="Validform_label">
							学生名姓:
						</label>
					</td>
					<td class="value">
					<t:dictSelect field="studentId" defaultVal="${kqCourseStudentPage.studentId}" dictTable="t_s_base_user" dictText="realname" dictField="id"></t:dictSelect>
						<span class="Validform_checktip"></span>
					</td>
				</tr>
			</table>
		</t:formvalid>
 </body>