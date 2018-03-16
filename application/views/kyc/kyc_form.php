<?php 
$this->load->view('include/header_kyc');
$this->load->view('include/ajax');
?>
  <style>


.wrap {
  background: #f7f7f7;
  min-width: 1200px;
}

.container {
  width: 1200px;
  margin: 0 auto;
}

.midContainer {
  width: 960px;
  margin: 0 auto;
  background: #fff;
}

.alerta {
    margin: 15px auto;
    color: #b48728;
    font-size: 12px;
    background: #fcf8e5;
    border: 1px solid #f8ebcf;
    height: 40px;line-height: 40px;
    padding-left: 18px;padding: 0 0 0 18px;
    width: 940px
}

.safetitle {
  font-size: 18px;
  line-height: 7px;
  color: #454545;
  padding: 13px 0 13px 18px;
  border-bottom: 1px solid #d7d3d3;
}

.safecontent {
  color: #666;
  font-size: 14px;
}

.safecontent form {
  padding: 0 35px;
  margin: 60px auto;
  width: 470px;
}

.safecontent form label {
  font-size: 14px;
  color: #666;
  display: block;
  margin-bottom: 12px;
  display: inline-block;
  width: 166px;
  text-align: right;
}

.safecontent form input {
  display: inline-block;
  height: 32px;
  border: 1px solid #d4d4d4;
  width: 270px;
  box-sizing: border-box;
  padding: 0 10px;
  color: #333;
}

.safecontent form .ipt-code {
  width: 195px;
}

.safecontent form .btn {
  border-radius: 0 !important;
  padding: 10px 0;
  width: 150px;
  text-align: center;
  vertical-align: middle;
}

.safecontent form .btn:hover {
  color: #e8b342;
}

.country {
  display: inline-block;
  width:72px;
  text-align: center;
  border: 1px solid #d4d4d4;
  margin-right: -5px;
  border-right: none;
  height: 32px;
  line-height: 32px;
  vertical-align: top;
}

.country-list {
      width: 375px;
    position: absolute;
    top: 34px;
    left: 162px;
    z-index: 99999999;
}
.country-list ul{
border: 1px solid #d4d4d4;

background: #fff
}
.country-list ul li {
  padding: 0 7px;
  height: 31px;
  line-height: 31px;

}
.country-list ul li:hover{color: #e8b342;background: #fdfaf5}

.country-list ul li div{
height:31px;
  border-bottom: 1px solid #d4d4d4;
  }
.country-list ul li:last-of-type div{border-bottom: none}
.scrollStyle{overflow-y:auto;   height: 163px;} 
</style>
  
    
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">






    <div class="main">
      <div class="container">
     
        <div class="kline-para">
          
        </div>
      
        <div class="main-body">
        
          
          <div class="main-left">
            
            <div>
              <div  id="askScrollBox" >
  
              </div>
              
              <div  id="bidScrollBox" >
              </div>
            </div>
          </div>
          
        </div>
        
        
        <!-- user records -->
      
      <div class="safetitle" style="background: gray; font-size: 25px;font-weight: bold;color: #fff;font-family: heading;text-align: center;">KYC Detail</div> 
      

   <br />

 <?php if($this->session->flashdata('success')){ ?>
            <div class="alert alert-block alert-success">
                <button type="button" class="close" data-dismiss="alert"><i class="icon-remove"></i></button>
                <strong>Success!</strong> <?php echo $this->session->flashdata('success'); ?>
            </div>
        <?php }else if($this->session->flashdata('error')){  ?>
            <div class="alert alert-block alert-danger">
                <button type="button" class="close" data-dismiss="alert"><i class="icon-remove"></i></button>
                <strong>Error!</strong> <?php echo $this->session->flashdata('error'); ?>
           </div>
           <?php } ?> 


<form class="main-container" id="signupform" action="<?php echo kyc_url()?>kyc/kycregister" method="post" enctype= "multipart/form-data" style=" border: 1px solid #c3c3c3;margin-bottom: 100px;
">
  <h3 style="font-weight: bold;color: #454545;font-family: heading;text-align: center; background: #f4f4f4;" font-family: 'Arial',"Microsoft YaHei", sans-serif;> Personal Details </h3>
  
  <div class="form-row" style=" padding: 10px;">
    <div class="col-md-4 mb-3">
      <label for="fname">First name</label>
      <input type="text" class="form-control" id="fname" name="fname" placeholder="First name"   >
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationDefault02">Middle name</label>
      <input type="text" class="form-control" id="mname" name="mname" placeholder="Middle name"  >
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationDefault02">Last name</label>
      <input type="text" class="form-control" id="lname" name="lname" placeholder="Last name"  required>
    </div>
  </div>
  <div class="form-row" style=" padding: 10px;">
    <div class="col-md-4 mb-3">
      <label for="validationDefault01">DOB</label>
      <input type="date" class="form-control" id="dob" name="dob" placeholder="DOB"  required>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationDefault02">Address Line1</label>
      <input type="text" class="form-control" id="address" name="address" placeholder="Address Line1"  required>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationDefault02">Address Line2</label>
      <input type="text" class="form-control" id="address2" name="address2" placeholder="Address Line2"  required>
    </div>
  </div>
  <div class="form-row" style=" padding: 10px;">
    <div class="col-md-4 mb-3">
      <label for="validationDefault03">City</label>
      <input type="text" class="form-control" id="city" name="city" placeholder="City" required>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationDefault04">State</label>
      <input type="text" class="form-control" id="state" name="state" placeholder="State" required>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationDefault04">Country</label>
      <input type="text" class="form-control" id="country" name="country" placeholder="Country" required>
    </div>
    
  </div>
  <div class="form-row" style=" padding: 10px;">
    <div class="col-md-4 mb-3">
      <label for="validationDefault05">Zip Code</label>
      <input type="text" class="form-control" id="zip" name="zip" placeholder="Zip Code" required>
    </div> 
    <div class="col-md-4 mb-3">
      <label for="validationDefault04">Mobile Number</label>
      <input type="text" class="form-control" id="mobile" name="mobile" placeholder="Mobile Number" required>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationDefault04">Account Holder Name</label>
      <input type="text" class="form-control" id="acc_name" name="acc_name" placeholder="Account Holder Name" required>
    </div>
   
  </div>
 
      <h3 style="font-weight: bold;color: #454545;font-family: heading;text-align: center; background: #f4f4f4;"> Bank Details </h3>
      
     <div class="form-row" style=" padding: 10px;">
        <div class="col-md-4 mb-3">
          <label for="validationDefault05">Bank Account Number</label>
          <input type="text" class="form-control" id="acc_no" name="acc_no" placeholder="Bank Account Number" required>
        </div> 
        <div class="col-md-4 mb-3">
          <label for="validationDefault04">Bank Name</label>
          <input type="text" class="form-control" id="bank_name" name="bank_name" placeholder="Bank Name" required>
        </div>
        <div class="col-md-4 mb-3">
          <label for="validationDefault04">IFSC Code</label>
          <input type="text" class="form-control" id="ifsc" name="ifsc" placeholder="IFSC Code" required>
        </div>
      
      </div>
      <div class="form-row" style=" padding: 10px;">
        <div class="col-md-4 mb-3">
          <label for="validationDefault05">Tax Proof No</label>
          <input type="text" class="form-control" id="tax_no" name="tax_no" placeholder="Tax proof no" required>
        </div> 
        <div class="col-md-4 mb-3">
          <label for="validationDefault04">Address Proof Type</label>
          <input type="text" class="form-control" id="add_proof" name="add_proof" placeholder="Address proof type" required>
        </div>
        <div class="col-md-4 mb-3">
          <label for="validationDefault04">Address Proof Number</label>
          <input type="text" class="form-control" id="add_proof_no" name="add_proof_no" placeholder="Address Proof Number" required>
        </div>
        
      </div>
      <div class="form-row" style=" padding: 10px;">
        <div class="col-md-4 mb-3">
           <!-- <img id="blah" src="<?php echo asset_url();  ?>" alt="image address" required /> -->
          <i class="fa fa-user-circle-o" style="font-size:40px;"></i>
                  <input type='file' name="addressproof" id="addressproof" onchange="readURL(this);" required />
        </div>  
        <div class="col-md-4 mb-3">
         <!--  <img id="blah" src="<?php echo asset_url();  ?>img/choose.png" alt="image tax" required /> -->
          <i class="fa fa-user-circle-o" style="font-size:40px;"></i>
          <input type='file' id="tax" name="tax" onchange="readURL(this);" required />  
        </div>
        
        
      </div>
     
     
     <div class="my-foot" style="background: #f7f7f7; padding: 20px; margin-top: 15px;">
     <button class="btn btn-primary" type="submit" name="sub" style="width: 130px;margin-left: 37%;"> Submit 
    </button>
    <button class="btn btn-primary" type="button" name="reset" onclick="resetfun()" style="color: #fff;background-color: #eab808;border-color: #eab808;width: 130px;margin-left: 2%;"> Reset 
    </button>
  </div>
</form>
 

   <br />


    <?php $this->load->view('include/footer');  ?>

            <script src="https://jqueryvalidation.org/files/lib/jquery.js" ></script> 
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.16.0/jquery.validate.min.js"></script>
<script src="https://cdn.jsdelivr.net/jquery.validation/1.16.0/additional-methods.min.js"></script>

<script>

  function isNumberKeyOnly(evt){
    var charCode = (evt.which) ? evt.which : event.keyCode
    if ((charCode >= 48 && charCode <= 57) || (charCode == 8) )
        return true;
    return false;
}





   $.validator.setDefaults({
    submitHandler: function() {
      return true;
    }
  });


   function resetfun()
   {
    window.location.reload();
   }

  $(document).ready(function() {
    setTimeout(function(){ $(".alert").hide(); }, 5000);
$("#sendform").validate();
    jQuery.validator.addMethod("lettersonly", function(value, element) {
  return this.optional(element) || /^[a-z ]+$/i.test(value);
}, "Please enter valid name");

     jQuery.validator.addMethod("numbersonly", function(value, element) {
  return this.optional(element) || /^[0-9]+$/i.test(value);
}, "Please enter numbers only");


// [a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+
//[_a-z0-9-]+(.[a-z0-9-]+)@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})
     jQuery.validator.addMethod("lettersnumber", function(value, element) {
   return this.optional(element) || /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{5,}$/i.test(value);
 }, "Please enter atleast 1 alphabet , 1 number and 1 special character($@$!%*#?&) ");


      jQuery.validator.addMethod("emailnew", function(value, element) {
    return this.optional(element) || /^[_a-z0-9-]+(.[a-z0-9-]+)@[a-z0-9-]+\.[a-zA-Z0-9-.]+$/i.test(value);
  }, "Please enter valid email address");


jQuery.validator.addMethod("futuredocexp", function (value, element) {
    var now = moment(new Date()).format("DD/MM/YYYY");
    var myDate = new Date(value);
    return this.optional(element) || myDate > now;
}, "Please enter valid date");




    $("#signupform").validate({

      rules: {

        fname: {
          required: true,
          minlength: 2,
          maxlength: 32,
          lettersonly: true

        },
   mname: {
        
        lettersonly: true

        },

        lname: {
          required: true,
          minlength: 2,
          maxlength: 32,
          lettersonly: true

        },
         dob: {
          required: true,
        futuredocexp: true

        },
   address: {
        
         required: true,
         minlength: 2,
         maxlength: 32
        

        },

        address2: {
          required: true,
          minlength: 2,
          maxlength: 32
          

        },

         city: {
          required: true,
          minlength: 2,
          maxlength: 32,
          lettersonly: true

        },

   state: {
        
         required: true,
          minlength: 2,
          maxlength: 32,
          lettersonly: true

        },

        country: {
          required: true,
          minlength: 2,
          maxlength: 32,
          lettersonly: true

        },

         zip: {
          required: true,
          minlength: 4,
          maxlength: 8,
          numbersonly: true

        },

   mobile: {
        required: true,
          minlength: 10,
          maxlength: 20,
        numbersonly: true

        },

        acc_name: {
          required: true,
          minlength: 2,
          maxlength: 32
         

        },
         acc_no: {
          required: true,
          minlength: 10,
          maxlength: 20,
          numbersonly: true

        },
   bank_name: {
         required: true,
          minlength: 2,
        lettersonly: true

        },

        ifsc: {
          required: true,
          minlength: 2,
          maxlength: 32
          
        },
         tax_no: {
          required: true,
          minlength: 2,
          maxlength: 32,
          numbersonly: true

        },
   add_proof: {
         required: true,
          minlength: 2,
        lettersonly: true

        },

        add_proof_no: {
          required: true,
          minlength: 2,
          maxlength: 32,
          numbersonly: true

        },
    addressproof: {
          required: true,
          extension: "jpg|jpeg|png|pdf"

        },

   tax: {
         required: true,
          extension: "jpg|jpeg|png|pdf"
          
        }
   
   
      },
      messages: {
        fname: {
          required: "Please Enter First Name",
          minlength: "Your First name must have at least 2 characters",
          maxlength: "Your name must be at least 32 characters"


        },
        mname: {
         
          maxlength: "Your name must be at least 32 characters"


        },

        lname: {
          required: "Please Enter Last Name",
          minlength: "Your last name must have at least 2 characters",
          maxlength: "Your name must be at least 32 characters"


        },
            dob: {
          required: "Please Enter D.O.B",
        


        },
        address: {
         
          required: "Please Enter Address",
          minlength: "Your Address must have at least 2 characters",
          maxlength: "Your Address must be at least 32 characters"


        },

        address2: {
          required: "Please Enter address2",
          minlength: "Your Address2 must have at least 2 characters",
          maxlength: "Your Address2 must be at least 32 characters"


        },
            city: {
          required: "Please Enter City",
          minlength: "Your City must have at least 2 characters",
          maxlength: "Your City must be at least 32 characters"


        },
        state: {
         
          required: "Please Enter State",
          minlength: "Your State name must have at least 2 characters",
          maxlength: "Your State name must be at least 32 characters"

        },

        country: {
          required: "Please Enter Country",
          minlength: "Your Country name must have at least 2 characters",
          maxlength: "Your Country name must be at least 32 characters"


        },     
            zip: {
          required: "Please Enter Zip",
          minlength: "Your Zip must have at least 4 characters",
          maxlength: "Your Zip must be at least 8 characters"


        },
        mobile: {
         
         required: "Please Enter Mobile number",
         minlength: "Your Mobile number must have at least 10 characters",
          maxlength: "Your Mobile number must be at least 20 characters"
         
        },

        acc_name: {
          required: "Please Enter Account Holder Name",
          minlength: "Your  Account Holder name must have at least 2 characters",
          maxlength: "Your  Account Holder name must be at least 32 characters",


        },
            acc_no: {
          required: "Please Enter Account Number ",
          minlength: "Your  Account Number must have at least 10 characters",
          maxlength: "Your  Account Number must be at least 20 characters",


        },
        bank_name: {
          required: "Please Enter Bank Name",
          minlength: "Your Bank Name must have at least 2 characters",
          maxlength: "Your Bank Name must be at least 32 characters"

        },

        ifsc: {
          required: "Please Enter IFSC",
          minlength: "Your IFSC must have at least 2 characters",
          maxlength: "Your IFSC must be at least 32 characters"


        },
            tax_no: {
          required: "Please Enter  Tax No.",
          minlength: "Your Tax No. must have at least 2 characters",
          maxlength: "Your Tax No. must be at least 32 characters"


        },
        add_proof: {
          required: "Please Enter Address Proof Type",
          minlength: "Your Address Proof Type must have at least 2 characters",
          maxlength: "Your Address Proof Type must be at least 32 characters"

        },

        add_proof_no: {
          required: "Please Enter Address Proof Number",
          minlength: "Your Address Proof Number must have at least 2 characters",
          maxlength: "Your Address Proof Number must be at least 32 characters"


        },
            addressproof: {
          required: "Please select Addressproof softcopy",
          extension : "only .jpeg , .jpg , .png and .pdf files allowed"

        },

        tax: {
          required: "Please select Taxproof softcopy",
           extension : "only .jpeg , .jpg , .png and .pdf files allowed"

        }



      }
    }); });



  </script>

  <link rel="stylesheet" href="https://jqueryvalidation.org/files/demo/css/screen.css">


<style>


  label.error
  {
    text-shadow:none !important;
    color: red !important;
    font-style : normal !important;
  }
  </style>




  </body>
</html>

