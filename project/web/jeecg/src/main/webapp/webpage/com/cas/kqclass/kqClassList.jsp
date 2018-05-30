<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/context/mytags.jsp"%>
<t:base type="jquery,easyui,tools,DatePicker"></t:base>
 <div class="easyui-layout" fit="true" >
  <div region="center" style="padding:1px;">
  <t:datagrid name="kqClassList" title="班级管理" actionUrl="kqClassController.do?datagrid"  idField="id" fit="true">
   <t:dgCol title="编号" field="id" hidden="true"></t:dgCol>
   <t:dgCol title="班级名称" field="className"   width="120"></t:dgCol>
   <t:dgCol title="操作" field="opt" width="100"></t:dgCol>
   <t:dgDelOpt title="删除" url="kqClassController.do?del&id={id}" urlclass="ace_button"  urlfont="fa-trash-o"/>
   <t:dgToolBar title="录入" icon="icon-add" url="kqClassController.do?addorupdate" funname="add"></t:dgToolBar>
   <t:dgToolBar title="编辑" icon="icon-edit" url="kqClassController.do?addorupdate" funname="update"></t:dgToolBar>
   <t:dgToolBar title="查看" icon="icon-search" url="kqClassController.do?addorupdate" funname="detail"></t:dgToolBar>
  </t:datagrid>
  </div>
 </div>
 
 <div region="east" style="width: 450px;" split="true">
	<t:datagrid name="kqClassStudentList" title="班级学生表" actionUrl="kqClassStudentController.do?studentDatagrid" idField="id" fit="true">
   <t:dgCol title="编号" field="id" hidden="true"></t:dgCol>
   <t:dgCol title="班级" field="classId" dictionary="kq_class,id,class_name"  width="120"></t:dgCol>
   <t:dgCol title="学生" field="studentId" dictionary="t_s_base_user,id,realname"  width="120"></t:dgCol>
   <t:dgCol title="操作" field="opt" width="100"></t:dgCol>
   <t:dgDelOpt title="删除" url="kqClassStudentController.do?del&id={id}" urlclass="ace_button"  urlfont="fa-trash-o"/>
   <t:dgToolBar title="录入" icon="icon-add" url="kqClassStudentController.do?addorupdate" funname="add"></t:dgToolBar>
   <t:dgToolBar title="编辑" icon="icon-edit" url="kqClassStudentController.do?addorupdate" funname="update"></t:dgToolBar>
  	<t:dgToolBar title="excelImport" icon="icon-put" funname="ImportXls"></t:dgToolBar>
	<t:dgToolBar title="excelOutput" icon="icon-putout" funname="ExportXls"></t:dgToolBar>
	<t:dgToolBar title="templateDownload" icon="icon-putout" funname="ExportXlsByT"></t:dgToolBar>
  </t:datagrid>
  </div>
  
  <script>
  
  $(document).ready(function(){
		$('#kqClassList').datagrid({
		 		onLoadSuccess:function(data){ 
		 		},  
		 		onDblClickRow:function() { 
				},
		 		onSelect: function (index,row) {
		 			$('#kqClassStudentList').datagrid({queryParams: {id: row.id}});
		 			kqClassStudentListsearch();
		 		}
		  });
  });
	//导入
	function ImportXls() {
		openuploadwin('Excel导入', 'kqClassStudentController.do?upload', "userList");
	}

	//导出
	function ExportXls() {
		JeecgExcelExport("kqClassStudentController.do?exportXls", "userList");
	}

	//模板下载
	function ExportXlsByT() {
		JeecgExcelExport("kqClassStudentController.do?exportXlsByT", "userList");
	}
  </script>
  
  