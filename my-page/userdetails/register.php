<!DOCTYPE html>
<html ng-app="bnbApp" ng-cloak>

<meta http-equiv="content-type" content="text/html;charset=UTF-8" />
<head>
	<meta charset="utf-8" />
	<meta name="format-detection" content="telephone=no,email=no,address=no">
	<title>Binance Register</title>
	<link rel="stylesheet" type="text/css" href="<?php echo asset_url();?>css/global3aeb.css"/>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<script id="loadeden" src="<?php echo asset_url();?>js/en3aeb.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
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
	
	<script src="<?php echo asset_url();?>js/verifyLayout.min3aeb.js" type="text/javascript" charset="utf-8"></script>
	<script src="<?php echo asset_url();?>js/sensorsdata2.js" type="text/javascript" charset="utf-8"></script>
	
	 <style>
	 body,html{height:100%;/*background-image: url(resources/img/ask-bg1.jpg);*/}
	 body{padding-bottom:0;}
	 
	 .verifyLayout{box-sizing:border-box;height:100%;min-height:608px;min-width:870px;background:#f7f7f7;padding-bottom:82px;position:relative; background-image: url('../assets/frontend/img/bg.jpg'); background-size: 100%;}
	 .verifyLayout .main{width:518px;padding:30px 30px 40px;background:#fff;position:absolute;left:50%;top:55%;text-align:center;
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
	 .alert-danger {color: #a94442;background-color: #f2dede !important;border-color: #ebccd1;padding: 20px !important;}
	 .alert-success {color: #3c763d;background-color: #dff0d8 !important;border-color: #d6e9c6;padding: 20px !important;}
	 .verifyBottom{
		opacity: 0.9;
	}
	 </style>
	
</head>
<body>
		
		
		<div class="verifyLayout" ng-controller="verifyLayoutCtr">
			<div class="main">
				<a href="<?php echo base_url();?>" class="logo"><img src="<?php echo logo_url();?>"></a>
				



		<style>
			.verifyLayout .main{height:auto;}
			.registerTip{font-size:14px;color:#666;line-height:1.5;margin:30px 0;text-align:left;}
			.registerTip p{margin:10px 0;}
		</style>	
			<meta property="og:title" content="Register for Your Binance Account" />
			<meta property="og:description" content="Exchange the world with Binance" />
			<div ng-controller="registerCtr">
				<div class="f-prz formWrapLR">
					
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
					
						<form  ng-show="registerFlag" class="loginReg-form" action="<?php echo userdetails_url()?>register/register" method="POST"  >
						 <h3 class="LRtitle"><span>{{"register" | T}}</span></h3> 
					

					 <div class="f-nomargin Validform_checktip"></div>  
					    <div class="filed">
							<input  id="fname" type="text"  autocomplete="off" placeholder="First Name" class="ipt ref" name="fname" />
						</div>

						<div class="filed">
							<input  id="mname" type="text"  autocomplete="off" placeholder="Middle Name" class="ipt ref" name="mname" />
						</div>

						<div class="filed">
							<input  id="lname" type="text"  autocomplete="off"  placeholder="Last Name" class="ipt ref" name="lname" />
						</div>

						
						<div class="filed">
							<input  id="email" type="email" ng-model="register.email" autocomplete="off" placeholder="{{'Email Address'|T}}" class="ipt fillemail" name="email" datatype="registerEmail" />
						</div>
						
						<div class="filed">
							<input  type="password" ng-model="register.pwd" placeholder="{{'Password' | T}}" autocomplete="off" class="ipt pwd" name="userPassword" id="regiterPassword" datatype="pwd" />
							<input type="text" name="password" ng-model="register.password" id="password" style="display:none;">
						</div>
						
						
						<div class="filed" ng-if="sarted">
							<input id="ref" type="text" ng-model="register.agentId" placeholder="{{'Referral ID'|T}} ( {{'optional' | T}} )" class="ipt ref" name="ref"  ng-if="!ref" datatype="agentId" errormsg="{{'Referral ID is invalid.' | T}}" nullmsg="{{'This field is required' | T}}"/>
							<input id="ref" type="text" ng-model="register.agentId"  class="ipt ref disabled" name="ref"  ng-if="ref" readonly/>
						</div>
						
						<input style="display: none" id="ts" type="text" ng-model="register.ts"   name="ts"  />

						<div class="filed">
							<label class=" aggreement"><input id="agreement"  type="checkbox" datatype="checked" ng-model="register.agreement"  nullmsg="{{'This field is required' | T}}"/> I agree <?php echo project_name();?> Terms Of Use</label>
						</div>
						
						<div class="filed">
							<input type="submit" value="{{'register' | T}}" class="btn btn-orange btn-block" id="register-btn" ng-disabled="!register.email || !register.pwd  || !register.agreement" style="border-radius: 25px;" />
						</div> 
						<div class="filde">
							<p class="f-fr login-tip">{{'Already Registered?' | T}} <a href="<?php echo userdetails_url();?>login" class="yellow">{{'Login' | T}}</a></p>
						</div>
					</form> 
					
				</div>
			</div>


			<script type="text/javascript" src="<?php echo asset_url();?>js/Validform_v5.3.2_min.js"></script>
			<link rel="stylesheet" type="text/css" href="<?php echo asset_url();?>css/style.css" />
			<!-- <script src="<?php echo asset_url();?>js/register.js" type="text/javascript" charset="utf-8"></script> -->
			<script src="<?php echo asset_url();?>js/gt.js"></script>




						</div>
						<div class="verifyBottom">
							<div class="item lang">
								<a href="index.html">{{"Home"|T}}</a>　<a href="" target="_blank">{{"support"|T}}</a>　|　<span ng-click="switching('en')" ng-class="{true:'black',false:''}[cur_lang=='en']">English</span> 
							</div>
							<div class="item">© 2018 <?php echo project_name();?> All Rights Reserved</div>
						</div>
					</div>
		
		
		
</body>


</html>
