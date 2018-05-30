<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!--360浏览器优先以webkit内核解析-->


    <title></title>

    <link rel="shortcut icon" href="images/favicon.ico">
    <link href="plug-in-ui/hplus/css/bootstrap.min.css?v=3.3.6" rel="stylesheet">
    <link href="plug-in-ui/hplus/css/font-awesome.css?v=4.4.0" rel="stylesheet">

    <link href="plug-in-ui/hplus/css/animate.css" rel="stylesheet">
    <link href="plug-in-ui/hplus/css/style.css?v=4.1.0" rel="stylesheet">
    

</head>

<body class="gray-bg">
    <div class="row  border-bottom white-bg dashboard-header">
        <div class="col-sm-12">
            <blockquote class="text-warning" style="font-size:14px">
                <br>…………
                <h4 class="text-danger"></h4>
            </blockquote>
            <hr>
        </div>
    </div>
    <div class="wrapper wrapper-content">
        <div class="row">
            <div class="col-sm-4">

                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                        <h5>商业支持</h5>
                    </div>
                    <div class="ibox-content">
                        <p>我们提供基于Jeecg的二次开发服务，具体费用请联系官方。</p>
                        <p>同时，我们也提供以下服务：</p>
                        <ol>
                            <li>Jeecg工作流开发平台 (商业版)</li>
                            <li>Jeewx微信管家 (商业版)</li>
                            <li>OA办公系统 (商业版)</li>
                            <li>专业H5活动开发</li>
                        </ol>
                    </div>
                </div>
                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                        <h5>联系信息</h5>

                    </div>
                    <div class="ibox-content">
                        <p><i class="fa fa-send-o"></i> 官网：<a href="http://www.jeecg.org" target="_blank">http://www.jeecg.org</a>
                        </p>
                        <p><i class="fa fa-qq"></i> QQ群：<a href="javascript:;">190866569</a>
                        </p>
                        <p><i class="fa fa-weixin"></i>微信公众号：<a href="javascript:;">jeecg</a>
                        </p>
                        <p><i class="fa fa-credit-card"></i> 邮箱：<a href="javascript:;" class="邮箱">jeecg@sina.com</a>
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                        <h5>更新日志</h5>
                    </div>
                    <div class="ibox-content no-padding">
                        <div class="panel-body">
                            <div class="panel-group" id="version">
                            	 <div class="panel panel-default">
                                    <div class="panel-heading">
                                        <h5 class="panel-title">
                                                <a data-toggle="collapse" data-parent="#version" href="#v42">v3.6.5</a><code class="pull-right">2016.04.09</code>
                                            </h5>
                                    </div>
                                    <div id="v42" class="panel-collapse collapse in">
                                        <div class="panel-body">
                                            <div class="alert alert-warning">此版本是一个扁平化UI风格版，提供4套风格供客户选择，让我们共同期待后续版本的到来</div>
                                            <ol>
                                                <li>ACE扁平化风格；</li>
                                                <li>代码生成器，支持restful后台代码生成；</li>
                                                <li>Online表单提供对外HTTP接口；</li>
                                                <li>用户，角色，组织机构，导入功能；</li>
                                                <li>多附件上传报错处理；</li>
                                                <li>查询过滤器查询报错处理；</li>
                                                <li>online代码生成器支持bootstrap表单风格生成；</li>
                                                <li>online代码生成器支持上传组件生成；</li>
                                                <li>升级minidao；</li>
                                                <li>在线文档管理；</li>
                                                <li>邮件管理；</li>
                                                <li>封装标签：用户标签，组织机构标签；</li>
                                                <li>移动报表展示；</li>
                                                <li>插件演示；</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                        <h5 class="panel-title">
                                                <a data-toggle="collapse" data-parent="#version" href="#v41">v3.6.2</a><code class="pull-right">2016.03.15</code>
                                            </h5>
                                    </div>
                                    <div id="v41" class="panel-collapse collapse">
                                        <div class="panel-body">
                                        	 <div class="alert alert-warning">此版本是一个移动开发版，主要是拓展移动开发能力和可插拔插件开发能力</div>
                                           <ol>
                                                <li>平台插件支持（可插拔）；</li>
                                                <li>移动报表配置能力（一次配置，7种展示风格）；</li>
                                                <li>移动表单支持（提供多套移动模板）；</li>
                                                <li>移动OA审批；</li>
                                                <li>新增系统公告；</li>
                                                <li>新增招聘管理；</li>
                                                <li>新增在线文档；</li>
                                                <li>新版ACE首页优化（首页+表单优化）；</li>
                                                <li>升级Spring,支持单元测试；</li>
                                                <li>集成cxf webservice接口，并实现一个服务端和客户端调用的demo；</li>
                                                <li>数据库兼容性修改，支持oracle\mysql\sqlserver\postgresql；</li>
                                                <li>online支持UE编辑器类型；</li>
                                                <li>数据权限扩展支持写表达式，通过session取值；</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                        <h5 class="panel-title">
                                                <a data-toggle="collapse" data-parent="#version" href="#v40">v3.6.0</a><code class="pull-right">2015.12.04</code>
                                            </h5>
                                    </div>
                                    <div id="v40" class="panel-collapse collapse">
                                        <div class="panel-body">
                                           <ol>
                                                <li>表单设计器</li>
                                                <li>Online表单配置 能力升级</li>
                                                <li>动态报表支持多数据源</li>
                                                <li>UI标签中增加扩展参数</li>
                                                <li>列表高级查询功能</li>
                                                <li>数据权限、按钮权限优化改进</li>
                                                <li>在线文档预览，TXT文件预览乱码解决</li>
                                                <li>增加行编辑DEMO</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                        <h5 class="panel-title">
                                                <a data-toggle="collapse" data-parent="#version" href="#v32">v3.5.0</a><code class="pull-right">2015.03.10</code>
                                            </h5>
                                    </div>
                                    <div id="v32" class="panel-collapse collapse">
                                        <div class="panel-body">
                                            <ol>
                                                <li>支持数据权限，按钮级、数据行级、列级、字段级；</li>
                                                <li>支持多组织机构，多公司支持（支持多子公司，组织机构无限级）；</li>
                                                <li>支持国际化， 多语言；</li>
                                                <li>支持多数据源 （在线配置数据源）；</li>
                                                <li>云桌面首页风格（适合pad，移动应用）；</li>
                                                <li>动态报表完善（支持在线配置sql，生成报表）；</li>
                                                <li>扩展增加jquery file上传附件组件，多种上传文件风格；</li>
                                                <li>代码生成器支持多种分层方式；</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                        <h5 class="panel-title">
                                                <a data-toggle="collapse" data-parent="#version" href="#v33">更多版本...</a><code class="pull-right"></code>
                                            </h5>
                                    </div>
                                    <div id="v33" class="panel-collapse collapse">
                                        <div class="panel-body">
                                            <ol>
                                                <li>更多版本，请详见论坛：www.jeecg.org</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                        <h5>JEECG 适用范围</h5>
                    </div>
                    <div class="ibox-content">
                        <p>为什么选择jeecg？</p>
                        <ol>
                            <li>采用主流框架，容易上手，学习成本低；</li>
                            <li>强大代码生成器和在线配置能力，提高开发效率，大大缩短项目周期；</li>
                            <li>开源免费，万人活跃社区；</li>
                            <li>封装基础用户权限，报表等功能模块，无需再次开发；</li>
                            <li>采用SpringMVC + Hibernate + Minidao+ Easyui+Jquery+Boostrap等基础架构</li>
                            <li>支持多浏览器，多数据库；</li>
                            <li>支持移动开发，可以完美兼容电脑、手机、pad等多平台；</li>
                            <li>……</li>
                        </ol>
                        <hr>
                        <div class="alert alert-warning">JEECG智能开发平台，可以应用在任何J2EE项目的开发中，尤其适合企业信息管理系统（MIS）、内部办公系统（OA）、企业资源计划系统（ERP） 、客户关系管理系统（CRM）等，其半智能手工Merge的开发方式，可以显著提高开发效率60%以上，极大降低开发成本。
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 全局js -->
    <script src="plug-in-ui/hplus/js/jquery.min.js?v=2.1.4"></script>
    <script src="plug-in-ui/hplus/js/bootstrap.min.js?v=3.3.6"></script>
    <script src="plug-in-ui/hplus/js/plugins/layer/layer.min.js"></script>

    <!-- 自定义js -->
    <script src="plug-in-ui/hplus/js/content.js"></script>
</body>

</html>
