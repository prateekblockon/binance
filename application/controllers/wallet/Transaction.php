<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Transaction extends CI_Controller {

	
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
		
		$this->load->view('wallet/transaction');
		
	}

	public function transaction()
	{
		$user_id = $this->session->userdata('_id');
		$curr =  $this->input->post('c');

		$response = transaction($user_id,$curr);

		$responsedata = json_decode($response,true);

		$detail='';
		$detail .= '<table  class="table table-striped">
										
					<tbody>';

		 foreach($responsedata['tx']as $key=>$data)
			{

				if($data['category']=="send")
				{
					  $detail .='<tr>';
					  $detail .='<td class="f-left" >'.$curr.'</td>';
			          $detail .='<td class="f-left" >'.$data['address'].'</td>';
			          $detail .='<td class="f-center">'.$data['amount'].'</td>';
			          $detail .='<td class="f-center">'.$data['confirmations'].'</td>';
			          $detail .='<td class="f-center">'.$data['category'].'</td>';
			          $detail .='</tr>';
				}
				else{ if($data['category']=="receive"){

					  $detail .='<tr>';
					  $detail .='<td class="f-left" >'.$curr.'</td>';
			          $detail .='<td class="f-left" >'.$data['address'].'</td>';
			          $detail .='<td class="f-center">'.$data['amount'].'</td>';
			          $detail .='<td class="f-center">'.$data['confirmations'].'</td>';
			          $detail .='<td class="f-center">'.$data['category'].'</td>';
			          $detail .='</tr>';
				  }

				}
			  
			}   
			
			echo  $detail;
	}


}