<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Orderhistory extends CI_Controller {

	
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
		
		$this->load->view('trading/orderhistory');
		
	}

	public function userallcloseorder($page)
	{
		
		$user_id = $this->session->userdata('_id');
     $paginationlink  = trading_url(); 

		$response = userallcloseorder($user_id,$page);
		$responsedata = json_decode($response,true);
  //print_r($responsedata); die();
      $pages =  $responsedata['data']['pages'];

      	$perpageresult = $this->getAllPageLinks($page, $paginationlink,$pages);	


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
			$detail .= '<div id="pagination">' . $perpageresult . '</div>';


			echo  $detail;

	}

	function getAllPageLinks($page, $href,$pages) {
		$output = '';

		if($pages>1) {
			if($page == 1) 
				$output = $output . '<span class="link disabled first">Prev</span>';
			else	
				$output = $output . '<a class="link first" onclick="userallcloseorder1(1)" >Prev</a>';			
			
			if($page < $pages)
				$output = $output . '<a  class="link" onclick="userallcloseorder1(2)" >Next</a>';
			else				
				$output = $output . '<span class="link disabled">Next</span>';
			
			
		}
		return $output;
	}

}