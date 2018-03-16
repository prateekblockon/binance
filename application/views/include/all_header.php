
<!DOCTYPE html>
<html xmlns:ng="http://angularjs.org" id="ng-app" ng-app="tradeApp" ng-controller="tradeController" ng-cloak>
	<head>
		<meta charset="utf-8" />
		<meta name="format-detection" content="telephone=no,email=no,address=no">
		<!-- <script type="application/javascript">
			var EXCHANGE='bnb'
		</script> -->
		<title><?php echo project_name();?></title>
		
		<link rel="stylesheet" type="text/css" href="<?php echo asset_url();?>css/global3aeb.css"/>
		<link rel="stylesheet" type="text/css" href="<?php echo asset_url();?>css/trade3aeb.css"/>
        <link rel="icon" href="<?php echo favicon_url();?>" type="image/x-icon" />

		<meta name="renderer" content="webkit">

        <script id="loadeden"  src="<?php echo asset_url();?>js/en3aeb.js"></script>

		

				<script src="<?php echo asset_url();?>js/new_trade.js" type="text/javascript" charset="utf-8"></script>

		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8/jquery.min.js"/>
		

		 <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js"></script>
        <link href="//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css" rel="stylesheet">

       <script src="<?php echo asset_url();?>/js/socket.js"></script>

		
        <style>
        
        
        .productSymbol a strong{color:#333;font-weight:normal;font-size:22px;font-weight:bold;}
        .productSymbol a:hover strong{text-decoration:underline;}
        .productSymbol a:hover i{text-decoration:none;}
		
		.no-info strong{color:#333;font-weight:normal;font-size:22px;font-weight:bold;}
        .no-info a:hover{cursor:text;}
        .no-info a:hover strong{text-decoration:none;}
        .no-info a:hover i{text-decoration:none;}
        
        .productSymbol font{color:#999;font-size:14px;}
        .productSymbol .iconfont{margin-right:3px;color:#555;font-weight:normal;font-size:18px;position:relative;}
        .productSymbol .iconfont:before{vertical-align:top;}
        .info-tips{display:none;position:absolute;padding:8px 10px;font-size:12px;color:#fff;border-radius:3px;position: absolute;z-index:333;bottom:-37px;left:51%;transform:translate(-51%,0);background: rgba(38, 38, 38, 1);white-space:nowrap;}
        .info-tips:after{
        	content:" ";
			border: 6px solid transparent;
			border-bottom-color:rgba(38, 38, 38, 1);
			position:absolute;
			bottom:32px;
			left:50%;
			margin-left:-5px;
			z-index:99;
        }
        </style>  
        <script type="text/javascript">
        	$(document).ready(function() {
        		$("#changepassform").on('submit',function(){
        			var pass=$("#oldPassword").val();
        			var passnew=$("#newPassword").val();
        			var passnewcnf=$("#repeatPassword").val();
        			if(pass=="")
        			{
        				$("#oldPassword").css({"border-color":"red"});
        				return false;
        			}
        			else if(passnew=="")
        			{
        				$("#newPassword").css({"border-color":"red"});
        				$("#oldPassword").css({"border-color":"#cccccc"});
        				return false;
        			}
        			else if(passnewcnf=="")
        			{
        				$("#repeatPassword").css({"border-color":"red"});
        				$("#newPassword").css({"border-color":"#cccccc"});
        				$("#oldPassword").css({"border-color":"#cccccc"});
        				return false;
        			}
        			else if(passnewcnf!=passnew)
        			{
        				$("#repeatPassword").css({"border-color":"red"});
        				$("#newPassword").css({"border-color":"#cccccc"});
        				$("#oldPassword").css({"border-color":"#cccccc"});
        				return false;
        			}
        			else
        			{
        			return true;
        			}
        		})
  });
        </script>
        
	</head>
	<body>
<script>
  var initLang='en'
  var notChinese=true

  function setCookie(name,value)
  {
	  var Days = 3000;
	  var exp = new Date();
	  exp.setTime(exp.getTime() + Days*24*60*60*1000);
	  document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
  }
  //if(document.cookie.indexOf("lang")==-1) {
	  localStorage.lang = initLang
	  setCookie('lang',initLang)
  //}

</script>

<script type="text/javascript" src="<?php echo asset_url();?>js/head3aeb.js"></script>

<div ng-controller="headCtr">
		
		<div class="header">
			<a href="<?php echo base_url();?>" class="logo"><img src="<?php echo logo_url();?>"/></a>
			
			<ul class="main-nav exchange" ng-if="notChinese">
					<li>
						<?php $response = curencylist();

		$responsedata = json_decode($response,true);
		$responsedata = array_reverse($responsedata);
  $market = $responsedata['data'][0]['market']; ?> 

						<a  href="javascript:;"><i class="iconfont icon-exchange"></i>Exchange</a>
						<img src="<?php echo asset_url();?>img/header-sj.png"/>
						<ul class="subNav">
							<li><a href="<?php echo trading_url();?>trade?curr=<?php echo base64_encode("$market");?>">Basic</a></li>
						<!-- 	<li><a  ng-click="changeToDetail()">Advanced</a></li> -->
						</ul>
					</li>
					
				</ul>
				<ul class="main-nav exchange" ng-if="notChinese">
					<li>
						
						<a  href="<?php if($this->session->userdata('iskyc')== '0') { echo kyc_url().'kyc'; } else { echo '#'; } ?> ">       
						<i class="iconfont icon-exchange"></i>Kyc</a>
						
						
					</li>
					
				</ul>
			<!-- 	
	 			<ul class="main-nav exchange" ng-if="notChinese">
					<li>
						<a style="line-height: 47px" target="_blank"  href="https://labs.binance.com"><i class="iconfont icon-lab"></i>Labs</a>
					</li>
				</ul> -->
				<!-- 
				<ul class="main-nav exchange" ng-if="notChinese">
					<li>
						<a href="https://launchpad.binance.com/" style="line-height: 47px" target="_blank"><i class="iconfont icon-launchPad"></i>{{'LaunchPad' | T}}</a>
					</li>
				</ul> -->
				
			<!-- 	<ul class="main-nav exchange" ng-if="notChinese">
					<li>
						<a ng-href="{{cur_lang=='cn' ? 'https://info.binance.com/cn' : 'https://info.binance.com/en'}}" style="line-height: 47px" target="_blank"><i class="iconfont icon-info" style="font-size:16px;margin-right:5px;"></i>{{'Info' | T}}</a>
					</li>
				</ul> -->
			<!-- 	<div class="googleFY f-fr"  ng-click="showGoogleFY=!showGoogleFY" ng-show="initLang!='cn'">
					<img src="https://resource.binance.com/resources/img/googleFY.png"/>
					<div class="googleFY-language" >
						<h3>{{'Website Translator' | T}}</h3>
						<div id="google_translate_element"></div>
						<p>Translations by Google is provided for 
							convenience and is not verified contextually.<br/>
							Please refer to original for accuracy.
						</p>
					</div>
				</div> -->
				
				
				<?php if($this->session->userdata('_id')!='')
				{ ?>
				<div class="logined f-fr" >
					<i class="iconfont icon-touxiang"></i>
					<img src="<?php echo asset_url();?>img/header-sj.png"/>
					<ul>
						<li>
							<a class="link" href="<?php echo userdetails_url();?>myaccount">
								<strong>User Center</strong><br/>
								<span><?php echo $this->session->userdata('useremail');?></span>
								<i class="iconfont icon-right"></i>
							</a>
						</li>
						
						<li>
							<a class="link"  href="<?php echo userdetails_url()?>Logout" >Logout</a>
						</li>
					</ul>
				</div>
				<?php } else { ?>

				
				<div class="login-register f-fr" ng-if="!Islogin">
					<a href="<?php echo userdetails_url();?>login">{{"login"|T}}</a>&nbsp;&nbsp;<span ng-if="notChinese">{{"or" | T}}&nbsp;&nbsp;</span>
					<a href="<?php echo userdetails_url();?>register" ng-if="notChinese">{{'register'|T}}</a>
				</div>
				<?php }?>

				<?php if($this->session->userdata('_id')!='')
				{ ?>
				<ul class="main-nav">
					<li  >
						<a  href="javascript:;">Funds</a>
						<img src="<?php echo asset_url();?>img/header-sj.png"/>
						<ul class="subNav">
							<li><a href="<?php echo wallet_url();?>balances">Balances</a></li>
							<!-- <li><a href="<?php echo wallet_url();?>deposit">{{"Deposits"| T}}</a></li>
							<li><a href="<?php echo wallet_url();?>withdraw">{{"Withdrawals"| T}}</a></li>
							<li><a href="<?php echo wallet_url();?>transaction">{{"Transaction History" | T}}</a></li> -->
							<!-- <li><a href="/userCenter/depositWithdraw.html">{{"czth"| T}}</a></li>
							<li><a href="/userCenter/transactionHistory.html">{{"History" | T}}</a></li> -->
						</ul>
					</li>
					<li >
						<a href="javascript:;">Order Management</a><img src="<?php echo asset_url();?>img/header-sj.png"/>
						<ul class="subNav">
							<li><a href="<?php echo trading_url();?>openorder">Open Orders</a></li>
							<li><a href="<?php echo trading_url();?>orderhistory">Order History</a></li>
							<li><a href="<?php echo trading_url();?>tradehistory">Trade History</a></li>							
						</ul>
					</li>
					<li><a href="<?php echo support_url();?>support" >Support</a></li>
					<li><a href="<?php echo payment_url();?>paymentgetway">Payment</a></li>
					
				</ul>
		<?php }  ?>
		</div>
</div> 

<script>
$(function(){
	$('.googleFY').on('click',function(e){
		e.stopPropagation();
		$(this).find('div').show();
		$(document).not(this).on('click',function(){
			$('.googleFY>div').hide();
		})
	})
})
</script>

		
</body>
		<!--新闻下拉 -->
	</html>