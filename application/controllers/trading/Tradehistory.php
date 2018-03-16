<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Tradehistory extends CI_Controller {

	
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
		
		$this->load->view('trading/tradehistory');
		
	}
	
	public function userallcloseorder()
	{
		$user_id = $this->session->userdata('_id');

		$response = userallcloseorder($user_id);
		$responsedata = json_decode($response,true);


		$detail='';
		$detail .= '<table  class="table table-striped">
										
					<tbody>';

		 foreach($responsedata['data']['docs'] as $key=>$data)
			{
				
			  $detail .='<tr>';
	          $detail .='<td class="f-left" >'.$data['createdAt'].'</td>';
	          $detail .='<td class="f-center">'.$data['type'].'</td>';
	          $detail .='<td class="f-center">'.$data['amount']['currency'].'</td>';
	          $detail .='<td class="f-center">'.$data['rate'].'</td>';
	          $detail .='<td class="f-center">'.$data['total_amount'].'</td>';
	          $detail .='<td class="f-center">'.$data['total_volume'].'</td>';
	          $detail .='</tr>';

			}   
			echo  $detail;

	}
}