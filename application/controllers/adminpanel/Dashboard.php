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

		$logindetails = $this->session->userdata('login_time');
		$data['login'] = array_reverse($logindetails);
		
		$this->load->view('adminpanel/dashboard',$data);
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