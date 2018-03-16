<?php
if(!defined('BASEPATH')) exit('No direct script access allowed');

class Rpcdetail extends CI_Controller {


	public function __construct()
	{
		parent::__construct();
		$this->load->library('session');
		$this->load->helper('adminhelper/utility_helper');
		$this->load->helper('adminhelper/apis_helper');
		
		
        
	}

	
	public function index()
	{

		$this->load->view('adminpanel/rpcdetail');
	}

	public function getscalewalletlist()
	{
		

		$data='';
		 $data .=' <table id="payments" class="table responsive table-bordered table-stipend">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Currency Name</th>
                                <th>Ip Address</th>
                                <th>Port</th>
                                <th>Username</th>
                                <th>Password</th>
                                <th>Action</th>
                            </tr>
                        </thead>';
           $data .='<tbody>';

           // $data .='<tr>
	          //               <td></td>
	          //               <td></td>
	          //               <td></td>
	          //               <td></td>
	          //               <td></td>
	          //               <td></td>
	          //           </tr>';

           echo $data;
	}
}