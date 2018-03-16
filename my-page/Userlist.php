<?php
if(!defined('BASEPATH')) exit('No direct script access allowed');

class Userlist extends CI_Controller {


	public function __construct()
	{
		parent::__construct();
		$this->load->library('session');
		$this->load->helper('adminhelper/utility_helper');
		$this->load->helper('adminhelper/apis_helper');	
        error_reporting(E_ALL);
	}

	
	public function index()
	{
		//print_r(userlist());
		$this->load->view('adminpanel/userlist');
	}


	public function userlist()
	{
		
		$response =json_decode(userlist(),true);
		//print_r($response); die();
		 $data='';
		 $data .=' <table id="payments" class="table responsive table-bordered table-stipend">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Date</th>
                                <th>Name</th>
                                <th>E-mail</th>
                                <th>Phone</th>
                                <th>Kyc</th>
                                <th>2 factor</th>
                                <th>Bid/Ask</th>
                                <th>Balance</th>
                                 <th>Action</th>
                            </tr>
                        </thead>';
           $data .='<tbody>';
           if($response)
           {
	           $i=1;
	           $status="BID";
	         foreach ($response['data'] as $res) {
	         
	           	
	           		$data .='<tr>
	                        <td>'.$i.'</td>
	                        <td>'.date('d-M-Y h:i:s',strtotime($res['createdAt'])).'</td>
	                        <td>'.$res['name']." ".$res['middleName']." ".$res['lastName'].'</td>
	                        <td>'.$res['email'].'  <span class="label label-success">'.ucfirst($res['state']['status']).'</span></td>
	                        <td>'.$res['phone'];
	                        if($res['verifyPhone']==false)
	                        {
	                        	$data .=' <span class="label label-danger">Pending</span> ';
	                        }else{
	                        	$data .=' <span class="label label-success">Verified</span> ';
	                        }
	                $data .='</td>
	                        <td>';
	                        if($res['isKYC']==false)
	                        {
	                        	$data .=' <span class="label label-danger">Not Filled</span> ';
	                        }else{
	                        	$data .=' <span class="label label-success">Filled</span> ';

	                        	if($res['verificationStatus']==1)
		                        {
		                        	$data .=' <span class="label label-danger">Pending</span> ';
		                        }elseif($res['verificationStatus']==2){
		                        	$data .=' <span class="label label-success">Success</span> ';
		                        }elseif($res['verificationStatus']==3){
		                        	$data .=' <span class="label label-success">Reject</span> ';
		                        }
	                        
	                        	$data .='  <a class="btn btn-sm btn-success" title="KYC Detail" href="#" onclick="userkycdetail(\''.$res['_id'].'\');" data-toggle="modal" data-target="#kycmodal"><i class="fa fa-search-plus"></i></a>';
	                        }
	                $data .='</td><td>';
	                        if($res['isTwoFactor']==false)
	                        {

	                        	$data .=' <span class="label label-danger">Deactive</span> ';

	                        	$data .='  <a class="btn btn-sm btn-success" title="Active 2-factor Auth" href="#" onclick="tfaupdate(\''.$res['_id'].'\',true);" ><i class="fa fa-lock"></i></a>';
	                        }else{
	                        	$data .=' <span class="label label-success">Active</span> ';

	                        	$data .='  <a class="btn btn-sm btn-danger" title="Deactive 2-factor Auth" href="#" onclick="tfaupdate(\''.$res['_id'].'\',false);" ><i class="fa fa-unlock"></i></a>';
	                        }
	                    
	                $data .='</td>
	                        <td><a class="btn btn-sm btn-warning" title="Bid/Ask" href="#" onclick="useridbidask(\''.$res['_id'].'\');" data-toggle="modal" data-target="#bidaskmodal"><i class="fa fa-search-plus"></i></a></td>
	                        <td><a class="btn btn-sm btn-success" title="Balance" href="#" onclick="userbalances(\''.$res['_id'].'\');" data-toggle="modal" data-target="#balancemodal"><i class="fa fa-search-plus"></i></a>';

	                      $data .='</td><td>';
	                        if($res['state']['status']!='active')
	                        {
	                        	$ustatus='active';
	                        	$data .=' <a class="btn btn-sm btn-danger" title="Active user" href="#" onclick="enabledisableuserstatus(\''.$res['_id'].'\',\''.$ustatus.'\');" ><i class="fa fa-lock"></i></a> ';
	                        }
	                         if($res['state']['status']!='deactive')
	                        {
	                        	$ustatus='deactive';
	                        	$data .=' <a class="btn btn-sm btn-danger" title="Dective user" href="#" onclick="enabledisableuserstatus(\''.$res['_id'].'\',\''.$ustatus.'\');" ><i class="fa fa-lock"></i></a> ';
	                        }
	                         if($res['state']['status']!='block')
	                        {
	                        	$ustatus='block';
	                        	$data .=' <a class="btn btn-sm btn-danger" title="Block user" href="#" onclick="enabledisableuserstatus(\''.$res['_id'].'\',\''.$ustatus.'\');" ><i class="fa fa-lock"></i></a> ';
	                        }

	                 $data .=  '</td> </tr>';
	                 $i++;}
             }
                $data .='</tbody>
                </table>';
               echo $data;
	}


	public function kycdetail()
	{
		$userid=$this->input->post('userid');
		$response =json_decode(kycdetail($userid),true);
		$data='';
		$data .='<div class="row" style="float:right;margin-bottom:2%"><div class="col-md-12">
		<a class="btn btn-danger" href="javascript:;" onclick="kycrejectapprove(\''.$userid.'\',3);">Reject</a>
		<a class="btn btn-success" href="javascript:;" onclick="kycrejectapprove(\''.$userid.'\',2);">Approved</a>
		</div></div>';
		 $data .='<table class="table responsive table-bordered table-stipend">
   					<tbody>';		
		
				     $data .='<tr>
				        <td class="tdclass">Firstname</td>
				        <td>'.$response['user']["kycForm"]["firstName"].'</td>
				        <td class="tdclass">Middlename</td>';
				        if($response['user']['kycForm']['middleName']){
				        	$data .='<td>'.$response['user']['kycForm']['middleName'].'</td>';
				        }else{
				        	$data .='<td>-----</td>';
				        }
			   
			   $data .='<td class="tdclass">Lastname</td>
				  		<td>'.$response['user']['kycForm']['lastName'].'</td>
				      </tr>';
				      $data .='<tr>
				        <td class="tdclass">Address 1</td>
				        <td colspan="5">'.$response['user']["kycForm"]["addLine1"].'</td>
				      </tr>';
				      $data .='<tr>
				        <td class="tdclass">Address 2</td>';
				        if($response['user']['kycForm']['addLine2']){
				        	$data .='<td>'.$response['user']['kycForm']['addLine2'].'</td>';
				        }else{
				        	$data .='<td>-----</td>';
				        }
			   
			   $data .='<tr>
				        <td class="tdclass">city</td>
				        <td>'.$response['user']["kycForm"]["city"].'</td>
				        <td class="tdclass">state</td>
				        <td>'.$response['user']['kycForm']['state'].'</td>
				  		<td class="tdclass">DOB</td>
				        <td>'.$response['user']['kycForm']['DOB'].'</td>
				      </tr>';
				      $data .='<tr>
				        <td class="tdclass">country</td>
				        <td>'.$response['user']["kycForm"]["country"].'</td>
				        <td class="tdclass">pincode</td>
				        <td>'.$response['user']['kycForm']['pincode'].'</td>
				  		<td class="tdclass">mobileNumber</td>
				        <td>'.$response['user']['kycForm']['mobileNumber'].'</td>
				      </tr>';

				      $data .='<tr>
				        <td colspan="6" class="tdclass" style="text-align:center;">Bank Detail</td>
				                			  		
				      </tr>';
				      $data .='<tr>
				        <td class="tdclass">Account Holder Name</td>
				        <td>'.$response['user']["kycForm"]["bankAccountHolderName"].'</td>
				        <td class="tdclass">AccountNumber</td>
				        <td>'.$response['user']['kycForm']['bankAccountNumber'].'</td>
				  		<td class="tdclass">bank Name</td>
				        <td>'.$response['user']['kycForm']['bankName'].'</td>
				      </tr>';
				      $data .='<tr>
				        <td class="tdclass">IFSC Code</td>
				        <td>'.$response['user']["kycForm"]["IFSCCode"].'</td>
				        <td class="tdclass">Tax Proof Number</td>
				        <td>'.$response['user']['kycForm']['taxProofNumber'].'</td>
				  		<td class="tdclass">Address Proof Type</td>
				        <td>'.$response['user']['kycForm']['addressProofType'].'</td>
				      </tr>';
				      $data .='<tr>
				        <td class="tdclass">Address Proof Number</td>
				        <td colspan="2">'.$response['user']["kycForm"]["addressProofNumber"].'</td>
				        <td class="tdclass">Verification Date</td>
				        <td colspan="2">'.date('d-M-Y h:i:s',strtotime($response['user']['kycForm']['verificationDate'])).'</td>
				      </tr>';
				      $data .='<tr>
				        <td class="tdclass">Address Proof Image</td>
				        <td colspan="2"><a href="'.$response['user']["kycForm"]["addressProofImage"].'" target="_blank"><img src="'.$response['user']["kycForm"]["addressProofImage"].'" style="width:30%"></a></td>
				        <td class="tdclass">Tax Proof Image</td>
				        <td colspan="2"><a href="'.$response['user']["kycForm"]["taxProofImage"].'" target="_blank"><img src="'.$response['user']['kycForm']['taxProofImage'].'" style="width:30%"></a></td>
				      </tr>';
				      
				    $data .='</tbody>
				  </table>';
				
		 
               echo $data;
	}

	public function userbidaskdata()
	{
		$userid=$this->input->post('userid');
		$status=$this->input->post('status');

				
		$data='';
		
		  $data .=' <table class="table responsive table-bordered table-stipend">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Date</th>
                                <th>Market</th>
                                <th>Amount (Currency)</th>
                                <th>Total Amount</th>
                                <th>Rate</th>
                                <th>Total Volume</th>
                            </tr>
                        </thead>';
           $data .='<tbody>';
           if($userid!='' && $status!=''){
           $response =json_decode(bidaskdata($userid,$status),true);
		   //print_r($response['data']['total']);
           if($response['data']['total'])
           {
	           $i=1;
	         foreach ($response['data']['docs'] as $res) {
	         
	           		if($res['status']==false)
	           		{
	           			$data .='<tr class="danger">';
	           		}else{
	           			$data .='<tr class="success">';
	           		}
	           	//	$data .='<tr>';
	                       $data .=' <td>'.$i.'</td>
	                        <td>'.date('d-M-Y h:i:s',strtotime($res['createdAt'])).'</td>
	                        <td>'.$res['market'].'</td>
	                        <td>'.$res['amount']['value'].'  <span class="label label-success">'.$res['amount']['currency'].'</span></td>
	                        <td>'.$res['total_amount'].'  <span class="label label-success">'.$res['amount']['currency'].'</td>
	                        <td>'.$res['rate'].'</td>
	                        <td>'.$res['total_volume'].'  <span class="label label-success">'.$res['volume']['currency'].'</td>
	                    </tr>';
	                 $i++;}
             }
         }
                $data .='</tbody>
                </table>';
               echo $data;
	}

	function kycrejectapprove()
	{
		$userid=$this->input->post('userid');
		$status=$this->input->post('status');

		$response =json_decode(kycrejectapprove($userid,$status),true);

		if($status==2)
		{
			$stat='approved';
		}else{
			$stat='reject';
		}

		if($response)
		{
			$this->session->set_flashdata('success', 'Kyc has been '.$stat.'successfully.');
            
        }
        else
        {
            $this->session->set_flashdata('error', 'Error occurred while kyc '.$stat.' !!!');
            
        }
	}

	public function userbalancedata()
	{
		$userid=$this->input->post('userid');

				
		$data='';
		
		  $data .=' <table class="table responsive table-bordered table-stipend">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Currency Name</th>
                                <th>Address</th>
                                <th>Balance</th>
                                <th>Freeze Balance</th>
                            </tr>
                        </thead>';
           $data .='<tbody>';
           if($userid!=''){
           $response =json_decode(userbalances($userid),true);
		  // print_r($response['data']['currencies']);
           if($response['data']['currencies'])
           {
	           $i=1;
	         foreach ($response['data']['currencies'] as $res) {
	         
	           			if($res['balance']=='0' || $res['freezeBalance']=='0')
	           		{
	           			$data .='<tr class="danger">';
	           		}else{
	           			$data .='<tr class="success">';
	           		}
	                    $data .=' <td>'.$i.'</td>
	                        <td>'.$res['name'].' ('.$res['currency'].')</td>
	                        <td>'.$res['address'].'</td>
	                        <td>'.$res['balance'].'</td>
	                        <td>'.$res['freezeBalance'].'</td>
	                    </tr>';
	                 $i++;}
             }
         	 }
                $data .='</tbody>
                </table>';
               echo $data;
	}

	function tfaupdate()
	{
		$userid=$this->input->post('userid');
		$status=$this->input->post('status');

		$response =json_decode(updatetfastatus($userid,$status),true);

		if($status==true)
		{
			$stat='enable';
		}else{
			$stat='disable';
		}

		if($response)
		{
			$this->session->set_flashdata('success', '2-factor auth has been '.$stat.' successfully.');
            
        }
        else
        {
            $this->session->set_flashdata('error', 'Error occurred while 2-factor auth '.$stat.' !!!');
            
        }
	}


	function enabledisableuserstatus()
	{
		$userid=$this->input->post('userid');
		$status=$this->input->post('status');
		$response =json_decode(enabledisableuserstatus($userid,$status),true);
		
		if($response['responseCode']==200)

		{
			$this->session->set_flashdata('success', 'User has been '.$status.' successfully.');
			
        }
        else
        {
            $this->session->set_flashdata('error', 'Error occurred while '.$status.' user !!!');
        }
	}


	
}