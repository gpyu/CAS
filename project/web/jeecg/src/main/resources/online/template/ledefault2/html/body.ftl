
    <#if (columns?size>10)>
        <#if po_index%2==0>
        <div class="row show-grid">
        </#if>
    <#else>
    <div class="row show-grid">
    </#if>
    <div class="col-xs-3 text-center">
        <b><@mutiLang langKey="${po.content}"/>：</b>
    </div>
    <div class="col-xs-3">
        <#if head.isTree=='Y' && head.treeParentIdFieldName==po.field_name>
            <!--如果为树形菜单，父id输入框设置为select-->
            <input id="${po.field_name}" ${po.extend_json?if_exists} name="${po.field_name}" type="text"
                   class="inputxt easyui-combotree" value="${data['${tableName}']['${po.field_name}']?if_exists?html}"
                <#if po.operationCodesReadOnly?exists> readonly = "readonly"</#if>
            <#-- update--begin--author:zhangjiaqiang Date:20170417 for:增加校验必填项 -->
                <#if po.field_must_input??><#if po.field_must_input == 'Y' || po.is_null != 'Y'>ignore="checked"<#else>ignore="ignore"</#if><#elseif po.is_null != 'Y'> ignore="checked"<#else>ignore="ignore"</#if>
                <#if po.field_valid_type?if_exists?html != ''>
                   datatype="${po.field_valid_type?if_exists?html}"
                <#else>
                    <#if po.type == 'int'>
                   datatype="n"
                    <#elseif po.type=='double'>
                   datatype="/^(-?\d+)(\.\d+)?$/"
                    <#else>
                   <#if po.is_null != 'Y'>datatype="*"</#if>
                    </#if>
                </#if>
            <#-- update--end--author:zhangjiaqiang Date:20170417 for:增加校验必填项 -->
                   data-options="
				                    panelHeight:'220',
				                    url: '${basePath}/cgAutoListController.do?datagrid&configId=${tableName?if_exists?html}&field=id,${head.treeFieldname}',
				                    loadFilter: function(data) {
				                    	var rows = data.rows || data;
				                    	var win = frameElement.api.opener;
				                    	var listRows = win.getDataGrid().treegrid('getData');
				                    	joinTreeChildren(rows, listRows);
				                    	convertTreeData(rows, '${head.treeFieldname}');
				                    	return rows;
				                    },
				                     <#-- update--begin--author:zhangjiaqiang Date:20170518 for:修订树形菜单选择必填项问题-->
				                    onSelect:function(node){
				                    	$('#${po.field_name}').val(node.id);
				                    },
				                     <#-- update--end--author:zhangjiaqiang Date:20170518 for:修订树形菜单选择必填项问题 -->
				                    onLoadSuccess: function() {
				                    	var win = frameElement.api.opener;
				                    	var currRow = win.getDataGrid().treegrid('getSelected');
				                    	if(!'${id?if_exists?html}') {
				                    		//增加时，选择当前父菜单
				                    		if(currRow) {
				                    			$('#${po.field_name}').combotree('setValue', currRow.id);
				                    		}
				                    	}else {
				                    		//编辑时，选择当前父菜单
				                    		if(currRow) {
				                    			$('#${po.field_name}').combotree('setValue', currRow._parentId);
				                    		}
				                    	}
				                    }
				            ">
        <#--update-end--Author:钟世云  Date:20150610 for：online支持树配置-->
        <#elseif po.show_type=='text'>
            <input id="${po.field_name}" ${po.extend_json?if_exists} name="${po.field_name}" type="text"
                   class="form-control" value="${data['${tableName}']['${po.field_name}']?if_exists?html}"
                <#if po.operationCodesReadOnly?exists> readonly = "readonly"</#if>
            <#-- update--begin--author:zhangjiaqiang Date:20170417 for:增加校验必填项 -->
                <#if po.field_must_input??><#if po.field_must_input == 'Y' || po.is_null != 'Y'>ignore="checked"<#else>ignore="ignore"</#if><#elseif po.is_null != 'Y'> ignore="checked"<#else>ignore="ignore"</#if>
                <#if po.field_valid_type?if_exists?html != ''>
                   datatype="${po.field_valid_type?if_exists?html}"
                <#else>
                    <#if po.type == 'int'>
                   datatype="n"
                    <#elseif po.type=='double'>
                   datatype="/^(-?\d+)(\.\d+)?$/"
                    <#else>
                   <#if po.is_null != 'Y'>datatype="*"</#if>
                    </#if>
                </#if>>
        <#-- update--end--author:zhangjiaqiang Date:20170417 for:增加校验必填项 -->
        <#elseif po.show_type=='password'>
            <input id="${po.field_name}" ${po.extend_json?if_exists} name="${po.field_name}"  type="password"
                   class="form-control" value="${data['${tableName}']['${po.field_name}']?if_exists?html}"
                <#if po.operationCodesReadOnly?if_exists> readonly = "readonly"</#if>
            <#-- update--begin--author:zhangjiaqiang Date:20170417 for:增加校验必填项 -->
                <#if po.field_must_input??><#if po.field_must_input == 'Y' || po.is_null != 'Y'>ignore="checked"<#else>ignore="ignore"</#if><#elseif po.is_null != 'Y'> ignore="checked"<#else>ignore="ignore"</#if>
            <#-- update--end--author:zhangjiaqiang Date:20170417 for:增加校验必填项 -->
                <#if po.field_valid_type?if_exists?html != ''>
                   datatype="${po.field_valid_type?if_exists?html}"
                <#else>
                   <#if po.is_null != 'Y'>datatype="*"</#if>
                </#if>>

        <#elseif po.show_type=='radio'>
            <@DictData name="${po.dict_field?if_exists?html}" text="${po.dict_text?if_exists?html}" tablename="${po.dict_table?if_exists?html}" var="dataList">
                <#list dataList as dictdata>
                    <input value="${dictdata.typecode?if_exists?html}" ${po.extend_json?if_exists} name="${po.field_name}" type="radio"
                    <#-- update--begin--author:zhangjiaqiang Date:20170512 for:TASK #1910 【Online 校验】radio\checkbox\select 存在问题，没有根据选择校验规则校验 -->
                        <#if dictdata_index==0>
                            <#if po.field_valid_type?if_exists?html != ''>
                           datatype="${po.field_valid_type?if_exists?html}"
                            <#elseif po.is_null != 'Y'>
                           datatype="*"
                            </#if>
                            <#if po.field_must_input?if_exists?html != ''><#if po.field_must_input == 'Y' || po.is_null != 'Y'>ignore="checked"<#else>ignore="ignore"</#if><#elseif po.is_null != 'Y'> ignore="checked"<#else>ignore="ignore"</#if>
                        </#if>
                    <#-- update--end--author:zhangjiaqiang Date:20170512 for:TASK #1910 【Online 校验】radio\checkbox\select 存在问题，没有根据选择校验规则校验 -->
                           <#if po.operationCodesReadOnly?if_exists>onclick="return false;"</#if>
                        <#if dictdata.typecode?if_exists?html=="${data['${tableName}']['${po.field_name}']?if_exists?html}"> checked="true" </#if>>
                ${dictdata.typename?if_exists?html}
                </#list>
            </@DictData>

        <#elseif po.show_type=='checkbox'>
            <#assign checkboxstr>${data['${tableName}']['${po.field_name}']?if_exists?html}</#assign>
            <#assign checkboxlist=checkboxstr?split(",")>
            <@DictData name="${po.dict_field?if_exists?html}" text="${po.dict_text?if_exists?html}" tablename="${po.dict_table?if_exists?html}" var="dataList">
                <#list dataList as dictdata>
                    <input value="${dictdata.typecode?if_exists?html}" ${po.extend_json?if_exists} name="${po.field_name}" type="checkbox"
                           <#if po.operationCodesReadOnly?if_exists>onclick="return false;"</#if>
                    <#-- update--begin--author:zhangjiaqiang Date:20170512 for:TASK #1910 【Online 校验】radio\checkbox\select 存在问题，没有根据选择校验规则校验 -->
                        <#if dictdata_index==0>
                            <#if po.field_valid_type?if_exists?html != ''>
                           datatype="${po.field_valid_type?if_exists?html}"
                            <#elseif po.is_null != 'Y'>
                           datatype="*"
                            </#if>
                            <#if po.field_must_input?if_exists?html != ''><#if po.field_must_input == 'Y' || po.is_null != 'Y'>ignore="checked"<#else>ignore="ignore"</#if><#elseif po.is_null != 'Y'> ignore="checked"<#else>ignore="ignore"</#if>
                        </#if>
                    <#-- update--end--author:zhangjiaqiang Date:20170512 for:TASK #1910 【Online 校验】radio\checkbox\select 存在问题，没有根据选择校验规则校验 -->
                        <#list checkboxlist as x >
                            <#if dictdata.typecode?if_exists?html=="${x?if_exists?html}"> checked="true" </#if></#list>>
                ${dictdata.typename?if_exists?html}
                </#list>
            </@DictData>

        <#elseif po.show_type=='list'>
            <@DictData name="${po.dict_field?if_exists?html}" text="${po.dict_text?if_exists?html}" tablename="${po.dict_table?if_exists?html}" var="dataList">
                <select id="${po.field_name}" ${po.extend_json?if_exists} class="form-control" name="${po.field_name}" <#if po.operationCodesReadOnly?if_exists>onfocus="this.defOpt=this.selectedIndex" onchange="this.selectedIndex=this.defOpt;"</#if>
                <#-- update--begin--author:zhangjiaqiang Date:20170417 for:增加校验必填项 -->
                    <#if po.field_must_input??><#if po.field_must_input == 'Y' || po.is_null != 'Y'>ignore="checked"<#else>ignore="ignore"</#if><#elseif po.is_null != 'Y'> ignore="checked"<#else>ignore="ignore"</#if>
                <#-- update--end--author:zhangjiaqiang Date:20170417 for:增加校验必填项 -->
                <#-- update--begin--author:zhangjiaqiang Date:20170512 for:TASK #1910 【Online 校验】radio\checkbox\select 存在问题，没有根据选择校验规则校验 -->
                    <#if po.field_valid_type?if_exists?html != ''>
                        datatype="${po.field_valid_type?if_exists?html}"
                    <#elseif po.is_null != 'Y'>
                        datatype="*"
                    </#if>>
                <#-- update--end--author:zhangjiaqiang Date:20170512 for:TASK #1910 【Online 校验】radio\checkbox\select 存在问题，没有根据选择校验规则校验 -->
                    <#list dataList as dictdata>
                        <option value="${dictdata.typecode?if_exists?html}"
                            <#if dictdata.typecode?if_exists?html=="${data['${tableName}']['${po.field_name}']?if_exists?html}"> selected="selected" </#if>>
                        ${dictdata.typename?if_exists?html}
                        </option>
                    </#list>
                </select>
            </@DictData>

        <#elseif po.show_type=='date'>
            <input id="${po.field_name}" ${po.extend_json?if_exists} name="${po.field_name}" type="text" value="<#if data['${tableName}']['${po.field_name}']??>${data['${tableName}']['${po.field_name}']?if_exists?string("yyyy-MM-dd")}</#if>"
                   style="background: url('${basePath}/plug-in/ace/images/datetime.png') no-repeat scroll right center transparent;" class="form-control Wdate" onClick="WdatePicker({<#if po.operationCodesReadOnly?if_exists> readonly = true</#if>})"
                <#if po.operationCodesReadOnly?exists> readonly = "readonly"</#if>
            <#-- update--begin--author:zhangjiaqiang Date:20170417 for:增加校验必填项 -->
                <#if po.field_must_input??><#if po.field_must_input == 'Y' || po.is_null != 'Y'>ignore="checked"<#else>ignore="ignore"</#if><#elseif po.is_null != 'Y'> ignore="checked"<#else>ignore="ignore"</#if>
            <#-- update--end--author:zhangjiaqiang Date:20170417 for:增加校验必填项 -->
                <#if po.field_valid_type?if_exists?html != ''>
                   datatype="${po.field_valid_type?if_exists?html}"
                <#else>
                   <#if po.is_null != 'Y'>datatype="*"</#if>
                </#if>>

        <#elseif po.show_type=='datetime'>
            <input id="${po.field_name}" ${po.extend_json?if_exists} name="${po.field_name}" type="text" value="<#if data['${tableName}']['${po.field_name}']??>${data['${tableName}']['${po.field_name}']?if_exists?string("yyyy-MM-dd HH:mm:ss")}</#if>"
                   style="background: url('${basePath}/plug-in/ace/images/datetime.png') no-repeat scroll right center transparent;" class="form-control Wdate" onClick="WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss'<#if po.operationCodesReadOnly?if_exists> ,readonly = true</#if>})"
                <#if po.operationCodesReadOnly?exists> readonly = "readonly"</#if>
            <#-- update--begin--author:zhangjiaqiang Date:20170417 for:增加校验必填项 -->
                <#if po.field_must_input??><#if po.field_must_input == 'Y' || po.is_null != 'Y'>ignore="checked"<#else>ignore="ignore"</#if><#elseif po.is_null != 'Y'> ignore="checked"<#else>ignore="ignore"</#if>
            <#-- update--end--author:zhangjiaqiang Date:20170417 for:增加校验必填项 -->
                <#if po.field_valid_type?if_exists?html != ''>
                   datatype="${po.field_valid_type?if_exists?html}"
                <#else>
                   <#if po.is_null != 'Y'>datatype="*"</#if>
                </#if>>

        <#--update-start--Author:gengjiajia  Date:20160802 for：TASK #1175 批量添加数据的时popup多值的传递-->
        <#elseif po.show_type=='popup'>
            <input id="${po.field_name}" ${po.extend_json?if_exists} name="${po.field_name}"  type="text"
                   class="form-control searchbox-inputtext"
            <#-- onClick="inputClick(this,'${po.dict_text?if_exists?html}','${po.dict_table?if_exists?html}');"-->
                   onClick="popupClick(this,'${po.dict_text?if_exists?html}','${po.dict_field?if_exists?html}','${po.dict_table?if_exists?html}');"
                   value="${data['${tableName}']['${po.field_name}']?if_exists?html}"
            <#-- update--begin--author:zhangjiaqiang Date:20170417 for:增加校验必填项 -->
                <#if po.field_must_input??><#if po.field_must_input == 'Y' || po.is_null != 'Y'>ignore="checked"<#else>ignore="ignore"</#if><#elseif po.is_null != 'Y'> ignore="checked"<#else>ignore="ignore"</#if>
            <#-- update--end--author:zhangjiaqiang Date:20170417 for:增加校验必填项 -->
                <#if po.operationCodesReadOnly?if_exists> readonly = "readonly"</#if>
                <#if po.field_valid_type?if_exists?html != ''>
                   datatype="${po.field_valid_type?if_exists?html}"
                <#else>
                   <#if po.is_null != 'Y'>datatype="*"</#if>
                </#if>>
        <#--update-end--Author:gengjiajia  Date:20160802 for：TASK #1175 批量添加数据的时popup多值的传递-->

        <#elseif po.show_type=='file'>
            <table>
            <#-- update--begin--author:zhangjiaqiang date:20170519 for:修订资源预览关联错误 -->
                <#list filesList as fileB>
                    <#if fileB['field'] == po.field_name>
                        <tr style="height:34px;">
                            <td>${fileB['title']}</td>
                            <td><a href="${basePath}/commonController.do?viewFile&fileid=${fileB['fileKey']}&subclassname=org.jeecgframework.web.cgform.entity.upload.CgUploadEntity" title="下载">下载</a></td>
                            <td><a href="javascript:void(0);" onclick="openwindow('预览','${basePath}/commonController.do?openViewFile&fileid=${fileB['fileKey']}&subclassname=org.jeecgframework.web.cgform.entity.upload.CgUploadEntity','fList',700,500)">预览</a></td>
                            <td><a href="javascript:void(0)" class="jeecgDetail" onclick="del('${basePath}/cgUploadController.do?delFile&id=${fileB['fileKey']}',this)">删除</a></td>
                        </tr>
                    </#if>
                </#list>
            <#-- update--end--author:zhangjiaqiang date:20170519 for:修订资源预览关联错误 -->
            </table>
            <#if !(po.operationCodesReadOnly ??)>
                <div class="form jeecgDetail">
                    <script type="text/javascript">
                        var serverMsg="";
                        var m = new Map();
                        $(function(){$('#${po.field_name}').uploadify(
                                {buttonText:'添加文件',
                                    auto:false,
                                    progressData:'speed',
                                    multi:true,
                                    height:25,
                                    overrideEvents:['onDialogClose'],
                                    fileTypeDesc:'文件格式:',
                                    queueID:'filediv_${po.field_name}',
                                <#-- fileTypeExts:'*.rar;*.zip;*.doc;*.docx;*.txt;*.ppt;*.xls;*.xlsx;*.html;*.htm;*.pdf;*.jpg;*.gif;*.png',   页面弹出很慢解决 20170317 scott -->
                                    fileSizeLimit:'15MB',swf:'${basePath}/plug-in/uploadify/uploadify.swf',
                                    uploader:'${basePath}/cgUploadController.do?saveFiles&jsessionid='+$("#sessionUID").val()+'',
                                    onUploadStart : function(file) {
                                        var cgFormId=$("input[name='id']").val();
                                        $('#${po.field_name}').uploadify("settings", "formData", {'cgFormId':cgFormId,'cgFormName':'${tableName?if_exists?html}','cgFormField':'${po.field_name}'});} ,
                                    onQueueComplete : function(queueData) {
                                        var win = frameElement.api.opener;
                                        win.reloadTable();
                                        win.tip(serverMsg);
                                        frameElement.api.close();},
                                    onUploadSuccess : function(file, data, response) {var d=$.parseJSON(data);if(d.success){var win = frameElement.api.opener;serverMsg = d.msg;}},onFallback : function(){tip("您未安装FLASH控件，无法上传图片！请安装FLASH控件后再试")},onSelectError : function(file, errorCode, errorMsg){switch(errorCode) {case -100:tip("上传的文件数量已经超出系统限制的"+$('#${po.field_name}').uploadify('settings','queueSizeLimit')+"个文件！");break;case -110:tip("文件 ["+file.name+"] 大小超出系统限制的"+$('#${po.field_name}').uploadify('settings','fileSizeLimit')+"大小！");break;case -120:tip("文件 ["+file.name+"] 大小异常！");break;case -130:tip("文件 ["+file.name+"] 类型不正确！");break;}},
                                    onUploadProgress : function(file, bytesUploaded, bytesTotal, totalBytesUploaded, totalBytesTotal) { }});});

                    </script><span id="file_uploadspan"><input type="file" name="${po.field_name}" id="${po.field_name}" /></span>
                </div>
                <div class="form" id="filediv_${po.field_name}"> </div>
            </#if>
        <#--update-start--Author: jg_huangxg  Date:20160113 for：TASK #824 【online开发】控件类型扩展增加一个图片类型 image -->
        <#elseif po.show_type=='image'>
            <table>
                <#list imageList as imageB>
                    <#if imageB['field'] == po.field_name>
                        <tr style="height:34px;">
                            <td>${imageB['title']}</td>
                            <td><a href="${basePath}/commonController.do?viewFile&fileid=${imageB['fileKey']}&subclassname=org.jeecgframework.web.cgform.entity.upload.CgUploadEntity" title="下载">下载</a></td>
                            <td><a href="javascript:void(0);" onclick="openwindow('预览','${basePath}/commonController.do?openViewFile&fileid=${imageB['fileKey']}&subclassname=org.jeecgframework.web.cgform.entity.upload.CgUploadEntity','fList',700,500)">预览</a></td>
                            <td><a href="javascript:void(0)" class="jeecgDetail" onclick="del('${basePath}/cgUploadController.do?delFile&id=${imageB['fileKey']}',this)">删除</a></td>
                        </tr>
                    </#if>
                </#list>
            </table>
            <#if !(po.operationCodesReadOnly ??)>
                <div class="form jeecgDetail">
                    <script type="text/javascript">
                        var serverMsg="";
                        var m = new Map();
                        $(function(){$('#${po.field_name}').uploadify(
                                {buttonText:'添加图片',
                                    auto:false,
                                    progressData:'speed',
                                    multi:true,
                                    height:25,
                                    overrideEvents:['onDialogClose'],
                                    fileTypeDesc:'图片格式:',
                                    queueID:'imagediv_${po.field_name}',
                                    fileTypeExts:'*.jpg;*.jpeg;*.gif;*.png;*.bmp',
                                    fileSizeLimit:'15MB',swf:'${basePath}/plug-in/uploadify/uploadify.swf',
                                    uploader:'${basePath}/cgUploadController.do?saveFiles&jsessionid='+$("#sessionUID").val()+'',
                                    onUploadStart : function(file) {
                                        var cgFormId=$("input[name='id']").val();
                                        $('#${po.field_name}').uploadify("settings", "formData", {'cgFormId':cgFormId,'cgFormName':'${tableName?if_exists?html}','cgFormField':'${po.field_name}'});} ,
                                    onQueueComplete : function(queueData) {
                                        var win = frameElement.api.opener;
                                        win.reloadTable();
                                        win.tip(serverMsg);
                                        frameElement.api.close();},
                                    onUploadSuccess : function(file, data, response) {var d=$.parseJSON(data);if(d.success){var win = frameElement.api.opener;serverMsg = d.msg;}},onFallback : function(){tip("您未安装FLASH控件，无法上传图片！请安装FLASH控件后再试")},onSelectError : function(file, errorCode, errorMsg){switch(errorCode) {case -100:tip("上传的文件数量已经超出系统限制的"+$('#${po.field_name}').uploadify('settings','queueSizeLimit')+"个文件！");break;case -110:tip("文件 ["+file.name+"] 大小超出系统限制的"+$('#${po.field_name}').uploadify('settings','fileSizeLimit')+"大小！");break;case -120:tip("文件 ["+file.name+"] 大小异常！");break;case -130:tip("文件 ["+file.name+"] 类型不正确！");break;}},
                                    onUploadProgress : function(file, bytesUploaded, bytesTotal, totalBytesUploaded, totalBytesTotal) { }});});

                    </script><span id="image_uploadspan"><input type="file" name="${po.field_name}" id="${po.field_name}" /></span>
                </div>
                <div class="form" id="imagediv_${po.field_name}"> </div>
            </#if>
        <#--update-end--Author: jg_huangxg  Date:20160113 for：TASK #824 【online开发】控件类型扩展增加一个图片类型 image -->
        <#else>
            <input id="${po.field_name}" ${po.extend_json?if_exists} name="${po.field_name}" type="text"
                   class="form-control" value="${data['${tableName}']['${po.field_name}']?if_exists?html}"
            <#-- update--begin--author:zhangjiaqiang Date:20170417 for:增加校验必填项 -->
                <#if po.field_must_input??><#if po.field_must_input == 'Y' || po.is_null != 'Y'>ignore="checked"<#else>ignore="ignore"</#if><#elseif po.is_null != 'Y'> ignore="checked"<#else>ignore="ignore"</#if>
            <#-- update--end--author:zhangjiaqiang Date:20170417 for:增加校验必填项 -->
                <#if po.field_valid_type?if_exists?html != ''>
                   datatype="${po.field_valid_type?if_exists?html}"
                <#else>
                    <#if po.type == 'int'>
                   datatype="n"
                    <#elseif po.type=='double'>
                   datatype="/^(-?\d+)(\.\d+)?$/"
                    <#else>
                   <#if po.is_null != 'Y'>datatype="*"</#if>
                    </#if>
                </#if>>

        </#if>
        <span class="Validform_checktip" style="float:left;height:0px;"></span>
        <label class="Validform_label" style="display: none"><@mutiLang langKey="${po.content?if_exists?html}"/></label>
    </div>
    <#if (columns?size>10)>
        <#if (po_index%2==0)&&(!po_has_next)>
            <div class="col-xs-2 text-center"><b></b></div>
            <div class="col-xs-4"></div>
        </#if>
        <#if (po_index%2!=0)||(!po_has_next)>
        </div>
        </#if>
    <#else>
    </div>
    </#if>



