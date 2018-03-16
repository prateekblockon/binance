<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class ForgotPassword extends CI_Controller {

	
	public function __construct()
	{
		parent::__construct();

		$this->load->helper('fronthelper/utility_helper');
		$this->load->helper('fronthelper/api_helper');
		
        
	}

	public function index()
	{
		$this->load->view('userdetails/forgotPassword');
	}

	public function forgotPassword()
	{
		    $email = $this->input->post('email');
            

            $response = forgotPassword($email);

            if($response)  	
            {
            	$responsedata = json_decode($response,true);
                
               
                 if($responsedata['responseCode']==200){

                 	$this->session->set_flashdata('success', $responsedata['responseMessage']);
                    redirect(userdetails_url().'forgotPassword');
                }
                else{

                	$this->session->set_flashdata('error', $responsedata['responseMessage']);
                	redirect(userdetails_url().'forgotPassword');
                      
                }
                
            }
            else
            {
                $this->session->set_flashdata('error', 'Please enter correct email and password');
                redirect(userdetails_url().'login');
            }

	}
}