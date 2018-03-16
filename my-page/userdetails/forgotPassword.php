<!DOCTYPE html>
<html ng-app="bnbApp" ng-cloak>

<meta http-equiv="content-type" content="text/html;charset=UTF-8" />
<head>
	<meta charset="utf-8" />
	<meta name="format-detection" content="telephone=no,email=no,address=no">
	<title>Replica Forget Password</title>
	<link rel="stylesheet" type="text/css" href="<?php echo asset_url();?>css/global3aeb.css?v=1.1.334"/>
	
	<script type="text/javascript">
		var initLang='en';
		var notChinese=true
		function setCookie(name,value)
		{
			var Days = 3000;
			var exp = new Date();
			exp.setTime(exp.getTime() + Days*24*60*60*1000);
			document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
		}
		
	</script>
	
	<script src="<?php echo asset_url();?>js/verifyLayout.min3aeb.js?v=1.1.334" type="text/javascript" charset="utf-8"></script>
	<script src="<?php echo asset_url();?>js/sensorsdata2.js" type="text/javascript" charset="utf-8"></script>
	
	 <style>
	 body,html{height:100%;}
	 body{padding-bottom:0;}
	 
	 .verifyLayout{box-sizing:border-box;height:100%;min-height:608px;min-width:870px;background:#f7f7f7;padding-bottom:82px;position:relative;  background-image: url('../assets/frontend/img/bg.jpg'); background-size: 100%;}
	 .verifyLayout .main{width:518px;padding:80px 30px 40px;background:#fff;position:absolute;left:50%;top:55%;text-align:center;
	 	border-radius: 6px;
	 	-webkit-transform:translate(-50%,-50%);
	 	-moz-transform:translate(-50%,-50%);
	 	-ms-transform:translate(-50%,-50%);
	 	-o-transform:translate(-50%,-50%);
	 	transform:translate(-50%,-50%);
	 	margin-top:-41px;
	 }
	 .verifyLayout .main .logo{display:inline-block;height:64px;}
	 .verifyLayout .main .icon-logo{margin-bottom:24px;height:40px;}
	 .verifyLayout .main .messageBox{margin:0 auto 10px;}
	 .verifyLayout .main .alert{width:100%;text-align:left;box-sizing:border-box;background:none;font-size:12px;white-space:nowrap;padding:0;line-height:100%;margin-top:44px;}
	 .verifyBottom{padding:15px 0;text-align:center;width:100%;position:absolute;left:0;bottom:0;background:#f7f7f7}
	 .verifyBottom .item{font-size:14px;color:#999;margin-bottom:10px;}
	 .verifyBottom .item.lang span{cursor:pointer;}
	 .verifyBottom .item.lang span.black{color:#333;}
	 .verifyBottom .item.lang a,.verifyBottom .item.lang a:visited{color:#999;}
	 .verifyBottom .item.lang a:hover{color:#333;}
	 .verifyBottom{
		opacity: 0.9;
	}
	 </style>
	
</head>
<body>
		
		
		<div class="verifyLayout" ng-controller="verifyLayoutCtr">
			<div class="main">
				<a href="index.html" class="logo"><img src="<?php echo asset_url();?>img/binance-replica.png"></a>
				



	<style>
		.verifyLayout .main{height:auto;}
	</style>
	<?php if($this->session->flashdata('success')){ ?>
            <div class="alert alert-block alert-success">
                <button type="button" class="close" data-dismiss="alert"><i class="icon-remove"></i></button>
                <strong>Success!</strong> <?php echo $this->session->flashdata('success'); ?>
            </div>
        <?php }else if($this->session->flashdata('error')){  ?>
            <div class="alert alert-block alert-danger">
                <button type="button" class="close" data-dismiss="alert"><i class="icon-remove"></i></button>
                <strong>Error!</strong> <?php echo $this->session->flashdata('error'); ?>
           </div>
           <?php } ?>	
		<div ng-controller="forgotPwdCtr">

			<div class="f-prz formWrapLR">

				<form class="loginReg-form" action="<?php echo userdetails_url()?>forgotPassword/forgotPassword" method="POST"   novalidate="novalidate">
					<h3 class="LRtitle"><span>{{"Retrieve the password" | T}}</span></h3>
					<p class="Validform_checktip f-nomargin" ></p>
					<div class="filed">
						<input type="email" ng-model="forgotPwd.email" placeholder="{{'Your Email' | T}}"  class="ipt fillemail" id="email" name="email"  datatype="e" errormsg="{{'Invalid email address.' | T}}" nullmsg="{{'This field is required.' | T}}" style="width: 280px;" />
					</div>
					
					<div class="filed f-fc">
						<input type="submit" id="forgotPwd-btn" value="{{'Submit' | T}}" class="btn btn-orange btn-block" ng-disabled="!forgotPwd.email" style="width: 100%; border-radius: 25px;margin: 0px auto;"/>
					</div>

					


					<div class="filde">
				<p class="login-tip f-cb"><span class="f-fr" ng-if="notChinese">{{"Not on Binance yet?" | T}} <a href="<?php echo userdetails_url();?>register" class="yellow">{{'Register' | T}}</a></span><a href="<?php echo userdetails_url();?>login" class="yellow f-fl">{{'Home' | T}}</a></p>
			</div>
				</form>
				
			</div>
		</div>
		<script type="text/javascript" src="<?php echo asset_url();?>js/Validform_v5.3.2_min.js"></script>
		<link rel="stylesheet" type="text/css" href="<?php echo asset_url();?>css/style.css" />
		<script src="<?php echo asset_url();?>js/forgotPwd3aeb.js" type="text/javascript" charset="utf-8"></script>
		<script src="<?php echo asset_url();?>js/gt.js"></script>


			</div>
			<div class="verifyBottom">
				<div class="item lang">
					<a href="index.html">{{"Home"|T}}</a>　<a ng-href="{{helpCenterUrl}}" target="_blank">{{"support"|T}}</a>　|　<span ng-click="switching('en')" ng-class="{true:'black',false:''}[cur_lang=='en']">English</span> 
				</div>
				<div class="item">© 2017 Replica.com All Rights Reserved</div>
			</div>
		</div>
</body>
</html>
