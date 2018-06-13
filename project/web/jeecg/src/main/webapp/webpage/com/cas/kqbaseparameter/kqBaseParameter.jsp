<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/context/mytags.jsp"%>
<!DOCTYPE html>
<html>
 <head>
  <title>系统参数维护表</title>
  <t:base type="jquery,easyui,tools,DatePicker"></t:base>
 </head>
 <body style="overflow-y: hidden" scroll="no">
  <t:formvalid formid="formobj" dialog="true" usePlugin="password" layout="table" action="kqBaseParameterController.do?save">
			<input id="id" name="id" type="hidden" value="${kqBaseParameterPage.id }">
			<table style="width: 600px;" cellpadding="0" cellspacing="1" class="formtable">
				<tr>
					<td align="right">
						<label class="Validform_label">
							最大定位误差距离:
						</label>
					</td>
					<td class="value">
						<input class="inputxt" id="maxLocationDistance" name="maxLocationDistance" ignore="ignore"  value="${kqBaseParameterPage.maxLocationDistance}" datatype="n" />
						<span class="Validform_checktip"></span>
					</td>
				</tr>
				<tr>
					<td align="right">
						<label class="Validform_label">
							上课前几分钟可签到:
						</label>
					</td>
					<td class="value">
						<input class="inputxt" id="siginBeginTime" name="siginBeginTime" ignore="ignore"  value="${kqBaseParameterPage.siginBeginTime}" datatype="n" />
						<span class="Validform_checktip"></span>
					</td>
				</tr>
				<tr>
					<td align="right">
						<label class="Validform_label">
							上课后几分钟可签到:
						</label>
					</td>
					<td class="value">
						<input class="inputxt" id="siginEndTime" name="siginEndTime" ignore="ignore"  value="${kqBaseParameterPage.siginEndTime}" datatype="n" />
						<span class="Validform_checktip"></span>
					</td>
				</tr>
				
				
				
				<tr>
					<td align="right">
						<label class="Validform_label">
							下课前几分钟可签退:
						</label>
					</td>
					<td class="value">
						<input class="inputxt" id="signoffBeginTime" name="signoffBeginTime" ignore="ignore"  value="${kqBaseParameterPage.signoffBeginTime}" datatype="n" />
						<span class="Validform_checktip"></span>
					</td>
				</tr>
				<tr>
					<td align="right">
						<label class="Validform_label">
							下课后几分钟可签退:
						</label>
					</td>
					<td class="value">
						<input class="inputxt" id="signoffEndTime" name="signoffEndTime" ignore="ignore"  value="${kqBaseParameterPage.signoffEndTime}" datatype="n" />
						<span class="Validform_checktip"></span>
					</td>
				</tr>
				
				<tr>
					<td align="right">
						<label class="Validform_label">
							开学日期:
						</label>
					</td>
					<td class="value">
						<input class="Wdate" onClick="WdatePicker({dateFmt:'yyyy-MM-dd'})"  style="width: 150px" id="startTerm" name="startTerm" ignore="ignore"    value="<fmt:formatDate value='${kqBaseParameterPage.startTerm}' type="date" pattern="yyyy-MM-dd"/>" />
						<span class="Validform_checktip"></span>
					</td>
				</tr>
				
				<tr>
					<td align="right">
						<label class="Validform_label">
							放假日期:
						</label>
					</td>
					<td class="value">
						<input class="Wdate" onClick="WdatePicker({dateFmt:'yyyy-MM-dd'})"  style="width: 150px" id="endTerm" name="endTerm" ignore="ignore"    value="<fmt:formatDate value='${kqBaseParameterPage.endTerm}' type="date" pattern="yyyy-MM-dd"/>" />
						<span class="Validform_checktip"></span>
					</td>
				</tr>
			</table>
		</t:formvalid>
 </body>