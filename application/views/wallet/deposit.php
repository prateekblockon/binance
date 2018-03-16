<?php 
$this->load->view('include/all_header');
$this->load->view('include/ajax');

$currency =base64_decode($_GET['curr']);

?>
  
</script>
	
		
		<div class="main">
			<div class="container">
			<input type="hidden" id="curr" value="<?php echo $currency; ?>">
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
						<span class="cur">Deposits <?php echo $currency;?> </span>
						
						<!-- <label class="f-fr"><input type="checkbox" ng-model="showAllOpenOrders" ng-true-value="true" ng-false-value="false"/>{{'Hide Other Pairs' | T}}</label> -->
					</div>
					<div class="userRecords-main">
						<!-- 当前委托 -->
						<div class="item-con">
							
								<div class="scrollStyle" style="height:auto;overflow-y:auto;" >
									
										<div style="text-align: center;" id="getaddress"></div>
									
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

