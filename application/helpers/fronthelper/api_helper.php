<?php 


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
         $response = file_get_contents(api_url().'exchanges/api/v1/user/login', false, $context);
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
         $response = file_get_contents(api_url().'exchanges/api/v1/user/changePassword', false, $context);
         return $response;
}

function register($name, $password, $lastName, $middleName, $email, $secret)

{

          $postData = array(
          
			"name"=>$name,
			"password"=>$password,
			"lastName"=>$lastName,
			"middleName"=>$middleName,
			"email"=>$email,
			"googleSecretKey"=>$secret

          );

          $context = stream_context_create(array(
				
				'http' => array(
			      'method' => 'POST',
			      'header' => "Content-Type: application/json\r\n",
			      'content' => json_encode($postData)
			      )
				));
         $response = file_get_contents(api_url().'exchanges/api/v1/user/createUser', false, $context);
         return $response;
}

function getaddress($user_id,$currency)

		{
			
          $postData = array(
          
			"user_id"=>$user_id,
			"currency"=>$currency

          );

          $context = stream_context_create(array(
				
				'http' => array(
			      'method' => 'POST',
			      'header' => "Content-Type: application/json\r\n",
			      'content' => json_encode($postData)
			      )
				));
        
		$response = file_get_contents(api_url().'exchanges/api/v1/address/genAddress', false, $context);
		         return $response;
		}

function userallcurrencybalance($user_id)

		{
			
		$response = file_get_contents(api_url().'exchanges/api/v1/user/userBalance?user_id='.$user_id);

		         return $response;
		}

function usermaincurrencybalance($user_id,$curr)

		{
			
		$response = file_get_contents(api_url().'exchanges/api/v1/user/userCurrencyBalance?user_id='.$user_id.'&currency='.$curr);
		         return $response;
		}
function usersubcurrencybalance($user_id,$curr)

		{
			
		$response = file_get_contents(api_url().'exchanges/api/v1/user/userCurrencyBalance?user_id='.$user_id.'&currency='.$curr);
		         return $response;
		}

function forgotpassword($user_email)

		{
			
		$response = file_get_contents(api_url().'exchanges/api/v1/user/forgetPassword?email='.$user_email);
		         return $response;
		}

function useropenorder($user_id,$maincurr,$subcurr)

		{
			
	           $postData = array(
	          
				"user_id"=> $user_id,
				"page"=>1,
				"status"=>false,
				"sort"=>"processedAt",
				"market"=>$maincurr,
				"currency"=>$subcurr
				

	          );

	          $context = stream_context_create(array(
					
					'http' => array(
				      'method' => 'POST',
				      'header' => "Content-Type: application/json\r\n",
				      'content' => json_encode($postData)
				      )
					));
	         $response = file_get_contents(api_url().'exchanges/api/v1/user/userTrades', false, $context);
	         
	         return $response;
	         
		}

function userallopenorder($user_id)

		{
			
	           $postData = array(
	          
				"user_id"=> $user_id,
				"page"=>1,
				"status"=>false,
				"sort"=>"processedAt"
			
	          );

	          $context = stream_context_create(array(
					
					'http' => array(
				      'method' => 'POST',
				      'header' => "Content-Type: application/json\r\n",
				      'content' => json_encode($postData)
				      )
					));
	         $response = file_get_contents(api_url().'exchanges/api/v1/user/userOrders', false, $context);
	         
	         
	         return $response;
	         
		}

// function userallcloseorder($user_id,$page)

// 		{
			
// 	           $postData = array(
	          
// 				"user_id"=> $user_id,
// 				"page"=> $page,
// 				"status"=>true,
// 				"sort"=>"processedAt"
			
// 	          );

// 	          $context = stream_context_create(array(
					
// 					'http' => array(
// 				      'method' => 'POST',
// 				      'header' => "Content-Type: application/json\r\n",
// 				      'content' => json_encode($postData)
// 				      )
// 					));
// 	         $response = file_get_contents(api_url().'exchanges/api/v1/user/userOrders', false, $context);
	         
	         
// 	         return $response;
	         
// 		}



function userallcloseorder($user_id,$page,$maincurr,$subcurr)

		{
			
	           $postData = array(
	          
				"user_id"=> $user_id,
				"page"=>$page,
				"status"=>true,
				"sort"=>"processedAt",
				"market"=>$maincurr,
				"currency"=>$subcurr
				

	          );

	          $context = stream_context_create(array(
					
					'http' => array(
				      'method' => 'POST',
				      'header' => "Content-Type: application/json\r\n",
				      'content' => json_encode($postData)
				      )
					));
	         $response = file_get_contents(api_url().'exchanges/api/v1/user/userTrades', false, $context);
	         return $response;
		}


function usercloseorder($user_id,$maincurr,$subcurr)

		{
			
	           $postData = array(
	          
				"user_id"=> $user_id,
				"page"=>1,
				"status"=>true,
				"sort"=>"processedAt",
				"market"=>$maincurr,
				"currency"=>$subcurr
				

	          );

	          $context = stream_context_create(array(
					
					'http' => array(
				      'method' => 'POST',
				      'header' => "Content-Type: application/json\r\n",
				      'content' => json_encode($postData)
				      )
					));
	         $response = file_get_contents(api_url().'exchanges/api/v1/user/userTrades', false, $context);
	         return $response;
		}

function tradehistory($maincurr,$subcurr)

		{
			
		$response = file_get_contents(api_url().'exchanges/api/v1/user/orderTrade?market='.trim($maincurr).'&currency='.trim($subcurr));
		
		         return $response;
		}

function curencylist()

		{
			
		$response = file_get_contents(api_url().'exchanges/api/v1/user/orderBidPercentage');
		
		         return $response;
		}

function asklist($maincurr,$subcurr)

		{
			
	$response = file_get_contents(api_url().'exchanges/api/v1/user/quantityBarAsk?market='.$maincurr.'&currency='.$subcurr);
		
		         return $response;
		}

function bidlist($maincurr,$subcurr)

		{
			
	$response = file_get_contents(api_url().'exchanges/api/v1/user/quantityBarBid?market='.$maincurr.'&currency='.$subcurr);
		
		         return $response;
		}

function marketinfo($maincurr,$subcurr)

		{
			
		$response = file_get_contents(api_url().'exchanges/api/v1/user/marketInfo?market='.$maincurr.'&currency='.$subcurr);

		
		         return $response;
		}

function sendotp($user_id,$mobile)

		{
			
	           $postData = array(
	          
				"_id"=>$user_id,
				"number" =>$mobile,

	          );

	          $context = stream_context_create(array(
					
					'http' => array(
				      'method' => 'POST',
				      'header' => "Content-Type: application/json\r\n",
				      'content' => json_encode($postData)
				      )
					));
	         $response = file_get_contents(api_url().'exchanges/api/v1/user/sendOtp', false, $context);
	         return $response;
		}


function verifynumber($user_id,$otp)

		{
			
	           $postData = array(
	          
				"_id"=>$user_id,
				"otp" =>$otp,

	          );

	          $context = stream_context_create(array(
					
					'http' => array(
				      'method' => 'POST',
				      'header' => "Content-Type: application/json\r\n",
				      'content' => json_encode($postData)
				      )
					));
	         $response = file_get_contents(api_url().'exchanges/api/v1/user/verifyOtp', false, $context);
	         return $response;
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
		return $response = file_get_contents(api_url().'exchanges/api/v1/user/twoFactor',false,$context);
	}




function phoneFactor($user_id,$stat)

		{
			

	           $postData = array(
	          
				"userId"=>$user_id,
				"isPhoneFactor" => $stat

	          );

	          $context = stream_context_create(array(
					
					'http' => array(
				      'method' => 'POST',
				      'header' => "Content-Type: application/json\r\n",
				      'content' => json_encode($postData)
				      )
					));
	       //  echo  api_url().'exchanges/api/v1/user/phoneFactor'; die();
	         $response = file_get_contents(api_url().'exchanges/api/v1/user/phoneFactor', false, $context);
	         return $response;
		}




function kyc_detail($userId, $userMailId, $firstName, $middleName, $lastName,$DOB,$addLine1, $addLine2, $city, $state, $country,$pincode,$mobileNumber, $bankAccountHolderName, $bankAccountNumber, $bankName, $IFSCCode,$taxProofNumber,$addressProofType,$addressProofNumber)

{

          $postData = array(
          
		  "userId" => $userId ,
     "firstName" => $firstName,
     "middleName" => $middleName,
     "lastName" => $lastName,
     "DOB" =>   $DOB,
     "addLine1" => $addLine1,
     "addLine2" => $addLine2,
     "city" => $city,
     "state" => $state,
     "country" => $country,
     "pincode" => $pincode,
     "mobileNumber" => $mobileNumber,
     "bankAccountHolderName" =>  $bankAccountHolderName,
     "bankAccountNumber" => $bankAccountNumber,
     "bankName" => $bankName,
     "IFSCCode" => $IFSCCode,
     "taxProofNumber" => $taxProofNumber,
     "addressProofType" => $addressProofType,
     "addressProofNumber" => $addressProofNumber,
     "userMailId" => $userMailId

          );

          $context = stream_context_create(array(
				
				'http' => array(
			      'method' => 'POST',
			      'header' => "Content-Type: application/json\r\n",
			      'content' => json_encode($postData)
			      )
				));
         $response = file_get_contents(api_url().'exchanges/api/v1/user/addVerificationDetails', false, $context);
         return $response;
}



function imageaddress($userId, $image)

{

          $postData = array(
          
		  "userId" => $userId ,
     	   "image" => $image
   

          );

          $context = stream_context_create(array(
				
				'http' => array(
			      'method' => 'POST',
			      'header' => "Content-Type: application/json\r\n",
			      'content' => json_encode($postData)
			      )
				));
         $response = file_get_contents(api_url().'exchanges/api/v1/user/imageUploadAddress', false, $context);
         return $response;
}



function taxaddress($userId, $image)

{

          $postData = array(
          
		  "userId" => $userId ,
     	   "image" => $image
   

          );

          $context = stream_context_create(array(
				
				'http' => array(
			      'method' => 'POST',
			      'header' => "Content-Type: application/json\r\n",
			      'content' => json_encode($postData)
			      )
				));
         $response = file_get_contents(api_url().'exchanges/api/v1/user/imageUploadTax', false, $context);
         return $response;
}


function support($user_id,$subject, $message)

{

          $postData = array(
          
		  "ticketOwnerId" => $user_id ,
     	   "title" => $subject,
     	   "description"=> $message
   

          );

          $context = stream_context_create(array(
				
				'http' => array(
			      'method' => 'POST',
			      'header' => "Content-Type: application/json\r\n",
			      'content' => json_encode($postData)
			      )
				));
         $response = file_get_contents(api_url().'exchanges/api/v1/user/generateTicket', false, $context);
         return $response;
}


function paymentgetway($user_id,$amount)

{

   $response = file_get_contents(api_url().'exchanges/api/v1/transection/paynow?userId='.$user_id.'&amount='.$amount, false, $context);
         return $response;
}

function transaction($user_id,$curr)

{



          $postData = array(
          
		  "user_id" => $user_id,
		  "currency" => $curr
     	 
          );

          $context = stream_context_create(array(
				
				'http' => array(
			      'method' => 'POST',
			      'header' => "Content-Type: application/json\r\n",
			      'content' => json_encode($postData)
			      )
				));
         $response = file_get_contents(api_url().'exchanges/api/v1/transection/getTransactionsBit', false, $context);
         return $response;
}



?>
