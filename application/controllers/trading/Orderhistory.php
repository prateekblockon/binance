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

	public function userallcloseorder($page,$maincurr,$subcurr)
	{
		
		$user_id = $this->session->userdata('_id');
     $paginationlink  = trading_url(); 

		$response = userallcloseorder($user_id,$page,$maincurr,$subcurr);
		$responsedata = json_decode($response,true);
  //print_r($responsedata); die();
      $pages =  $responsedata['data']['pages'];

      	$perpageresult = $this->getAllPageLinks($page, $paginationlink,$pages);	


		$detail='';
		$detail .= '<table  class="table table-striped">
										
					<tbody>';

		 foreach($responsedata['data']['docs'] as $key=>$data)
			{
				$date = $data['createdAt']/1000;
			  $detail .='<tr>';
	          $detail .='<td class="f-left" >'.date("d-M-Y",$date).'</td>';
	          $detail .='<td class="f-center">'.$data['type'].'</td>';
	          $detail .='<td class="f-center">'.$data['amount']['currency'].'</td>';
	          $detail .='<td class="f-center">'.$data['rate'].'</td>';
	          $detail .='<td class="f-center">'.$data['total_amount'].'</td>';
	          $detail .='<td class="f-center">'.$data['total_volume'].'</td>';
	          $detail .='</tr>';

			}   

			$detail .= '</tbody> </table>';

			$detail .= '<div id="pagination">' . $perpageresult . '</div>';


			echo  $detail;

	}

	function getAllPageLinks($page, $href,$pages) {
		$output = '';

		if($pages>1) {
			if($page == 1) 
				$output = $output . '<span class="link first disabled">&#8810;</span><span class="link disabled">&#60;</span>';
			else	
				$output = $output . '<a class="link first" onclick="userallcloseorder1(1)" >&#8810;</a> <a class="link" onclick="userallcloseorder1('.($page-1).')" >&#60;</a>	';	


					if(($page-3)>0) {
				if($page == 1)
					$output = $output . '<span id=1 class="link current">1</span>';
				else				
					$output = $output . '<a class="link first" onclick="userallcloseorder1(1)" >1</a>';
			}

			if(($page-3)>1) {
				$output = $output . '<span class="dot">...</span>';
			}

	for($i=($page-2); $i<=($page+2); $i++)	{
				if($i<1) continue;
				if($i>$pages) break;
				if($page == $i)
					$output = $output . '<span id='.$i.' class="link current">'.$i.'</span>';
				else				
					$output = $output . '<a class="link" onclick="userallcloseorder1('.($i).')" >'.$i.'</a>';
			}
	if(($pages-($page+2)>1)) {
				$output = $output . '<span class="dot">...</span>';
			}

				if(($pages-($page+2)>0)) {
				if($page == $pages)
					$output = $output . '<span id=' . ($pages) .' class="link current">' . ($pages) .'</span>';
				else				
					$output = $output . '<a class="link" onclick="userallcloseorder1('.($pages).')" >'.($pages).'</a>';
			}



			
			if($page < $pages)
				$output = $output . '<a class="link first" onclick="userallcloseorder1('.($page+1).')" > ></a> <a class="link" onclick="userallcloseorder1('.($pages).')" >&#8811;</a>';
			else				
				$output = $output . '<span class="link disabled">></span><span class="link disabled">&#8811;</span>';
			
			
		}
		return $output;
	}

}