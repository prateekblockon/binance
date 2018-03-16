<?php 
$this->load->view('include/all_header');
$this->load->view('include/ajax');

?>
  
</script>
	
		<div class="index-news">
			<div class="index-news-con" ng-controller="noticeCtrl">
				<ul id="roll">
					<li ng-repeat="n in notices | limitTo:9"><a ng-href="{{n.url}}" target="_blank"><span>{{n.name}}</span><i>({{n.timeMills | date:'MM-dd'}})</i></a></li>
				</ul>
				<span class="show-or-hide"></span>
			</div>
		</div>
		
		
		<!--main-->
		<div class="main">
			<div class="container">
			
				<div class="kline-para">
				
					
					<span class="productSymbol" ng-if="infoLink != ''"><a ng-href="{{infoLink}}" target="_blank" id="baseAssetVal"><i class="iconfont icon-infobig"><div class="info-tips">{{infoFullName}}</div></i><strong>{{currentProduct.baseAsset}}</strong></a><font>{{currentProduct.quoteAsset}}</font></span>
	 					
					<span class="productSymbol no-info" ng-if="infoLink == ''"><strong>{{currentProduct.baseAsset}}</strong> <font>{{currentProduct.quoteAsset}}</font></span>
					
					
							
				</div>
			
			
				<div class="main-body">
				
					
					<div class="main-left">
						
						<div >
							

							
							<div  id="askScrollBox" >

								
							</div>
							
							
							<div  id="bidScrollBox" >
								
							</div>
						</div>
					</div>
					
					
					
					
				</div>
				
				
				<!-- user records -->
				<div class="userRecords f-cb" >
					<div class="userRecords-title" style="background: gray; text-align: center; color: #fff; ">
						<span class="cur">Deposits & Withdrawals</span>
						
						<!-- <label class="f-fr"><input type="checkbox" ng-model="showAllOpenOrders" ng-true-value="true" ng-false-value="false"/>{{'Hide Other Pairs' | T}}</label> -->
					</div>
					<div class="userRecords-main" style="margin-top: 15px;">
						
						<div class="item-con">
							
								
								<?php if($this->session->userdata('_id')!='')
				                  { ?>
								<div class="scrollStyle" style="height:auto;" >
									
										<div id="userallcurrencybalance">
											<table class="table table-striped" style="background: yellow;">

								
								<thead style="background: gray;">
									<tr>
										<th class="f-left" style="background: #ececec; color: #545050; border-right: 1px solid #cacaca;" ><b>Coin</b></th>
										<th class="f-center" style="background: #ececec; color: #545050;border-right: 1px solid #cacaca;"><b>Name</b></th>
										<th class="f-center" style="background: #ececec; color: #545050;border-right: 1px solid #cacaca;"><b>Freeze Balance</b></th>
										<th class="f-center" style="background: #ececec; color: #545050;border-right: 1px solid #cacaca;"><b>Available Balance</b></th>
										<th class="f-center" style="background: #ececec; color: #545050;"><b>Actions</b></th>
										
									</tr>
								</thead>
								</table>
											
										</div>
									
								</div>
								<?php } ?>

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

