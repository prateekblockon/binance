<!DOCTYPE html>
<html>

<head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title><?php echo project_name();?></title>
        <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
        <link rel="shortcut icon" href="<?php echo favicon_url();?>" />
        <link rel="stylesheet" href="<?php echo asset_url();?>css/bootstrap.min.css">
        <!-- <link rel="stylesheet" href="vendor/iCheck/all.css" />  -->
        <link href="<?php echo asset_url();?>css/font-awesome/css/font-awesome.min.css" rel="stylesheet">
        <link href="<?php echo asset_url();?>css/themify-icons/themify-icons.css" rel="stylesheet">
        <link rel="stylesheet" href="<?php echo asset_url();?>css/main-style.min.css">
        <link rel="stylesheet" href="<?php echo asset_url();?>css/all-skins.min.css">
        <link rel="stylesheet" href="<?php echo asset_url();?>css/demo.css">

</head>
    <body class="skin-blue login-page">

        <div class="box-login">
            <div class="box-login-body">
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
            
                <h3><span><b><?php echo project_name();?> Admin</b></span></h3>
                <p class="box-login-msg">&nbsp;&nbsp;&nbsp;</p>
                <form class="login-form" action="<?php echo admin_url().'signin/login'?>" method="post" id="loginform">
                    <div class="form-group ">
                        <!-- <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span> -->
                        <input type="email" class="form-control" type="text" name='email' id="email" placeholder="Email"  required="required" />
                    </div>
                    <div class="form-group">
                        <!-- <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span> -->
                        <input class="form-control" type="password" name='pwd' id="pwd" placeholder="Password" required="required" />
                    </div>
                    <div class="form-group">
                       <!--  <span class="input-group-addon"><i class="fa fa-key"></i></span> -->
                        <input class="form-control" type="text" name='captcha' placeholder="Captcha Code" id="captha" style="width: 60%;margin-right: 5%;display: inline;" required="required" />
                        <a href="javascript:;" disabled><b><span id="captchaDiv" style="display: inline;"></span></b></a>
                        <input type="hidden" name="captext" id="captext">
                    </div>
                    <!-- <div class="form-group input-group">
                        <div class="checkbox">
                            <label for="terms" style="padding-left: 12px;">
                                <input class="icheck_flat_20" type="checkbox" id="terms"> Remember Me
                            </label>
                        </div>
                    </div> -->
                    <div class="form-group form-action" style="margin-top: 10%;">
                        <button type="submit" class="btn btn-block btn-primary">Sign In</button>
                    </div>
                    <!-- <div style="margin-top:10px; margin-bottom: 10px; text-align:center;"><a href="sign-up.html">Register</a> if you don't have account</div> -->
                    <!-- <div class="form-group text-center">
                        <a href="forgot-password.html">Forgot Password</a>&nbsp;|&nbsp;<a href="#">Support</a>
                    </div> -->
                </form>
            </div>
        </div>
		<div class="skins">
            <ul class="skin-colors">
                <li data-skin="skin-green-gradient" style="background-image: -ms-linear-gradient(left, #43a047 0%, #66bb6a 100%); background-image: -moz-linear-gradient(left, #43a047 0%, #66bb6a 100%); background-image: -o-linear-gradient(left, #43a047 0%, #66bb6a 100%); background-image: -webkit-gradient(linear, left top, right top, color-stop(0, #43a047), color-stop(100, #66bb6a)); background-image: -webkit-linear-gradient(left, #43a047 0%, #66bb6a 100%); background-image: linear-gradient(to right, #43a047 0%, #66bb6a 100%);"></li>
                <li data-skin="skin-purple-gradient" style="background-image: -ms-linear-gradient(left, #893de3 0%, #be3af0 100%); background-image: -moz-linear-gradient(left, #893de3 0%, #be3af0 100%); background-image: -o-linear-gradient(left, #893de3 0%, #be3af0 100%); background-image: -webkit-gradient(linear, left top, right top, color-stop(0, #893de3), color-stop(100, #be3af0)); background-image: -webkit-linear-gradient(left, #893de3 0%, #be3af0 100%); background-image: linear-gradient(to right, #893de3 0%, #be3af0 100%);"></li>
                <li data-skin="skin-deep-orange-gradient" style="background-image: -ms-linear-gradient(left, #ff5722 0%, #ff7043 100%); background-image: -moz-linear-gradient(left, #ff5722 0%, #ff7043 100%); background-image: -o-linear-gradient(left, #ff5722 0%, #ff7043 100%); background-image: -webkit-gradient(linear, left top, right top, color-stop(0, #ff5722), color-stop(100, #ff7043)); background-image: -webkit-linear-gradient(left, #ff5722 0%, #ff7043 100%); background-image: linear-gradient(to right, #ff5722 0%, #ff7043 100%);"></li>
                <li data-skin="skin-red" style="background-color: #d50000;"></li>
				<li data-skin="skin-cyan" style="background-color: #00acc1;"></li>
                <li data-skin="skin-blue" style="background-color: #29B6F6;"></li>
                <li data-skin="skin-indigo-gradient" style="background-image: -ms-linear-gradient(left, #3949ab 0%, #3f51b5 100%); background-image: -moz-linear-gradient(left, #3949ab 0%, #3f51b5 100%); background-image: -o-linear-gradient(left, #3949ab 0%, #3f51b5 100%); background-image: -webkit-gradient(linear, left top, right top, color-stop(0, #3949ab), color-stop(100, #3f51b5)); background-image: -webkit-linear-gradient(left, #3949ab 0%, #3f51b5 100%); background-image: linear-gradient(to right, #3949ab 0%, #3f51b5 100%);"></li>
                <li data-skin="skin-brown-gradient" style="background-image: -ms-linear-gradient(left, #5d4037 0%, #6d4c41 100%); background-image: -moz-linear-gradient(left, #5d4037 0%, #6d4c41 100%); background-image: -o-linear-gradient(left, #5d4037 0%, #6d4c41 100%); background-image: -webkit-gradient(linear, left top, right top, color-stop(0, #5d4037), color-stop(100, #6d4c41)); background-image: -webkit-linear-gradient(left, #5d4037 0%, #6d4c41 100%); background-image: linear-gradient(to right, #5d4037 0%, #6d4c41 100%);"></li>
                <li data-skin="skin-yellow" style="background-color: #fdd835;"></li>
                <li data-skin="skin-pink-gradient" style="background-image: -ms-linear-gradient(left, #d81b60 0%, #e91e63 100%); background-image: -moz-linear-gradient(left, #d81b60 0%, #e91e63 100%); background-image: -o-linear-gradient(left, #d81b60 0%, #e91e63 100%); background-image: -webkit-gradient(linear, left top, right top, color-stop(0, #d81b60), color-stop(100, #e91e63)); background-image: -webkit-linear-gradient(left, #d81b60 0%, #e91e63 100%); background-image: linear-gradient(to right, #d81b60 0%, #e91e63 100%);"></li>
                <li data-skin="skin-grey" style="background-color: #212121;"></li>
                <li data-skin="skin-black" style="background-color: #000000;"></li>
            </ul>
            <!-- <ul class="layout-select">
                <li data-layout="">General Layout</li>
                <li data-layout="layout-boxed">Layout Boxed</li>
                <li data-layout="fixed">Layout Fixed</li>
            </ul>
            <ul class="sidebar-select">
                <li data-sidebar="sidebar-mini">Sidebar Mini</li>
                <li data-sidebar="sidebar-collapse">Sidebar Collapse</li>
            </ul> -->
            <span class="skin-toggler"><i class="fa fa-gear fa-spin"></i></span>
        </div>
        <!-- JS scripts -->
        <script src="<?php echo asset_url();?>js/jquery-2.2.3.min.js"></script>
        <script src="<?php echo asset_url();?>js/bootstrap.min.js"></script>
        <script src="<?php echo asset_url();?>js/icheck.min.js"></script>
        <script src="<?php echo asset_url();?>js/jquery-icheck.js"></script>
       <!--  <script src="vendor/fastclick/fastclick.min.js"></script> -->
		<script src="<?php echo asset_url();?>js/demo.js"></script>
       <!--   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script> -->
   <!--  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script> -->
    </body>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.17.0/jquery.validate.js"></script> 
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.16.0/jquery.validate.min.js"></script>
    <script type="text/javascript">
$(document).ready(function() {

var a1 = Math.ceil(Math.random() * 9)+ '';
var b1 = Math.ceil(Math.random() * 9)+ '';
var c1 = Math.ceil(Math.random() * 9)+ '';
var d1= Math.ceil(Math.random() * 9)+ '';
var e1 = Math.ceil(Math.random() * 9)+ '';

var code1 = a1 + b1 + c1 + d1 + e1;
document.getElementById("captext").value = code1;
document.getElementById("captchaDiv").innerHTML = code1;
setTimeout(function(){ $(".alert").hide(); }, 5000);
});

$.validator.setDefaults({
    submitHandler: function() {
      return true;
    }
  });
$(document).ready(function() {
    jQuery.validator.addMethod("emailne", function(value, element) {
    return this.optional(element) || /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(value);
  }, "Please enter valid email address");
 jQuery.validator.addMethod("passwordonly", function(value, element) {
return this.optional(element) || /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{5,}$/i.test(value);
}, "Please enter atleast 1 alphabet , 1 number and 1 special character($@$!%*#?&) ");



});

$("#loginform").validate({
      rules: {
        
        password: {
          required: true,
          minlength: 5,
          passwordonly:true
        },
        
        email: {
          required: true,
          email:true,
          emailne:true
        },
        captha: {
          required: true
        }
      },
      messages: {
        
        password: {
          required: "Please enter Password",
          minlength: "Your password must be at least 5 characters long",
          
        },email: {
          required: "Please enter Email-address",
          
        },captha: {
          required: "Please enter Captcha",
          
        },
        
        email: "Please enter a valid email address",
        
      }

    });


    </script>
<style type="text/css">
    #captchaDiv {
    font-size: 25px;
    margin-top: 7px;
    font-weight: bold;
   
}
</style>
</html>

<!-- <link rel="stylesheet" href="https://jqueryvalidation.org/files/demo/css/screen.css"> -->
<link rel="stylesheet" href="https://jqueryvalidation.org/files/demo/site-demos.css">