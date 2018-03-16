<?php
if(!defined('BASEPATH')) exit('No direct script access allowed');

class Dashboard extends CI_Controller {


	public function __construct()
	{
		parent::__construct();
		$this->load->library('session');
		$this->load->helper('adminhelper/utility_helper');
		$this->load->helper('adminhelper/apis_helper');
		
		if(($this->session->userdata('role')=='user') || ($this->session->userdata('useremail')=='')){
			redirect(admin_url());

		}
        
	}

	
	public function index()
	{
		$response=json_decode(totaluserscount(),true);
		$data['usercount']=$response['data'];

		$response=json_decode(activeuserscount(),true);
		$data['activeusercount']=$response['data'];

		$response=json_decode(deactiveusercount(),true);
		$data['deactiveusercount']=$response['data'];

		$response=json_decode(blockusercount(),true);
		$data['blockusercount']=$response['data'];

		$response=json_decode(kycusercount(),true);
		$data['kycusercount']=$response['data'];

		$response=json_decode(pkyckusercount(),true);
		$data['pkyckusercount']=$response['data'];

		$response=json_decode(akycusercount(),true);
		$data['akycusercount']=$response['data'];

		$response=json_decode(rkyckusercount(),true);
		$data['rkyckusercount']=$response['data'];
		
		$this->load->view('adminpanel/dashboard',$data);
	}



}