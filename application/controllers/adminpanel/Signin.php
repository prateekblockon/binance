<?php
if(!defined('BASEPATH')) exit('No direct script access allowed');

class Signin extends CI_Controller {


	public function __construct()
	{
		parent::__construct();
		$this->load->library('session');
		$this->load->helper('adminhelper/utility_helper');
		$this->load->helper('adminhelper/apis_helper');
		
		
        
	}

	
	public function index()
	{
		$this->load->view('adminpanel/signin');
	}


	public function login()
	{

        
        $query = @unserialize (file_get_contents('http://ip-api.com/php/'));
            if ($query && $query['status'] == 'success') {
            $currlocation=  $query['city'] . ', ' . $query['country'];
            
      
        }

        
		    $name = $this->input->post('email');
            $password = $this->input->post('pwd');

			$captcha = $this->input->post('captcha');
            $captext = $this->input->post('captext');

            $ip=getHostByName(getHostName()); 
            $location = $currlocation;

if($captcha == $captext){
            $response = login($name, $password, $ip, $location);
           
            if($response)  	
            {
            	$responsedata = json_decode($response,true);
            	
            	
                if($responsedata['responseCode']==200 )
                {
                	

if($responsedata['data']['role']=='subadmin' || $responsedata['data']['role']=='superadmin')
{
			               $arrayName = array(

			                   '_id' => $responsedata['data']['_id'],

			                   'useremail' => $responsedata['data']['email'],

			                   'session_key' => '0',

			                   'secret_key' => $responsedata['data']['googleSecretKey'],

			                   'isTwoFactor' => $responsedata['data']['isTwoFactor'],

			                    'login_time' => $responsedata['data']['loginDetails'],
			                    
			                    'verifyPhone' => $responsedata['data']['verifyPhone'],

			                    'phone' => $responsedata['data']['phone'],
			                    
			                    'iskyc' => $responsedata['data']['isKYC'],
			                     'role' => $responsedata['data']['role']

			                );
			               		$this->session->set_userdata($arrayName);
			               
			                 

			                 	$this->session->set_flashdata('success', $responsedata['responseMessage']);

			                
			                    redirect(admin_url().'dashboard');

			                
              
                }
                else{

                	$this->session->set_flashdata('error', 'Please enter correct email and password');
                	redirect(admin_url().'signin');


                } }
                else{

                	$this->session->set_flashdata('error', $responsedata['responseMessage']);
                	redirect(admin_url().'signin');
                      
                }
                
            }
            else
            {
                $this->session->set_flashdata('error', 'Please enter correct email and password');
                redirect(admin_url().'signin');
            }


}
 else
            {
                $this->session->set_flashdata('error', 'Invalid Captcha code');
                redirect(admin_url().'signin');
            }


	}

}