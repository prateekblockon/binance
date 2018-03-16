<?php
defined('BASEPATH') OR exit('No direct script access allowed');

include APPPATH . 'third_party/GoogleAuthenticator.php';


class Tfauth extends CI_Controller {

	
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
		
		$ga = new GoogleAuthenticator();
		$secret = $this->session->userdata('secret_key');
		$email=$this->session->userdata('useremail');
		$data['qrCodeUrl'] = $ga->getQRCodeGoogleUrl($email, $secret);
		$this->load->view('tfauth/tfauth',$data);

	}


	public function verifytotp()
    {
    	$ga = new GoogleAuthenticator();
    	$totp=$this->input->post('code');
    	$user_id = $this->session->userdata('_id');
    	$secret = $this->session->userdata('secret_key');
    	
    	if($this->session->userdata('isTwoFactor')== '0'){
    	$stat = true ;
               }
              else
                {
                 $stat = false ;
                 }

    	$checkResult = $ga->verifyCode($secret, $totp);

    	//print_r($checkResult); die();

    	if($checkResult)
    	{
    		

   $response1 = updatetfastatus($user_id,$stat) ;
//print_r($response1); die();
            if($response1)  	
            {
$responsedata = json_decode($response1,true);

if($responsedata['responseCode']==200){
                 	$this->session->set_flashdata('success', $responsedata['responseMessage'].$stat);

                
                   redirect(userdetails_url().'logout');
             } }

    	}else{
    		$this->session->set_flashdata('error', 'Please enter correct totp!!!');
            redirect(tfauth_url().'tfauth');
    	}
    }

}