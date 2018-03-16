<?php
if(!defined('BASEPATH')) exit('No direct script access allowed');

class Fundmgmt extends CI_Controller {


	public function __construct()
	{
		parent::__construct();
		$this->load->library('session');
		$this->load->helper('adminhelper/utility_helper');
		$this->load->helper('adminhelper/apis_helper');
		
		
        
	}

	
	public function index()
	{

		$this->load->view('adminpanel/fundmgmt');
	}

	public function getfundmgmtlist()
	{
		// $switchresponse =json_decode(switchsstatus(),true);


		// $tradearr=$switchresponse['data']['trade'];
		// $switharr=$switchresponse['data']['withdraw'];
	
		// $response =json_decode(getcurrencylist(),true);
		
		$data='';
		 $data .=' <table id="payments" class="table responsive table-bordered table-stipend">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>currency</th>
                                <th>Volume</th>
                                <th>Freezed Volume</th>
                                <th>Hot Balance</th>
                                <th>Cold Balance</th>
                                <th>Action</th>
                            </tr>
                        </thead>';
           $data .='<tbody>';
          //  if($response)
          //  {
	         //   $i=1;
	          
	         // foreach ($response['data'] as $key => $res) {
	         // 	foreach ($res['currencyData'] as $key => $value) {
	         		
	         //   		$data .='<tr>
	         //                <td>'.$i.'</td>
	         //                <td>'.$value['currency'].'</td>
	         //                <td>'.$value['name'].'</td>
	                        
	         //            </tr>';
	         //         $i++;}
	         //         }
          //    }
                $data .='</tbody>
                </table>';
               echo $data;
	}
}	