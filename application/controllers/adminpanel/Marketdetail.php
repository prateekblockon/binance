<?php
if(!defined('BASEPATH')) exit('No direct script access allowed');

class Marketdetail extends CI_Controller {


	public function __construct()
	{
		parent::__construct();
		$this->load->library('session');
		$this->load->helper('adminhelper/utility_helper');
		$this->load->helper('adminhelper/apis_helper');
		
		
        
	}

	
	public function index()
	{

		$this->load->view('adminpanel/marketdetail');
	}

	public function getallbids()
	{
		$maincurr=$this->input->post('maincurr');
		$subcurr=$this->input->post('subcurr');

		$response =json_decode(bidlist($maincurr,$subcurr),true);

		 $data='';
		 $data .=' <table id="payments" class="table responsive table-bordered table-stipend">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Price</th>
                                <th>Amount</th>
                                <th>Total</th>
                            </tr>
                        </thead>';
           $data .='<tbody>';
           if($response)
           {
	           $i=1;
	         
	         foreach ($response['data'] as $key=>$res) {
	         
	           	
	           		$data .='<tr>
	                        <td>'.$i.'</td>
	                        <td>'.$res['_id'].'</td>
	                        <td>'.$res['amount'].'</td>
	                        <td>'.$res['volume'].'</span></td>
	                        
	               
	                    </tr>';
	                 $i++;}
             }
                $data .='</tbody>
                </table>';
               echo $data;
	}

	public function getallasks()
	{
		$maincurr=$this->input->post('maincurr');
		$subcurr=$this->input->post('subcurr');

		$response =json_decode(asklist($maincurr,$subcurr),true);

		 $data='';
		 $data .=' <table id="payments" class="table responsive table-bordered table-stipend">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Price</th>
                                <th>Amount</th>
                                <th>Total</th>
                            </tr>
                        </thead>';
           $data .='<tbody>';
           if($response)
           {
	           $i=1;
	         
	         foreach ($response['data'] as $key=>$res) {
	         
	           	
	           		$data .='<tr>
	                        <td>'.$i.'</td>
	                        <td>'.$res['_id'].'</td>
	                        <td>'.$res['amount'].'</td>
	                        <td>'.$res['volume'].'</span></td>
	                        
	               
	                    </tr>';
	                 $i++;}
             }
                $data .='</tbody>
                </table>';
               echo $data;
	}

	public function gettradehistory()
	{
		$maincurr=$this->input->post('maincurr');
		$subcurr=$this->input->post('subcurr');
		
		$response =json_decode(tradehistory($maincurr,$subcurr),true);

		 $data='';
		 $data .=' <table id="payments" class="table responsive table-bordered table-stipend">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Amount</th>
                                <th>Rate</th>
                                <th>Time</th>
                            </tr>
                        </thead>';
           $data .='<tbody>';
           if($response)
           {
	           $i=1;
	         
	         foreach ($response['data'] as $key=>$res) {
	         
	           	
	           		$data .='<tr>
	                        <td>'.$i.'</td>
	                        <td>'.$res['total_amount'].'</td>
	                        <td>'.$res['rate'].'</td>
	                        <td>'.$res['processedAt'].'</span></td>
	                        
	               
	                    </tr>';
	                 $i++;}
             }
                $data .='</tbody>
                </table>';
               echo $data;
	}

	public function getmarketcurrencylist()
	{
		
		$response =json_decode(marketcurencylist(),true);

		 $data='';
		 $data .=' <table id="payments" class="table responsive table-bordered table-stipend">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Pair</th>
                                <th>Rate</th>
                                <th>Change</th>
                            </tr>
                        </thead>';
           $data .='<tbody>';
           if($response)
           {
	           $i=1;
	         
	         foreach ($response['data'] as $key=>$res) {
	         
	           	
	           		if($res['upvote']==false)
	           		{
	           			$data .='<tr class="danger">';
	           		}else{
	           			$data .='<tr class="success">';
	           		}
                   $data .=' <td>'.$i.'</td>
	                        <td><a href="'.admin_url().'marketdetail?curr='.base64_encode($res['market']).'">'.$res['market'].'</a></td>
	                        <td>'.$res['rate'].'</td>
	                        <td>'.$res['cal'].'</span></td>
	                        
	               
	                    </tr>';
	                 $i++;}
             }
                $data .='</tbody>
                </table>';
               echo $data;
	}
}