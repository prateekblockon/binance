<!DOCTYPE html>
<html>

<meta http-equiv="content-type" content="text/html;charset=UTF-8" />
<head>
	<meta charset="utf-8" />
	<meta name="format-detection" content="telephone=no,email=no,address=no">
<title><?php echo project_name();?></title>
	<link rel="stylesheet" type="text/css" href="<?php echo asset_url();?>css/global3aeb.css"/>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

	        <link rel="icon" href="<?php echo favicon_url();?>" type="image/x-icon" />


	<script id="loadeden" src="<?php echo asset_url();?>js/en3aeb.js"></script>

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
			<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8/jquery.min.js"/>

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
					
						<form  id="signupform" class="loginReg-form" action="<?php echo userdetails_url()?>register/register" method="POST"  >
						 <h3 class="LRtitle"><span>Register</span></h3> 
					

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
							<input  id="email" type="text"  autocomplete="off" placeholder="Email Address" class="ipt fillemail" name="email" />
						</div>
						
						<div class="filed">
							<input  type="password"  placeholder="Password" autocomplete="off" class="ipt pwd" name="userPassword" id="regiterPassword"  />
							
						</div>
						
						
						
						
						<input style="display: none" id="ts" type="text""   name="ts"  />

						<div class="filed">
							<label class=" aggreement"><input id="agreement"  type="checkbox" required datatype="checked"  style="margin: 0px 15px 0;"/> I agree <?php echo project_name();?> Terms Of Use</label>
						</div>
						
						<div class="filed">
					<button type="submit" lass="btn btn-primary" class="btn btn-orange btn-block" style="width: 100%; border-radius: 25px;margin: 0px auto;">Register</button>	
				    	</div> 
						<div class="filde">
							<p class="f-fr login-tip">Already Registered? <a href="<?php echo userdetails_url();?>login" class="yellow">Login</a></p>
						</div>
					</form> 
					
				</div>
			</div>


			<script type="text/javascript" src="<?php echo asset_url();?>js/Validform_v5.3.2_min.js"></script>
			<link rel="stylesheet" type="text/css" href="<?php echo asset_url();?>css/style.css" />
			<script src="<?php echo asset_url();?>js/gt.js"></script>




						</div>
						<div class="verifyBottom">
							<div class="item lang">
								<a href="index.html">Home</a>　<a href="" target="_blank">support</a>　|　<span>English</span> 
							</div>
							<div class="item">© 2018 <?php echo project_name();?> All Rights Reserved</div>
						</div>
					</div>
		
		
			
		  <script src="https://jqueryvalidation.org/files/lib/jquery.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.16.0/jquery.validate.min.js"></script>

 <script>

  function isNumberKeyOnly(evt){
    var charCode = (evt.which) ? evt.which : event.keyCode
    if ((charCode >= 48 && charCode <= 57) || (charCode == 8) )
        return true;
    return false;
}



$(document).ready(function() {
 $('#inputcap').bind('copy paste cut',function(e) {
 e.preventDefault(); //disable cut,copy,paste

 });
});

$(document).ready(function() {
 $('#feedCaptchaDiv').bind('copy paste cut',function(e) {
 e.preventDefault(); //disable cut,copy,paste

 });
});


$(document).ready(function() {
$('input').prop('value','');
captchaq();
   });

function captchaq()
{
	var a1 = Math.ceil(Math.random() * 9)+ '';
	var b1 = Math.ceil(Math.random() * 9)+ '';
	var c1 = Math.ceil(Math.random() * 9)+ '';
	var d1= Math.ceil(Math.random() * 9)+ '';
	var e1 = Math.ceil(Math.random() * 9)+ '';

	var code1 = a1 + b1 + c1 + d1 + e1;
	document.getElementById("feedcaptext").value = code1;
	document.getElementById("feedCaptchaDiv").innerHTML = code1;
    document.getElementById("inputcap").value = '';
}


   $.validator.setDefaults({
    submitHandler: function() {
      return true;
    }
  });


   function resetfun()
   {
    window.location.reload();
   }

  $(document).ready(function() {
    setTimeout(function(){ $(".alert").hide(); }, 5000);
$("#sendform").validate();
    jQuery.validator.addMethod("lettersonly", function(value, element) {
  return this.optional(element) || /^[a-z]+$/i.test(value);
}, "Please enter valid name");

     jQuery.validator.addMethod("numbersonly", function(value, element) {
  return this.optional(element) || /^[0-9]+$/i.test(value);
}, "Please enter numbers only");


// [a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+
//[_a-z0-9-]+(.[a-z0-9-]+)@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})
     jQuery.validator.addMethod("lettersnumber", function(value, element) {
   return this.optional(element) || /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{5,}$/i.test(value);
 }, "Please enter atleast 1 alphabet , 1 number and 1 special character($@$!%*#?&) ");


      jQuery.validator.addMethod("emailnew", function(value, element) {
    return this.optional(element) || /^[_a-z0-9-]+(.[a-z0-9-]+)@[a-z0-9-]+\.[a-zA-Z0-9-.]+$/i.test(value);
  }, "Please enter valid email address");






    $("#signupform").validate({

      rules: {

        fname: {
          required: true,
          minlength: 2,
          maxlength: 32,
          lettersonly: true

        },
   mname: {
        
          minlength: 2,
          maxlength: 32,
          lettersonly: true

        },

        lname: {
          required: true,
          minlength: 2,
          maxlength: 32,
          lettersonly: true

        },
        userPassword: {
          required: true,
          minlength: 5,
  lettersnumber:true
        },
  
          email: {
          required: true,
          emailnew: true
        }

   
      },
      messages: {
        fname: {
          required: "Please Enter First Name",
          minlength: "Your name must have at least 2 characters",
          maxlength: "Your name must be at least 32 characters",


        },
        mname: {
         
          minlength: "Your name must have at least 2 characters",
          maxlength: "Your name must be at least 32 characters",


        },

        lname: {
          required: "Please Enter Last Name",
          minlength: "Your name must have at least 2 characters",
          maxlength: "Your name must be at least 32 characters",


        },
        userPassword: {
          required: "Please Enter Password",
          minlength: "Your password must be at least 5 characters long",
        },
        email: {
          required: "Please enter Email-address",

        }


      }
    }); });



  </script>

  <link rel="stylesheet" href="https://jqueryvalidation.org/files/demo/css/screen.css">


<style>


  label.error
  {
    text-shadow:none !important;
    color: coral !important;
    font-style : normal !important;
  }
  </style>

		
</body>


</html>
