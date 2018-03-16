<?php
if(!defined('BASEPATH')) exit('No direct script access allowed');

class Settings extends CI_Controller {


	public function __construct()
	{
		parent::__construct();
		$this->load->library('session');
		$this->load->helper('adminhelper/utility_helper');
		$this->load->helper('adminhelper/apis_helper');
		
		
        
	}

	
	public function index()
	{

		$this->load->view('adminpanel/settings');
	}

	public function getswitcheslist()
	{
		$response =json_decode(switchsstatus(),true);
		//print_r($response['data']['exchange']); die();
		$data='';
		$data .='<table class="table table-hover table-bordered">
                                        <tr>
                                            <th>#</th>
                                            <th>Switchs</th>
                                            <th>Action</th>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>User sign up Enable/Disable</td>
                                            <td>';

                                             if($response['data']['signup']!=true){
$data .=' <span class="label label-success">Disabled</span> <label class="switch" title="User Sign up Enable"><input type="checkbox" name="updatesignup" checked onclick="return updatesignupstatus(true)"><span class="slider round"></span></label>   ';                                          	
                                             }else{
$data .='<span class="label label-success">Enabled</span><label class="switch"  title="User Sign up Disable"><input type="checkbox" name="updatesignup"  onclick="return updatesignupstatus(false)" title="User Sign up Enable"><span class="slider round"></span></label>  ';	
                                             }
$data .='</td>
                                        </tr>
                                      
                                        <tr>
                                            <td>4</td>
                                            <td>Exchange Enable/Disable</td>
                                             <td>';
                                             if($response['data']['exchange']!=''){
$data .='<span class="label label-success">Enabled</span><label class="switch" title="Exchange Disable"><input type="checkbox" name="updatexchnage" onclick="return updateexchnagestatus(false)"><span class="slider round"></span></label>   ';                                          	
                                             }else{
$data .='<span class="label label-success">Disabled</span><label class="switch"  title="Exchange Enable"><input type="checkbox" name="updatexchnage" checked onclick="return updateexchnagestatus(true)"><span class="slider round"></span></label>  ';	
                                             }


$data .='</td>
                                        </tr>
                                    </table>';

                                  echo $data;
	}


	function enabledisableexchnagestatus()
	{
		$status=$this->input->post('status');
		//$status=true;
		$response =json_decode(enabledisableexchnagestatus($status),true);
		if($status=='true')
    	{
    		$stat='enable';
    	}else{
    		$stat='disable';
    	}
		if($response['responseCode']==200)
		{
			$this->session->set_flashdata('success', 'Exchange has been '.$stat.' successfully.');
			
        }
        else
        {
            $this->session->set_flashdata('error', 'Error occurred while '.$stat.' exchange !!!');
        }
	}

	function enabledisablesignupstatus()
	{
		$status=$this->input->post('status');
		//$status=true;

		$response =json_decode(enabledisablesignupstatus($status),true);
		if($status=='true')
    	{
    		$stat='enable';
    	}else{
    		$stat='disable';
    	}
		if($response['responseCode']==200)
		{
			$this->session->set_flashdata('success', 'Signup has been '.$stat.' successfully.');
        }
        else
        {
            $this->session->set_flashdata('error', 'Error occurred while '.$stat.' signup !!!');
        }
	}
}