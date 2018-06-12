<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/context/mytags.jsp"%>
<!DOCTYPE html>
<html>
 <head>
  <title>课程信息</title>
  <t:base type="jquery,easyui,tools,DatePicker"></t:base>
 </head>
 <body style="overflow-y: hidden" scroll="no">
  <t:formvalid formid="formobj" dialog="true" usePlugin="password" beforeSubmit="removeDisable" layout="table" action="kqCourseAssignController.do?save">
			<input id="id" name="id" type="hidden" value="${kqCourseAssignPage.id }">
			<table style="width: 600px;" cellpadding="0" cellspacing="1" class="formtable">
				<tr>
					<td align="right">
						<label class="Validform_label">
							课程:
						</label>
					</td>
					<td class="value">
					<t:dictSelect field="kqCourseInfoId" dictTable="kq_course_info" defaultVal="${kqCourseAssignPage.kqCourseInfoId}" dictField="id" dictText="course_name"></t:dictSelect>
						<%--< input class="inputxt" id="kqCourseInfoId" name="kqCourseInfoId" ignore="ignore"  value="${kqCourseAssignPage.kqCourseInfoId}" /> --%>
						<span class="Validform_checktip"></span>
					</td>
				</tr>
				<tr>
					<td align="right">
						<label class="Validform_label">
							地点:
						</label>
					</td>
					<td class="value">
						<select style="width:300px;" name="kqPlace" id="kqPlace" required="required">
							<option value="">--请选择--</option>	
							<c:forEach items="${orgs}" var="i">
								<option value="${i.id }">${i.description }</option>
							</c:forEach>
						</select>
						<%-- <input class="inputxt" id="kqPlace" name="kqPlace" ignore="ignore"  value="${kqCourseAssignPage.kqPlace}" /> --%>
						<span class="Validform_checktip"></span>
					</td>
				</tr>
				<tr>
					<td align="right">
						<label class="Validform_label">
							老师:
						</label>
					</td>
					<td class="value">
						<t:dictSelect readonly="readonly" field="teacherId" dictTable="t_s_base_user" defaultVal="${kqCourseAssignPage.teacherId}" dictField="id" dictText="realname"></t:dictSelect>
						<span class="Validform_checktip"></span>
					</td>
				</tr>
				<%-- <tr>
					<td align="right">
						<label class="Validform_label">
							老师id:
						</label>
					</td>
					<td class="value">
						<input class="inputxt" id="teacherId" name="teacherId" ignore="ignore"  value="${kqCourseAssignPage.teacherId}" />
						<span class="Validform_checktip"></span>
					</td>
				</tr> --%>
				<tr>
					<td align="right">
						<label class="Validform_label">
							课程编号:
						</label>
					</td>
					<td class="value">
						<input class="inputxt" id="courseCode" name="courseCode" ignore="ignore"  value="${kqCourseAssignPage.courseCode}" />
						<span class="Validform_checktip"></span>
					</td>
				</tr>
				<tr>
					<td align="right">
						<label class="Validform_label">
							课程状态:
						</label>
					</td>
					<td class="value">
						<t:dictSelect field="courseStatus" typeGroupCode="courStatus" defaultVal="${kqCourseAssignPage.courseStatus}"></t:dictSelect>
						<%-- <input class="inputxt"  id="courseStatus" name="courseStatus" ignore="ignore"  value="${kqCourseAssignPage.courseStatus}" /> --%>
						<span class="Validform_checktip"></span>
					</td>
				</tr>
			</table>
		</t:formvalid>
		<script type="text/javascript">
		$("#kqPlace").val("${kqCourseAssignPage.kqPlace}");
		$("select[name='teacherId']").val("${kqCourseAssignPage.teacherId}");
		function removeDisable(){
			$("select[name='teacherId']").removeAttr("disable");
			$("select[name='teacherId']").removeAttr("disabled");
		}
		</script>
 </body>