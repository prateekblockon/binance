<?php 
$this->load->view('include/all_header');
$this->load->view('include/ajax');
?>
  
</script>
  
    
    <div class="main">
      <div class="container">
     
        <div class="kline-para">
          
        </div>
      
        <div class="main-body">
        
          <!-- 左侧 -->
          <div class="main-left">
            <!-- 深度 -->
            <div>
              <div  id="askScrollBox" >
  
              </div>
              
              <div  id="bidScrollBox" >
              </div>
            </div>
          </div>
          
        </div>
        
        
        <!-- user records -->
        <div class="userRecords f-cb" >
          <div class="userRecords-title">
            <span class="cur"></span>
            
          </div>
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

          <div class="userRecords-main">
            <!-- 当前委托 -->
            <div class="item-con">
              
                <div class="scrollStyle" style="height:auto;overflow-y:auto;" >
                  
                                  <div class="box">
                       <div class="m_title"><h4>Two-factor Authentication</h4></div>
                       <p>You can enable Google Time based One Time Password (TOTP) Two-factor Authentication to further protect your account.  When it's enable, you are required to input the TOTP every time you login or withdraw funds. If you have an iOS or Android smartphone, you can do the following steps to enable it. In case you don't have a smartphone available, you can use the Google Authenticator on Windows as instructed in the later part, but it's less secure. </p>

                      <h3><b>1st step</b>: Install Google Authenticator on your smartphone.</h3>


                      <br/>
                      <h3><b>2nd step</b>: Setup "Google Authenticator" and scan the following barcode</h3>
                      <lu>
                      <li><img src="<?php print_r($qrCodeUrl); ?>" alt="QR code" style="width: 200px; height: 200px"/>
                      </li>
                      <li>Also you can choose "Enter provided key" and input this key: <b><?php echo $this->session->userdata('secret_key');?></b></li>
                      </lu>

                      <br/>
                      <h3><b>3rd step</b>: Input the TOTP showing on your smartphone: </h3>
                      <form enctype="application/x-www-form-urlencoded" action="<?php echo tfauth_url()?>tfauth/verifytotp" method="POST">

                      <table>
                        <tr>
                          <td>&nbsp;</td>
                          <td>
                                 
                          </td>
                        </tr>
                      <tr>
                        <td align="right">TOTP: </td><td><input type="text" name="code" id="totp" size="20" class="form-control"> 6 digits code on your smartphone</td>
                      </tr>
                      <tr>
                      <td>&nbsp;</td>
                      <td> <input type="submit" name="enable" id="submit" value="  Enable Two-factor Authentication  " class="btn btn-primary sub-btn"></td>
                      </tr>

                      </table>

                      </form>
                      <br>
                      <p>Notice: <b>Do NOT delete the "Google Authenticator" app on your smartphone when it's enabled. </b>If you lost your phone or deleted the "Google Authenticator", please contact us at Email: support@xxxx.io </p>

                     </div>


                </div>

        </div>
    </div>
</div>


        </div>


    </div>
</div>
                  
                </div>
                

              </div>
          </div>
        
        </div>
        
        
        
        
      </div>
    </div>
    
    
    <?php $this->load->view('include/footer');  ?>
  <script src="https://resource.binance.com/resources/js/isMobile.js" type="text/javascript" charset="utf-8"></script>
  <script>
  
  
  $(function(){
    $('.show-or-hide').click(function(){
      $(this).toggleClass("active");
      if($(this).hasClass('active')){
        //stop();
        $('.index-news-con').css('height','72px');
      }else{
        //stop();
        //scrollTop('#roll');
        $('.index-news-con').css('height','24px');
      }
    });
    
    $("#ctrl .icon-rightsj").click(function(){
      var box=$(this).parents('.item-con')
      var scrollLeft=box.scrollLeft();
      scrollLeft+=58;
      box.animate({"scrollLeft":scrollLeft},500)
    })
    $("#ctrl .icon-leftsj").click(function(){
      var box=$(this).parents('.item-con')
      var scrollLeft=box.scrollLeft();
      scrollLeft-=58;
      box.animate({"scrollLeft":scrollLeft},500)
    })
    
    $('.toolTip').on('click',function(e){
      e.stopPropagation();
      $(this).find('div').fadeIn();
      $(document).not(this).on('click',function(){
        $('.toolTip>div').fadeOut();
      })
    });
    
    
    /* $(".productSymbol").hover(function(){
      $(".info-tips").show();
    },function(){
      $(".info-tips").hide();
    }); */
    
    $(document).on("mouseover",".productSymbol",function(){
      $(".info-tips").show();
    });
    $(document).on("mouseout",".productSymbol",function(){
      $(".info-tips").hide();
    });
    
    
  })
  
    function googleTranslateElementInit(lang) {
      new google.translate.TranslateElement({pageLanguage: lang, layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
    }
    if(initLang!='cn'){
    setTimeout(function(){
      document.getElementById('pageLoading').style.display='none';
    },3000)
    var script=document.createElement('script');
    script.src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(script);
    script.onload=function(){
      googleTranslateElementInit(initLang);
    }
    }
  
  </script>

  
  
  </body>
</html>

