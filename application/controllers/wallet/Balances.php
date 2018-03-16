<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Balances extends CI_Controller {

	
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
		
		$this->load->view('wallet/balances');
		
	}

	public function userallcurrencybalance()
	{
		$user_id = $this->session->userdata('_id');

		$response = userallcurrencybalance($user_id);
		$responsedata = json_decode($response,true);

		$detail='';
		$detail .= '<table  class="table table-striped">
										
					<tbody>
					<thead style="background: gray;">
						<tr>
							<th class="f-left" style="background: #ececec; color: #545050; border-right: 1px solid #cacaca;" ><b>Coin</b></th>
							<th class="f-center" style="background: #ececec; color: #545050;border-right: 1px solid #cacaca;"><b>Name</b></th>
							<th class="f-center" style="background: #ececec; color: #545050;border-right: 1px solid #cacaca;"><b>Freeze Balance</b></th>
							<th class="f-center" style="background: #ececec; color: #545050;border-right: 1px solid #cacaca;"><b>Available Balance</b></th>
							<th class="f-center" style="background: #ececec; color: #545050;"><b>Actions</b></th>
							
						</tr>
					</thead>';

		 foreach($responsedata['data']['currencies']as $key=>$data)
			{

				
			  $detail .='<tr>';
	          $detail .='<td class="f-left" >'.$data['currency'].'</td>';
	          $detail .='<td class="f-center">'.$data['name'].'</td>';
	          $detail .='<td class="f-center">'.number_format($data['freezeBalance'],9).'</td>';
	          $detail .='<td class="f-center">'.$data['balance'].'</td>';
	          $detail .='<td class="f-left"><a class="btn"  href="'.wallet_url().'deposit?curr='.base64_encode($data['currency']).'">Deposit</a><a class="btn"  href="'.wallet_url().'withdraw?curr='.base64_encode($data['currency']).'">Withdraw</a><a class="btn"   href="'.wallet_url().'transaction?curr='.base64_encode($data['currency']).'">Transaction</a></td>';
	          
	          $detail .='</tr>';

						      $postData = array(
					          
								"user_id"=>$user_id,
								"currency"=>$data['currency']

					          );

					          $context = stream_context_create(array(
									
									'http' => array(
								      'method' => 'POST',
								      'header' => "Content-Type: application/json\r\n",
								      'content' => json_encode($postData)
								      )
									));
					        
						$response = file_get_contents(api_url().'exchanges/api/v1/transection/getBalance', false, $context);


			}   
			echo  $detail;
			
	}
}