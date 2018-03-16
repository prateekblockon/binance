<?php 
function userlist()
	{
		

		 // $context = stream_context_create(array(
		 //    "ssl"=>array(
		 //     'verify_peer'=>false,
		 //     'verify_peer_name'=>false,
		 //    ),
		 //    'http' => array(
		 //    'method' => 'POST',
		 //    'header' => "Content-Type: application/json\r\n",
		 //    'content' => json_encode($postData)
		 //    )
		 //    ));

		return $response = file_get_contents(api_url().'user/userList');

	}

	function kycdetail($userid)
	{
		$postData = array(
		   "userId"=> $userid
		   );
		   $context = stream_context_create(
		   	 array(
		    // "ssl"=>array(
		    //  'verify_peer'=>false,
		    //  'verify_peer_name'=>false,
		    // ),
		    'http' => array(
		    'method' => 'POST',
		    'header' => "Content-Type: application/json\r\n",
		    'content' => json_encode($postData)
		    )
		    ));
		return $response = file_get_contents(api_url().'user/getVerificationDetails',false,$context);
	}
	function bidaskdata($userid,$status)
	{
		$page="1";
		$postData = array(
		   "user_id"=> $userid,
		   "type"=>$status,
		   "page"=>$page
		   );
		   $context = stream_context_create(
		   	 array(
		    // "ssl"=>array(
		    //  'verify_peer'=>false,
		    //  'verify_peer_name'=>false,
		    // ),
		    'http' => array(
		    'method' => 'POST',
		    'header' => "Content-Type: application/json\r\n",
		    'content' => json_encode($postData)
		    )
		    ));
		return $response = file_get_contents(api_url().'user/userTradeMarket',false,$context);
	}

	function kycrejectapprove($userid,$status)
	{
		$postData = array(
		   "userId"=> $userid,
		   "status"=>$status
		   );
		   $context = stream_context_create(
		   	 array(
		    // "ssl"=>array(
		    //  'verify_peer'=>false,
		    //  'verify_peer_name'=>false,
		    // ),
		    'http' => array(
		    'method' => 'POST',
		    'header' => "Content-Type: application/json\r\n",
		    'content' => json_encode($postData)
		    )
		    ));
		return $response = file_get_contents(api_url().'user/updateKYCformStatusByUserId',false,$context);
	}

	function totaluserscount()
	{
		return $response = file_get_contents(api_url().'admin/usercount');
	}

	function activeuserscount()
	{
		return $response = file_get_contents(api_url().'admin/activeusercount');
	}

	function deactiveusercount()
	{
		return $response = file_get_contents(api_url().'admin/deactiveusercount');
	}

	function blockusercount()
	{
		return $response = file_get_contents(api_url().'admin/blockusercount');
	}

	function kycusercount()
	{
		return $response = file_get_contents(api_url().'admin/kycusercount');
	}

	function pkyckusercount()
	{
		return $response = file_get_contents(api_url().'admin/pkycusercount');
	}

	function akycusercount()
	{
		return $response = file_get_contents(api_url().'admin/akycusercount');
	}

	function rkyckusercount()
	{
		return $response = file_get_contents(api_url().'admin/rkycusercount');
	}

	function userbalances($userid)
	{
		return $response = file_get_contents(api_url().'user/userBalance?user_id='.$userid);
	}

	function marketdata()
	{
		return $response = file_get_contents(api_url().'address/marketData');
	}

	function switchsstatus()
	{
		return $response = file_get_contents(api_url().'admin/switch');
	}

	function enabledisableexchnagestatus($status)
	{
		return $response = file_get_contents(api_url().'admin/exchangeSwitch?exchange='.$status);
	}
	
	function enabledisablesignupstatus($status)
	{
		return $response = file_get_contents(api_url().'admin/signupSwitch?signup='.$status);
	}
	
	function getcurrencylist()
	{
		return $response = file_get_contents(api_url().'address/marketData');
	}

	function enabledisablewithdraw($status,$currency)
	{

		return $response = file_get_contents(api_url().'admin/withdrawSwitch'.ucfirst(strtolower($status)).'?currency='.$currency);
	}

	function updatetfastatus($userid,$status)
	{
		$postData = array(
		   "userId"=> $userid,
		   "isTwoFactor"=>$status
		   );
		   $context = stream_context_create(
		   	 array(
		    // "ssl"=>array(
		    //  'verify_peer'=>false,
		    //  'verify_peer_name'=>false,
		    // ),
		    'http' => array(
		    'method' => 'POST',
		    'header' => "Content-Type: application/json\r\n",
		    'content' => json_encode($postData)
		    )
		    ));
		return $response = file_get_contents(api_url().'user/twoFactor',false,$context);
	}

	function enabledisabletrading($status,$currency)
	{
		echo api_url().'admin/trade'.ucfirst(strtolower($status)).'?currency='.$currency;
		return $response = file_get_contents(api_url().'admin/tradeSwitch'.ucfirst(strtolower($status)).'?currency='.$currency);
	}

	function asklist()

		{
			
		$response = file_get_contents(api_url().'user/quantityBarAsk');
		
		         return $response;
		}

		function bidlist()

		{
			
		 $response = file_get_contents(api_url().'user/quantityBarBid');
		
		         return $response;
		}

		function tradehistory()

		{
			
		$response = file_get_contents(api_url().'user/orderTrade');
		
		         return $response;
		}

	function marketcurencylist()

		{
			
		$response = file_get_contents(api_url().'user/orderBidPercentage');
		
		         return $response;
		}

	function addusermgmt($email)
	{
		$postData = array(
		   "emailId"=> $email
		   );
		   $context = stream_context_create(
		   	 array(
		    // "ssl"=>array(
		    //  'verify_peer'=>false,
		    //  'verify_peer_name'=>false,
		    // ),
		    'http' => array(
		    'method' => 'POST',
		    'header' => "Content-Type: application/json\r\n",
		    'content' => json_encode($postData)
		    )
		    ));
		return $response = file_get_contents(api_url().'admin/subadmin',false,$context);
	}

	function subuserlist()
	{
		return $response = file_get_contents(api_url().'user/subadminList');
	}

	function enabledisableuserstatus($userid,$status)
	{
		
		  $postData = array(
          
			
				"_id"=>$userid,
				"status" => $status
			

          );

          $context = stream_context_create(array(
				
				'http' => array(
			      'method' => 'POST',
			      'header' => "Content-Type: application/json\r\n",
			      'content' => json_encode($postData)
			      )
				));
         $response = file_get_contents(api_url().'admin/changeUserState', false, $context);
         return $response;


	}



	function changepassword($user_id, $oldPwd, $newPwd)

{

          $postData = array(
          
			
				"_id"=>$user_id,
				"oldPassword" => $oldPwd,
				"newPassword" => $newPwd
			

          );

          $context = stream_context_create(array(
				
				'http' => array(
			      'method' => 'POST',
			      'header' => "Content-Type: application/json\r\n",
			      'content' => json_encode($postData)
			      )
				));
         $response = file_get_contents(api_url().'user/changePassword', false, $context);
         return $response;
}


	function login($name, $password, $ip, $location)

{

          $postData = array(
          
			"email"=>$name,
			"password"=>$password,
			"ip"=>$ip,
			"location"=>$location

          );

          $context = stream_context_create(array(
				
				'http' => array(
			      'method' => 'POST',
			      'header' => "Content-Type: application/json\r\n",
			      'content' => json_encode($postData)
			      )
				));
         $response = file_get_contents(api_url().'user/login', false, $context);
         return $response;
}



?>