<?php 
$this->load->view('include/all_header');
$this->load->view('include/ajax');
?>
<style>
.basicInfo {
	padding: 30px 0 40px;
	border: 1px solid #e6e6e6;
	position: relative;
	line-height: 100%;
	margin: 15px 0;
	width: 100%;
	float: left;
}
.my-basicInfo {
	border: 1px solid #e6e6e6;
	position: relative;
	line-height: 100%;
	margin: 15px 0;
	width: 100%;
	float: left;
}

.basicInfo .warn {
	padding-left: 8px;
	width: 100%;
	box-sizing: border-box;
	height: 28px;
	line-height: 28px;
	background: #fdf7ec;
	font-size: 12px;
	color: #b48728;
	position: absolute;
	bottom: 0;
	left: 0;
}

.basicInfo .warn .iconfont {
	font-size: 14px;
	vertical-align: middle;
}

.basicInfo .left {
	width: 184px;
	text-align: center;
}

.basicInfo .right {
	width: 984px;
}

.basicInfo .left .usertx {
	margin-bottom: 12px;
}

.basicInfo .withdrawLimit {
	font-size: 12px;
	color: #333;
}

.basicInfo .right .account {
	font-size: 18px;
	color: #666;
	font-weight: bold;
	margin: 10px 0;
}

.basicInfo .right .loginInfo {
	font-size: 12px;
	color: #999;
}

.basicInfo .right .mobile {
	margin-top: 15px;
	padding-top: 15px;
	border-top: 1px dashed #d3d3d3;
	font-size: 14px;
	color: #333;
}

.basicInfo .right .mobile a {
	font-size: 14px;
	text-decoration: underline;
	color: #e8b342;
}

.basicInfo .right .fee {
	font-size: 14px;
	color: #333;
	margin-top: 9px;
}

.basicInfo .right .fee i {
	color: #999;
}

.switch {
	display: inline-block;
	vertical-align: middle;
	cursor: pointer;
}

.switch input {
	display: none;
}

.switch span {
	display: inline-block;
	padding: 0 6px;
	width: 40px;
	height: 22px;
	line-height: 24px;
	border-radius: 11px;
	background: #d4d4d4;
	position: relative;
	color: #fff;
	font-size: 12px;
	text-align: right;
}

.switch span:after {
	content: "OFF";
	line-height: 22px;
}

.switch span i {
	display: inline-block;
	width: 18px;
	height: 18px;
	border-radius: 100%;
	background: #fff;
	position: absolute;
	left: 1px;
	top: 2px;
	box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
	-webkit-transition: all 0.3s ease-in-out;
	-moz-transition: all 0.3s ease-in-out;
	-ms-transition: all 0.3s ease-in-out;
	-o-transition: all 0.3s ease-in-out;
	transition: all 0.3s ease-in-out;
}

.switch input:checked+span {
	background: #5cbe53;
	text-align: left;
}

.switch input:checked+span:after {
	content: " "
}

.switch input:checked+span:before {
	content: "ON";
}

.switch input:checked+span i {
	left: 33px;
}

.loginHistory {
	border: 1px solid #d4d4d4;
}

.SecurityCenter>.f-fl, .SecurityCenter>.f-fr {
	width: 586px;
}

.SecurityCenter>.f-fl .panel:last-of-type,.SecurityCenter>.f-fr .panel:last-of-type{margin-bottom:0;}

.SecurityCenter .imgicon {
	display: inline-block;
	width: 38px;
	height: 38px;
	vertical-align: middle;
	background: url("../assets/frontend/img/icons.png") no-repeat center;
}

.SecurityCenter .img-email {
	background-position: 0 0;
}

.SecurityCenter .img-mobile {
	background-position: 0 -45px;
}

.SecurityCenter .img-password {
	background-position: 0 -97px;
}

.SecurityCenter .img-api {
	background-position: 0 -193px;
}

.SecurityCenter .img-google {
	background-position: 0 -144px;
}

.SecurityCenter .item {
	padding: 0 130px 0 54px;
	position: relative;
}

.SecurityCenter .item+.item {
	padding-top: 56px;
	padding-bottom:14px;
	margin-top: 50px;
	border-top: 1px solid #d4d4d4;
}

.SecurityCenter .item .imgicon {
	position: absolute;
	left: 8px;
	top: 0;
}
.SecurityCenter .item .imgicon.img-api{top:12px;}

.SecurityCenter .item .btn {
	padding: 0;
	width: 98px;
	height: 32px;
	text-align: center;
	line-height: 32px;
	position: absolute;
	right: 0;
	top: 10px;
	background: #fff;
    color: #666;
    border-color: #d4d4d4;
}

.SecurityCenter .item .btn:hover{background:#e8b342;color:#fff;border-color:#e8b342;}

.SecurityCenter .item .switch {
	position: absolute;
	right: 24px;
	top: 10px;
}

.SecurityCenter .item+.item .imgicon {
	top: 62px;
}

.SecurityCenter .item+.item .btn {
	top: 62px;
}




.SecurityCenter .item h4, .SecurityCenter .item p {
	font-size: 14px;
	color: #666;
	line-height: 1.3;
}

.SecurityCenter .item h4 {
	margin-bottom: 10px;
}

.SecurityCenter .item h4 .status {
	color: #e8b342;
	margin-left: 12px;
}

.SecurityCenter .item p a{color:#e8b342;text-decoration:underline;}



.apiSeting{padding:30px 132px 30px 18px;border:1px solid #e6e6e6;position:relative;}
.apiSeting p{font-size:14px;color:#666;line-height:1.6;width:900px;}
.apiSeting p a{text-decoration:underline;color:#e8b342;}
.apiSeting .btn{position:absolute;top:50%;right:18px;margin-top:-18px;}
.levels{width:600px;overflow:hidden;margin:-73px 10px 0 0;}
.levels li{float:left;width:200px;text-align:center;position:relative;}
.levels li:after{content:'';display:inline-block;width:130px;height:3px;background:#eaeaea;position:absolute;left:-66px;top:34px;}
.levels li:first-of-type:after{display:none;}
.levels li h4{color:#666;font-size:12px;font-weight:normal;margin-bottom:10px;}
.levels li h4 strong{font-size:14px;margin-right:3px;}
.levels li p{font-size:14px;color:#666;margin-bottom:8px;}
.levels li p .iconfont{font-size:28px;color:#929292;vertical-align:middle;}
.levels li.curlevel p,.levels li.curlevel p .iconfont{color:#e8b342;}
.levels li.curlevel:after{background:#e8b342;}
.levels li .status{font-size:14px;color:#999;}
.levels li .status .iconfont{position:relative;cursor:pointer;font-size:14px;color:#e8b342;}
.levels li .status .iconfont b{display:none;position:absolute;left:50%;top:-30px;z-index:99;background:#fff;box-shadow:0 0 10px rgba(0,0,0,0.2);font-size:12px;font-weight:normal;color:#999;padding:4px 12px;
-webkit-transform:translateX(-50%);
-moz-transform:translateX(-50%);
-o-transform:translateX(-50%);
-ms-transform:translateX(-50%);
transform:translateX(-50%);
white-space:nowrap;
}
.levels li .status .iconfont:hover b{display:block;}
.levels li a{font-size:14px;color:#666;text-decoration:underline;}
.levels li a.orange{color:#e8b342;}
.account .lev{font-size:14px;color:#e8b342;font-weight:normal;margin:0 4px;}
.account .lev .iconfont{vertical-align:middle;}
.account .notCertified,.account .certified{font-size:12px;color:#fff;font-weight:normal;background:#929292;border-radius:3px;padding:2px 4px;}
.account .certified{background:#e8b342;}
.itemBox .itemTitle{height:46px;line-height:46px;margin-top:30px;font-size:16px;}
.itemBox .itemTitle a{top:20px;}


.safeTip{width: 488px;text-align: center;background: #fff}
.jgimg{padding:49px 0 20px 0}
.decp{text-align: center;font-size: 14px}
.decp p{line-height: 24px;color: #333}
.decp p:first-child{color:#ea2323; }
.yzChoose{width: 458px;margin: 35px auto}
.yzChoose a{display: inline-block;width: 143px;height: 36px;border: 1px solid #efefef;color:#666666;font-size: 14px;background: #fafafa;position: relative;padding:16px 11px 16px 68px;line-height: 36px }
.yzChoose a:hover{border: 1px solid #f6e4be;color:#e8b342; }
.yzChoose .imgicon{display: inline-block;
    width: 36px;
    height: 36px;
    vertical-align: middle;
    background: url(/resources/img/yzchoose.png) no-repeat center;
    position: absolute;}
 
.yzChoose .img-google1{background-position: -46px 0;top: 16px;left: 20px}  
.yzChoose .img-phone{background-position: -92px 0;top: 16px;left: 30px}  
.yzChoose a:hover .img-google1{background-position: 0 0;top: 16px;left: 20px}   
.yzChoose a:hover .img-phone{background-position: -131px 0;top: 16px;left:30px}

.btphone p{font-size: 14px;color: #666;text-align: left;}  
/* .btphone h3{font-size: 14px;color: #666;text-align: left;padding-bottom: 3px}   */
.yzChoose a:hover h3{color: #e8b342;}   
.yzChoose a:hover p{color: #e8b342} 
.btgoogle{margin-right: 10px;float: left;}   
.btgoogle p{font-size: 14px;line-height: 36px;text-align: left;}
.smalltip{text-align: right;font-size: 12px;color: #666;padding-bottom: 28px}
.smalltip span{padding-right: 15px}
.alert {
    margin: 15px auto 0;
    color: #b48728;
    font-size: 12px;
    background: #fcf8e5;
    border: 1px solid #f8ebcf;
    height: 40px;line-height: 40px;
    padding-left: 18px;padding: 0 0 0 18px;
    position:relative;
    cursor:pointer;
}
.alert .iconfont{ 
	position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    right: 10px;
    text-align: right;
    line-height: 40px;
    font-size: 20px;
}
.showContent{
	height:auto;
	overflow:hidden;
	border-left:1px solid #f8ebcf;
	border-right:1px solid #f8ebcf;
	border-bottom:1px solid #f8ebcf;
	padding:15px 20px 10px 20px;
	font-size:12px;
	color:#454545;
	display:none;
}
.showContent ul{
	padding-bottom:5px;
}
.showContent ul li{
	height:30px;
	line-height:30px;
	background:url("/resources/img/safetyIcons.png") no-repeat;
	background-size:1.8% auto;
	padding-left:40px;
}
.showContent ul li img{
	vertical-align:middle;
}
.showContent ul li span.binanceUrl{
	margin:-3px 10px 0;
	display:inline-block;
	width: 170px;
    height: 23px;
    line-height: 23px;
    background: url(/resources/img/home_bg.png)no-repeat center;
    padding-left: 38px;
    box-sizing:border-box;
    vertical-align:middle;
}
.showContent ul li.showico1{background-position:left -2px;}
.showContent ul li.showico2{background-position:left -40px;}
.showContent ul li.showico3{background-position:left -74px;}
.showContent ul li.showico4{background-position:left -108px;}
.showContent ul li.showico5{background-position:left -143px;}
.showContent p{
	border-top:1px solid #f0f0f0;
	padding-top:12px;
}
.showContent p a{
	color:#e8b342;
}
.showContent p a:hover{
	text-decoration:underline;
}
</style>
		<div class="main">
			<div class="container">
			
				<div class="kline-para">
					
				</div>
			
				<div class="main-body">
				
					
					<div class="main-left">
						
						<div>
							<div  id="askScrollBox" >
	
							</div>
							
							<div  id="bidScrollBox" >
							</div>
						</div>
					</div>
					
				</div>
				
				
				<!-- user records -->
				<div class="userRecords f-cb" >
					<div class="userRecords-title">
						<span class="cur">My Account</span>
						<div class="myAccount itemBox" ng-controller="myAccountCtr">
	
	
							<div class="basicInfo f-cb">
								<div class="f-fl left">
									<img src="<?php echo asset_url();?>img/img-user.png" class="usertx"/>
								</div>
								<div class="f-fl right">
									<div class="account">
										<span><?php echo $this->session->userdata('useremail');?></span>
										
									</div>
									<div class="loginInfo">Last login Time:  <span id="lastlogin"></span></div>
									
									<div class="loginInfo">IP:  <span id="lastloginip"></span></div>
								</div>
								
							</div>
							
							
							<div class="SecurityCenter f-cb">
								<div class="f-fl">
									<div class="panel">
										<div class="panel-title">Login Password</div>
										<div class="panel-body">
											<div class="item">
												<spna class="imgicon"></spna>
												<h4>Login Password</h4>
												<p>Used for login</p>
												<a href="<?php echo userdetails_url(); ?>changepassword"  class="btn">Change</a>
											</div>
										</div>
									</div>
									<div class="panel">
										<div class="panel-title">API</div>
										<div class="panel-body">
											<div class="item">
												<span class="imgicon img-api"></span>
												
												<p >Creating API private key can get you access to market, real-time trading services on Binance via a third-party website or mobile APP. <a href="https://github.com/binance-exchange/binance-official-api-docs" Target="_blank">API documentation</a>.</p>
												
												<a href="/userCenter/createApi.html" class="btn btn-orange">API Setting	</a>
											</div>
										</div>
									</div>
								</div>
								
								<div class="f-fr">
									<div class="panel">
										<div class="panel-title">Two-factor Authentication</div>
										<div class="panel-body">
											<div class="item">
												<span class="imgicon img-mobile"></span>
												<?php if($this->session->userdata('verifyPhone')== '0')
										         { ?>
												<h4>SMS Authentication<span ></span></h4>
												<?php } else {?>
												<h4>SMS Authentication<span >  (<?php echo trim($this->session->userdata('phone'));?>)</span></h4>

												<?php } ?>
												<p>Used for withdrawals and security modifications</p>
												<!-- <p>{{"phoneOperate" | T}}</p> -->
												<?php if($this->session->userdata('isPhoneFactor')== '0')
										         { ?>
												 <a href="<?php echo tfauth_url(); ?>smsotp" class="btn btn-orange" >Enable</a>
												 <?php } else {?>
												 <a href="<?php echo tfauth_url(); ?>smsotp" class="btn" >Disable</a>
												 <?php } ?>
												
											<!-- 	<a href="/userCenter/bindPhone.html" class="btn btn-orange" ng-if="user.mobileNo==null">{{"Bind" | T}}</a>
												<label class="switch" ng-if="user.mobileNo!=null">
													<input type="checkbox" ng-model="user.mobileSecurity" ng-change="switchMobileVerify()"/>
													<span><i></i></span>
												</label> -->
											</div>
											<div class="item">
												<span style="left: 2px" class="imgicon img-google"></span>
												<h4>Google Authentication<span class="status" style="display:none;"></span></h4>
												<p>Used for withdrawals and security modifications</p>
												<?php if($this->session->userdata('isTwoFactor')== false)
										         { ?>
												<a href="<?php echo tfauth_url(); ?>tfauth" class="btn btn-orange">Enable</a>
												<?php } else {?>
												<a href="<?php echo tfauth_url(); ?>tfauth" class="btn" >Disable</a>
												<?php } ?>
											</div>
										</div>
									</div>
								</div>

								<!-- <div class="my-basicInfo f-cb">
								
								<div class="panel">
										<div class="panel-title">KYC Detail</div>
										
										<div class="panel-body">
											<div class="item">
												<h3>Personal Details</h3>
											</div>
										</div>
									</div>
							</div> -->
							</div>
							
							<!-- <div class="itemTitle"><a href="/userCenter/dividend.html">{{"More History" | T}}</a>{{"Distribution History" | T}}</div> -->
							<!-- <table class="table table-striped">
								<colgroup style="width:150px;"></colgroup>
								<colgroup></colgroup>
								<colgroup></colgroup>
								<colgroup></colgroup>
								<colgroup style="width:400px;"></colgroup>
								<tr>
									<th>{{"Time" | T}}</th>
									<th>{{"Type" | T}}</th>
									<th>{{"Coin" | T}}</th>
									<th>{{"Amount" | T}}</th>
									<th>{{"Note" | T}}</th>
								</tr>
								<tr ng-repeat="d in dividends">
									<td>{{d.operateTime*1000 | date:"yyyy-MM-dd HH:mm:ss"}}</td>
									<td>{{'Distribution' | T}}</td>
									<td>{{d.asset}}</td>
									<td>{{d.amount}}</td>
									<td>{{d.info}}</td>
								</tr>
							</table>
							
							<div class="nodata" ng-if="!dividends.length">
								<img src="/resources/img/zups.png"/>
								<p>{{"You have no distribution history." | T}}</p>
							</div> -->
							
							
							<div class="itemTitle">Last login</div>
							<table class="table table-striped">
								<colgroup style="width:150px;"></colgroup>
								<colgroup></colgroup>
								<colgroup style="width:150px;"></colgroup>
								<tr>
									<th class="f-left" >Login Date & Time  </th>
									<th class="f-center">IP Address</th>
									<th class="f-center">Location</th>
								</tr>

							</table>

								<div id="logindetails"></div>
								
						</div>
					
					</div>
					
				</div>
				
			</div>
		</div>
		
		
		<?php $this->load->view('include/footer');?>

	
	</body>
</html>

