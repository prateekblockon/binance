<?php
defined('BASEPATH') OR exit('No direct script access allowed');

include APPPATH . 'third_party/GoogleAuthenticator.php';

class Register extends CI_Controller {

	
	public function __construct()
	{
		parent::__construct();
        $this->load->library('session');
		$this->load->helper('fronthelper/utility_helper');
		$this->load->helper('fronthelper/api_helper');
        
        
	}

	public function index()
	{
		$this->load->view('userdetails/register');
         
          
	}
	public function register()
    {

            $name = $this->input->post('fname');
            $password = $this->input->post('userPassword');
            $lastName = $this->input->post('lname');
            $middleName = $this->input->post('mname');
            $email = $this->input->post('email');
            $ga = new GoogleAuthenticator();
            $secret = $ga->createSecret(); 

            

            $response = register($name, $password, $lastName, $middleName, $email,$secret);
            
            if($response)   
            {
                $responsedata = json_decode($response,true);
                 if($responsedata['responseCode']==200){

                    $this->session->set_flashdata('success', $responsedata['responseMessage']);
                    redirect(userdetails_url().'register');
                    
                }
                else{

                    $this->session->set_flashdata('error', $responsedata['responseMessage']);
                    redirect(userdetails_url().'register');
                      
                }
                
            }
            else
            {
                $this->session->set_flashdata('error', 'Please enter correct email and password');
                redirect(userdetails_url().'register');
            }

    }


}