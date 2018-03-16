<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Deposit extends CI_Controller {

	
	public function __construct()
	{
		parent::__construct();
		
		$this->load->helper('fronthelper/utility_helper');
		$this->load->helper('fronthelper/api_helper');
		

		if($this->session->userdata('_id')=='')
		{
			redirect(userdetails_url().'login');
		}
        
	}

	public function index()
	{
		
		$this->load->view('wallet/deposit');
		
	}


	public function getaddress()
	{
		$curr=$_POST['c'];

		$user_id = $this->session->userdata('_id');

		$response = getaddress($user_id,$curr);

		$responsedata = json_decode($response,true);
		$address=$responsedata['data']['address'];


		$detail='';
		$detail .='<div class="alert alert-success" style="margin-top:18px;">'.$address.'</div>';
		$detail .= '<img src="http://chart.apis.google.com/chart?cht=qr&chs=300x300&chl='.$address.'"
			                                      alt="QR Code" style="width:200px;border:0;"/>';


			echo $detail;

	}
		
	


}