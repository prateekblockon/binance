<?php
if(!defined('BASEPATH')) exit('No direct script access allowed');

class Currencylist extends CI_Controller {


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

	public function getcurrencylist()
	{
		$switchresponse =json_decode(switchsstatus(),true);


		$tradearr=$switchresponse['data']['trade'];
		$switharr=$switchresponse['data']['withdraw'];
	
		$response =json_decode(getcurrencylist(),true);
		//print_r($response['data']); die();
		
		$data='';
		 $data .=' <table id="payments" class="table responsive table-bordered table-stipend">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>currency</th>
                                <th>Name</th>
                                <th>Currency Trading Enable/Disable</th>
                                <th>Currency Withdraw Enable/Disable</th>
                            </tr>
                        </thead>';
           $data .='<tbody>';
           if($response)
           {
	           $i=1;
	          
	         foreach ($response['data'] as $key => $res) {
	         	foreach ($res['currencyData'] as $key => $value) {
	         		if($value['status']==true){
	         			$stat = 'Enable';
	         		}
	         		else{
	         			$stat = 'Disable';
	         		}
	           		$data .='<tr>
	                        <td>'.$i.'</td>
	                        <td>'.$value['currency'].'</td>
	                        <td>'.$value['name'].' </td>
	                        <td>';
                                             if(in_array($value['currency'],$tradearr)){
                                             	$status='on';
$data .='<label class="switch" title="Currency Trading Enable"><input type="checkbox" name="updatesignup" onclick="return updatetradingstatus(\''.$status.'\',\''.$value['currency'].'\');"><span class="slider round"></span></label>   ';                                          	
                                             }else{
                                             	$status='off';
$data .='<label class="switch"  title="Currency Trading Disable"><input type="checkbox" name="updatesignup" checked onclick="return updatetradingstatus(\''.$status.'\',\''.$value['currency'].'\');" title="User Sign up Enable"><span class="slider round"></span></label>  ';	
                                             }
$data .='</td>
	                        <td>';
                                             if(in_array($value['currency'],$switharr)){
                                             	$status='on';
$data .='<label class="switch" title="Currency Withdraw Enable"><input type="checkbox" name="updatesignup" onclick="return updatewithdrawstatus(\''.$status.'\',\''.$value['currency'].'\');"><span class="slider round"></span></label>   ';                                          	
                                             }else{
                                             	$status='off';
$data .='<label class="switch"  title="Currency Withdraw Disable"><input type="checkbox" name="updatesignup" checked onclick="return updatewithdrawstatus(\''.$status.'\',\''.$value['currency'].'\');" title="User Sign up Enable"><span class="slider round"></span></label>  ';	
                                             }
$data .='</td>
	                    </tr>';
	                 $i++;}
	                 }
             }
                $data .='</tbody>
                </table>';
               echo $data;
	}

	function enabledisablewithdraw()
	{
		$status=$this->input->post('status');
		$currency=$this->input->post('currency');

		$response =json_decode(enabledisablewithdraw($status,$currency),true);
		
		if($status==on)
    	{
    		$stat='enable';
    	}else{
    		$stat='disable';
    	}
		if($response['responseCode']==200)
		{
			$this->session->set_flashdata('success', $currency.' trading has been '.$stat.' successfully.');
        }
        else
        {
            $this->session->set_flashdata('error', 'Error occurred while '.$stat.' '.$currency.' trading !!!');
        }
	}

	function enabledisabletrading()
	{
		$status=$this->input->post('status');
		$currency=$this->input->post('currency');

		$response =json_decode(enabledisabletrading($status,$currency),true);
		
		if($status==on)
    	{
    		$stat='enable';
    	}else{
    		$stat='disable';
    	}
		if($response['responseCode']==200)
		{
			$this->session->set_flashdata('success', $currency.' Withdraw has been '.$stat.' successfully.');
        }
        else
        {
            $this->session->set_flashdata('error', 'Error occurred while '.$stat.' '.$currency.' withdraw !!!');
        }
	}
}