app.controller("forgotPwdCtr",function($scope,$rootScope,$http,$translate,urlSearch){
	$rootScope.curPage="findPassword";
	$rootScope.webtitle=$translate.instant('ForgotPwdwebtitle');
	
	var setLang=function(){
		var lang=urlSearch.getUrlParam("lang");
		if(lang){
			$scope.switching(lang);
		}
	}
	
	setLang();
	
	$scope.forgotPwd={};
	var geetLang=localStorage.lang
	if(geetLang!='cn'){
		geetLang="en"
	}else{
		geetLang='zh-cn'
	}
	
	var capt;
	var handler=function(captchaObj){
		 capt=captchaObj;
		 captchaObj.onReady(function () {
	         
	     });
		 captchaObj.onSuccess(function () {
			  var result = captchaObj.getValidate();
	          var params=$.param({
	        	  	email:$scope.forgotPwd.email,
	        	  	validateCodeType:'gt',
	        	  	geetest_challenge:result.geetest_challenge,
	        	  	geetest_seccode:result.geetest_seccode,
	        	  	geetest_validate:result.geetest_validate
	          })
	          layer.load('Loading...', 3);
	            $http.post('/user/forgotPassword.html',params).success(function(data){
		        	layer.closeAll();
		        	if (data["success"]) {
						layer.closeAll();
						location.href="/findPwdTip.html"
						//$scope.confirm();
					} else {
						layer.closeAll();
						layer.msg(data.msg, {
							icon : 2,time:1000
						});
						if(capt!=undefined && capt!=null){
							capt.reset();	
						}
					}
					
					$("#forgotPwd-btn").attr('disabled',false);
	          })
		 })
		 captchaObj.onClose(function(){
			 $("#forgotPwd-btn").attr('disabled',false);
		 })
		 captchaObj.onError(function () {
			 layer.msg($translate.instant('geetestError'), {
				icon : 2,
				time:1500
			 });
		 });
	}
	$http.get('/security/getGtCode.html?t=' + (new Date()).getTime()).success(function(data){
		initGeetest({
            gt: data.gt,
            challenge: data.challenge,
            new_captcha: data.new_captcha, 
            offline: !data.success, 
            product: "bind",
			lang:geetLang,
            width: "100%"
        }, handler);
	})
	
	$("#forgotPwd-form").Validform({
		btnSubmit : "#forgotPwd-btn",//指定提交按钮
		//tiptype : 4,
		showAllError : false,
		datatype : {
			
		},
		postonce : false,
		ajaxPost : false, //ajax提交，提交地址为action的地址
		tiptype : function(msg, o, cssctl) {
			if (!o.obj.is("form")) {//验证表单元素时o.obj为该表单元素，全部验证通过提交表单时o.obj为该表单对象;
				if(o.type == 1)
					return;
				var objtip=$(".Validform_checktip");
				cssctl(objtip,o.type);
				objtip.text(msg);
			} else {
				layer.load('loading...', 3);
			}
		},
		beforeSubmit : function(data) {
			$("#forgotPwd-btn").attr('disabled',true);
			$scope.forgotPwd.email=$scope.forgotPwd.email.trim().toLowerCase();
		},
		callback : function(data) {//回调函数，返回json数据
			capt.verify();
			return false;
		}

	});
})

app.controller("resetPwdCtr",function($scope,$rootScope,$http,urlSearch,form,$translate){
	$rootScope.curPage="findPassword";
	$rootScope.webtitle=$translate.instant('Reset Password');
	$scope.resetPwd={};
	$scope.resetPwd.email=decodeURIComponent(urlSearch.getUrlParam('email')).trim().toLowerCase();
	$scope.resetPwd.verifyCode=urlSearch.getUrlParam('vc');
	autoJump('/m-setNewPass.html?vc='+$scope.resetPwd.verifyCode+"&email="+$scope.resetPwd.email);
	
	var geetLang=localStorage.lang
	if(geetLang!='cn'){
		geetLang="en"
	}else{
		geetLang='zh-cn'
	}
	
	var capt;
	var handler=function(captchaObj){
		 capt=captchaObj;
		 captchaObj.onReady(function () {
	         
	     });
		 captchaObj.onSuccess(function () {
			  var result = captchaObj.getValidate();
	          var params=$.param({
	        	  	email:$scope.resetPwd.email,
	        	  	vc:$scope.resetPwd.verifyCode,
	        	  	newPassword:$scope.resetPwd.newPassword,
	        	  	validateCodeType:'gt',
	        	  	geetest_challenge:result.geetest_challenge,
	        	  	geetest_seccode:result.geetest_seccode,
	        	  	geetest_validate:result.geetest_validate
	          })
	          layer.load('Loading...', 3);
	            $http.post('/user/resetPassword.html',params).success(function(data){
	            	layer.closeAll();
	        		if (data["success"]) {
	        			layer.msg(data.msg,{icon:1,time:2000})
	        			setTimeout(function(){
	        				location.href="/login.html"
	        			},2000)
	        		} else {
	        			layer.msg(data.msg, {
	        				icon : 2,time:2000
	        			});
	        			if(capt!=undefined && capt!=null){
	        				capt.reset();
	        				
	        			}
	        		}
					
					$("#resetPwd-btn").attr('disabled',false);
	          })
		 })
		 captchaObj.onClose(function(){
			 $("#resetPwd-btn").attr('disabled',false);
		 })
		 captchaObj.onError(function () {
			 layer.msg($translate.instant('geetestError'), {
					icon : 2,
					time:1500
				 });
		 });
	}
	$http.get('/security/getGtCode.html?t=' + (new Date()).getTime()).success(function(data){
		initGeetest({
            gt: data.gt,
            challenge: data.challenge,
            new_captcha: data.new_captcha, 
            offline: !data.success, 
            product: "bind",
			lang:geetLang,
            width: "100%"
        }, handler);
	})
	
	
	$("#resetPwd-form").Validform({
		btnSubmit : "#resetPwd-btn",//指定提交按钮
		//tiptype : 4,
		showAllError : false,
		datatype : {
			"pwd":function(gets,obj,curform){
				var partten=/(?=.*\d)(?=.*[A-Z])[\da-zA-Z]/;
				if(gets=='' || gets==null){
					return false;
				}else if(!partten.test(gets) || gets.length<8){
					return false;
				}else{
					return true;
				}
				
			}
		},
		postonce : false,
		ajaxPost : false, //ajax提交，提交地址为action的地址
		tiptype : function(msg, o, cssctl) {
			if (!o.obj.is("form")) {//验证表单元素时o.obj为该表单元素，全部验证通过提交表单时o.obj为该表单对象;
				if(o.type == 1)
					return;
				var objtip=$(".Validform_checktip");
				cssctl(objtip,o.type);
				objtip.text(msg);
			} else {
				layer.load('loading...', 3);
			}
		},
		beforeSubmit : function(data) {
			$("#resetPwd-btn").attr('disabled',true);
			$scope.resetPwd.newPassword=$.md5($scope.resetPwd.pwd+$scope.resetPwd.email)
		},
		callback : function(data) {//回调函数，返回json数据
			capt.verify();
			return false;
		}

	});
	
})

app.controller("findPwdTipCtr",function($rootScope,$translate){
	$rootScope.webtitle=$translate.instant('Reset Password Confirmed');
})
