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


</head>
          <?php $this->load->view('adminpanel/include/header');?>
           <?php $this->load->view('adminpanel/include/menu');?>
            <div class="content-wrapper">
                <section class="content-title">
                    <h1>
                        Welcome to <?php echo project_name();?> Dashboard
                        <small></small>
                    </h1>
                    <ol class="breadcrumb">
                        <li><a href="#"><i class="fa fa-home"></i>Dashboard</a></li>
                    </ol>
                </section>
                <section class="content">
                    <div class="row">
                        <div class="col-sm-6 col-lg-3">
                            <div class="info-box">
                                <div class="info-box-content">
                                    <i class="fa fa-users text-yellow"></i>
                                    <div class="text-center value"><?php echo $usercount;?></div>
                                    <div class="text-muted text-uppercase text-center">Total Users</div>
                                </div>
                            </div>
                        </div>
                        <!--/.col-->
                        <div class="col-sm-6 col-lg-3">
                            <div class="info-box">
                                <div class="info-box-content">
                                    <i class="fa fa-users text-green"></i>
                                    <div class="text-center value"><?php echo $activeusercount;?></div>
                                    <div class="text-muted text-uppercase text-center">Active Users</div>
                                </div>
                            </div>
                        </div>
                        <!--/.col-->
                        <div class="col-sm-6 col-lg-3">
                            <div class="info-box">
                                <div class="info-box-content">
                                    <i class="fa fa-users text-maroon"></i>
                                    <div class="text-center value"><?php echo $deactiveusercount?></div>
                                    <div class="text-muted text-uppercase text-center">Deactive Users</div>
                                </div>
                            </div>
                        </div>
                        <!--/.col-->
                        <div class="col-sm-6 col-lg-3">
                            <div class="info-box">
                                <div class="info-box-content">
                                    <i class="fa fa-user-times text-light-blue"></i>
                                    <div class="text-center value"><?php echo $blockusercount;?></div>
                                    <div class="text-muted text-uppercase text-center">Block Users</div>
                                </div>
                            </div>
                        </div>
                        <!--/.col-->
                    </div>

                     <div class="row">
                        <div class="col-sm-6 col-lg-3">
                            <div class="info-box">
                                <div class="info-box-content">
                                    <i class="fa fa-file text-yellow"></i>
                                    <div class="text-center value"><?php echo $kycusercount;?></div>
                                    <div class="text-muted text-uppercase text-center">Total Kyc Users</div>
                                </div>
                            </div>
                        </div>
                        <!--/.col-->
                        <div class="col-sm-6 col-lg-3">
                            <div class="info-box">
                                <div class="info-box-content">
                                    <i class="fa fa-check-square-o text-green"></i>
                                    <div class="text-center value"><?php echo $akycusercount;?></div>
                                    <div class="text-muted text-uppercase text-center">Approved Kyc Users</div>
                                </div>
                            </div>
                        </div>
                        <!--/.col-->
                        <div class="col-sm-6 col-lg-3">
                            <div class="info-box">
                                <div class="info-box-content">
                                    <i class="fa fa-exclamation-triangle text-maroon"></i>
                                    <div class="text-center value"><?php echo $pkyckusercount?></div>
                                    <div class="text-muted text-uppercase text-center">Pending Kyc Users</div>
                                </div>
                            </div>
                        </div>
                        <!--/.col-->
                        <div class="col-sm-6 col-lg-3">
                            <div class="info-box">
                                <div class="info-box-content">
                                    <i class="fa fa-user-times text-light-blue"></i>
                                    <div class="text-center value"><?php echo $rkyckusercount;?></div>
                                    <div class="text-muted text-uppercase text-center">Reject Kyc Users</div>
                                </div>
                            </div>
                        </div>
                        <!--/.col-->
                    </div>
                <!--     <div class="box">
                        <div class="box-header">
                            <h3 class="box-title">Hospital Survey</h3>
                            <div class="box-tools pull-right">
                                <a href="#" class=" btn-box-tool">View all</a>
                            </div>
                        </div>
                     
                        <div class="box-body">
                            <canvas id="myChart" style="display: block; width: 1200px; height: 280px;" width="1200" height="280"></canvas>
                        </div>
                       
                    </div> -->
                   <!--  <div class="row">
                        <div class="col-sm-12 col-lg-4">
                            <div class="box">
                                <div class="box-header">
                                    <h3 class="box-title">New Patients
                                        <small class="text-muted">10% High then last month</small>
                                    </h3>
                                </div>
                             
                                <div class="box-body">
                                    <div class="stats-report">
                                        <div class="stat-item">
                                            <h6>Overall</h6>
                                            <b>45.00%</b>
                                        </div>
                                        <div class="stat-item">
                                            <h6>Montly</h6>
                                            <b>30.40%</b>
                                        </div>
                                        <div class="stat-item">
                                            <h6>Day</h6>
                                            <b>14.50%</b>
                                        </div>
                                    </div>
                                    <div id="sparkline1" class="sparkline">
                                        <canvas style="display: inline-block; width: 482px; height: 150px; vertical-align: top;" width="482" height="150"></canvas>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                     
                        <div class="col-sm-12 col-lg-4">
                            <div class="box">
                                <div class="box-header">
                                    <h3 class="box-title">Heart Sugeries
                                        <small class="text-muted">5% High then last month</small>
                                    </h3>
                                </div>
                      
                                <div class="box-body">
                                    <div class="stats-report">
                                        <div class="stat-item">
                                            <h6>Overall</h6>
                                            <b>27.00%</b>
                                        </div>
                                        <div class="stat-item">
                                            <h6>Montly</h6>
                                            <b>14.20%</b>
                                        </div>
                                        <div class="stat-item">
                                            <h6>Day</h6>
                                            <b>10.15%</b>
                                        </div>
                                    </div>
                                    <div id="sparkline2" class="sparkline">
                                        <canvas style="display: inline-block; width: 482px; height: 150px; vertical-align: top;" width="482" height="150"></canvas>
                                    </div>
                                </div>
                          
                            </div>
                        </div>
                      
                        <div class="col-sm-12 col-lg-4">
                            <div class="box">
                                <div class="box-header">
                                    <h3 class="box-title">Treatment
                                        <small class="text-muted">12% less then last month</small>
                                    </h3>
                                </div>
                              
                                <div class="box-body">
                                    <div class="stats-report">
                                        <div class="stat-item">
                                            <h6>Overall</h6>
                                            <b>50.10%</b>
                                        </div>
                                        <div class="stat-item">
                                            <h6>Montly</h6>
                                            <b>45.00%</b>
                                        </div>
                                        <div class="stat-item">
                                            <h6>Day</h6>
                                            <b>24.50%</b>
                                        </div>
                                    </div>
                                    <div id="sparkline3" class="sparkline">
                                        <canvas style="display: inline-block; width: 482px; height: 150px; vertical-align: top;" width="482" height="150"></canvas>
                                    </div>
                                </div>
                        
                            </div>
                        </div>
                  
                    </div> -->
                     <div class="box">
                        <div class="box-header">
                            <h3 class="box-title">Last login List</h3>
                            <!-- <div class="box-tools pull-right">
                                <a href="#" class=" btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></a>
                                <a href="#" class=" btn-box-tool">View all</a>
                            </div> -->
                        </div>
                     
                        <div class="box-body">
                            <div class="table-responsive">
                                <table id="payments" class="table responsive table-bordered table-stipend dataTable no-footer">
                                    <thead>
                                        <tr>
                                            <th>Login Date & Time</th>
                                            <th>IP Address</th>
                                            <th>Location</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                     <?php
                                     $i = 0;
                                     foreach($login as $key=>$logd)
                                        {
                                          $i++;     

                                          echo '<tr>';
                                          echo '<td class="f-left" >'.date('Y-M-d h:i:s',strtotime($logd['time'])).'</td>';
                                          echo '<td class="f-center">'.$logd['ip'].'</td>';
                                          echo '<td class="f-center">'.$logd['location'].'</td>';
                                          
                                          echo '</tr>';

                                          if($i==5) break;

                                        }   
                                        ?>
                                       
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        
                    </div> 
                 <!--    <div class="row">
                        <div class="col-sm-6 col-lg-4">
                            <div class="box">
                                <div class="box-header">
                                    <h3 class="box-title">Patient Reports</h3>
                                    <div class="box-tools pull-right">
                                        <a href="#" class=" btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></a>
                                        <a href="#" class=" btn-box-tool">View all</a>
                                    </div>
                                </div>
                              
                                <div class="box-body">
                                    <div class="table-responsive">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Charts</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Marlon Wystan</td>
                                                    <td>
                                                        <div id="sparkline-bar1" class="">
                                                            <canvas width="34" height="16" style="display: inline-block; width: 34px; height: 16px; vertical-align: top;"></canvas>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Stew Kim</td>
                                                    <td>
                                                        <div id="sparkline-bar2" class="">
                                                            <canvas width="34" height="16" style="display: inline-block; width: 34px; height: 16px; vertical-align: top;"></canvas>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Waldo Duke</td>
                                                    <td>
                                                        <div id="sparkline-bar3" class="">
                                                            <canvas width="34" height="16" style="display: inline-block; width: 34px; height: 16px; vertical-align: top;"></canvas>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Pete Linford</td>
                                                    <td>
                                                        <div id="sparkline-bar4" class="">
                                                            <canvas width="34" height="16" style="display: inline-block; width: 34px; height: 16px; vertical-align: top;"></canvas>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Denzel Delroy</td>
                                                    <td>
                                                        <div id="sparkline-bar5" class="">
                                                            <canvas width="34" height="16" style="display: inline-block; width: 34px; height: 16px; vertical-align: top;"></canvas>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Harvey Foster</td>
                                                    <td>
                                                        <div id="sparkline-bar6" class="">
                                                            <canvas width="34" height="16" style="display: inline-block; width: 34px; height: 16px; vertical-align: top;"></canvas>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Benton Billy</td>
                                                    <td>
                                                        <div id="sparkline-bar7" class="">
                                                            <canvas width="34" height="16" style="display: inline-block; width: 34px; height: 16px; vertical-align: top;"></canvas>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                              
                            </div>
                        </div>
                
                        <div class="col-sm-6 col-lg-4">
                            <div class="box">
                                <div class="box-header">
                                    <h3 class="box-title">Visits from countries</h3>
                                    <div class="box-tools pull-right">
                                        <a href="#" class=" btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></a>
                                        <a href="#" class=" btn-box-tool">View all</a>
                                    </div>
                                </div>
                       
                                <div class="box-body">
                                    <ul class="country-stats">
                                        <li>
                                            <h4>150</h4>
                                            <small>From England</small>
                                            <div class="pull-right">20% <i class="fa fa-level-up text-success"></i></div>
                                            <div class="progress progress-xs active">
                                                <div class="progress-bar bg-green progress-bar-striped" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%">
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <h4>500</h4>
                                            <small>From Germany</small>
                                            <div class="pull-right">-10% <i class="fa fa-level-down text-danger"></i></div>
                                            <div class="progress progress-xs active">
                                                <div class="progress-bar bg-maroon  progress-bar-striped" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%">
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <h4>1500</h4>
                                            <small>From Canada</small>
                                            <div class="pull-right">20% <i class="fa fa-minus-square-o text-success"></i></div>
                                            <div class="progress progress-xs">
                                                <div class="progress-bar bg-blue progress-bar-striped" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%">
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <h4>3200</h4>
                                            <small>From USA</small>
                                            <div class="pull-right">40% <i class="fa fa-level-up text-success"></i></div>
                                            <div class="progress progress-xs active">
                                                <div class="progress-bar bg-purple progress-bar-striped" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%">
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
             
                        <div class="col-sm-12 col-lg-4">
                            <div class="box">
                                <div class="box-header">
                                    <h3 class="box-title">Patient Progress</h3>
                                    <div class="box-tools pull-right">
                                        <a href="#" class=" btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></a>
                                        <a href="#" class=" btn-box-tool">View all</a>
                                    </div>
                                </div>
                              
                                <div class="box-body">
                                    <div class="table-responsive">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Progress</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Marlon Wystan</td>
                                                    <td>
                                                        <span class="label bg-green">98%</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Stew Kim</td>
                                                    <td>
                                                        <span class="label bg-teal">55%</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Waldo Duke</td>
                                                    <td>
                                                        <span class="label bg-green">90%</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Pete Linford</td>
                                                    <td>
                                                        <span class="label bg-blue">88%</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Denzel Delroy</td>
                                                    <td>
                                                        <span class="label bg-green">20%</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Harvey Foster</td>
                                                    <td>
                                                        <span class="label bg-teal">10%</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Benton Billy</td>
                                                    <td>
                                                        <span class="label bg-blue">20%</span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                      
                    </div> -->
                </section>
                <!-- /. main content -->
                <span class="return-up"><i class="fa fa-chevron-up"></i></span>
            </div>
            <!-- /. content-wrapper -->
            <!-- Main Footer -->
          <?php $this->load->view('adminpanel/include/footer');?>

        <script src="<?php echo asset_url();?>js/jquery-2.2.3.min.js"></script>
        <script src="<?php echo asset_url();?>js/jquery.fullscreen-min.js"></script>
        <script src="<?php echo asset_url();?>js/bootstrap.min.js"></script>
        <script src="<?php echo asset_url();?>js/jquery.slimscroll.min.js"></script>
        <script src="<?php echo asset_url();?>js/Chart.min.js"></script>
        <script src="<?php echo asset_url();?>js/jquery.sparkline.min.js"></script>
        <script src="<?php echo asset_url();?>js/app.min.js"></script>
        <script src="<?php echo asset_url();?>js/demo.js"></script>
        <script src="<?php echo asset_url();?>js/dashboard.js"></script>

            <!--Start of Tawk.to Script-->
            <script type="text/javascript">
            // var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            // (function(){
            // var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            // s1.async=true;
            // s1.src='https://embed.tawk.to/5a8669f2d7591465c707b868/default';
            // s1.charset='UTF-8';
            // s1.setAttribute('crossorigin','*');
            // s0.parentNode.insertBefore(s1,s0);
            // })();
            </script>
            <!--End of Tawk.to Script-->
       
    </body>

</html>