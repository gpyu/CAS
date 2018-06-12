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
						<%-- <input class="inputxt" id="studentId" name="studentId" ignore="ignore"  value="${kqClassStudentPage.studentId}" /> --%>
						<span class="Validform_checktip"></span>
					</td>
				</tr>
			</table>
		</t:formvalid>
 </body>