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
<?php 

if(isset($_GET['curr']))
{
  $currency =base64_decode($_GET['curr']);

  $curre=explode("/",$currency);
  $maincurr=$curre['0'];
  $subcurr=$curre['1'];
}

?>
<input type="hidden" id="maincurr" value="<?php echo $maincurr; ?>">
<input type="hidden" id="subcurr" value="<?php echo $subcurr; ?>">
  
    <?php $this->load->view('adminpanel/include/header');
    ini_set("display_errors",0);
    ?>
           <?php $this->load->view('adminpanel/include/menu');?>
            <!-- Content Wrapper -->
            <div class="content-wrapper">
                <section class="content-title">
                    <h1>
                       Market Detail
                        <small></small>
                    </h1>
                    <ol class="breadcrumb">
                        <li><a href="<?php echo admin_url().'dashboard'?>"><i class="fa fa-home"></i>Dashboard</a></li>
                        <li>Market Detail</li>
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
                                    <h3 class="box-title">Market Detail</h3>
                                </div>
                                <div  class="box-body">
                                    <div class="col-md-6 boxar">
                                        <h2>Bid Detail</h2>
                                        <div id="getallbids"></div>
                                    </div>
                                    <div class="col-md-6 boxar">
                                         <h2>Currency Detail</h2>
                                        <div id="getallmarketcurrency"></div>
                                    </div>                                 
                                   
                                    <div class="col-md-6 boxar">
                                         <h2>Ask Detail</h2>
                                        <div id="getallasks"></div>
                                    </div>
                                    
                                     <div class="col-md-6 boxar">
                                         <h2>Trade History</h2>
                                        <div id="getalltradehistory"></div>
                                    </div>
                                	
                                	
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
         
                getallbidsdetail();
                getallasksdetail();
                getalltradedetail();
                getallmarketcurrencydetail();
  				setTimeout(function(){ $(".alert").hide(); }, 5000);
            });

            function getallbidsdetail()
            {
              var maincurr=$("#maincurr").val();
              var subcurr=$("#subcurr").val();
            $('#getallbids').html('<img src="<?php echo asset_url()?>loader.gif" style="margin-left: 40%;">');
             $.post("<?php echo admin_url();?>marketdetail/getallbids",{
                   maincurr:maincurr,
                   subcurr:subcurr
              },
              function(data){
              $('#getallbids').html(data);
              //$('#getcurrencylist1').html(data);
              }
            ); 
               
            }

            function getallasksdetail()
            {
                var maincurr=$("#maincurr").val();
                var subcurr=$("#subcurr").val();
            $('#getallasks').html('<img src="<?php echo asset_url()?>loader.gif" style="margin-left: 40%;">');
             $.post("<?php echo admin_url();?>marketdetail/getallasks",{
                   maincurr:maincurr,
                   subcurr:subcurr
              },
              function(data){
              $('#getallasks').html(data);
              //$('#getcurrencylist1').html(data);
              }
            ); 
               
            }

            function getalltradedetail()
            {
                var maincurr=$("#maincurr").val();
                var subcurr=$("#subcurr").val();
            $('#getalltradehistory').html('<img src="<?php echo asset_url()?>loader.gif" style="margin-left: 40%;">');
             $.post("<?php echo admin_url();?>marketdetail/gettradehistory",{
                 maincurr:maincurr,
                subcurr:subcurr
              },
              function(data){
              $('#getalltradehistory').html(data);
              //$('#getcurrencylist1').html(data);
              }
            ); 
               
            }

            function getallmarketcurrencydetail()
            {
              

            $('#getallmarketcurrency').html('<img src="<?php echo asset_url()?>loader.gif" style="margin-left: 40%;">');
             $.post("<?php echo admin_url();?>marketdetail/getmarketcurrencylist",{
                
              },
              function(data){
              $('#getallmarketcurrency').html(data);
              //$('#getcurrencylist1').html(data);
              }
            ); 
               
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
.slider {position: absolute; cursor: pointer;top: 0;left: 0;right: 0;bottom: 0;background-color: #ce1414;-webkit-transition: .4s;transition: .4s;}
.slider:before {position: absolute;content: "";height: 26px;width: 26px;left: 4px;bottom: 4px;background-color: white;-webkit-transition: .4s;transition: .4s;}
input:checked + .slider {background-color: #2196F3;}
input:focus + .slider {box-shadow: 0 0 1px #2196F3;}
input:checked + .slider:before {-webkit-transform: translateX(26px);-ms-transform: translateX(26px);transform: translateX(26px);}
.slider.round {border-radius: 34px;}
.slider.round:before {border-radius: 50%;}
.boxar{border: 1px solid #ddd; padding: 3px; min-height: 300px;max-height: 300px; overflow-y: scroll;}
</style>
