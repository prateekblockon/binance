<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Logout extends CI_Controller {
    
    public function __construct() {
        parent::__construct();
        $this->load->library('session');
        $this->load->helper('fronthelper/utility_helper');
    }
    
    public function index(){
       
        //$this->session->unset_userdata();
        session_destroy();
        unset($_SESSION);
       
        redirect(userdetails_url().'login');
    }
   
    
}