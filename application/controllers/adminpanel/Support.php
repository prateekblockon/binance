<?php
if(!defined('BASEPATH')) exit('No direct script access allowed');


class Support extends CI_Controller {


	public function __construct()
	{
		parent::__construct();
		$this->load->library('session');
		$this->load->helper('adminhelper/utility_helper');
		$this->load->helper('adminhelper/apis_helper');	

		 
        
	}

	
	public function index()
	{
		//print_r(userlist());
		$this->load->view('adminpanel/support');
	}
}
