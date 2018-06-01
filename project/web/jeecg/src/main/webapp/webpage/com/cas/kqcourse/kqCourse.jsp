<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/context/mytags.jsp"%>
<!DOCTYPE html>
<html>
 <head>
  <title>阿萨德</title>
  <t:base type="jquery,easyui,tools,DatePicker"></t:base>
 </head>
 <script>

 
 </script>
 <body style="overflow-y: hidden" scroll="no">
  <t:formvalid formid="formobj" dialog="true" usePlugin="password" layout="table" action="kqCourseController.do?save">
			<input id="id" name="id" type="hidden" value="${kqCoursePage.id }">
			<table style="width: 600px;" cellpadding="0" cellspacing="1" class="formtable">
				<tr>
					<td align="right">
						<label class="Validform_label">
							课程名称:
						</label>
					</td>
					<td class="value">
						<input class="inputxt" id="courseName" name="courseName"   value="${kqCoursePage.courseName}" datatype="*" />
						<span class="Validform_checktip"></span>
					</td>
				</tr>
				<tr>
					<td align="right">
						<label class="Validform_label">
							课程编号:
						</label>
					</td>
					<td class="value">
						<input class="inputxt" id="courseNum" name="courseNum"   value="${kqCoursePage.courseNum}" datatype="*" />
						<span class="Validform_checktip"></span>
					</td>
				</tr>
				<tr>
					<td align="right">
						<label class="Validform_label">
							课程开始时间:
						</label>
					</td>
					<td class="value">
						<input class="Wdate" onClick="WdatePicker()"  style="width: 150px" id="courseBeginDate" name="courseBeginDate"   value="<fmt:formatDate value='${kqCoursePage.courseBeginDate}' type="date" pattern="yyyy-MM-dd"/>" datatype="*" />
						<span class="Validform_checktip"></span>
					</td>
				</tr>
				<tr>
					<td align="right">
						<label class="Validform_label">
							课程结束时间:
						</label>
					</td>
					<td class="value">
						<input class="Wdate" onClick="WdatePicker()"  style="width: 150px" id="courseEndDate" name="courseEndDate"   value="<fmt:formatDate value='${kqCoursePage.courseEndDate}' type="date" pattern="yyyy-MM-dd"/>" datatype="*" />
						<span class="Validform_checktip"></span>
					</td>
				</tr>
				<tr>
					<td align="right">
						<label class="Validform_label">
							任课老师:
						</label>
					</td>
					<td class="value">
   
						<t:dictSelect field="courseTeacherId" defaultVal="${kqCoursePage.courseTeacherId}" dictTable="t_s_base_user"  dictField="username" dictText="realname" title="课程状态"></t:dictSelect> 
<%-- 						<input class="inputxt" id="courseTeacherId" name="courseTeacherId"   value="${kqCoursePage.courseTeacherId}" datatype="*" />
 --%>						<span class="Validform_checktip"></span>

						<t:dictSelect field="courseTeacherId" defaultVal="${kqCoursePage.courseTeacherId}"  dictTable="t_s_base_user" dictField="id" dictText="realname"  ></t:dictSelect> 
						<%-- <input class="inputxt" id="courseTeacherId" name="courseTeacherId"   value="${kqCoursePage.courseTeacherId}" datatype="*" /> --%>
						<span class="Validform_checktip"></span>

					</td>
				</tr>
				<tr>
					<td align="right">
						<label class="Validform_label">
							周几上课:
						</label>
					</td>
					<td class="value">
						<t:dictSelect field="courseWeek" defaultVal="${kqCoursePage.courseWeek}"  typeGroupCode="courWeek" title="周几上课"></t:dictSelect> 
						
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
						<t:dictSelect field="courseClasses" defaultVal="${kqCoursePage.courseClasses}"  typeGroupCode="courClass" title="第几节"></t:dictSelect> 
						<span class="Validform_checktip"></span>
					</td>
				</tr>
				<tr>
					<td align="right">
						<label class="Validform_label">
							课程地点:
						</label>
					</td>
					<td class="value">
						<input class="inputxt" id="coursePlace" name="coursePlace"   value="${kqCoursePage.coursePlace}" datatype="*" />
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
      					<t:dictSelect field="courseStatus" defaultVal="${kqCoursePage.courseStatus}"  typeGroupCode="courStatus" title="课程状态"></t:dictSelect> 
						<span class="Validform_checktip"></span>
					</td>
				</tr>
			</table>
		</t:formvalid>
 </body>