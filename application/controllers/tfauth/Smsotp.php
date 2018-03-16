<?php
defined('BASEPATH') OR exit('No direct script access allowed');

include APPPATH . 'third_party/GoogleAuthenticator.php';


class Smsotp extends CI_Controller {

	
	public function __construct()
	{
		parent::__construct();

			$this->load->library('session');
		$this->load->helper('fronthelper/utility_helper');
		$this->load->helper('fronthelper/api_helper');
		

		if($this->session->userdata('_id')=='')
		{
			redirect(userdetails_url().'login');
		}
        
	}

	public function index()
	{
		
		//print_r($_SESSION); die();
		$this->load->view('tfauth/smsotp');

	}

	public function sendotp()
	{

        
		    $mobile='+'.$_POST['c'];

		    $user_id = $this->session->userdata('_id');
            

            $response = sendotp($user_id, trim($mobile));

            print_r($response);

	}

public function sendotplogin()
	{

        
		    $mobile=$this->session->userdata('phone');

		    $user_id = $this->session->userdata('_id');
            

            $response = sendotp($user_id, trim($mobile));

            print_r($response);

	}


	public function verifynumber()
	{

        
		    $otp = $this->input->post('verifyCode');
		    $stat = $this->input->post('stat');

		     $user_id = $this->session->userdata('_id');
          
        
            $response = verifynumber($user_id, $otp);

            if($response)  	
            {
            	$responsedata = json_decode($response,true);
                
              
               
                 if($responsedata['responseCode']==200){

   $response1 = phoneFactor($user_id,$stat) ;
//print_r($response1); die();
            if($response1)  	
            {
$responsedata1 = json_decode($response1,true);

if($responsedata1['responseCode']==200){
                 	$this->session->set_flashdata('success', $responsedata1['responseMessage'].$stat);

                  redirect(userdetails_url().'logout');
                  
             }
else{

                	$this->session->set_flashdata('error', $responsedata1['responseMessage'].$stat);
                	redirect(tfauth_url().'smsotp');
                      
                }



              }  }
                else{

                	$this->session->set_flashdata('error', $responsedata['responseMessage'].$stat);
                	redirect(tfauth_url().'smsotp');
                      
                }
                
            }
            else
            {
                $this->session->set_flashdata('error', 'Please enter correct email and password');
                redirect(tfauth_url().'smsotp');
            }

	}

	

}