<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Changepassword extends CI_Controller {

	
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
		$this->load->view('userdetails/changepassword');
              
	}

	public function changepassword()
	{

        
        $query = @unserialize (file_get_contents('http://ip-api.com/php/'));
            if ($query && $query['status'] == 'success') {
            $currlocation=  $query['city'] . ', ' . $query['country'];
      
        }

            $user_id = $this->session->userdata('_id');
		    $oldPwd = $this->input->post('oldPassword');
            $newPwd = $this->input->post('newPassword');
           

            $response = changepassword($user_id, $oldPwd, $newPwd);

            if($response)  	
            {
            	$responsedata = json_decode($response,true);
                
               
                 if($responsedata['responseCode']==200){

                 	$this->session->set_flashdata('success', $responsedata['responseMessage']);

                
                    redirect(userdetails_url().'changepassword');
                }
                else{

                	$this->session->set_flashdata('error', $responsedata['responseMessage']);
                	redirect(userdetails_url().'changepassword');
                      
                }
                
            }
            else
            {
                $this->session->set_flashdata('error', 'Please enter correct email and password');
                redirect(userdetails_url().'changepassword');
            }

	}

}