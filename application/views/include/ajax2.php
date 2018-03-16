
  <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js"></script>
  <link href="//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css" rel="stylesheet">
  <script src="//cdn.jsdelivr.net/npm/alertifyjs@1.11.0/build/alertify.min.js"></script>
  <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/alertifyjs@1.11.0/build/css/alertify.min.css"/>
  <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/alertifyjs@1.11.0/build/css/themes/default.min.css"/>


  <script type="text/javascript">
 
 
  socket = io.connect('<?php echo api_url(); ?>')
   

  socket.on( 'connection', function () {} );
  socket.on( 'disconnect', function () { socket.connect();  } );
</script>

<script type="text/javascript">

$.noConflict();
jQuery(document).ready(function() {  

// userallbalance();

setTimeout(function(){
 
usermaincurrbalance();
usersubcurrbalance();
useropenorder();
usercloseorder();
tradehistory();
curencylist();
userallcurrencybalance();
getaddress();
asklist();
bidlist();
marketinfo();
logindetails();
transaction();
userallopenorder();
userallcloseorder();

},0000);

});

url_api = '<?php echo api_url();?>';



function but_data()
{

toastr.clear();

var bid_rate = document.getElementById('buyPrice').value;
var bid_vol = document.getElementById('bid_vol').value;
var bid_amount = document.getElementById('buyQuanity').value;
var maincurr=$("#maincurr").val();
var subcurr=$("#subcurr").val();


var user_id = '<?php echo $this->session->userdata('_id');?>';

var url =url_api+"exchanges/api/v1/exchange/exchange";

var json_ask = {
      "user_id": user_id,
      "amount":{
        "value":bid_amount,
        "currency":maincurr
      }, 
      "volume":{
        "value":bid_vol,
        "currency":subcurr
      }, 
      "rate":bid_rate,
      "type":"ASK"   
}

$.ajax({
type: "POST",
contentType: "application/json",
url: url,
data: JSON.stringify(json_ask),
success: function(result){


  if(result.responseCode!=200)
      {
           
           toastr["error"](result.responseMessage);
      }
      else
      {

        toastr["success"](result.responseMessage);
      }
       socket.emit('updateData');

}

});

}

function sell_data()
{


  toastr.clear();

    var ask_rate = document.getElementById('sellPrice').value;
    var ask_vol = document.getElementById('ask_vol').value;
    var ask_amount = document.getElementById('sellQuanity').value; 
    var maincurr=$("#maincurr").val();
    var subcurr=$("#subcurr").val();

    var user_id = '<?php echo $this->session->userdata('_id');?>';

    var url =url_api+"exchanges/api/v1/exchange/exchange";

    var json_ask = {
          "user_id":user_id,
          "amount":{
            "value":ask_amount,
            "currency":maincurr
          }, 
          "volume":{
            "value":ask_vol,
            "currency":subcurr
          }, 
          "rate":ask_rate,
       
          "type":"BID"   
    }

    $.ajax({
    type: "POST",
    contentType: "application/json",
    url: url,
    data: JSON.stringify(json_ask),
    success: function(result){

      if(result.responseCode!=200)
          {
               toastr["error"](result.responseMessage);
          }
          else
          {
            toastr["success"](result.responseMessage);
          }
          socket.emit('updateData');

    }

});

}

function del_bid(bidId) {
    alertify.confirm('Do you really want to remove your bid?',function(){
      $.ajax({
        type: "POST",
         url: url_api + "exchanges/api/v1/exchange/cancelBid",
        data: {
          "bidId": bidId
        },
        success: function(result){

          if(result.responseCode!=200)
          {
               toastr["error"](result.responseMessage);
          }
          else
          {
            toastr["success"](result.responseMessage);
          }
 socket.emit('updateData');
        }

      });
    });
  }


function del_ask(askId) {
    alertify.confirm('Do you really want to remove your ask?',function(){
      $.ajax({
        type: "POST",
        url: url_api + "exchanges/api/v1/exchange/cancelAsk",
        data: {
          "askId":askId
          
        },
        success: function(result){
          
         if(result.responseCode!=200)
          {
               toastr["error"](result.responseMessage);
          }
          else
          {
            toastr["success"](result.responseMessage);
          }
           socket.emit('updateData');
        }
      });
    });
  }


function userallbalance()
{
 
  jQuery.ajax({
    type:"POST",
    url:"<?php echo trading_url();?>trade/userbalances",
    dataType:"text",
    success:function(result){

      $("#maincurrbalance").html(result);
      $("#subcurrbalance").html(result);
    }
  });

}

function userallcurrencybalance()
{
 
  jQuery.ajax({
    type:"POST",
    url:"<?php echo wallet_url();?>balances/userallcurrencybalance",
    dataType:"text",
    success:function(result){

     $("#userallcurrencybalance").html(result);
    }
  });

}

function getaddress()
{
 var curr=$("#curr").val();
  jQuery.ajax({
    type:"POST",
    url:"<?php echo wallet_url();?>deposit/getaddress",
    data:"c="+curr,
    dataType:"text",
    success:function(result){
      
      
     $("#getaddress").html(result);
    }
  });

}

function usermaincurrbalance()
{
  var curr=$("#maincurr").val();
  jQuery.ajax({
    type:"POST",
    url:"<?php echo trading_url();?>trade/usermaincurrbalances",
    data:"c="+curr,
    dataType:"text",
    success:function(result){
      result = JSON.parse(result)
      
      $("#maincurrbalance").html(result.data.currencies[0].balance);
      $("#maincurrfreezebalance").html(result.data.currencies[0].freezeBalance);
      
    }
  });

}

function usersubcurrbalance()
{
  var curr=$("#subcurr").val();
  jQuery.ajax({
    type:"POST",
    url:"<?php echo trading_url();?>trade/usersubcurrbalances",
    data:"c="+curr,
    dataType:"text",
    success:function(result){
      result = JSON.parse(result)
      $("#subcurrbalance").html(result.data.currencies[0].balance);
      $("#subcurrfreezebalance").html(result.data.currencies[0].freezeBalance);
    }
  });

}

function userallopenorder()
{
  
  jQuery.ajax({
    type:"POST",
    url:"<?php echo trading_url();?>openorder/userallopenorder",
    dataType:"text",
    success:function(result){
     
      $("#userallopenorder").html(result);

    }
  });
}

function userallcloseorder()
{
  var maincurr=$("#maincurr1").val();
  var subcurr=$("#subcurr1").val();
  jQuery.ajax({
    type:"POST",
    url:"<?php echo trading_url();?>orderhistory/userallcloseorder/1/"+maincurr+"/"+subcurr,
    dataType:"text",
    success:function(result){
     
      $("#userallcloseorder").html(result);

    }
  });
}

function userallcloseorder1(page)
{
  var maincurr=$("#maincurr1").val();
  var subcurr=$("#subcurr1").val();
  // alert(page);
  jQuery.ajax({
    type:"POST",
    url:"<?php echo trading_url();?>orderhistory/userallcloseorder/"+page+"/"+maincurr+"/"+subcurr,
    dataType:"text",
    success:function(result){
    
      $("#userallcloseorder").html(result);

    }
  });
}


function useropenorder()
{

  var maincurr=$("#maincurr").val();
  var subcurr=$("#subcurr").val();

  jQuery.ajax({
    type:"POST",
    url:"<?php echo trading_url();?>trade/useropenorder",
     data: { maincurr: maincurr, subcurr: subcurr },
    dataType:"text",
    success:function(result){
     
      $("#useropenorder").html(result);

    }
  });
}

function usercloseorder()
{

  var maincurr=$("#maincurr").val();
  var subcurr=$("#subcurr").val();

  jQuery.ajax({
    type:"POST",
    url:"<?php echo trading_url();?>trade/usercloseorder",
     data: { maincurr: maincurr, subcurr: subcurr },
    dataType:"text",
    success:function(result){
 
      $("#usercloseorder").html(result);

    }
  });
}

function tradehistory()
{
  var maincurr=$("#maincurr").val();
  var subcurr=$("#subcurr").val();
 
  jQuery.ajax({
    type:"POST",
    url:"<?php echo trading_url();?>trade/tradehistory",
     data: { maincurr: maincurr, subcurr: subcurr },
    dataType:"text",
    success:function(result){

      $("#tradehistory").html(result);

    }
  });

}

function curencylist()
{

  jQuery.ajax({
    type:"POST",
    url:"<?php echo trading_url();?>trade/curencylist",
    dataType:"text",
    success:function(result){

      $("#curencylist").html(result);

    }
  });

}

function asklist()
{

 var maincurr=$("#maincurr").val();
 var subcurr=$("#subcurr").val();
 

  jQuery.ajax({
    type:"POST",
    url:"<?php echo trading_url();?>trade/asklist",
     data: { maincurr: maincurr, subcurr: subcurr },
    dataType:"text",
    success:function(result){
     
      $("#asklist").html(result);
     

    }
  });

}

function bidlist()
{

 var maincurr=$("#maincurr").val();
 var subcurr=$("#subcurr").val();
 

  jQuery.ajax({
    type:"POST",
    url:"<?php echo trading_url();?>trade/bidlist",
     data: { maincurr: maincurr, subcurr: subcurr },
    dataType:"text",
    success:function(result){
     
      $("#bidlist").html(result);

    }
  });

}

function marketinfo()
{

 var maincurr=$("#maincurr").val();
 var subcurr=$("#subcurr").val();

  jQuery.ajax({
    type:"POST",
    url:"<?php echo trading_url();?>trade/marketinfo",
     data: { maincurr: maincurr, subcurr: subcurr },
    dataType:"text",
    success:function(result){

      result = JSON.parse(result)

      var found = result.data.find(function(element) {
      return element._id == subcurr;
      });

    $("#lastprice").html(found.lastRate);
    $("#currentprice").html(found.lastRate);
    $("#perc").html(found.perc);
    $("#24change").html(found.change);
    $("#24high").html(found.maxQuantity);
    $("#24low").html(found.minQuantity);
    $("#24volume").html(found.totalVolume);

    }
  });

}

function logindetails()
{
 
  jQuery.ajax({
    type:"POST",
    url:"<?php echo userdetails_url();?>myaccount/logindetails",
    dataType:"text",
    success:function(result){
      
      $("#logindetails").html(result);
      $("#lastlogin").text($("#lasttime").val());
      $("#lastloginip").text($("#lastip").val());
    }
  });

}

function sendotp()
{

  toastr.clear();
 var curr=$("#mobile").val(); 


  jQuery.ajax({
    type:"POST",
    url:"<?php echo tfauth_url();?>smsotp/sendotp",
    data:"c="+curr,
    dataType:"text",
    success:function(result){

      result = JSON.parse(result)

      if(result.responseCode!=200)
      {
        
           toastr["error"](result.responseMessage);
      }
      else
      {
        toastr["success"](result.responseMessage);
      }

    }
  });

}

function payment()
{
  var amt = document.getElementById('amount').value;

  toastr.clear();

      if(amt=="")
      {
        toastr["error"]('Please Enter Amount');
      }
      else
      {
        window.location.href="<?php echo api_url();?>exchanges/api/v1/transection/paynow?userId=<?php echo $this->session->userdata('_id'); ?>&amount="+amt;
      }
}

function withdraw()
{

  var user_id = '<?php echo $this->session->userdata('_id');?>';
  var currency = document.getElementById('curr').value;
  var balance = document.getElementById('balance').value;
  var address = document.getElementById('address').value;

  var url =url_api+"exchanges/api/v1/transection/sendBalance";

  var json_ask = {

      "user_id": user_id,
      "currency" : currency,    
      "balance" : balance,
      "address" : address
    }


  toastr.clear();
  
  if(balance=="" && address=="" )
      {
        toastr["error"]('Please Enter all fields');
      }
      else
      {
          $.ajax({
          type: "POST",
          contentType: "application/json",
          url: url,
          data: JSON.stringify(json_ask),
          success: function(result){

            if(result.responseCode!=200)
                {
                     
                     toastr["error"](result.responseMessage);
                }
                else
                {

                  toastr["success"](result.responseMessage);
                }
            
          }

       });
  }

}

function transaction()
{
 var curr=$("#curr").val(); 

  jQuery.ajax({
    type:"POST",
    url:"<?php echo wallet_url();?>transaction/transaction",
    data:"c="+curr,
    dataType:"text",
    success:function(result){

     $("#transaction").html(result);
    }
  });

}

    socket.on('orderTrade',function()
    {
          usermaincurrbalance();
          usersubcurrbalance();
          useropenorder();
          usercloseorder();
          tradehistory();
          curencylist();
          asklist();
          bidlist();
          marketinfo();
        
         
    });


	
</script>