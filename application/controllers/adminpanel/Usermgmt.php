<?php
if(!defined('BASEPATH')) exit('No direct script access allowed');

class Usermgmt extends CI_Controller {


	public function __construct()
	{
		parent::__construct();
		$this->load->library('session');
		$this->load->helper('adminhelper/utility_helper');
		$this->load->helper('adminhelper/apis_helper');
		
		
        
	}
	
	public function index()
	{

		$this->load->view('adminpanel/usermgmt');
	}

	public function addusermgmt()
	{
		$email=$this->input->post('email');

		$response=json_decode(addusermgmt($email),true);

		if($response)
		{
			$this->session->set_flashdata('success', 'Sub-user has been created successfully.');
            redirect(admin_url().'usermgmt');
		}else{
			$this->session->set_flashdata('error', 'Error occured while creating subuser!!!');
            redirect(admin_url().'usermgmt');
		}
	}


	public function getsubuserlist()
	{
		$response =json_decode(subuserlist(),true);

	
		$data='';
		 $data .=' <table id="payments" class="table responsive table-bordered table-stipend">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Email </th>
                                <th>Action</th>
                            </tr>
                        </thead>';
           $data .='<tbody>';
           if($response)
           {
	           $i=1;
	          
	         foreach ($response['data'] as $key => $res) {
	         		
	           		$data .='<tr>
	                        <td>'.$i.'</td>
	                        <td>' .$res['email'].'<span class="label label-success">'.ucfirst($res['state']['status']);
	                        

	                $data .='</td><td>';
	                        if($res['state']['status']!='active')
	                        {
	                        	$ustatus='active';
	                        	$data .=' <a class="btn btn-sm btn-danger" title="Active user" href="#" onclick="enabledisableuserstatus(\''.$res['_id'].'\',\''.$ustatus.'\');" ><i class="fa fa-lock"></i></a> ';
	                        }
	                         if($res['state']['status']!='deactive')
	                        {
	                        	$ustatus='deactive';
	                        	$data .=' <a class="btn btn-sm btn-danger" title="Deactive user" href="#" onclick="enabledisableuserstatus(\''.$res['_id'].'\',\''.$ustatus.'\');" ><i class="fa fa-lock"></i></a> ';
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