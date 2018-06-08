<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/context/mytags.jsp"%>
<!DOCTYPE html>
<html>
 <head>
  <title>记录教室信息</title>
  <t:base type="jquery,easyui,tools,DatePicker"></t:base>
 </head>
 <body style="overflow-y: hidden" scroll="no">
  <t:formvalid formid="formobj" dialog="true" usePlugin="password" layout="table" action="kqClassroomController.do?save">
			<input id="id" name="id" type="hidden" value="${kqClassroomPage.id }">
			<table style="width: 600px;" cellpadding="0" cellspacing="1" class="formtable">
				<tr>
					<td align="right">
						<label class="Validform_label">
							单位名称:
						</label>
					</td>
					<td class="value">
						<input class="inputxt" id="orgName" name="orgName" ignore="ignore"  value="${kqClassroomPage.orgName}" />
						<span class="Validform_checktip"></span>
					</td>
				</tr>
				<tr>
					<td align="right">
						<label class="Validform_label">
							教室:
						</label>
					</td>
					<td class="value">
						<input class="inputxt" id="classroom" name="classroom" ignore="ignore"  value="${kqClassroomPage.classroom}" />
						<span class="Validform_checktip"></span>
					</td>
				</tr>
				<tr>
					<td align="right">
						<label class="Validform_label">
							经度:
						</label>
					</td>
					<td class="value">
						<input class="inputxt" id="longitude" name="longitude" ignore="ignore"  value="${kqClassroomPage.longitude}" datatype="d" />
						<span class="Validform_checktip"></span>
					</td>
				</tr>
				<tr>
					<td align="right">
						<label class="Validform_label">
							纬度:
						</label>
					</td>
					<td class="value">
						<input class="inputxt" id="lantitude" name="lantitude" ignore="ignore"  value="${kqClassroomPage.lantitude}" datatype="d" />
						<span class="Validform_checktip"></span>
					</td>
				</tr>
			</table>
		</t:formvalid>
 </body>