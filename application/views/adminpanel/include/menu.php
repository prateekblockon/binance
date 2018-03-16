 <aside class="sidebar-left">
                <section class="sidebar">
                    <!-- Sidebar user panel -->
                    <div class="user-panel">
                        <div class="image">
                        <center>    <img src="<?php echo asset_url();?>img/icon-user.png" class="img-circle" alt="User Image"> </center> <br>
                        <center>     <p style="color: white;"><?php echo $this->session->userdata('useremail'); ?></p>
                            <p style="color: white;"><?php echo ucfirst($this->session->userdata('role')); ?>
                            </p>
                        </center>
                        </div>
                        <div class="info">
                               <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
                        </div>
                        <!-- <div class="report-today">
                            <h5>Today Report</h5>
                            <ul>
                                <li><span>6<i>Patients</i></span></li>
                                <li><span>3<i>Pending</i></span></li>
                                <li><span>3<i>Visits</i></span></li>
                            </ul>
                        </div> -->
                    </div>
                    <!-- Sidebar Menu -->
                    <?php if($this->session->userdata('role')=='superadmin')  { ?>
                    <ul class="sidebar-menu">
                        <li class="header">MAIN NAVIGATION</li>
                        <li class="treeview active"><a href="<?php echo admin_url().'dashboard'?>"><i class="fa fa-home"></i> <span>Dashboard</span></a>
                        </li>
                      <!--   <li class="treeview"><a href="mailbox.html"><i class="fa fa-envelope"></i> <span>Mailbox</span></a>
                        </li> -->
                        <li class="treeview">
                            <a href="<?php echo admin_url().'userlist'?>"><i class="fa fa-user"></i> <span>User Detail</span>
                               <!--  <span class="pull-right-container">
                                    <i class="fa fa-angle-right pull-right"></i>
                                </span> -->
                            </a>
                          
                        </li>
                        <li class="treeview">
                            <a href="<?php echo admin_url().'marketdetail?curr='.base64_encode("BCH/INR")?>"><i class="fa fa-line-chart"></i> <span>Market Details</span>
                               <!--  <span class="pull-right-container">
                                    <i class="fa fa-angle-right pull-right"></i>
                                </span> -->
                            </a>
                           <!--  <ul class="treeview-menu">
                                <li><a href="<?php echo admin_url().'userlist'?>">All Users List</a>
                                </li>
                                <li><a href="javascript:;">Add Doctor</a>
                                </li>
                                <li><a href="javascript:;">Doctor Profile</a>
                                </li>
                            </ul> -->
                        </li>
                        <li class="treeview">
                            <a href="<?php echo admin_url().'settings'?>"><i class="fa fa-cogs"></i> <span>Settings</span>
                                <!-- <span class="pull-right-container">
                                    <i class="fa fa-angle-right pull-right"></i>
                                </span> -->
                            </a>
                          
                        </li>
                        <li class="treeview">
                            <a href="<?php echo admin_url().'currencylist'?>"><i class="fa fa-money"></i> <span>Currency List</span>
                                <!-- <span class="pull-right-container">
                                    <i class="fa fa-angle-right pull-right"></i>
                                </span> -->
                            </a>
                          
                        </li>
                        <li class="treeview">
                            <a href="https://dashboard.tawk.to/#/dashboard" target="_blank"><i class="fa fa-phone"></i> <span>Chat Support</span>
                                <!-- <span class="pull-right-container">
                                    <i class="fa fa-angle-right pull-right"></i>
                                </span> -->
                            </a>
                          
                        </li>
                        <li class="treeview">
                            <a href="<?php echo admin_url().'usermgmt'?>"><i class="fa fa-users"></i> <span>Subadmin Management</span>
                                <!-- <span class="pull-right-container">
                                    <i class="fa fa-angle-right pull-right"></i>
                                </span> -->
                            </a>
                          
                        </li>
                        <li class="treeview">
                            <a href="<?php echo admin_url().'rpcdetail'?>"><i class="fa fa-area-chart"></i> <span>Scale Wallet Detail</span>
                                <!-- <span class="pull-right-container">
                                    <i class="fa fa-angle-right pull-right"></i>
                                </span> -->
                            </a>
                          
                        </li>
                        <li class="treeview">
                            <a href="<?php echo admin_url().'changepassword'?>"><i class="fa fa-key"></i> <span>Change Password</span>
                                <!-- <span class="pull-right-container">
                                    <i class="fa fa-angle-right pull-right"></i>
                                </span> -->
                            </a>
                          
                        </li>
                        <li class="treeview">
                            <a href="<?php echo admin_url().'fundmgmt'?>"><i class="fa fa-pie-chart"></i> <span>Fund Management</span>
                                <!-- <span class="pull-right-container">
                                    <i class="fa fa-angle-right pull-right"></i>
                                </span> -->
                            </a>
                          
                        </li>
                        <li class="treeview">
                            <a href="<?php echo admin_url().'logout'?>"><i class="fa fa-lock"></i> <span>Log Out</span>
                                <!-- <span class="pull-right-container">
                                    <i class="fa fa-angle-right pull-right"></i>
                                </span> -->
                            </a>
                          
                        </li>
                    
                    </ul>

<?php } else { ?>


 <ul class="sidebar-menu">
                        <li class="header">MAIN NAVIGATION</li>
                        <li class="treeview active"><a href="<?php echo admin_url().'dashboard'?>"><i class="fa fa-home"></i> <span>Dashboard</span></a>
                        </li>
                      <!--   <li class="treeview"><a href="mailbox.html"><i class="fa fa-envelope"></i> <span>Mailbox</span></a>
                        </li> -->
                        <li class="treeview">
                            <a href="<?php echo admin_url().'userlist'?>"><i class="fa fa-user"></i> <span>User Detail</span>
                               <!--  <span class="pull-right-container">
                                    <i class="fa fa-angle-right pull-right"></i>
                                </span> -->
                            </a>
                          
                        </li>
                        <li class="treeview">
                            <a href="<?php echo admin_url().'logout'?>"><i class="fa fa-lock"></i> <span>Log Out</span>
                                <!-- <span class="pull-right-container">
                                    <i class="fa fa-angle-right pull-right"></i>
                                </span> -->
                            </a>
                          
                        </li>
                        </ul>

<?php } ?>

                    <!-- /. sidebar-menu -->
                </section>
            </aside>