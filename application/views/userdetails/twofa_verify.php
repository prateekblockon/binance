<!DOCTYPE html>
<html ng-app="bnbApp" ng-cloak>

<meta http-equiv="content-type" content="text/html;charset=UTF-8" />
<head>
	<meta charset="utf-8" />
	<meta name="format-detection" content="telephone=no,email=no,address=no">
	<title> Binance Sign In</title>
	<link rel="stylesheet" type="text/css" href="<?php echo asset_url();?>css/global3aeb.css"/>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

		        <link rel="icon" href="<?php echo favicon_url();?>" type="image/x-icon" />


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
	 
	 .verifyLayout{box-sizing:border-box;height:100%;min-height:608px;min-width:870px;background:#f7f7f7;padding-bottom:82px;position:relative; background-image: url('<?php echo asset_url();?>img/bg.jpg'); background-size: 100%;}
	 .verifyLayout .main{width:518px;
	 	padding:70px 30px 40px;
	 	background:#fff;
	 	position:absolute;
	 	left:50%;
	 	top:55%;
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
	padding: 10px;
	border: 1px solid gray;
	position: relative;
	margin: 12% auto;
	background: #fff;
	
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
  padding:10px;
  margin:auto;
  border:1px solid #ccc;
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

</head>
<body>


		
		<div class="verifyLayout" ng-controller="verifyLayoutCtr">
			<div class="main">
		<a href="index.html" class="logo"><img style=" position: relative;left: 150px;" src="<?php echo asset_url();?>img/binance-replica.png"></a>
		
				
<div  ng-controller="loginCtr">

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

		<form class="loginReg-form" action="<?php echo userdetails_url()?>login/verifynumber" method="POST"  id="loginform">

			<h3 class="LRtitle"><span>2FA</span></h3>
			
			<p class="f-nomargin Validform_checktip"></p>
			
			<div class="my-form-tabs">
				
					<ul class="tabs">
    <?php if($this->session->userdata("isTwoFactor")==true){
    	?>
					    <li class="tab">
					        <input type="radio" name="tabs" checked="checked" id="tab1" />
					        <label for="tab1">Google Authentication</label>
					        <div id="tab-content1" class="content">
					          
					          <input type="text"  placeholder="Enter Google Authentication Code" id="tfa" name="tfa"   style="width: 300px; padding: 7px; border: none; color: black;" />
					        </div>
					    </li>
					    <?php  } if($this->session->userdata("isPhoneFactor")==true){ ?>
					    <li class="tab">
					      <input type="radio" checked="checked" name="tabs" id="tab2" />
					      <label for="tab2">SMS Authentication</label>   
					      <div id="tab-content2" class="content">
					          
					          <input type="text"  placeholder="Enter Authentication Code" id="verifyCode" name="verifyCode"   style="width: 240px; padding: 7px; border: none;color: black;" />
					          <button type="button" name="button" onclick="sendotplogin();" style="padding: 7px 10px; background-color: #e9b342; border: none; color: #fff; ">Send</button>    
					       </div>
					    </li>

					     <?php  }  ?> 
					    
					  </ul>
  


	
			</div>
			
			
			<div class="filed">
				<input type="submit" value="Submit" id="login-btn"  class="btn btn-orange btn-block" style="width: 100%; border-radius: 25px;margin: 0px auto;"  />
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
	.verifyLayout .main{height:auto;}
	.alert-danger {color: #a94442;background-color: #f2dede !important;border-color: #ebccd1;padding: 20px !important;}
	/*my tabs css*/
	.my-form-tabs{
		padding: 0px 0px 130px 0px ;
		margin-left: -10px;
	}
	
h1, h3{
  text-transform: uppercase;
  font-weight: normal;
}

.tabs{
    width: 600px;
    display: block;
    position: relative;
}

.tabs .tab{
    float: left;
    display: block;
}

.tabs .tab>input[type="radio"] {
    position: absolute;
    top: -9999px;
    left: -9999px;
}

.tabs .tab>label {
    display: block;
    padding: 6px 15px;
    font-size: 12px;
    text-transform: uppercase;
    cursor: pointer;
    position: relative;
    color: #FFF;
    background: #e9b342;
}

.tabs .content {
    z-index: 0;/* or display: none; */
    overflow: hidden;
    width: 356px;
    padding: 25px;
    position: absolute;
    top: 27px;
    left: 0;
    background: #a7a7a7;
    color: #DFDFDF;
    
    opacity:0;
    transition: opacity 400ms ease-out;
}

.tabs>.tab>[id^="tab"]:checked + label {
    top: 0;
    background: #a7a7a7;
    color: #F5F5F5;
}

.tabs>.tab>[id^="tab"]:checked ~ [id^="tab-content"] {
    z-index: 1;/* or display: block; */
   
    opacity: 1;
    transition: opacity 400ms ease-out;
}
</style>
<script type="text/javascript" src="<?php echo asset_url();?>js/Validform_v5.3.2_min.js"></script>
<link rel="stylesheet" type="text/css" href="<?php echo asset_url();?>css/style.css" />
<script src="<?php echo asset_url();?>js/login3aeb.js?v=1.1.334" type="text/javascript" charset="utf-8"></script>		
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
	

	 <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js"></script>
  <link href="//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css" rel="stylesheet">
  <script src="//cdn.jsdelivr.net/npm/alertifyjs@1.11.0/build/alertify.min.js"></script>

<script type="text/javascript"> 

// function sendotplogin()
// {
// window.location = '<?php echo tfauth_url();?>smsotp/sendotplogin';
// }




function sendotplogin()
{

  toastr.clear();
 var curr= "abc" ;


  jQuery.ajax({
    type:"POST",
    url:"<?php echo tfauth_url();?>smsotp/sendotplogin",
    data:"c="+curr,
    dataType:"text",
    success:function(result){

      result = JSON.parse(result)

      if(result.responseCode!=200)
      {
        
           toastr["error"](result.responseMessage);
      }
      else
      {
        toastr["success"](result.responseMessage);
      }

    }
  });

}


</script>

	
		<script type="text/javascript">
			
			  $(document).ready(function() {
    setTimeout(function(){ $(".alert").hide(); }, 5000);});
		</script>
		