<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/context/mytags.jsp"%>
<t:base type="jquery,easyui,tools,DatePicker"></t:base>
<div class="easyui-layout" fit="true">
  <div region="center" style="padding:0px;border:0px">
  <t:datagrid name="kqCourseAssignList" title="课程信息" pageSize="30" actionUrl="kqCourseAssignController.do?datagrid" idField="id" fit="true">
   <t:dgCol title="编号" field="id" hidden="true"></t:dgCol>
   <t:dgCol title="课程" field="kqCourseInfoId"  dictionary="kq_course_info,id,course_name" width="120"></t:dgCol>
   <t:dgCol title="地点" field="kqPlace" dictionary="kq_classroom,id,org_name"  width="120"></t:dgCol>
   <t:dgCol title="老师" field="teacherId" dictionary="t_s_base_user,id,realname"  width="120"></t:dgCol>
   <t:dgCol title="课程编号" field="courseCode"   width="120"></t:dgCol>
   <t:dgCol title="课程状态" field="courseStatus" dictionary="courStatus"  width="120"></t:dgCol>
   <t:dgCol title="操作" field="opt" width="100"></t:dgCol>
   <t:dgDelOpt title="删除" url="kqCourseAssignController.do?del&id={id}" urlclass="ace_button"  urlfont="fa-trash-o"/>
   <t:dgToolBar title="录入" icon="icon-add" url="kqCourseAssignController.do?addorupdate" funname="add"></t:dgToolBar>
   <t:dgToolBar title="编辑" icon="icon-edit" url="kqCourseAssignController.do?addorupdate" funname="update"></t:dgToolBar>
   <t:dgToolBar title="查看" icon="icon-search" url="kqCourseAssignController.do?addorupdate" funname="detail"></t:dgToolBar>
  </t:datagrid>
</div>
 </div>
  <div region="east" style="width: 400px;" split="true">
	<t:datagrid name="kqCourseStudentList" title="课程学生表" actionUrl="kqCourseStudentController.do?datagrid" idField="id" fit="true">
   <t:dgCol title="编号" field="id" hidden="true"></t:dgCol>
   <t:dgCol title="课程" field="courseId" hidden="true" dictionary="kq_course,id,course_name"  width="120"></t:dgCol>
   <t:dgCol title="学生" field="studentId" dictionary="t_s_base_user,id,realname"  width="120"></t:dgCol>
   <t:dgCol title="操作" field="opt" width="100"></t:dgCol>
   <t:dgDelOpt title="删除" url="kqCourseStudentController.do?del&id={id}" urlclass="ace_button"  urlfont="fa-trash-o"/>
   <t:dgToolBar title="录入" icon="icon-add" url="kqCourseStudentController.do?addorupdate" funname="add"></t:dgToolBar>
  	<t:dgToolBar title="excelImport" icon="icon-put" funname="ImportXls"></t:dgToolBar>
	<t:dgToolBar title="excelOutput" icon="icon-putout" funname="ExportXls"></t:dgToolBar>
	<t:dgToolBar title="templateDownload" icon="icon-putout" funname="ExportXlsByT"></t:dgToolBar>
  </t:datagrid>
  <script type="text/javascript">
  var mainId = '';
  /* function addItem(){
	  if(mainId  == ''){
		  tip("请主项目");
		  return;
	  }
	  $.dialog({
			content: 'url:kqCourseTimeInfoController.do?addorupdate&courseId='+mainId,
			lock : true,
			zIndex: getzIndex(),
			width:500,
			height:600,
			title:'新增',
			opacity : 0.3,
			cache:false,
		    ok: function(){
		    	iframe = this.iframe.contentWindow;
				saveObj();
				return false;
		    },
		    cancelVal: '关闭',
		    cancel: true 
		}); 
  }
  function updateItem(){
	  var row = $("#kqCourseTimeInfoList").datagrid('getSelected');
	  if(row  == null){
		  tip("请选择编辑项");
		  return;
	  }
	  $.dialog({
			content: 'url:kqCourseTimeInfoController.do?addorupdate&id='+row.id+'&courseId='+mainId,
			lock : true,
			zIndex: getzIndex(),
			width:500,
			height:600,
			title:'编辑',
			opacity : 0.3,
			cache:false,
		    ok: function(){
		    	iframe = this.iframe.contentWindow;
				saveObj();
				return false;
		    },
		    cancelVal: '关闭',
		    cancel: true 
		}); 
  } */
  $(function(){
	  
	  $("#kqCourseAssignList").datagrid({  
          onClickRow: function (index, row) {  
        	  $('#kqCourseStudentList').datagrid({queryParams: {"courseId": mainId}});
        	  kqCourseStudentListsearch();
          },  
          onClickCell: function (rowIndex, field, value) {  
          },  
          onSelect: function (rowIndex, rowData) {
        	  mainId = rowData.id;
          },  
          onUnselect: function (rowIndex, rowData) {  
          }  
      }); 
	  
  })
  </script>
  </div>