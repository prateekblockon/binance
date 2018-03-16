<?php
if(!defined('BASEPATH')) exit('No direct script access allowed');

class Logout extends CI_Controller {


	public function __construct()
	{
		parent::__construct();
		$this->load->library('session');
		$this->load->helper('adminhelper/utility_helper');
		$this->load->helper('adminhelper/apis_helper');
		
		
        
	}

	
	public function index()
	{

		$this->load->view('adminpanel/currencylist');
	}