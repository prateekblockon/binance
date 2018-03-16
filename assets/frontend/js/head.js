app.config(function($httpProvider,$translateProvider){
	$httpProvider.interceptors.push('myInterceptor');



	function setLang(lang){
		$translateProvider.preferredLanguage(lang);
		$translateProvider.translations(lang,window['mm'+lang]);

		$translateProvider.useSanitizeValueStrategy('escape');
	}
	window.translations=$translateProvider.translations
	setLang(initLang)
})

.directive('repeatFinish',function(){
    return {
        link: function(scope,element,attr){
            if(scope.$last == true){
            	scope.$eval( attr.repeatFinish )	
            }
        }
    }
})

.controller("headCtr",function($scope,$rootScope,$http,$translate,$q,$interval,urlSearch){
	$rootScope.notChinese=notChinese;
	$rootScope.initLang=initLang;
	$rootScope.ts=urlSearch.getUrlParam("ts");
	$scope.phoneFlag=urlSearch.getUrlParam("phoneFlag");
	$scope.agentId=urlSearch.getUrlParam("ref");
	if($rootScope.ts)
	{
		var partten=/^[\w|\d|\.|-]+$/;
		if(partten.test($rootScope.ts)){
			sessionStorage.setItem("ts",$rootScope.ts.substr(0,16)); 
		}
	
	}
	if($scope.agentId){
		sessionStorage.setItem("refId",$scope.agentId); 
	}
	$rootScope.notChinese=notChinese;
	$scope.product={}
	var symbol=location.search.split("=")[1]
	if(symbol)
		$scope.product.symbol='?symbol='+symbol

	$scope.changeToDetail=function () {
		var symbol=location.search.split("=")[1]
		if(symbol)
			location.href="/tradeDetail.html?symbol="+symbol
		else
			location.href="/tradeDetail.html"
	}
	$scope.showMobileTip=sessionStorage.showMobileTip!="false"
	if($scope.showMobileTip)$scope.showMobileTip=browserType()
	$scope.closeShowMobileTip=function () {
		$scope.showMobileTip=false;
		sessionStorage.showMobileTip=false;
	}

	$scope.getUserInfo=function(){
		$rootScope.user={};
		var config={
				method:"post",
				url:"/user/basedetail.html"
		}
		$http(config).success(function(data){
			if(data.success){			
				$rootScope.user=data;
				console.log($rootScope.user.mobileNo!=null)
				if(!$scope.user.gauth && !$scope.user.mobileSecurity){
					if(($rootScope.curPage=='myAccount' && !$scope.phoneFlag) || $rootScope.curPage=='withdrawal'){
						   setTimeout(function () {
								layer.open({
								    type: 1,
								    title:null,
								    area: '548px', //宽高
								    closeBtn:0,
								    content: $('#safeTip').html() //捕获的元素
								});
					        },1000)
						
					
					}
				}
				
					
				
				if($rootScope.user.userData.commissionStatus==1){
					$rootScope.user.userData.commissionStatus=true;
				}else{
					$rootScope.user.userData.commissionStatus=false;
				}
			}
		})
	}
	
	/*获取资产总估值*/
	$rootScope.getTotalAsset=function(){
		$http.post('/exchange/private/userAssetTransferBtc').success(function(data){
			$rootScope.totalAsset=data;
		})
	}
	//判断是否登录
	$scope.isLogin=function(){
		if($.cookie('logined')=='y'){
			$rootScope.Islogin=true;
			$scope.topUserID=$.cookie('email');
			$scope.getUserInfo();
			return true;
		}else{
			$rootScope.Islogin=false;
			return false;
		}
	}
	$scope.isLogin();
	
	var currentUrl=window.location.href;
	//帮助中心链接地址
	//binance跳转zendesk的帮助中心的url地址更改
	$scope.helpUrl = function(lang){
		//未登录
		var helpCenterUrl="https://binance.zendesk.com/hc/en-us";
		if(!window.localStorage.lang){
			helpCenterUrl="https://binance.zendesk.com/hc/en-us";
		}
		if(window.localStorage.lang=="en"){
			helpCenterUrl="https://binance.zendesk.com/hc/en-us";
		}else if(window.localStorage.lang=="cn"){
			helpCenterUrl="https://binance.zendesk.com/hc/zh-cn";
		}
		$rootScope.helpCenterUrl=helpCenterUrl;
		//已登录
		if($scope.Islogin){
			$rootScope.helpCenterUrl="/zendesk/login.html?return_to="+helpCenterUrl;
		}
	}
	$scope.helpUrl();
	
	$scope.ggUrl = function(lang){
		//未登录
		var ggCenterUrl="https://binance.zendesk.com/hc/en-us/categories/115000056351";
		if(!window.localStorage.lang){
			ggCenterUrl="https://binance.zendesk.com/hc/en-us/categories/115000056351";
		}
		if(window.localStorage.lang=="en"){
			ggCenterUrl="https://binance.zendesk.com/hc/en-us/categories/115000056351";
		}else if(window.localStorage.lang=="cn"){
			ggCenterUrl="https://binance.zendesk.com/hc/zh-cn/categories/115000056351";
		}
		$rootScope.ggCenterUrl=ggCenterUrl;
		//已登录
		if($scope.Islogin){
			$rootScope.ggCenterUrl="/zendesk/login.html?return_to="+ggCenterUrl;
		}
	}
	$scope.ggUrl();
	
	
	$rootScope.cur_lang = window.localStorage.lang;
	$scope.showFlags=false;
	$scope.fundshowFlags=false;
	$scope.ordershowFlags=false;
	// 	切换 语言
	$scope.switching = function(lang){
		getLang(lang,'/resources/js/i18n/')
        window.localStorage.lang = lang;
        $scope.cur_lang = lang;
        $rootScope.cur_lang = lang;
        $scope.showFlags=false;
        if($rootScope.switching)
		$rootScope.switching(lang);
        $scope.helpUrl();
        //window.location.reload();
    }
	function getLang(lang,jsUrl) {
		var expire=new Date();
		expire.setFullYear(2099)
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

	$scope.changeLangByUrl=function(){
		var lang=urlSearch.getUrlParam("lang");
		if(lang){
			$scope.switching(lang);
		}
	}
	
	$scope.changeLangByUrl();
	
	//服务器时间
    var start=new Date().getTime();
	   $http.get('/exchange/public/serverTime').success(function(data){
		   var end=new Date().getTime();
		   var diff=new Date().getTime()-data+(end-start)/2;
		   $rootScope.today = new Date(new Date().getTime()-diff);
		   $interval(function(){
			   $rootScope.today = new Date(new Date().getTime()-diff);
		   },1000)
	   })
	//登出
    $scope.logout=function(){
    	$http.post("/user/loginOut.html").success(function(data){
    		 if(data.success){
                 var expires = new Date(); 
                 expires.setTime(expires.getTime() - 1000);
                 document.cookie = "logined=;path=/;expires=" + expires.toGMTString() + "";
                 document.cookie="CSRFToken=;path=/"+ expires.toGMTString() + "";
                 document.cookie = "mobile=;path=/;expires=" + expires.toGMTString() + "";
                 document.cookie = "email=;path=/;expires=" + expires.toGMTString() + "";
                 window.location.href ="/login.html";
             }
    	})
    }
})

.filter("rate",function(){
    return function(input){
        var output;
        output = Math.round(input*100000000)/100000000;
             
        return output;
    };
})

.filter("T", ['$translate', function($translate) {
	return function(key) {
		if(key){
			return $translate.instant(key);
		}
	};
}])
function browserType() {
	var sUserAgent = navigator.userAgent.toLowerCase();
	var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
	var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
	var bIsMidp = sUserAgent.match(/midp/i) == "midp";
	var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
	var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
	var bIsAndroid = sUserAgent.match(/android/i) == "android";
	var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
	var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
	if (!(bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) ){
		return false
	}
	return true;
}