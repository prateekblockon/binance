app.controller("registerCtr",function($scope,$rootScope,$http,$translate,urlSearch){
	$rootScope.curPage="register"
	$rootScope.webtitle=$translate.instant('registerwebtitle');
	//人人推广活动
	var setLang=function(){
		var lang=urlSearch.getUrlParam("lang");
		if(lang){
			$scope.switching(lang);
		}
	}
	
	setLang();
	
	$scope.register={};
	
	
	$scope.register.ts=sessionStorage.getItem("ts");
	if($scope.register.ts){
		
	}else{
		$scope.register.ts=''
	}
	
	$scope.getRef=function(){
		$http.post('/getRef.html').success(function(data){
			if(data.success){
				$scope.sarted=data.ref_switch;
				if($scope.sarted){
					$scope.ref=false;
					$scope.register.agentId=sessionStorage.getItem("refId");
					if($scope.register.agentId){
						autoJump('/m-register.html?ref='+$scope.register.agentId);
						$http.post("/user/getAgentInfo.html?agentId="+$scope.register.agentId).success(function(data){
							if(data.isExist && data.isVerified){
								
								$scope.ref=true;
							}else{
								$scope.register.agentId='';
								sessionStorage.refId='';
								layer.alert($translate.instant('Referral ID is invalid.'),{title:null,icon:0,btn:null,closeBtn:1})
							}
						})
					}
				}else{
					autoJump('/m-register.html');
				}
				
			}
		})
	}
	
	$scope.getRef();
	
	
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
	        	  	email:$scope.register.email,
	        	  	password:$scope.register.password,
	        	  	ref:$scope.register.agentId,
	        	  	ts:$scope.register.ts,
	        	  	validateCodeType:'gt',
	        	  	geetest_challenge:result.geetest_challenge,
	        	  	geetest_seccode:result.geetest_seccode,
	        	  	geetest_validate:result.geetest_validate
	          })
	          layer.load('Loading...', 3);
	            $http.post('/user/register.html',params).success(function(data){
		        	layer.closeAll();
		        	if (data["success"]) {
						window.location.href="/emailSended.html";
						if(typeof(Storage) !== "undefined"){
							sensorsdata.login(data.userId+"");
						}
						//$scope.confirm();
					} else {
						layer.msg($translate.instant(data.msg), {
							icon : 2,
							time:2500
						});
						if(capt!=undefined && capt!=null){
							capt.reset();
							
						}
					}
					
					$("#register-btn").attr('disabled',false);
	          })
		 })
		 captchaObj.onClose(function(){
			 $("#register-btn").attr('disabled',false);
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
	
	//registerOpen
	$scope.registerFlag=true;
	$http.get('/info/getRegisterOpen.html').success(function(data){
	$scope.registerOpen=data.registerOpen;
	if($scope.registerOpen=='true'){
		$scope.registerFlag=true;
		$(".main").css("height","400px")
	}else{
		$scope.registerFlag=false;

		
	}
	})
	
	
	
	$("#register-form").Validform({
		btnSubmit : "#register-btn",//指定提交按钮
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
				
			},
			"agentId":function(gets,obj,curform){
				var partten=/^\d{8}$/;
				if(gets=='' || gets==null){
					return true;
				}else{
					if(!partten.test(gets)){
						return false;
					}else{
						var bool;
						$.ajax({
							url:'/user/getAgentInfo.html',
							type : "POST",  
					        dataType : "json", 
					        async : false,
					        data:{agentId:gets},
					        success:function(data){
					        	if(data.isExist && data.isVerified){
									bool=true;
								}else{
									bool=false;
								}
					        }
						})
						return bool;
					}
				}
			},
			"registerEmail":/^\w+([-.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
			"checked" : function(gets, el){
				return el.is(":checked");
			}
		},
		postonce : false,
		ajaxPost : false, 
		tiptype : function(msg, o, cssctl) {
			if (!o.obj.is("form")) {
				if(o.type == 1)
					return;
				var objtip=$(".Validform_checktip");
				cssctl(objtip,o.type);
				objtip.text(msg);
			} else {
				layer.load('Loading...', 3);
			}
		},
		beforeSubmit : function(data) {
			$(this.btnSubmit).attr('disabled',true)
			$scope.register.email=$scope.register.email.trim().toLowerCase();
			$scope.register.password=$.md5($scope.register.pwd+$scope.register.email)
		},
		callback : function(data) {//回调函数，返回json数据
			$("#email").attr('disabled',true);
			capt.verify();
			return false;
		}

	});
	
	
	
	
	
	var countdown = {
       $node:null,
       count:60,
       countTo:60,
       text:'',
       start:function(){
          if(this.count > 0){
        	  this.count --;
             this.$node.text(this.text + ' ('+this.count+')');
             var _this = this;
             setTimeout(function(){
                 _this.start();
             },1000);
          }else{
        	 this.$node.text(this.text);
             this.count = this.countTo;
             $scope.disableResend = false;
          }
       },
       //初始化
       init:function($node, countTo){
          this.$node = $node;
          this.countTo = countTo;
          this.text = $node.text();
          this.start();
          $scope.disableResend = true;
       }
    };
	
})