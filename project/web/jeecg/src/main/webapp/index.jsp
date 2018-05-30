<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<html>
<head>
<script type="text/javascript" src="plug-in/jquery/jquery-1.8.3.min.js"></script>
<%
Cookie cookie = new Cookie("JEECGINDEXSTYLE", "default");
//设置cookie有效期为一个月
	cookie.setMaxAge(3600*24*30);
	response.addCookie(cookie);
%>
<script type="text/javascript">
	$(document).ready(function() {
	 window.location.href = "loginController.do?login";
 });
</script>
</head>
<body>
</body>
</html>