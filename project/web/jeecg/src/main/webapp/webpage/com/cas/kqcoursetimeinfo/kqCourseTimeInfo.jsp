<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/context/mytags.jsp"%>
<!DOCTYPE html>
<html>
 <head>
  <title>课程时间维护表</title>
  <t:base type="jquery,easyui,tools,DatePicker"></t:base>
 </head>
 <body style="overflow-y: hidden" scroll="no">
  <t:formvalid formid="formobj" dialog="true" callback="kqCourseTimeInfoListsearch" usePlugin="password" layout="table" action="kqCourseTimeInfoController.do?save">
			<input id="id" name="id" type="hidden" value="${kqCourseTimeInfoPage.id }">
			<table style="width: 600px;" cellpadding="0" cellspacing="1" class="formtable">
				<tr>
					<td align="right">
						<label class="Validform_label">
							周几:
						</label>
					</td>
					<td class="value">
						<input class="inputxt" id="week" name="week" ignore="ignore"  value="${kqCourseTimeInfoPage.week}" datatype="n" />
						<span class="Validform_checktip"></span>
					</td>
				</tr>
				<tr>
					<td align="right">
						<label class="Validform_label">
							第几节开始:
						</label>
					</td>
					<td class="value">
						<input class="inputxt" id="beinTime" name="beinTime" ignore="ignore"  value="${kqCourseTimeInfoPage.beinTime}" datatype="n" />
						<span class="Validform_checktip"></span>
					</td>
				</tr>
				<tr>
					<td align="right">
						<label class="Validform_label">
							第几节结束:
						</label>
					</td>
					<td class="value">
						<input class="inputxt" id="endTime" name="endTime" ignore="ignore"  value="${kqCourseTimeInfoPage.endTime}" datatype="n" />
						<span class="Validform_checktip"></span>
					</td>
				</tr>
				<input class="inputxt" hidden="true" id="courseId" name="courseId" ignore="ignore"  value="${kqCourseTimeInfoPage.courseId}" />
			</table>
		</t:formvalid>
 </body>