<?php
    
        if(($this->session->userdata('role')=='user') || ($this->session->userdata('useremail')=='')){
            redirect(admin_url());

        }

?>
  
    <body class="skin-blue sidebar-mini">
        <div class="page-loader-wrapper" >
            <div class="loader">
                <div class="preloader">
                    <svg class='part' x="0px" y="0px" viewBox="0 0 256 256" style="enable-background:new 0 0 256 256;" xml:space="preserve">
                    <path class="svgpath" id="playload" d="M189.5,140.5c-6.6,29.1-32.6,50.9-63.7,50.9c-36.1,0-65.3-29.3-65.3-65.3
                          c0,0,17,0,23.5,0c10.4,0,6.6-45.9,11-46c5.2-0.1,3.6,94.8,7.4,94.8c4.1,0,4.1-92.9,8.2-92.9c4.1,0,4.1,83,8.1,83
                          c4.1,0,4.1-73.6,8.1-73.6c4.1,0,4.1,63.9,8.1,63.9c4.1,0,4.1-53.9,8.1-53.9c4.1,0,4.1,44.1,8.2,44.1c4.1,0,3.1-34.5,7.2-34.5
                          c4.1,0,3.1,24.6,7.2,24.6c4.1,0,2.5-14.5,5.2-14.5c2.2,0,0.8,5.1,4.2,4.9c0.4,0,13.1,0,13.1,0c0-34.4-27.9-62.3-62.3-62.3
                          c-27.4,0-50.7,17.7-59,42.3" />
                    <path class="svgbg" d="M61,126c0,0,16.4,0,23,0c10.4,0,6.6-45.9,11-46c5.2-0.1,3.6,94.8,7.4,94.8c4.1,0,4.1-92.9,8.2-92.9
                          c4.1,0,4.1,83,8.1,83c4.1,0,4.1-73.6,8.1-73.6c4.1,0,4.1,63.9,8.1,63.9c4.1,0,4.1-53.9,8.1-53.9c4.1,0,4.1,44.1,8.2,44.1
                          c4.1,0,3.1-34.5,7.2-34.5c4.1,0,3.1,24.6,7.2,24.6c4.1,0,2.5-14.5,5.2-14.5c2.2,0,0.8,5.1,4.2,4.9c0.4,0,22.5,0,23,0" />
                    </svg>
                </div>
            </div>
        </div>
        <div class="wrapper">

  <header class="top-menu-header">
                <!-- Logo -->
                <a href="<?php echo admin_url().'dashboard'?>" class="logo">
                    <!-- mini logo for sidebar mini 50x50 pixels -->
                    <span class="logo-mini"><img src="<?php echo asset_url();?>img/logo-mini.png" class="img-circle" alt="Logo Mini"/></span>
                    <!-- logo for regular state and mobile devices -->
                    <span class="logo-lg"><b><?php echo project_name();?> Admin</b></span>
                </a>
                <!-- Header Navbar -->
                <nav class="navbar navbar-static-top">
                    <!-- Sidebar toggle button-->
                    <a class="sidebar-toggle fa-icon" data-toggle="offcanvas" role="button">
                        <span class="sr-only">Toggle navigation</span>
                    </a>
                    <!-- Navbar Right Menu -->
                    <div class="navbar-top-menu">
                        <ul class="nav navbar-nav">
                            <!-- Navbar Search -->
                           <!--  <li>
                                <a data-toggle="collapse" data-target="#top-menu-navbar-search" aria-expanded="false">
                                    <i class="fa fa-search"></i>
                                </a>
                            </li> -->
                            <!-- /. Navbar Search -->
                            <!--Fullscreen-->
                          <!--   <li>  		
                                <a id="fullscreen-page" role="button"><i class="fa fa-arrows-alt"></i></a>
                            </li> -->
                            <!-- /. FulllScreen -->	
                            <!-- Messages-->
                           <!--  <li class="dropdown messages-menu">
                               
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                    <i class="fa fa-envelope-o"></i>
                                    <span class="label label-success">1</span>
                                </a>
                                <ul class="dropdown-menu animated flipInX">
                                    <li class="header">1 message pending</li>
                                    <li>
                                        
                                        <ul class="menu">
                                            <li>
                                            
                                                <a href="#">
                                                    <div class="pull-left">
                                                     
                                                        <img src="<?php echo asset_url();?>img/icon-medical.png" class="img-circle" alt="User Image">
                                                    </div>
                                                   
                                                    <h4>
                                                        Laboratory 
                                                        <small><i class="fa fa-clock-o"></i> 10 mins</small>
                                                    </h4>
                                                  
                                                    <p>You have your blood test</p>
                                                </a>
                                            </li>
                                          
                                        </ul>
                                        
                                    </li>
                                    <li class="footer"><a href="#">See All Messages</a></li>
                                </ul>
                            </li> -->
                            <!-- /.messages-menu -->
                            <!-- Notifications Menu -->
                           <!--  <li class="dropdown notifications-menu">
                                
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                    <i class="fa fa-bell-o"></i>
                                    <span class="label label-warning">4</span>
                                </a>
                                <ul class="dropdown-menu animated flipInY">
                                    <li class="header">4 notifications</li>
                                    <li>
                                
                                        <ul class="menu">
                                            <li>
                                
                                                <a href="#">
                                                    <i class="fa fa-users text-green"></i> 5 new patients today
                                                </a>
                                            </li>
                                
                                            <li>
                                                <a href="#">
                                                    <i class="fa fa-user text-green"></i> 1 new doctor joined today
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i class="fa fa-warning text-yellow"></i> problem with the computer
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i class="fa fa-users text-red"></i> The meeting has been canceled
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="footer"><a href="#">View all</a></li>
                                </ul>
                            </li> -->
                            <!-- Tasks Menu -->
                           <!--  <li class="dropdown patient-menu">
                            
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                    <i class="fa fa-user-o"></i>
                                    <span class="label label-primary">6</span>
                                </a>
                                <ul class="dropdown-menu animated flipInX">
                                    <li class="header">6 patients today</li>
                                    <li>
                                      
                                        <ul class="menu">
                                            <li>
                                              
                                                <a href="#">
                                                    <div class="pull-left">
                                                        <img src="<?php echo asset_url();?>img/icon-patient.png" class="img-circle" alt="User Image">
                                                    </div>
                                                  
                                                    <h4>
                                                        Adele Smith
                                                        <small  class="text-blue"><i class="fa fa-clock-o"></i> now</small>
                                                    </h4>
                                                 
                                                    <p>Regular medical checkup</p>
                                                </a>
                                            </li>
                                         
                                            <li>
                                                <a href="#">
                                                    <div class="pull-left">
                                                        <img src="<?php echo asset_url();?>img/icon-patient2.png" class="img-circle" alt="User Image">
                                                    </div>
                                                  
                                                    <h4>
                                                        John Martin
                                                        <small class="text-green"><i class="fa fa-clock-o"></i> 12:00 pm</small>
                                                    </h4>
                                                  
                                                    <p>Regular medical checkup</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <div class="pull-left">
                                                        <img src="<?php echo asset_url();?>img/icon-patient.png" class="img-circle" alt="User Image">
                                                    </div>
                                                  
                                                    <h4>
                                                        Alexa Hall
                                                        <small  class="text-red"><i class="fa fa-clock-o"></i> Cancelled</small>
                                                    </h4>
                                                  
                                                    <p>Regular medical checkup</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <div class="pull-left">
                                                        <img src="<?php echo asset_url();?>img/icon-patient2.png" class="img-circle" alt="User Image">
                                                    </div>
                                                  
                                                    <h4>
                                                        John Martin
                                                        <small class="text-green"><i class="fa fa-clock-o"></i> 12:30 pm</small>
                                                    </h4>
                                                  
                                                    <p>Regular medical checkup</p>
                                                </a>
                                            </li>
                                        </ul>
                                      
                                    </li>
                                    <li class="footer"><a href="#">See All Patient</a></li>
                                </ul>
                            </li> -->
                          <!--   <li class="dropdown user user-menu">
                               
                                <a href="#" data-toggle="dropdown" aria-expanded="false">
                               
                                    <span class="hidden-xs">Dr. Adrien<i class="fa fa-angle-down pull-right"></i></span>
                               
                                    <img src="<?php echo asset_url();?>img/icon-user.png" class="user-image" alt="User Image">
                                </a>
                                <ul class="dropdown-menu user-menu animated flipInY">
                                    <li><a href="javascript:;"><i class="ti-user"></i> Profile</a></li>
                                    <li><a href="javascript:;"><i class="fa fa-fw fa-envelope-o"></i> Inbox</a></li>
                                    <li><a href="javascript:;"><i class="ti-lock"></i> Lookscreen</a></li>
                                    <li><a href="#"><i class="ti-settings"></i> Setting</a></li>
                                    <li class="divider"></li>
                                    <li><a href="javascript:;"><i class="ti-power-off"></i> Log Out</a></li>
                                </ul>
                            </li> -->
                        </ul>
                        <!-- Form Navbar Search -->
                        <div class="collapse top-menu-navbar-search" id="top-menu-navbar-search">
                            <form>
                                <div class="form-group">
                                    <div class="input-search">
                                        <div class="input-group">
                                            <input type="text" id="navbar-search" name="search" class="form-control" placeholder="Search">
                                            <span class="input-group-addon">
                                                <a data-target="#top-menu-navbar-search" data-toggle="collapse" aria-label="Close" aria-expanded="true"><i class="fa fa-times"></i></a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <!-- /. Form Navar Search -->
                    </div>
                </nav>
            </header>