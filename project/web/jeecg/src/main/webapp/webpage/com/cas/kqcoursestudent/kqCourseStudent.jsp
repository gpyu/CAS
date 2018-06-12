<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/context/mytags.jsp"%>
<!DOCTYPE html>
<html>
 <head>
  <title>课程学生关联表</title>
  <t:base type="jquery,easyui,tools,DatePicker"></t:base>
 </head>
 <body style="overflow-y: hidden" scroll="no">
  <t:formvalid formid="formobj" dialog="true"  callback="kqCourseStudentListsearch" usePlugin="password" layout="table" action="kqCourseStudentController.do?save">
			<input id="id" name="id" type="hidden" value="${kqCourseStudentPage.id }">
			<table style="width: 600px;" cellpadding="0" cellspacing="1" class="formtable">
				<tr>
					<td align="right">
						<label class="Validform_label">
							学生:
						</label>
					</td>
					<td class="value">
						<select id="studentId" name="studentId" required="required">
							<option value="">--请选择--</option>
							<c:forEach items="${studentList}" var="student">
								<option value="${student.id}">${student.realname}</option>
							</c:forEach>
						</select>
						<span class="Validform_checktip"></span>
					</td>
				</tr>
				<input class="inputxt" id="courseId" name="courseId" hidden="true"  value="${param.courseId}" datatype="*" />
				<%-- <tr>
					<td align="right">
						<label class="Validform_label">
							课程id:
						</label>
					</td>
					<td class="value">
						<input class="inputxt" id="courseId" name="courseId"   value="${kqCourseStudentPage.courseId}" datatype="*" />
						<span class="Validform_checktip"></span>
					</td>
				</tr> --%>
			</table>
		</t:formvalid>
 </body>