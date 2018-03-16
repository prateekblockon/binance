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

		return $response = file_get_contents(api_url().'exchanges/api/v1/user/userList');

	}

?>