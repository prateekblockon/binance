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
                       User Detail
                        <small></small>
                    </h1>
                    <ol class="breadcrumb">
                        <li><a href="<?php echo admin_url().'dashboard'?>"><i class="fa fa-home"></i>Dashboard</a></li>
                        <li>User Detail</li>
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
                                    <h3 class="box-title">User Detail</h3>
                                </div>
                                <div class="box-body" id="userlist">
                                 
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
                $("#payments").DataTable();
                $(".dataTables_filter input").addClass("dataTable_search");

                getuserlist();
            });

            function getuserlist()
            {
                $('#userlist').html('<img src="<?php echo asset_url()?>loader.gif" style="margin-left: 40%;">');
                 $.post("<?php echo admin_url();?>userlist/userlist",{
      
                  },
                  function(data){
                  $('#userlist').html(data);
                  $("#payments").DataTable();
                  $(".dataTables_filter input").addClass("dataTable_search");
                  }
                ); 
               
            }
             function userkycdetail(userid)
            {
                $.post("<?php echo admin_url();?>userlist/kycdetail",{
                    userid:userid
                  },
                  function(data){
                  $('#kycdetail').html(data);
                  // $("#payments").DataTable();
                  // $(".dataTables_filter input").addClass("dataTable_search");
                  }
                ); 
            }

            function useridbidask(userid)
            {
                $('#userid').val(userid);
                $('#bidaskstatus').val('');
                userbidaskdetail();
            }
           
            function userbidaskdetail()
            {
                var userid=$('#userid').val();
                var status=$('#bidaskstatus').val();
                $.post("<?php echo admin_url();?>userlist/userbidaskdata",{
                    userid:userid,
                    status:status
                  },
                  function(data){
                  $('#bidaskdetail').html(data);
                 // $("#bidaskdetailda").DataTable();
                  // $(".dataTables_filter input").addClass("dataTable_search");
                  }
                ); 
            }

            function kycrejectapprove(userid,status)
            {
                $.post("<?php echo admin_url();?>userlist/kycrejectapprove",{
                    userid:userid,
                    status:status
                  },
                  function(data){
                        getuserlist();
                 // $("#bidaskdetailda").DataTable();
                  // $(".dataTables_filter input").addClass("dataTable_search");
                  }
                ); 
            }


            function userbalances(userid)
            {
                $.post("<?php echo admin_url();?>userlist/userbalancedata",{
                    userid:userid
                  },
                  function(data){
                        $('#balancesdetail').html(data);
                 // $("#bidaskdetailda").DataTable();
                  // $(".dataTables_filter input").addClass("dataTable_search");
                  }
                ); 
            }

            function tfaupdate(userid,status)
            {

                $.post("<?php echo admin_url();?>userlist/tfaupdate",{
                    userid:userid,
                    status:status
                  },
                  function(data){
                        getuserlist();
                 // $("#bidaskdetailda").DataTable();
                  // $(".dataTables_filter input").addClass("dataTable_search");
                  }
                ); 
            }

  function enabledisableuserstatus(userid,status)
            {
                
                $.post("<?php echo admin_url();?>userlist/enabledisableuserstatus",{
                    userid:userid,
                    status:status
                  },
                  function(data){
                        getuserlist();
                 // $("#bidaskdetailda").DataTable();
                  // $(".dataTables_filter input").addClass("dataTable_search");
                  }
                ); 
            }


            function updateuserstatus(status)
            {
                if(status==true)
                {
                    stat='enable';
                }else{
                    stat='disable';
                }
                var r=confirm('Are you sure? you want to '+stat+' User.');
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

        </script>
    </body>




</html>

<style type="text/css">
    .btn-sm{
        min-width: 30px !important;
    }
    .modal-dialog{
        width:75% !important;
    }
    .tdclass
    {
        font-weight: bold;
    }
  /* .danger{background-color: #f2dede !important;}*/

.label{float:right;    margin: 1px;}
</style>

<!-- ============      Modal box kyc         ===========-->
<div id="kycmodal" class="modal fade" role="dialog">
  <div class="modal-dialog">

 
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Kyc Detail</h4>
      </div>
      <div class="modal-body">
        <div id="kycdetail"></div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>

<!-- ============      Modal box kyc         ===========-->
<!-- ============      Modal box Bid/Ask         ===========-->
<div id="bidaskmodal" class="modal fade" role="dialog">
  <div class="modal-dialog">

 
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Bid/Ask Detail</h4>
      </div>
      <div class="modal-body">
        <div class="row" style="float:left;margin-bottom:2%"><div class="col-md-12">
        <select name="bidaskstatus" id="bidaskstatus" class="form-control" onchange="userbidaskdetail();">
            <option value="">Select Type</option>
            <option value="BID">BID</option>
            <option value="ASK">ASK</option>
        </select> 
        <input type="hidden" name="userid" id="userid">
        </div></div>
        <div id="bidaskdetail">
            <table class="table responsive table-bordered table-stipend">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Date</th>
                                <th>Name</th>
                                <th>E-mail</th>
                                <th>Phone</th>
                                <th>Kyc</th>
                                <th>2 factor</th>
                                <th>Bid/Ask</th>
                                <th>Status</th>
                            </tr>
                        </thead>
            </table>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>

<!-- ============      Modal box Bid/Ask        ===========-->

<!-- ============      Modal box Balances         ===========-->
<div id="balancemodal" class="modal fade" role="dialog">
  <div class="modal-dialog">

 
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Balance Detail</h4>
      </div>
      <div class="modal-body">
        <div class="row" style="float:left;margin-bottom:2%"><div class="col-md-12">
       <!--  <select name="bidaskstatus" id="bidaskstatus" class="form-control" onchange="userbidaskdetail();">
            <option value="">Select Type</option>
            <option value="BID">BID</option>
            <option value="ASK">ASK</option>
        </select> --> 
       <!--  <input type="hidden" name="userid" id="userid"> -->
        </div></div>
        <div id="balancesdetail">
            <table class="table responsive table-bordered table-stipend">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Currency Name</th>
                                <th>Address</th>
                                <th>Balance</th>
                                <th>Freeze Balance</th>
                            </tr>
                        </thead>
            </table>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>

<!-- ============      Modal box Balances        ===========-->

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
</style>
