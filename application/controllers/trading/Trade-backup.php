<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Trade extends CI_Controller {

	
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
		
		$this->load->view('trading/trade');

	}



	public function usermaincurrbalances()
	{

		$curr=$_POST['c'];

		$user_id = $this->session->userdata('_id');

		$response = usermaincurrencybalance($user_id,$curr);


		print_r($response);
	}
  
	public function usersubcurrbalances()
	{
		$curr=$_POST['c'];

		$user_id = $this->session->userdata('_id');

		$response = usersubcurrencybalance($user_id,$curr);

		print_r($response);

	}

	public function useropenorder()
	{
		$user_id = $this->session->userdata('_id');
		$maincurr=$this->input->post('maincurr');
		$subcurr=$this->input->post('subcurr');
		
		$response = useropenorder($user_id,$maincurr,$subcurr);
		
		$responsedata = json_decode($response,true);


		$detail='';
		$detail .= '<table  class="table table-striped">
										
					<tbody>';

		 foreach(array_reverse($responsedata['data']['docs']) as $key=>$data)
			{
			  $cdate = $data['createdAt'];
			  $csec =  $cdate / 1000;
				
			  $detail .='<tr>';
	          $detail .='<td class="f-left" >'.date('d/m/Y h:i:s',$csec).'</td>';
	          $detail .='<td class="f-center">'.$data['type'].'</td>';
	          $detail .='<td class="f-center">'.$data['amount']['currency'].'</td>';
	          $detail .='<td class="f-center">'.$data['rate'].'</td>';
	          $detail .='<td class="f-center">'.$data['total_amount'].'</td>';
	          $detail .='<td class="f-center">'.$data['total_volume'].'</td>';
	          if($data['type']== "ASK" )
	          {
	          	$detail .='<td class="f-center"><a href="javascript:;" onclick="del_ask(id=\''.$data['_id'].'\');"><i class="iconfont icon-delete"></i></a></td>';
	          }
	          else{
	          	$detail .='<td class="f-center"><a href="javascript:;" onclick="del_bid(id=\''.$data['_id'].'\');"><i class="iconfont icon-delete"></i></a></td>';
	          }
	          
	          $detail .='</tr>';

			}   
			echo  $detail;
			

	}

	public function usercloseorder()
	{
		$user_id = $this->session->userdata('_id');
		$maincurr=$this->input->post('maincurr');
		$subcurr=$this->input->post('subcurr');

		$response = usercloseorder($user_id,$maincurr,$subcurr);
		$responsedata = json_decode($response,true);


		$detail='';
		$detail .= '<table  class="table table-striped">
										
					<tbody>';

		 foreach(array_reverse($responsedata['data']['docs']) as $key=>$data)
			{

			  $cdate = $data['createdAt'];
			  $csec =  $cdate / 1000;

			  $detail .='<tr>';
	          $detail .='<td class="f-left" >'.date('d/m/Y h:i:s',$csec).'</td>';
	          $detail .='<td class="f-center">'.$data['type'].'</td>';
	          $detail .='<td class="f-center">'.$data['amount']['currency'].'</td>';
	          $detail .='<td class="f-center">'.$data['rate'].'</td>';
	          $detail .='<td class="f-center">'.$data['total_amount'].'</td>';
	          $detail .='<td class="f-center">'.$data['total_volume'].'</td>';
	          $detail .='</tr>';

			}   
			echo  $detail;

	}

	public function tradehistory()
	{
		$maincurr=$this->input->post('maincurr');
		$subcurr=$this->input->post('subcurr');
		

		$response = tradehistory($maincurr,$subcurr);
		
		$responsedata = json_decode($response,true);

		$detail='';
		$detail .= '<table class="table">
										
					<tbody>';

		 foreach($responsedata['data'] as $key=>$data)

			{
			  $cdate = $data['processedAt'];
			  $csec =  $cdate / 1000;

			  $detail .='<tr>';
	          $detail .='<td class="f-left" >'.$data['total_amount'].'</td>';
	          $detail .='<td class="f-center">'.$data['rate'].'</td>';
	          $detail .='<td class="f-center">'.date('h:i:s',$csec).'</td>';      
	          $detail .='</tr>';

			}   

			echo $detail;

	}

	public function curencylist()
	{
		

		$response = curencylist();

		$responsedata = json_decode($response,true);

		$detail='';
		$detail .= '<table class="table">
										
					<tbody>';

		 foreach(array_reverse($responsedata['data']) as $key=>$data)
			{
				
			  $detail .='<tr>';
			  $detail .='<td class="f-left" ><a style="color:#000000"  href="'.trading_url().'trade?curr='.base64_encode($data['market']).'">'.$data['market'].'</a></td>';

			  if ($data['upvote']=="true") {
			  	$detail .='<td class="f-center" style="color:#70a800">'.$data['rate'].'</td>';
	            $detail .='<td class="f-right" style="color:#70a800">'.round($data['cal'],5).'%</td>'; 
			  }
			  else{
			  	$detail .='<td class="f-center" style="color:#ea0070">'.$data['rate'].'</td>';
	            $detail .='<td class="f-right" style="color:#ea0070">'.$data['cal'].'%</td>'; 
			  }
	          
	          $detail .='</tr>';

			}   

			echo $detail;

	}

	public function asklist()
	{
		$maincurr=$this->input->post('maincurr');
		$subcurr=$this->input->post('subcurr');


		$response = asklist($maincurr,$subcurr);

		$responsedata = json_decode($response,true);

		$detail='';
		$detail .= '<table class="table">
										
					<tbody>';

		 foreach(array_reverse($responsedata['data']) as $key=>$data)
			{
				
			  $detail .='<tr>';
			  $detail .='<td class="f-left" style="color:#ea0070">'.$data['_id'].'</td>';
			  $detail .='<td class="f-center" style="color:#ea0070">'.$data['amount'].'</td>';
	          $detail .='<td class="f-center" style="color:#ea0070">'.$data['volume'].'</td>'; 
			  
	          $detail .='</tr>';

			} 

			echo $detail;

	}

	public function bidlist()
	{
		$maincurr=$this->input->post('maincurr');
		$subcurr=$this->input->post('subcurr');

		$response = bidlist($maincurr,$subcurr);
		$responsedata = json_decode($response,true);

		$detail='';
		$detail .= '<table class="table">
										
					<tbody>';

		 foreach(array_reverse($responsedata['data']) as $key=>$data)
			{
				
			  $detail .='<tr>';
			  $detail .='<td class="f-left" style="color:#70a800">'.$data['_id'].'</td>';
			  $detail .='<td class="f-center" style="color:#70a800">'.$data['amount'].'</td>';
	          $detail .='<td class="f-center" style="color:#70a800">'.$data['volume'].'</td>'; 
			  
	          $detail .='</tr>';

			}   
			
			echo $detail;

	}

	public function marketinfo()

	{
		$maincurr=$this->input->post('maincurr');
		$subcurr=$this->input->post('subcurr');
		
		$response = marketinfo($maincurr,$subcurr);

		print_r($response);

	}

}
