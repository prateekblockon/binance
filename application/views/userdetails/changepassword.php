<?php 
$this->load->view('include/all_header');
$this->load->view('include/ajax');
?>
  <style>
body {
  background: #f7f7f7
}

.wrap {
  background: #f7f7f7;
  min-width: 1200px;
}

.container {
  width: 1200px;
  margin: 0 auto;
}

.midContainer {
  width: 960px;
  margin: 0 auto;
  background: #fff;
}

.alerta {
    margin: 15px auto;
    color: #b48728;
    font-size: 12px;
    background: #fcf8e5;
    border: 1px solid #f8ebcf;
    height: 40px;line-height: 40px;
    padding-left: 18px;padding: 0 0 0 18px;
    width: 940px
}

.safetitle {
  font-size: 16px;
  line-height: 20px;
  color: #454545;
  padding: 13px 0 13px 18px;
  border-bottom: 1px solid #efefef;
}

.safecontent {
  color: #666;
  font-size: 14px;
}

.safecontent form {
  padding: 0 35px;
  margin: 60px auto;
  width: 470px;
}

.safecontent form label {
  font-size: 14px;
  color: #666;
  display: block;
  margin-bottom: 12px;
  display: inline-block;
  width: 166px;
  text-align: right;
}

.safecontent form input {
  display: inline-block;
  height: 32px;
  border: 1px solid #d4d4d4;
  width: 270px;
  box-sizing: border-box;
  padding: 0 10px;
  color: #333;
}

.safecontent form .ipt-code {
  width: 195px;
}

.safecontent form .btn {
  border-radius: 0 !important;
  padding: 10px 0;
  width: 150px;
  text-align: center;
  vertical-align: middle;
}

.safecontent form .btn:hover {
  color: #e8b342;
}

.country {
  display: inline-block;
  width:72px;
  text-align: center;
  border: 1px solid #d4d4d4;
  margin-right: -5px;
  border-right: none;
  height: 32px;
  line-height: 32px;
  vertical-align: top;
}

.country-list {
      width: 375px;
    position: absolute;
    top: 34px;
    left: 162px;
    z-index: 99999999;
}
.country-list ul{
border: 1px solid #d4d4d4;

background: #fff
}
.country-list ul li {
  padding: 0 7px;
  height: 31px;
  line-height: 31px;

}
.country-list ul li:hover{color: #e8b342;background: #fdfaf5}

.country-list ul li div{
height:31px;
  border-bottom: 1px solid #d4d4d4;
  }
.country-list ul li:last-of-type div{border-bottom: none}
.scrollStyle{overflow-y:auto;   height: 163px;} 
</style>
  
    
    <div class="main">
      <div class="container">
     
        <div class="kline-para">
          
        </div>
      
        <div class="main-body">
        
          <!-- 左侧 -->
          <div class="main-left">
            <!-- 深度 -->
            <div>
              <div  id="askScrollBox" >
  
              </div>
              
              <div  id="bidScrollBox" >
              </div>
            </div>
          </div>
          
        </div>
        
        
        <!-- user records -->
      
          
          
<div class="container midContainer" ng-controller="modifyPwdCtr">
  
  <div class="safetitle">Modify Login Password</div>
  <div class="safecontent">
    <div class="addressManament-form">
    <?php if($this->session->flashdata('success')){ ?>
            <div class="alert alert-block alert-success">
                <button type="button" class="btn btn-success" data-dismiss="alert"><i class="icon-remove"></i></button>
                <strong>Success!</strong> <?php echo $this->session->flashdata('success'); ?>
            </div>
        <?php }else if($this->session->flashdata('error')){  ?>
            <div class="alert alert-block alert-danger">
                <button type="button" class="close" data-dismiss="alert"><i class="icon-remove"></i></button>
                <strong>Error!</strong> <?php echo $this->session->flashdata('error'); ?>
           </div>
           <?php } ?> 
      <div class="leftBox">
        <form action="<?php echo userdetails_url();?>changepassword/changepassword" method="post" id="changepassform">
          <div class="filed">
            <label>Old Password: </label> 
            <input id="oldPassword" name="oldPassword"   type="password"  />
            
          </div>
          <div class="filed">
            <label>New Password: </label> 
            <input id="newPassword" name="newPassword"   type="password" />
             
          </div>
          <div class="filed">
            <label>Confirm Password: </label> 
            <input id="repeatPassword" name="repeatPassword"  recheck="userPassword"  type="password" />
             
          </div>
        
          
          <div class="filed">
            <label></label> 
            <input type="submit" value="Change Password" class="btn btn-orange" style="width: 156px; text-align: center; padding: 10px 20px;" />
          </div>
        </form>
      </div>
    

    </div>
  </div>
  

    <?php $this->load->view('include/footer');  ?>
  
 <script>
 $(document).ready(function(){
      setTimeout(function(){ $(".alert").hide(); }, 5000);

   $('input:text').val('');
 });
 $(document).ready(function(){
   $('input:password').val('');
  });
  
  </script>



<style>
.x_panel {
    color: #73879C;
    font-family: "Helvetica Neue",Roboto,Arial,"Droid Sans",sans-serif;
    font-size: 13px;
}
  label.error
  {
    text-shadow:none !important;
    color: red !important;
    font-style : normal !important;
  }
  </style>

  
  
  </body>
</html>

