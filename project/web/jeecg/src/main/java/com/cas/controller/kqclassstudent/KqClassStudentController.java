package com.cas.controller.kqclassstudent;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import org.jeecgframework.core.common.controller.BaseController;
import org.jeecgframework.core.common.hibernate.qbc.CriteriaQuery;
import org.jeecgframework.core.common.model.json.AjaxJson;
import org.jeecgframework.core.common.model.json.DataGrid;
import org.jeecgframework.core.constant.Globals;
import org.jeecgframework.core.util.StringUtil;
import org.jeecgframework.core.util.oConvertUtils;
import org.jeecgframework.poi.excel.ExcelImportUtil;
import org.jeecgframework.poi.excel.entity.ExportParams;
import org.jeecgframework.poi.excel.entity.ImportParams;
import org.jeecgframework.poi.excel.entity.vo.NormalExcelConstants;
import org.jeecgframework.tag.core.easyui.TagUtil;
import org.jeecgframework.web.system.pojo.base.TSDepart;
import org.jeecgframework.web.system.pojo.base.TSRole;
import org.jeecgframework.web.system.pojo.base.TSRoleUser;
import org.jeecgframework.web.system.pojo.base.TSUser;
import org.jeecgframework.web.system.pojo.base.TSUserOrg;
import org.jeecgframework.web.system.service.SystemService;
import org.jeecgframework.core.util.ExceptionUtil;
import org.jeecgframework.core.util.MyBeanUtils;
import org.jeecgframework.core.util.PasswordUtil;
import org.jeecgframework.core.util.ResourceUtil;

import com.cas.entity.kqclassstudent.KqClassStudentEntity;
import com.cas.service.kqclassstudent.KqClassStudentServiceI;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.jeecgframework.core.beanvalidator.BeanValidators;
import java.util.Set;
import javax.validation.ConstraintViolation;
import javax.validation.Validator;

import java.io.IOException;
import java.net.URI;
import org.springframework.http.MediaType;
import org.springframework.web.util.UriComponentsBuilder;

/**   
 * @Title: Controller
 * @Description: 班级学生表
 * @author zhangdaihao
 * @date 2018-05-02 21:00:20
 * @version V1.0   
 *
 */
@Controller
@RequestMapping("/kqClassStudentController")
public class KqClassStudentController extends BaseController {
	/**
	 * Logger for this class
	 */
	private static final Logger logger = Logger.getLogger(KqClassStudentController.class);

	@Autowired
	private KqClassStudentServiceI kqClassStudentService;
	@Autowired
	private SystemService systemService;
	@Autowired
	private Validator validator;
	


	/**
	 * 班级学生表列表 页面跳转
	 * 
	 * @return
	 */
	@RequestMapping(params = "list")
	public ModelAndView list(HttpServletRequest request) {
		return new ModelAndView("com/cas/kqclassstudent/kqClassStudentList");
	}

	/**
	 * easyui AJAX请求数据
	 * 
	 * @param request
	 * @param response
	 * @param dataGrid
	 * @param user
	 */

	@RequestMapping(params = "datagrid")
	public void datagrid(KqClassStudentEntity kqClassStudent,HttpServletRequest request, HttpServletResponse response, DataGrid dataGrid) {
		CriteriaQuery cq = new CriteriaQuery(KqClassStudentEntity.class, dataGrid);
		//查询条件组装器
		org.jeecgframework.core.extend.hqlsearch.HqlGenerateUtil.installHql(cq, kqClassStudent, request.getParameterMap());
		this.kqClassStudentService.getDataGridReturn(cq, true);
		TagUtil.datagrid(response, dataGrid);
	}
	/**
	 * 查看班级学生
	 * 
	 * @return
	 */
	@RequestMapping(params = "studentList")
	public ModelAndView studentList(HttpServletRequest request, String classid) {
		request.setAttribute("classid", classid);
		return new ModelAndView("com/cas/kqclassstudent/kqClassStudentList");
	}
	/**
	 * 查看班级学生列表
	 * 
	 * @return
	 */
	@RequestMapping(params = "studentDatagrid")
	public void userDatagrid(KqClassStudentEntity user,HttpServletRequest request, HttpServletResponse response, DataGrid dataGrid) {
		String classId = request.getParameter("id");
		String sql = "select a.id,a.student_id studentId,a.class_id classId from kq_class_student a where a.class_id  = '"+classId+"'";
		List<Map<String, Object>> list = null;
		//t.get
		int rows = dataGrid.getRows();
		int page = (dataGrid.getPage()-1)*rows;
		//翻页
		String limitStr = " limit "+page+","+rows;
		String whereStr = " where 1=1 ";
		/*String annAnnual = request.getParameter("annAnnual");
		String bpmStatus = request.getParameter("bpmStatus");
		
		if(StringUtil.isNotEmpty(annAnnual)){
			whereStr = whereStr +" and annAnnual = '"+annAnnual+"'";
		}
		if(StringUtil.isNotEmpty(bpmStatus)){
			whereStr = whereStr +" and bpmStatus = '"+bpmStatus+"'";
		}
		sql += whereStr;*/
		if(StringUtil.isNotEmpty(dataGrid.getSort())){
			String orderStr = " order by "+dataGrid.getSort()+" "+dataGrid.getOrder();
			sql += orderStr;
		}
		sql += limitStr;
		list = kqClassStudentService.findForJdbc(sql);
		dataGrid.setResults(list);
		Map<String,Object> map = kqClassStudentService.findOneForJdbc("select count(*) as sum from (select a.id,a.student_id,a.class_id from kq_class_student a where a.class_id  = '"+classId+"') a");
		dataGrid.setTotal(Integer.parseInt(map.get("sum").toString()));
		TagUtil.datagrid(response, dataGrid);
	}
	/**
	 * 删除班级学生表
	 * 
	 * @return
	 */
	@RequestMapping(params = "del")
	@ResponseBody
	public AjaxJson del(KqClassStudentEntity kqClassStudent, HttpServletRequest request) {
		String message = null;
		AjaxJson j = new AjaxJson();
		kqClassStudent = systemService.getEntity(KqClassStudentEntity.class, kqClassStudent.getId());
		message = "班级学生表删除成功";
		kqClassStudentService.delete(kqClassStudent);
		systemService.addLog(message, Globals.Log_Type_DEL, Globals.Log_Leavel_INFO);
		
		j.setMsg(message);
		return j;
	}
	/**
	 * 导入功能跳转
	 *
	 * @return
	 */
	@RequestMapping(params = "upload")
	public ModelAndView upload(HttpServletRequest req) {
		req.setAttribute("controller_name","kqClassStudentController");
		return new ModelAndView("common/upload/pub_excel_upload");
	}
	/**
	 * 导出excel 使模板
	 *
	 * @param request
	 * @param response
	 */
	@RequestMapping(params = "exportXlsByT")
	public String exportXlsByT(TSUser tsUser,HttpServletRequest request,HttpServletResponse response
			, DataGrid dataGrid,ModelMap modelMap) {
		modelMap.put(NormalExcelConstants.FILE_NAME,"班级学生表");
		modelMap.put(NormalExcelConstants.CLASS,KqClassStudentEntity.class);
		modelMap.put(NormalExcelConstants.PARAMS,new ExportParams("班级学生表列表", "导出人:"+ResourceUtil.getSessionUser().getRealName(),
				"导出信息"));
		modelMap.put(NormalExcelConstants.DATA_LIST,new ArrayList());
		return NormalExcelConstants.JEECG_EXCEL_VIEW;
	}
	/**
	 * 导入功能
	 *
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(params = "importExcel", method = RequestMethod.POST)
	@ResponseBody
	public AjaxJson importExcel(HttpServletRequest request, HttpServletResponse response) {
		AjaxJson j = new AjaxJson();

		MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) request;
		Map<String, MultipartFile> fileMap = multipartRequest.getFileMap();
		for (Map.Entry<String, MultipartFile> entity : fileMap.entrySet()) {
			MultipartFile file = entity.getValue();// 获取上传文件对象
			ImportParams params = new ImportParams();
			params.setTitleRows(2);
			params.setHeadRows(1);
			params.setNeedSave(true);
			try {
				List<TSUser> tsUsers = ExcelImportUtil.importExcel(file.getInputStream(),TSUser.class,params);
				for (TSUser tsUser : tsUsers) {
					//update-begin--Author:xuelin  Date:20171017 for：TASK #2373 【bug】表改造问题，导致 3.7.1批量导入用户bug-导入不成功--------------------
					String username = tsUser.getUserName();
					if(username==null||username.equals("")){
						j.setMsg("用户名为必填字段，导入失败");
						return j;
					}
					tsUser.setStatus(new Short("1"));
					tsUser.setDevFlag("0");
					tsUser.setDeleteFlag(new Short("0"));
					String roleCodes = tsUser.getUserKey();
					String deptCodes = tsUser.getDepartid();
					//update-begin--Author:Yandong  Date:20180228 for：TASK #2539 【新功能】用户导入没有密码字段(不需要修改);导入用户默认类型为系统用户----------
					tsUser.setPassword(PasswordUtil.encrypt(username, "123456", PasswordUtil.getStaticSalt()));
					tsUser.setUserType(Globals.USER_TYPE_SYSTEM);//导入用户 在用户管理列表不显示
					//update-begin--Author:Yandong  Date:20180228 for：TASK #2539 【新功能】用户导入没有密码字段(不需要修改);导入用户默认类型为系统用户----------
					//update-end--Author:xuelin  Date:20171017 for：TASK #2373 【bug】表改造问题，导致 3.7.1批量导入用户bug-导入不成功--------------------
					if((roleCodes==null||roleCodes.equals(""))||(deptCodes==null||deptCodes.equals(""))){
						List<TSUser> users = systemService.findByProperty(TSUser.class,"userName",username);
						if(users.size()!=0){
							//用户存在更新
							TSUser user = users.get(0);
							MyBeanUtils.copyBeanNotNull2Bean(tsUser,user);
							user.setDepartid(null);
							systemService.saveOrUpdate(user);
						}else{
							tsUser.setDepartid(null);
							systemService.save(tsUser);
						}
					}else{
						String[] roles = roleCodes.split(",");
						String[] depts = deptCodes.split(",");
						boolean flag = true;
						//判断组织机构编码和角色编码是否存在，如果不存在，也不能导入
						for(String roleCode:roles){
							List<TSRole> roleList = systemService.findByProperty(TSRole.class,"roleCode",roleCode);
							if(roleList.size()==0){
								flag = false;
							}
						}

						for(String deptCode:depts){
							List<TSDepart> departList = systemService.findByProperty(TSDepart.class,"orgCode",deptCode);
							if(departList.size()==0){
								flag = false;
							}
						}

						if(flag){
							//判断用户是否存在
							List<TSUser> users = systemService.findByProperty(TSUser.class,"userName",username);
							if(users.size()!=0){
								//用户存在更新
								TSUser user = users.get(0);
								MyBeanUtils.copyBeanNotNull2Bean(tsUser,user);
								user.setDepartid(null);
								systemService.saveOrUpdate(user);

								String id = user.getId();
								systemService.executeSql("delete from t_s_role_user where userid='"+id+"'");
								for(String roleCode:roles){
									//根据角色编码得到roleid
									List<TSRole> roleList = systemService.findByProperty(TSRole.class,"roleCode",roleCode);
									TSRoleUser tsRoleUser = new TSRoleUser();
									tsRoleUser.setTSUser(user);
									tsRoleUser.setTSRole(roleList.get(0));
									systemService.save(tsRoleUser);
								}

								systemService.executeSql("delete from t_s_user_org where user_id='"+id+"'");
								for(String orgCode:depts){
									//根据角色编码得到roleid
									List<TSDepart> departList = systemService.findByProperty(TSDepart.class,"orgCode",orgCode);
									TSUserOrg tsUserOrg = new TSUserOrg();
									tsUserOrg.setTsDepart(departList.get(0));
									tsUserOrg.setTsUser(user);
									systemService.save(tsUserOrg);
								}
							}else{
								//不存在则保存
								//TSUser user = users.get(0);
								tsUser.setDepartid(null);
								systemService.save(tsUser);
								for(String roleCode:roles){
									//根据角色编码得到roleid
									List<TSRole> roleList = systemService.findByProperty(TSRole.class,"roleCode",roleCode);
									TSRoleUser tsRoleUser = new TSRoleUser();
									tsRoleUser.setTSUser(tsUser);
									tsRoleUser.setTSRole(roleList.get(0));
									systemService.save(tsRoleUser);
								}

								for(String orgCode:depts){
									//根据角色编码得到roleid
									List<TSDepart> departList = systemService.findByProperty(TSDepart.class,"orgCode",orgCode);
									TSUserOrg tsUserOrg = new TSUserOrg();
									tsUserOrg.setTsDepart(departList.get(0));
									tsUserOrg.setTsUser(tsUser);
									systemService.save(tsUserOrg);
								}
							}
							j.setMsg("文件导入成功！");
						}else {
							j.setMsg("组织机构编码和角色编码不能匹配");
						}
					}
				}
			} catch (Exception e) {
				j.setMsg("文件导入失败！");
				logger.error(ExceptionUtil.getExceptionMessage(e));
			}finally{
				try {
					file.getInputStream().close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}
		return j;
	}
	/**
	 * 添加班级学生表
	 * 
	 * @param ids
	 * @return
	 */
	@RequestMapping(params = "save")
	@ResponseBody
	public AjaxJson save(KqClassStudentEntity kqClassStudent, HttpServletRequest request) {
		String message = null;
		AjaxJson j = new AjaxJson();
		if (StringUtil.isNotEmpty(kqClassStudent.getId())) {
			message = "班级学生表更新成功";
			KqClassStudentEntity t = kqClassStudentService.get(KqClassStudentEntity.class, kqClassStudent.getId());
			try {
				MyBeanUtils.copyBeanNotNull2Bean(kqClassStudent, t);
				kqClassStudentService.saveOrUpdate(t);
				systemService.addLog(message, Globals.Log_Type_UPDATE, Globals.Log_Leavel_INFO);
			} catch (Exception e) {
				e.printStackTrace();
				message = "班级学生表更新失败";
			}
		} else {
			message = "班级学生表添加成功";
			kqClassStudentService.save(kqClassStudent);
			systemService.addLog(message, Globals.Log_Type_INSERT, Globals.Log_Leavel_INFO);
		}
		j.setMsg(message);
		return j;
	}

	/**
	 * 班级学生表列表页面跳转
	 * 
	 * @return
	 */
	@RequestMapping(params = "addorupdate")
	public ModelAndView addorupdate(KqClassStudentEntity kqClassStudent, HttpServletRequest req) {
		if (StringUtil.isNotEmpty(kqClassStudent.getId())) {
			kqClassStudent = kqClassStudentService.getEntity(KqClassStudentEntity.class, kqClassStudent.getId());
			req.setAttribute("kqClassStudentPage", kqClassStudent);
		}
		return new ModelAndView("com/cas/kqclassstudent/kqClassStudent");
	}
	
	@RequestMapping(method = RequestMethod.GET)
	@ResponseBody
	public List<KqClassStudentEntity> list() {
		List<KqClassStudentEntity> listKqClassStudents=kqClassStudentService.getList(KqClassStudentEntity.class);
		return listKqClassStudents;
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	@ResponseBody
	public ResponseEntity<?> get(@PathVariable("id") String id) {
		KqClassStudentEntity task = kqClassStudentService.get(KqClassStudentEntity.class, id);
		if (task == null) {
			return new ResponseEntity(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity(task, HttpStatus.OK);
	}

	@RequestMapping(method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public ResponseEntity<?> create(@RequestBody KqClassStudentEntity kqClassStudent, UriComponentsBuilder uriBuilder) {
		//调用JSR303 Bean Validator进行校验，如果出错返回含400错误码及json格式的错误信息.
		Set<ConstraintViolation<KqClassStudentEntity>> failures = validator.validate(kqClassStudent);
		if (!failures.isEmpty()) {
			return new ResponseEntity(BeanValidators.extractPropertyAndMessage(failures), HttpStatus.BAD_REQUEST);
		}

		//保存
		kqClassStudentService.save(kqClassStudent);

		//按照Restful风格约定，创建指向新任务的url, 也可以直接返回id或对象.
		String id = kqClassStudent.getId();
		URI uri = uriBuilder.path("/rest/kqClassStudentController/" + id).build().toUri();
		HttpHeaders headers = new HttpHeaders();
		headers.setLocation(uri);

		return new ResponseEntity(headers, HttpStatus.CREATED);
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> update(@RequestBody KqClassStudentEntity kqClassStudent) {
		//调用JSR303 Bean Validator进行校验，如果出错返回含400错误码及json格式的错误信息.
		Set<ConstraintViolation<KqClassStudentEntity>> failures = validator.validate(kqClassStudent);
		if (!failures.isEmpty()) {
			return new ResponseEntity(BeanValidators.extractPropertyAndMessage(failures), HttpStatus.BAD_REQUEST);
		}

		//保存
		kqClassStudentService.saveOrUpdate(kqClassStudent);

		//按Restful约定，返回204状态码, 无内容. 也可以返回200状态码.
		return new ResponseEntity(HttpStatus.NO_CONTENT);
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable("id") String id) {
		kqClassStudentService.deleteEntityById(KqClassStudentEntity.class, id);
	}
}
