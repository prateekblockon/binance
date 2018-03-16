<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Myaccount extends CI_Controller {

	
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

		$this->load->view('userdetails/myaccount');


	}

	public function logindetails()
	{
		$logindetails = $this->session->userdata('login_time');
		$login = array_reverse($logindetails);
		
	    $lasttime = $login[0]['time'];
		$lastip = $login[0]['ip'];

		
		$detail='';
		$detail .= '<table  class="table table-striped">
										
					<tbody>';

					$i = 0;
		 foreach($login as $key=>$data)
			{
			  $i++;		

			  $detail .='<tr>';
	          $detail .='<td class="f-left" >'.date('Y-M-d h:i:s',strtotime($data['time'])).'</td>';
	          $detail .='<td class="f-center">'.$data['ip'].'</td>';
	          $detail .='<td class="f-center">'.$data['location'].'</td>';
	          
	          $detail .='</tr>';

	          if($i==5) break;

			}   

			$detail .='<input type="hidden" value="'.date('Y-M-d h:i:s',strtotime($lasttime)) .'" id="lasttime"/>'; 
			$detail .='<input type="hidden" value="'.$lastip .'" id="lastip"/>'; 
			echo  $detail;

	}


}