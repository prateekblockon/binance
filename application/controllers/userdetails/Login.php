<?php
defined('BASEPATH') OR exit('No direct script access allowed');

include APPPATH . 'third_party/GoogleAuthenticator.php';


class Login extends CI_Controller {

	
	public function __construct()
	{
		parent::__construct();

		$this->load->library('session');
		$this->load->helper('fronthelper/utility_helper');
		$this->load->helper('fronthelper/api_helper');
		
        
	}

	public function index()
	{
		$this->load->view('userdetails/login');
              
	}



	public function login()
	{

$response1 = curencylist();

    $responsedata1 = json_decode($response1,true);
    $responsedata1 = array_reverse($responsedata1);
  $market = $responsedata1['data'][0]['market'];

        
        $query = @unserialize (file_get_contents('http://ip-api.com/php/'));
            if ($query && $query['status'] == 'success') {
            $currlocation=  $query['city'] . ', ' . $query['country'];
      
        }
        
		    $name = $this->input->post('email');
            $password = $this->input->post('pwd');
            $ip=getHostByName(getHostName()); 
            $location = $currlocation;

            $response = login($name, $password, $ip, $location);

            if($response)  	
            {
            	$responsedata = json_decode($response,true);
                if($responsedata['responseCode']==200)
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
                    
                    'isPhoneFactor' => $responsedata['data']['isPhoneFactor'],
                    
                    'iskyc' => $responsedata['data']['isKYC'],

                      'role' => $responsedata['data']['role']


                );

                }
              
                $this->session->set_userdata($arrayName);
               
                 if($responsedata['responseCode']==200){

                 	$this->session->set_flashdata('success', $responsedata['responseMessage']);

  if( ($this->session->userdata("isPhoneFactor")==false) && ($this->session->userdata("isTwoFactor")==false) )
{
 redirect(trading_url().'trade?curr='.base64_encode("$market")); 
 } else{    
 redirect(userdetails_url()."login/twofa_verify");
        } 
          //          redirect(userdetails_url().'login');
              
//                    redirect(userdetails_url().'login');

                }else if($responsedata['responseCode']==402){

                    
                    redirect(maintenace_url().'maintenance');
                      
                }
                else{

                	$this->session->set_flashdata('error', $responsedata['responseMessage']);
                	redirect(userdetails_url().'login');
                      
                }
                
            }
            else
            {
                $this->session->set_flashdata('error', 'Please enter correct email and password');
                redirect(userdetails_url().'login');
            }

	}


    public function twofa_verify()
    {
        $this->load->view('userdetails/twofa_verify');
              
    }



    public function verifynumber()
    {

      $response1 = curencylist();

    $responsedata1 = json_decode($response1,true);
    $responsedata1 = array_reverse($responsedata1);
  $market = $responsedata1['data'][0]['market'];

       $ga = new GoogleAuthenticator();
        $totp=$this->input->post('tfa');
       $secret = $this->session->userdata('secret_key');
           
            $otp = $this->input->post('verifyCode');
            $user_id = $this->session->userdata('_id');
            
if($otp!=''){
            $response = verifynumber($user_id, $otp);

            if($response)   
            {
                $responsedata = json_decode($response,true);
                
              
               
                 if($responsedata['responseCode']==200){

                    $this->session->set_flashdata('success', $responsedata['responseMessage']);

                
                    redirect(trading_url().'trade?curr='.base64_encode("$market"));
                }
                else{

                    $this->session->set_flashdata('error', $responsedata['responseMessage']);
                    redirect(userdetails_url().'login/twofa_verify');
                      
                }
                
            }
        }
            elseif($totp!='')
            {

$checkResult = $ga->verifyCode($secret, $totp);

if($checkResult)
        {
            
     $this->session->set_flashdata('success', 'success');

                
    redirect(trading_url().'trade?curr='.base64_encode("$market"));
           
        }else{
            $this->session->set_flashdata('error', 'Please enter correct totp!!!');
         redirect(userdetails_url().'login/twofa_verify');    

             }


}


    }



    
}
