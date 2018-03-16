<?php
defined('BASEPATH') OR exit('No direct script access allowed');

include APPPATH . 'third_party/GoogleAuthenticator.php';

class Kyc extends CI_Controller {


	public function __construct()
	{
		parent::__construct();

                $this->load->library('session');
        $this->load->helper('fronthelper/utility_helper');
		$this->load->helper('fronthelper/api_helper');


	}

	public function index()
	{
		$this->load->view('kyc/kyc_form');


	}

	public function kycregister()
    {
			 $userId = $this->session->userdata('_id');
             $userMailId = $this->session->userdata('useremail');

             $firstName = $this->input->post('fname');
             $middleName = $this->input->post('mname');
             $lastName = $this->input->post('lname');
             $DOB = $this->input->post('dob');
             $addLine1 = $this->input->post('address');

             $addLine2 = $this->input->post('address2');
             $city = $this->input->post('city');
             $state = $this->input->post('state');

             $country = $this->input->post('country');
             $pincode = $this->input->post('zip');
             $mobileNumber = $this->input->post('mobile');
             $bankAccountHolderName = $this->input->post('acc_name');


             $bankAccountNumber = $this->input->post('acc_no');
             $bankName = $this->input->post('bank_name');
             $IFSCCode = $this->input->post('ifsc');
             $taxProofNumber = $this->input->post('tax_no');
             $addressProofType = $this->input->post('add_proof');
             $addressProofNumber = $this->input->post('add_proof_no');


           

        $response = kyc_detail($userId, $userMailId, $firstName, $middleName, $lastName,$DOB,$addLine1, $addLine2, $city, $state, $country,$pincode,$mobileNumber, $bankAccountHolderName, $bankAccountNumber, $bankName, $IFSCCode,$taxProofNumber,$addressProofType,$addressProofNumber);
//addrss image

                                 
$image = base64_encode(file_get_contents( $_FILES["addressproof"]["tmp_name"] ));

 

//image upload end

 //Tax image

                                 
$taximage = base64_encode(file_get_contents( $_FILES["tax"]["tmp_name"] ));

 

//image upload end



            if($response)
            {
                $responsedata = json_decode($response,true);

                 if($responsedata['statusCode']==200){

                    $response1 = imageaddress($userId, $image) ;


            if($response1)
            {
                $responsedata1 = json_decode($response1,true);

                 if($responsedata1['statusCode']==200){

                    $response2 = taxaddress($userId, $taximage) ;

                       if($response2) {
            
                $responsedata2 = json_decode($response2,true);

                 if($responsedata2['statusCode']==200){

                   

                    $this->session->set_flashdata('success', 'Successfully uploaded');
                    redirect(kyc_url().'kyc');

                }
                else{

                    $this->session->set_flashdata('error', $responsedata2['message']);
                    redirect(kyc_url().'kyc');

                }

            }


                   

                }
                else{

                    $this->session->set_flashdata('error', $responsedata1['message']);
                    redirect(kyc_url().'kyc');

                }

            }

                   
                }
                else{

                    $this->session->set_flashdata('error', $responsedata['message']);
                    redirect(kyc_url().'kyc');

                }

            }
            else
            {
                $this->session->set_flashdata('error', 'Please Try again');
                redirect(kyc_url().'kyc');
            }

    }


}
