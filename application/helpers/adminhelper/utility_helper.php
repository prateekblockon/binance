<?php 

function admin_url()
{
	return base_url().'adminpanel/';
}

function asset_url()
{
   return base_url().'assets/adminpanel/';
}

function favicon_url()
{
	return base_url().'assets/adminpanel/img/favicon.ico';
}

function project_name()
{
	return 'KVPCOIN';
}

function api_url()
{
	return 'http://13.127.63.115:5000/exchanges/api/v1/';
	//return 'http://localhost:4009/exchanges/api/v1/';
}




?>