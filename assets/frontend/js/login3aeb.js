
app.controller("loginCtr",function($scope,$http,$rootScope,$translate,urlSearch){
	$rootScope.curPage="login";
	$rootScope.notChinese=notChinese;
	$rootScope.webtitle=$translate.instant('Login');
	
	$scope.switching = function(lang){
		getLang(lang,'/resources/js/i18n/')
        window.localStorage.lang = lang;
        $scope.cur_lang = lang;
        $rootScope.cur_lang = lang;
        $scope.showFlags=false;
        if($rootScope.switching)
		$rootScope.switching(lang);
    }
	function getLang(lang,jsUrl) {
		var expire=new Date();
		expire.setFullYear(2999)
		document.cookie = "lang="+lang.toUpperCase()+";path=/;expires=" + expire.toGMTString() + "";
		if(!$('#loaded'+lang).length) {
			var scriptObj = document.createElement("script");
			scriptObj.src = jsUrl + lang + '.js?v=' + expire.getTime() ;
			scriptObj.type = "text/javascript";
			scriptObj.id   = "loaded"+lang;
			scriptObj.onload=function () {
				translations(lang, window["mm" + lang]);
				$translate.use(lang);
			}
			document.getElementsByTagName("head")[0].appendChild(scriptObj);
		}else{
			translations(lang, window["mm" + lang]);
			$translate.use(lang);
		}
	}
	//与zendesk的中英文保持同步
	var currentUrl=window.location.href;
	var lang="";
	if(!window.localStorage.lang)
		lang="en";
	if(window.localStorage.lang=="en"){
		lang="en";
	}else if(window.localStorage.lang=="cn"){
		lang="cn";
	}
	if(currentUrl.indexOf("en-us")>-1){
		//英文
		lang="en";
		$scope.switching(lang);
	}
	if(currentUrl.indexOf("zh-cn")>-1){
		//中文
		lang="cn";
		$scope.switching(lang);
	}
	
	
	$scope.loginParams={};
	var callback=urlSearch.getUrlParam("callback");
	var zendesk=urlSearch.getUrlParam("zendesk");
	var urlPatten=/^(\/[a-zA-Z]{1,10})?\/([\-a-zA-Z]{1,20}\.html)?\??([a-zA-Z0-9_]{1,24}=[a-zA-Z0-9_]{1,24}\&?){0,7}$/

	//极验
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
			 $("#email").attr('disabled',false);
			  var result = captchaObj.getValidate();
	          var params=$.param({
	        	  	email:$scope.loginParams.email,
	        	  	password:$scope.loginParams.password,
	        	  	validateCodeType:'gt',
	        	  	geetest_challenge:result.geetest_challenge,
	        	  	geetest_seccode:result.geetest_seccode,
	        	  	geetest_validate:result.geetest_validate
	          })
	          layer.load('Loading...', 3);
	            $http.post('/user/login.html',params).success(function(data){
	        	layer.closeAll();
	        	if (data["success"]) {
					document.cookie = "logined=y;path=/;";
			   		document.cookie="CSRFToken="+data.CSRFToken+";path=/";
			   		document.cookie="mobile="+data.mobile+";path=/";
			   		document.cookie="email="+$scope.loginParams.email+";path=/";
			   		if(callback){
			   			if(zendesk==="zendesk"){
							//if(urlPatten.test(callback))
			   				//跳转到zendesk
			   				location.href="/zendesk/login.html?return_to="+callback;
			   			}else{
			   				if(data.confirmTips){
			   					callback=decodeURIComponent(callback)
								if(callback.length<40&&urlPatten.test(callback))
				   				location.href=callback;
			   				}else{
			   					callback=decodeURIComponent(callback);
			   					location.href='/safetyInstructions.html?callback='+callback;
			   				}
							
			   			}
			   		}else{
			   			if(data.confirmTips){
			   				window.location.replace("/userCenter/myAccount.html")
			   			}else{
			   				
			   				location.href='/safetyInstructions.html';
			   			}
			   		    
			   		}
			   		
			
				if(typeof(Storage) !== "undefined"){
			   		sensorsdata.login(data.userId+"");
			   		
		   		}
				//$scope.confirm();
			} else {
				
				if(data.emailVerified==false){
					sessionStorage.email=$scope.loginParams.email;
					window.location.href="/resendEmail.html";
				}else{
					if(data.gauth && !data.mobileSecurity){
						sessionStorage.email=$scope.loginParams.email;
						if(callback){
							var jumpUrl="/googleVerify.html?verifyType=1&callback="+callback;
							window.location.replace(jumpUrl);
						}else{
							window.location.replace("/googleVerify.html?verifyType=1")
						}
						
					}else if(data.mobileSecurity && !data.gauth){
						sessionStorage.email=$scope.loginParams.email;
						if(callback){
							var jumpUrl="/googleVerify.html?verifyType=2&callback="+callback;
							window.location.replace(jumpUrl);
						}else{
							
							window.location.replace("/googleVerify.html?verifyType=2");
						}
						
					}else if(data.gauth && data.mobileSecurity){
						sessionStorage.email=$scope.loginParams.email;
						if(callback){
							var jumpUrl="/googleVerify.html?verifyType=0&callback="+callback;
							window.location.replace(jumpUrl);
						}else{
							window.location.replace("/googleVerify.html?verifyType=0")
						}
					}else{
						
						layer.msg($translate.instant(data.msg), {
							icon : 2,
							time:2500
						});
						if(capt!=undefined && capt!=null){
							capt.reset();
							
						}
						$("#login-btn").attr('disabled',false)
					}
				}
			}
	          })
		 })
		 captchaObj.onClose(function(){
			 $("#login-btn").attr('disabled',false);
			 $("#email").attr('disabled',false);
		 })
		 captchaObj.onError(function () {
			 $("#email").attr('disabled',false);
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
	
	
	//登录
	
	$("#login-form").Validform({
		btnSubmit : "#login-btn",//指定提交按钮
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
			$(this.btnSubmit).attr('disabled',true);
			$scope.loginParams.email=$scope.loginParams.email.trim().toLowerCase();
			$scope.loginParams.password=$.md5($scope.loginParams.pwd+$scope.loginParams.email);
		},
		callback : function(data) {//回调函数，返回json数据
			$("#email").attr('disabled',true);
			capt.verify();
			return false;
		}

	});
	
	
})


.controller("googleVerifyCtr",function($scope,$rootScope,$http,urlSearch,form,mobile,$translate){
	$rootScope.curPage='2FA';
	$rootScope.webtitle=$translate.instant('2FA');
	$scope.email=sessionStorage.email.trim().toLowerCase() || null;
	$scope.verifyType=urlSearch.getUrlParam('verifyType');
	var callback=urlSearch.getUrlParam('callback');

	var urlPatten=/^(\/[a-zA-Z]{1,10})?\/([\-a-zA-Z]{1,20}\.html)?\??([a-zA-Z0-9_]{1,24}=[a-zA-Z0-9_]{1,24}\&?){0,7}$/
	$scope.verifySuccess=function(data){
		if (data["success"]) {
			if(data.msg=='logged'){
				location.href="/userCenter/myAccount.html";
				return;
	   		}
			layer.msg(data.msg,{icon:1,time:2000})
			document.cookie = "logined=y;path=/;";
	   		document.cookie="CSRFToken="+data.CSRFToken+";path=/";
	   		document.cookie="email="+data.email+";path=/";
	   		
	   		if(callback){
	   			if(data.confirmTips){
	   				callback=decodeURIComponent(callback)
					if(callback.length<40&&urlPatten.test(callback))
						location.href=callback;
	   			}else{
	   				callback=decodeURIComponent(callback);
   					location.href='/safetyInstructions.html?callback='+callback;
	   			}
				
	   		}else{
	   			if(data.confirmTips){
	   				location.href="/userCenter/myAccount.html"
	   			}else{
   					location.href='/safetyInstructions.html';
	   			}
	   			
	   		}
		} else {
			layer.msg(data.msg, {
				icon : 2,
				time:2500
			});
		}
	}

	$scope.send=function(){
		mobile.sendVerifyCode('/user/sendMobileVerifyCode.html',"verifyCode","sendBtn")
	}
	
	
	setTimeout(function(){
		form.validate("#googleVerify-form","#googleVerify-btn",$scope.verifySuccess)
		form.validate("#mobile-form","#mobile-btn",$scope.verifySuccess)
	},500)
	
	$scope.autoSubmit=function(event){
		var _this=$(event.target);
		var value=_this.val();
		if(value.length==6){
			_this.parents('form').submit();
		}
	}
	
})