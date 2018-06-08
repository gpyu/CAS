<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/context/mytags.jsp"%>
<!DOCTYPE html>
<html>
 <head>
  <title>记录作息时间</title>
  <t:base type="jquery,easyui,tools,DatePicker"></t:base>
 </head>
 <body style="overflow-y: hidden" scroll="no">
  <t:formvalid formid="formobj" dialog="true" usePlugin="password" layout="table" action="kqTimetableController.do?save">
			<input id="id" name="id" type="hidden" value="${kqTimetablePage.id }">
			<table style="width: 600px;" cellpadding="0" cellspacing="1" class="formtable">
				<tr>
					<td align="right">
						<label class="Validform_label">
							学校:
						</label>
					</td>
					<td class="value">
						<input class="inputxt" id="school" name="school" ignore="ignore"  value="${kqTimetablePage.school}" />
						<span class="Validform_checktip"></span>
					</td>
				</tr>
				<tr>
					<td align="right">
						<label class="Validform_label">
							第几节:
						</label>
					</td>
					<td class="value">
						<t:dictSelect field="classnumber" defaultVal="${kqTimetablePage.classnumber}"  typeGroupCode="courClass" title="第几节"></t:dictSelect> 
						<span class="Validform_checktip"></span>
					</td>
				</tr>
				<tr>
					<td align="right">
						<label class="Validform_label">
							开始时间:
						</label>
					</td>
					<td class="value">
						<input class="Wdate" onClick="WdatePicker({dateFmt:'HH:mm:ss'})"  style="width: 150px" id="beginTime" name="beginTime" ignore="ignore"    value="<fmt:formatDate value='${kqTimetablePage.beginTime}' type="date" pattern="yyyy-MM-dd hh:mm:ss"/>" />
						<span class="Validform_checktip"></span>
					</td>
				</tr>
				<tr>
					<td align="right">
						<label class="Validform_label">
							结束时间:
						</label>
					</td>
					<td class="value">
						<input class="Wdate" onClick="WdatePicker({dateFmt:'HH:mm:ss'})"  style="width: 150px" id="endTime" name="endTime" ignore="ignore"    value="<fmt:formatDate value='${kqTimetablePage.endTime}' type="date" pattern="yyyy-MM-dd hh:mm:ss"/>" />
						<span class="Validform_checktip"></span>
					</td>
				</tr>
			</table>
		</t:formvalid>
 </body>