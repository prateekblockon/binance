<?php 

if(isset($_GET['curr']))
{
	$currency =base64_decode($_GET['curr']);

  $curre=explode("/",$currency);
  $maincurr=$curre['0'];
  $subcurr=$curre['1'];
}

?>
<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
<input type="hidden" id="maincurr1" value="<?php echo $maincurr; ?>">
<input type="hidden" id="subcurr1" value="<?php echo $subcurr; ?>">
<?php 
$this->load->view('include/trade_header');
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
					<h4 style="margin-bottom: 20px; text-align: center;">Trade History</h4>
						
						
						<!-- <label class="f-fr"><input type="checkbox" ng-model="showAllOpenOrders" ng-true-value="true" ng-false-value="false"/>{{'Hide Other Pairs' | T}}</label> -->
					</div>
					<div class="userRecords-main">
						<!-- 当前委托 -->
						<div class="item-con">
						<table class="table table-striped">
									
									<thead>
                                        <tr>
                                            <th class="f-left">ORDER DATE</th>
                                            <th class="f-center">BID/ASK</th>
											<th class="f-center">UNITS FILLED</th>
											<th class="f-center">ACTUAL RATE</th>
											<th class="f-center">UNITS TOTAL </th>
											<th class="f-center">UNITS TOTAL </th>
											
                                        </tr>
									</thead>
								</table>
							
								<div class="scrollStyle" style="height:auto;" >
									
									<div id="userallcloseorder"></div>	
									
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

<style>
.link {padding: 10px 15px;background: transparent;border:#bccfd8 1px solid;border-left:0px;cursor:pointer;color:#607d8b}
.disabled {cursor:not-allowed;color: #bccfd8;}
.current {background: #bccfd8;}
.first{border-left:#bccfd8 1px solid;}
.question {font-weight:bold;}
.answer{padding-top: 10px;}
#pagination{margin-top: 20px;float: right;}
.dot {padding: 10px 15px;background: transparent;border-right: #bccfd8 1px solid;}
#overlay {background-color: rgba(0, 0, 0, 0.6);z-index: 999;position: absolute;left: 0;top: 0;width: 100%;height: 100%;display: none;}
#overlay div {position:absolute;left:50%;top:50%;margin-top:-32px;margin-left:-32px;}
.page-content {padding: 20px;margin: 0 auto;}
.pagination-setting {padding:10px; margin:5px 0px 10px;border:#bccfd8  1px solid;color:#607d8b;}
</style>

	
	</body>
</html>

