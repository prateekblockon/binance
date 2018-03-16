<!DOCTYPE html>
<html>
    
<head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title><?php echo project_name();?></title>
        <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
        <link rel="shortcut icon" href="<?php echo favicon_url();?>" />
        <link rel="stylesheet" href="<?php echo asset_url();?>css/bootstrap.min.css">
        <link href="<?php echo asset_url();?>css/font-awesome/css/font-awesome.min.css" rel="stylesheet">
        <link href="<?php echo asset_url();?>css/themify-icons/themify-icons.css" rel="stylesheet">
        <link rel="stylesheet" href="<?php echo asset_url();?>css/animate.css">
        <link rel="stylesheet" href="<?php echo asset_url();?>css/main-style.min.css">
        <link rel="stylesheet" href="<?php echo asset_url();?>css/all-skins.min.css">
        <link rel="stylesheet" href="<?php echo asset_url();?>css/demo.css">
        <link rel="stylesheet" href="<?php echo asset_url();?>css/dataTables.bootstrap.css">
        <link rel="stylesheet" href="<?php echo asset_url();?>css/responsivetables.css">
       

</head>
  
    <?php $this->load->view('adminpanel/include/header');
    ini_set("display_errors",0);
    ?>
           <?php $this->load->view('adminpanel/include/menu');?>
            <!-- Content Wrapper -->
            <div class="content-wrapper">
                <section class="content-title">
                    <h1>
                       Settings
                        <small></small>
                    </h1>
                    <ol class="breadcrumb">
                        <li><a href="<?php echo admin_url().'dashboard'?>"><i class="fa fa-home"></i>Dashboard</a></li>
                        <li>Settings</li>
                    </ol>
                </section>
                <section class="content">
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
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="box">
                                <div class="box-header">
                                    <h3 class="box-title">Settings</h3>
                                </div>
                                <div  class="box-body">
                                	<div id="getswitcheslist"></div>
                                	
                                </div>
                            </div>
                        </div>
                    </div>
                 
                </section>
                <!-- /. main content -->
                <span class="return-up"><i class="fa fa-chevron-up"></i></span>
            </div>
           

              <?php $this->load->view('adminpanel/include/footer');?>


         <script src="<?php echo asset_url();?>js/jquery-2.2.3.min.js"></script>
        <script src="<?php echo asset_url();?>js/jquery.fullscreen-min.js"></script>
        <script src="<?php echo asset_url();?>js/bootstrap.min.js"></script>
        <script src="<?php echo asset_url();?>js/jquery.slimscroll.min.js"></script>
        <script src="<?php echo asset_url();?>js/Chart.min.js"></script>
        <script src="<?php echo asset_url();?>js/jquery.sparkline.min.js"></script>
        <script src="<?php echo asset_url();?>js/app.min.js"></script>
        <script src="<?php echo asset_url();?>js/demo.js"></script>



        <script src="<?php echo asset_url();?>js/jquery.dataTables.min.js"></script>
        <script src="<?php echo asset_url();?>js/dataTables.bootstrap.min.js"></script>
        <script src="<?php echo asset_url();?>js/responsivetables.js"></script>
        <!-- Slimscroll is required when using the fixed layout. -->
        <script>
            $(function () {
         
                getswitcheslist();
                setTimeout(function(){ $(".alert").hide(); }, 5000);
            });

            function getswitcheslist()
            {

            $('#getswitcheslist').html('<img src="<?php echo asset_url()?>loader.gif" style="margin-left: 40%;">');
             $.post("<?php echo admin_url();?>settings/getswitcheslist",{
  
              },
              function(data){
              $('#getswitcheslist').html(data);
              }
            ); 
               
            }

            function updateexchnagestatus(status)
            {
            	if(status==true)
            	{
            		stat='enable';
            	}else{
            		stat='disable';
            	}
            	var r=confirm('Are you sure? you want to '+stat+' exchange.');
            	  if (r == true) {  
	             $.post("<?php echo admin_url();?>settings/enabledisableexchnagestatus",{
	  				status:status
	              },
	              function(data){
	              	window.location.reload();
	              }
	            ); 
	         	}else{
	         		return false;
	         	}
            }


            function updatesignupstatus(status)
            {
            	if(status==true)
            	{
            		stat='enable';
            	}else{
            		stat='disable';
            	}

                console.log(status);
            	var r=confirm('Are you sure? you want to '+stat+' signup.');
            	  if (r == true) {  
	             $.post("<?php echo admin_url();?>settings/enabledisablesignupstatus",{
	  				status:status
	              },
	              function(data){
                    window.location.reload();
	              }
	            ); 
	         	}else{
	         		return false;
	         	}
            }
          
        </script>
    </body>




</html>

<style type="text/css">
.btn-sm{min-width: 30px !important;}
.modal-dialog{width:75% !important;}
.tdclass{font-weight: bold;}
.label{float:right;margin: 1px;}
.switch {position: relative;display: inline-block;width: 60px;height: 34px;}
.switch input {display:none;}
.slider {position: absolute; cursor: pointer;top: 0;left: 0;right: 0;bottom: 0;background-color: #2196F3;-webkit-transition: .4s;transition: .4s;}
.slider:before {position: absolute;content: "";height: 26px;width: 26px;left: 4px;bottom: 4px;background-color: white;-webkit-transition: .4s;transition: .4s;}
input:checked + .slider {background-color: #ce1414;}
input:focus + .slider {box-shadow: 0 0 1px #ce1414;}
input:checked + .slider:before {-webkit-transform: translateX(26px);-ms-transform: translateX(26px);transform: translateX(26px);}
.slider.round {border-radius: 34px;}
.slider.round:before {border-radius: 50%;}
</style>
