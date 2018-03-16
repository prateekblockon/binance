<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Support extends CI_Controller {

	
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
		
		$this->load->view('support/support');
		
	}

	public function support()
	{

			$user_id = $this->session->userdata('_id');
		    $subject = $this->input->post('subject');
            $message = $this->input->post('message');
            

            $response = support($user_id,$subject, $message);
            
            if($response)  
            {
            	$responsedata = json_decode($response,true);
            	
               
                $this->session->set_userdata($arrayName);
               
                 if($responsedata['responseCode']==200){

                 	$this->session->set_flashdata('success', $responsedata['responseMessage'].' ' .$responsedata['data']);

                
                    redirect(support_url().'support');
                }
                else{

                	$this->session->set_flashdata('error', $responsedata['responseMessage']);
                	redirect(support_url().'support');
                      
                }
                
            }
            else
            {
                $this->session->set_flashdata('error', 'Please enter correct Description');
                redirect(support_url().'support');
            }

	}
}