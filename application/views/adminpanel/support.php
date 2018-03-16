
<?php 
ini_set('display_errors',1);
ini_set('max_execution_time', '7200');

$inbox = imap_open('{imap.gmail.com:993/imap/ssl}INBOX','prateekvermaphp@gmail.com','!prateek123') or die('Cannot connect to Gmail: ' . imap_last_error());

$emails = imap_search($inbox, 'SINCE "8 February 2018" ');


print_r($email);

die();
?>

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
                                             	<?php
ini_set('display_errors',1);
ini_set('max_execution_time', '7200');
//$hostname = '{imap.gmail.com:993/imap/ssl}INBOX';
// $username = 'sumaits702@gmail.com';
// $password = '@prateek123';
// $hostname='{imap.zoho.com:465/imap/ssl}/INBOX';
// $username='v.prateek@blockon.tech';
// $password='boosters';

$inbox = imap_open('{imap.gmail.com:993/imap/ssl}INBOX','prateekvermaphp@gmail.com','!prateek123') or die('Cannot connect to Gmail: ' . imap_last_error());

$emails = imap_search($inbox, 'SINCE "8 February 2018" ');


print_r($email);
if($emails)
 {
  rsort($emails); ?>

  <table class="table table-condensed table-striped table-hover table-bordered" id="payments">
  <h4 style="text-align:center;"></h4>
  <thead>
  <tr>
  <th width="4%">S.No</th>
  <th width="10%">Received From</th>
  <th width="40%">Subject</th>
  <th width="10%">Date</th>
  <th width="10%">Action</th>
  </tr>
  </thead>
  <tbody>
<?php
$i=1;
  foreach($emails as $email_number) {

  $overview = imap_fetch_overview($inbox,$email_number,0);
  $message = imap_fetchbody($inbox,$email_number,2);
  $mess1 = imap_fetchbody($inbox,$email_number,1);

  $re=$message;
  $msg_id=$overview[0]->uid;
  $receiving_from=$overview[0]->from;
  $subject=$overview[0]->subject;
  $date=date("Y-m-d h:i:s",strtotime($overview[0]->date));
  $message1=base64_encode($re);
  $mess=base64_encode($mess1);

  if(!in_array($overview[0]->uid,$alllead))
  { ?>

  <tr class="gradeA">
  <td><?php echo $i;?></td>
  <td><?php echo $overview[0]->from; ?></td>
  <td><?php echo $overview[0]->subject; ?></td>
  <td><?php echo date("Y-m-d h:i:s",strtotime($overview[0]->date)); ?></td>
  <div style="display:none; " id="desc<?php echo $i;?>"><?php echo base64_encode($re); ?></div>
  <td>
  <a href="#ProjectCostModelID" role="button" data-toggle="modal" class="btn btn-primary btn-xs" data-toggle="modal" title="View Mail Detail" onclick="viewMailDescription(<?php echo $i;?>);" >
  <i class="fa fa-fw fa-search-plus"></i></a>

  <a href="#ProjectCostModelID12" role="button" data-toggle="modal" class="btn btn-warning btn-xs" data-toggle="modal" title="Forward to team"
  onclick="movetolead('<?php echo $msg_id?>','<?php echo $receiving_from?>','<?php echo $subject?>','<?php echo $date?>','<?php echo $message1 ?>','<?php echo $mess;?>');" ><i class="fa fa-forward"></i></a>

  </td>
  </tr> <?php } $i++; }  ?>
  </tbody>
  </table>
<?php
}
?>
                                 <!--   <table id="payments" class="table responsive table-bordered table-stipend">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Date</th>
                                                <th>Name</th>
                                                <th>E-mail</th>
                                                <th>Price</th>
                                                <th>Discount</th>
                                                <th>Tax</th>
                                                <th>Total</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            <tr>
                                                <td><a href="#">#001</a></td>
                                                <td>03/02/2017</td>
                                                <td>Alanis Johnson</td>
                                                <td>Dr. Adrien</td>
                                                <td>100</td>
                                                <td>0</td>
                                                <td>20</td>
                                                <td>120</td>
                                                <td><span class="label label-success">Paid</span></td>
                                            </tr>
                                            <tr>
                                                <td><a href="#">#002</a></td>
                                                <td>03/02/2017</td>
                                                <td>Brian Mayer</td>
                                                <td>Dr. Adam</td>
                                                <td>100</td>
                                                <td>0</td>
                                                <td>10</td>
                                                <td>110</td>
                                                <td><span class="label label-warning">Pending</span></td>
                                            </tr>
                                            <tr>
                                                <td><a href="#">#003</a></td>
                                                <td>03/02/2017</td>
                                                <td>Alanis Johnson</td>
                                                <td>Dr. Adrien</td>
                                                <td>120</td>
                                                <td>0</td>
                                                <td>20</td>
                                                <td>120</td>
                                                <td><span class="label label-success">Paid</span></td>
                                            </tr>
                                            <tr>
                                                <td><a href="#">#004</a></td>
                                                <td>03/02/2017</td>
                                                <td>Brian Mayer</td>
                                                <td>Dr. Adam</td>
                                                <td>100</td>
                                                <td>0</td>
                                                <td>10</td>
                                                <td>110</td>
                                                <td><span class="label label-danger">Cancelled</span></td>
                                            </tr>
                                            <tr>
                                                <td><a href="#">#005</a></td>
                                                <td>03/02/2017</td>
                                                <td>Alanis Johnson</td>
                                                <td>Dr. Adrien</td>
                                                <td>120</td>
                                                <td>0</td>
                                                <td>20</td>
                                                <td>120</td>
                                                <td><span class="label label-success">Paid</span></td>
                                            </tr>
                                            <tr>
                                                <td><a href="#">#006</a></td>
                                                <td>03/02/2017</td>
                                                <td>Brian Mayer</td>
                                                <td>Dr. Adam</td>
                                                <td>100</td>
                                                <td>0</td>
                                                <td>10</td>
                                                <td>110</td>
                                                <td><span class="label label-warning">Pending</span></td>
                                            </tr>
                                            <tr>
                                                <td><a href="#">#007</a></td>
                                                <td>03/02/2017</td>
                                                <td>Alanis Johnson</td>
                                                <td>Dr. Adrien</td>
                                                <td>120</td>
                                                <td>0</td>
                                                <td>20</td>
                                                <td>120</td>
                                                <td><span class="label label-danger">Cancelled</span></td>
                                            </tr>
                                            <tr>
                                                <td><a href="#">#008</a></td>
                                                <td>03/02/2017</td>
                                                <td>Brian Mayer</td>
                                                <td>Dr. Adam</td>
                                                <td>100</td>
                                                <td>0</td>
                                                <td>10</td>
                                                <td>110</td>
                                                <td><span class="label label-warning">Pending</span></td>
                                            </tr>
                                            <tr>
                                                <td><a href="#">#009</a></td>
                                                <td>03/02/2017</td>
                                                <td>Alanis Johnson</td>
                                                <td>Dr. Adrien</td>
                                                <td>120</td>
                                                <td>0</td>
                                                <td>20</td>
                                                <td>120</td>
                                                <td><span class="label label-success">Paid</span></td>
                                            </tr>
                                            <tr>
                                                <td><a href="#">#010</a></td>
                                                <td>03/02/2017</td>
                                                <td>Brian Mayer</td>
                                                <td>Dr. Adam</td>
                                                <td>100</td>
                                                <td>0</td>
                                                <td>10</td>
                                                <td>110</td>
                                                <td><span class="label label-warning">Pending</span></td>
                                            </tr>
                                            <tr>
                                                <td><a href="#">#011</a></td>
                                                <td>03/02/2017</td>
                                                <td>Alanis Johnson</td>
                                                <td>Dr. Adrien</td>
                                                <td>120</td>
                                                <td>0</td>
                                                <td>20</td>
                                                <td>120</td>
                                                <td><span class="label label-success">Paid</span></td>
                                            </tr>
                                            <tr>
                                                <td><a href="#">#012</a></td>
                                                <td>03/02/2017</td>
                                                <td>Brian Mayer</td>
                                                <td>Dr. Adam</td>
                                                <td>100</td>
                                                <td>0</td>
                                                <td>10</td>
                                                <td>110</td>
                                                <td><span class="label label-warning">Pending</span></td>
                                            </tr>
                                            <tr>
                                                <td><a href="#">#013</a></td>
                                                <td>03/02/2017</td>
                                                <td>Alanis Johnson</td>
                                                <td>Dr. Adrien</td>
                                                <td>120</td>
                                                <td>0</td>
                                                <td>20</td>
                                                <td>120</td>
                                                <td><span class="label label-success">Paid</span></td>
                                            </tr>
                                            <tr>
                                                <td><a href="#">#014</a></td>
                                                <td>03/02/2017</td>
                                                <td>Brian Mayer</td>
                                                <td>Dr. Adam</td>
                                                <td>100</td>
                                                <td>0</td>
                                                <td>10</td>
                                                <td>110</td>
                                                <td><span class="label label-warning">Pending</span></td>
                                            </tr>
                                        </tbody>
                                    </table> -->
                                </div>
                            </div>
                        </div>
                    </div>
                   <!--  <div class="row">
                        <div class="col-xs-12">
                            <div class="box">
                                <div class="box-header">
                                    <h3 class="box-title">Responsive Hover Table</h3>
                                </div>
                               
                                <div class="box-body table-responsive no-padding">
                                    <table class="table table-hover">
                                        <tr>
                                            <th>ID</th>
                                            <th>User</th>
                                            <th>Date</th>
                                            <th>Status</th>
                                            <th>Reason</th>
                                        </tr>
                                        <tr>
                                            <td>183</td>
                                            <td>Bernie Ripley</td>
                                            <td>11-5-2015</td>
                                            <td><span class="label label-success">Approved</span></td>
                                            <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                        </tr>
                                        <tr>
                                            <td>219</td>
                                            <td>Bernie Ripley</td>
                                            <td>11-7-2014</td>
                                            <td><span class="label label-warning">Pending</span></td>
                                            <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                        </tr>
                                        <tr>
                                            <td>657</td>
                                            <td>Bernie Ripley</td>
                                            <td>11-7-2013</td>
                                            <td><span class="label label-primary">Approved</span></td>
                                            <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                        </tr>
                                        <tr>
                                            <td>175</td>
                                            <td>Bernie Ripley</td>
                                            <td>11-7-2012</td>
                                            <td><span class="label label-danger">Denied</span></td>
                                            <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                        </tr>
                                    </table>
                                </div>
                                
                            </div>
                           
                        </div>
                    </div> -->
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
