<!DOCTYPE html>
<html ng-app="bnbApp" ng-cloak>

<meta http-equiv="content-type" content="text/html;charset=UTF-8" />
<head>
	<meta charset="utf-8" />
	<meta name="format-detection" content="telephone=no,email=no,address=no">
	<title> Binance Sign In</title>
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
	 .verifyLayout .main{
	 	width:518px;
	 	padding:70px 30px 40px;
	 	background:#fff;
	 	position:absolute;
	 	left:50%;
	 	top:55%;
	 	text-align:center;
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

	 .modalDialog {
	position: fixed;
	font-family: Arial, Helvetica, sans-serif;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background: rgba(0,0,0,0.2);
	z-index: 99999;
	opacity:1;
	-webkit-transition: opacity 400ms ease-in;
	-moz-transition: opacity 400ms ease-in;
	transition: opacity 400ms ease-in;
	pointer-events: auto;
}
.modalDialog:target {
	opacity:1;
	pointer-events: auto;
}

.modalDialog > div {
	width: 300px;
	padding: 19px 0px 10px;
	border: 1px solid gray;
	position: relative;
	margin: 14% auto;
	background: #fff;
	border-radius: 5px;
	top: -9%;
	
}



h2,
p{
  color:#000;
}
.u-name,
.p-word,
.l-button{
  padding:5px;
  border-radius:5px;
}
.u-name{
  float:left;
  margin-right: 20px;
}
.box{
  
  float:center;
  width:200px;
  height:200px;
  margin:auto;
  border-radius:5px;
}
.box-text{
  font-size:10px;
  margin:0;
}
#drag1,
#drag2,
#drag3{
  padding:10px 10px;
}
.l-button{
  clear:both;
  float:left;
  margin-top:10px;
}

.safeTip{width: 488px;text-align: center;background: #fff;}


	 </style>
<script>
$(".close").on('click',function(){
   $(".modalDialog").css({"opacity":"0","pointer-events":"none"});
});
</script>
<script>
function allowDrop(ev){
  ev.preventDefault();
}
function drag(ev){
  ev.dataTransfer.setData("Text",ev.target.id);
}
function drop(ev){
  ev.preventDefault();
  var data=ev.dataTransfer.getData("Text");
  ev.target.appendChild(document.getElementById(data));
  window.location = '<?php echo trading_url();?>trade?curr=<?php echo base64_encode("BCH/INR");?>' ;

}
</script>
</head>
<body>
		
		
		<div class="verifyLayout" ng-controller="verifyLayoutCtr">
			<div class="main">
		<a href="index.html" class="logo"><img src="<?php echo asset_url();?>img/binance-replica.png"></a>
		
				
<div  ng-controller="loginCtr">

	
	<div class="f-prz formWrapLR">
		<?php if($this->session->flashdata('success')){ ?>
            <div id="openModal" class="modalDialog">
      
		<div class="safeTip" >
			<h5><b>Please fit the puzzle piece carefully</b></h5>
	 <div class="box" ondrop="drop(event)" ondragover="allowDrop(event)">
   <!--   <p class="box-text">Drag image x here </p> -->
   	<img class="box-text" src="<?php echo asset_url();?>img/image.jpg" draggable="true" ondragstart="drag(event)" width="200px" height="200px" style="border-radius: 4px;" />
   </div>
  <h5><p>Drag the right image in the box</p></h5>
   <div class="images">
     <img id="drag1" src="<?php echo asset_url();?>img/img-flo.png" draggable="true" ondragstart="drag(event)" width="75" height="75">
     <img id="drag2" src="<?php echo asset_url();?>img/warning1.png" draggable="true" ondragstart="drag(event)" width="75" height="75">
     <img id="drag2" src="<?php echo asset_url();?>img/warning2.png" draggable="true" ondragstart="drag(event)" width="75" height="75">
  </div>
	</div>
	
</div>
        
		<?php }else if($this->session->flashdata('error')){  ?>
            <div class="alert alert-block alert-danger">
                <button type="button" class="close" data-dismiss="alert"><i class="icon-remove"></i></button>
                <strong>Error!</strong> <?php echo $this->session->flashdata('error'); ?>
           </div>
           <?php } ?>
		<form class="loginReg-form" action="<?php echo userdetails_url()?>login/login" method="POST"  id="loginform">

			<h3 class="LRtitle"><span>Login</span></h3>
			
			<p class="f-nomargin Validform_checktip"></p>
			
			<div class="filed">

				<input  type="email" name="email" placeholder="Email Address" id="email"  class="ipt"/>
			</div>
			
			<div class="filed">
				<input  type="password" placeholder="Password" id="pwd"  class="ipt" datatype="*" name="pwd" />
				
			</div>
			
			<div class="filed">
				<input type="submit" value="{{'Login' | T}}" id="login-btn"  class="btn btn-orange btn-block" style="width: 100%; border-radius: 25px;margin: 0px auto;" />
			</div>
			
			<div class="filde">
				<p class="login-tip f-cb"><span class="f-fr" ng-if="notChinese">{{"Not on Binance yet?" | T}} <a href="<?php echo userdetails_url();?>register" class="yellow">{{'Register' | T}}</a></span><a href="<?php echo userdetails_url();?>forgotPassword" class="yellow f-fl">{{'Forgot Password' | T}}</a></p>
			</div>
			
		</form>
		
	</div>
</div>
<style>
	.layui-layer-msg{width:auto !important;}
	.importantInfo{margin-top:24px;text-align:center;width:100%;position:relative;padding-top:22px;}
	.importantInfo p{font-size:12px;color:#333;line-height:100%;margin-left:-4px;white-space: nowrap;position:absolute;top:0;left:50%;
		-webkit-transform:translateX(-50%);
		-ms-transform:translateX(-50%);
		-moz-transform:translateX(-50%);
		-o-transform:translateX(-50%);
		transform:translateX(-50%);
	}
	.importantInfo p .iconfont{font-size:16px;color:#ff0000;vertical-align:text-top;}
	.verifyLayout .main{height:auto; border-radius: 6px; /*box-shadow: 0px 1px 21px #eaeaea;}*/
	.alert-danger {color: #a94442;background-color: #f2dede !important;border-color: #ebccd1;padding: 20px !important;}
	.verifyBottom{
		opacity: 0.9;
	}
</style>
<script type="text/javascript" src="<?php echo asset_url();?>js/Validform_v5.3.2_min.js"></script>
<link rel="stylesheet" type="text/css" href="<?php echo asset_url();?>css/style.css" />
<script src="<?php echo asset_url();?>js/login3aeb.js?v=1.1.334" type="text/javascript" charset="utf-8"></script>		
<script src="<?php echo asset_url();?>js/gt.js"></script>

			</div>
			<div class="verifyBottom">
				<!-- <div class="item lang">
					<a href="index.html">{{"Home"|T}}</a>　<a ng-href="{{helpCenterUrl}}" target="_blank">{{"support"|T}}</a>　|　<span ng-click="switching('en')" ng-class="{true:'black',false:''}[cur_lang=='en']">English</span> 
				</div> -->
				<div class="item">© 2018 Replica.com All Rights Reserved</div>
			</div>
		</div>
		
		
		
</body>


</html>
