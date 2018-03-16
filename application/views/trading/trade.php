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
<input type="hidden" id="maincurr" value="<?php echo $maincurr; ?>">
<input type="hidden" id="subcurr" value="<?php echo $subcurr; ?>">
<?php 
$this->load->view('include/trade_header');
$this->load->view('include/ajax');


?>
   
<script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>
<script type="text/javascript">
	
$.getJSON(
    '<?php echo api_url();?>exchanges/api/v1/user/graph?market=<?php echo $maincurr;?>&currency=<?php echo $subcurr?>',
    function (data) {

        Highcharts.chart('container', {
            chart: {
                zoomType: 'x'
            },
            title: {
                text: '<?php echo $maincurr?> to <?php echo $subcurr?>'
            },
            xAxis: {
                type: 'datetime'
            },
            yAxis: {
                title: {
                    text: 'Exchange rate'
                }
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, Highcharts.getOptions().colors[0]],
                            [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                        ]
                    },
                    marker: {
                        radius: 2
                    },
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },

            series: [{
                type: 'area',
                name: '<?php echo $maincurr?> to <?php echo $subcurr?>',
                data: data
            }]
        });
    }
);
 function bidAmount() {
          var a = new BigNumber(document.getElementById('buyPrice').value);
          var b = new BigNumber(document.getElementById('buyQuanity').value);
          var result = (a).times(b);
	  //var result =a*b;
	 // alert(result);
          if (!isNaN(result)) {
              document.getElementById('bid_vol').value = result;
          
          }
    }

    function askAmount() {
          var a = new BigNumber(document.getElementById('sellPrice').value);
          var b = new BigNumber(document.getElementById('sellQuanity').value);
          var result = (a).times(b);
          if (!isNaN(result)) {
              document.getElementById('ask_vol').value = result;
          }
      }
</script>
<!-- <script src="https://code.highcharts.com/stock/highstock.js"></script>
<script src="https://code.highcharts.com/stock/modules/exporting.js"></script>


<script>

/**
 * Load new data depending on the selected min and max
 */
function afterSetExtremes(e) {

    var chart = Highcharts.charts[0];

    chart.showLoading('Loading data from server...');
    $.getJSON('https://www.highcharts.com/samples/data/from-sql.php?start=' + Math.round(e.min) +
            '&end=' + Math.round(e.max) + '&callback=?', function (data) {

        chart.series[0].setData(data);
        chart.hideLoading();
    });
}

// See source code from the JSONP handler at https://github.com/highcharts/highcharts/blob/master/samples/data/from-sql.php
$.getJSON('https://www.highcharts.com/samples/data/from-sql.php?callback=?', function (data) {

    // Add a null value for the end date
    data = [].concat(data, [[Date.UTC(2011, 9, 14, 19, 59), null, null, null, null]]);

    // create the chart
    Highcharts.stockChart('container', {
        chart: {
            type: 'candlestick',
            zoomType: 'x'
        },

        navigator: {
            adaptToUpdatedData: false,
            series: {
                data: data
            }
        },

        scrollbar: {
            liveRedraw: false
        },

        title: {
            text: 'AAPL history by the minute from 1998 to 2011'
        },

        subtitle: {
            text: 'Displaying 1.7 million data points in Highcharts Stock by async server loading'
        },

        rangeSelector: {
            buttons: [{
                type: 'hour',
                count: 1,
                text: '1h'
            }, {
                type: 'day',
                count: 1,
                text: '1d'
            }, {
                type: 'month',
                count: 1,
                text: '1m'
            }, {
                type: 'year',
                count: 1,
                text: '1y'
            }, {
                type: 'all',
                text: 'All'
            }],
            inputEnabled: false, // it supports only days
            selected: 4 // all
        },

        xAxis: {
            events: {
                afterSetExtremes: afterSetExtremes
            },
            minRange: 3600 * 1000 // one hour
        },

        yAxis: {
            floor: 0
        },

        series: [{
            data: data,
            dataGrouping: {
                enabled: false
            }
        }]
    });
});



</script>
 -->
		<div class="main">
			<div class="container">
			<input type="hidden" id="maincurr" value="<?php echo $maincurr; ?>">
			<input type="hidden" id="subcurr" value="<?php echo $subcurr; ?>">
			
				<div class="kline-para">
				
					
					<span class="productSymbol no-info" ><?php echo $currency; ?></span>
					
					<ul>
								<li>
									<h4>Last Price</h4>
									<strong class="green"  ><span id="lastprice"></span></strong>
									
								</li>
								<li>
									<h4>24h Change</h4>
									<strong class="magenta" > <span id="24change"></span> </strong>
									<strong class="magenta"><span  id="perc"></span>%</strong>
								</li>
								<li>
									<h4>24h-High</h4>
									<strong><span id="24high"></span></strong>
								</li>
								<li>
									<h4>24h Low</h4>
									<strong><span id="24low"></span></strong>
								</li>
								<li>
									<h4>24h Volume</h4>
									<strong><span id="24volume"></span>  <?php echo $maincurr; ?></strong>
								</li>
							</ul>
							
				</div>
			
			
				<div class="main-body">
				
					<!-- 左侧 -->
					<div class="main-left">
						<!-- 深度 -->
						<div class="depths" >
							<!-- <div class="depthstitle" ng-init="curDepthType=1">
								<img ng-src="https://resource.binance.com/resources/img/buy&sell-{{curDepthType==1?2:1}}.jpg"  ng-click="curDepthType=1" onclick="this.src='https://resource.binance.com/resources/img/buy&sell-2.jpg'">
								<img ng-src="https://resource.binance.com/resources/img/buy-{{curDepthType==2?2:1}}.jpg"  ng-click="curDepthType=2" onclick="this.src='https://resource.binance.com/resources/img/buy-2.jpg'">
								<img ng-src="https://resource.binance.com/resources/img/sell-{{curDepthType==3?2:1}}.jpg"  ng-click="curDepthType=3" >
								
							</div> -->

							<table class="table">
								<colgroup style="width:30%"></colgroup>
								<colgroup style="width:30%"></colgroup>
								<colgroup style="width:40%"></colgroup>
								<tr>
									<th class="f-left">Price(<?php echo $maincurr; ?>)</th>
									<th class="f-right">Amount(<?php echo $subcurr; ?>)</th>
									<th class="f-right">Total(<?php echo $maincurr; ?>)</th>
								</tr>
							</table>
							<div class="depths-wrap scrollStyle" id="askScrollBox" style="top:0px;">

								
									<div class="market-con scrollStyle">
									
									<div id="asklist"></div>
								</div>
								
							</div>
							<div class="newest ">
								<strong >
								<span class='green iconfont icon-zhang' style="font-weight:normal;font-size:14px;vertical-align:text-bottom;text-align: center;"  id="currentprice"></span>
								</strong>
								<!-- <div class="depthwrong">
									<img src="https://resource.binance.com/resources/img/depthSuc.png">
									<p>{{"depthTip_normal" | T}}</p>
								</div> -->
								
								
								
							</div>
							
							<div class="depths-wrap scrollStyle" id="bidScrollBox" >
								
								<div class="market-con scrollStyle">
									
									<div id="bidlist"></div>
								</div>
								
							</div>
						</div>
					</div>
					
					<div class="main-con">
					<!-- K线图 -->
					<div class="overvies">
					<div id="container" style="height: 320px; min-width: 310px;padding-bottom: 30px; "></div>
						
						<!-- <div id="kline-con">
						<div class="kline-timeline" ng-init="showDepth=false" >

							<label  ng-show="!showDepth"><span  ng-class="{true:'cur',false:''}[curIndex==0]" ng-click="setTimeLine(0)">{{'hourLine' | T}}</span><span
								ng-click="showMin=!showMin;showHour=false"	 ng-switch="curIndex"  ng-class="{true:'cur',false:''}[curIndex==1||curIndex==2||curIndex==3||curIndex==4]"  style="padding-right: 3px">
								<label ng-switch-when="1">1{{'minute' | T}}</label>
								<label ng-switch-when="2">5{{'minute' | T}}</label>
								<label ng-switch-when="3">15{{'minute' | T}}</label>
								<label ng-switch-when="4">30{{'minute' | T}}</label>
								<label ng-switch-default>{{"Min"|T}}</label>
								 <i ng-if="showMin" class="iconfont icon-upsjsmall"></i><i ng-if="!showMin" class="iconfont icon-downsjsmall"></i>
							<ul ng-show="showMin">
								<li ng-class="{true:'cur',false:''}[curIndex==1]" ng-click="getByInterval('60',1)">1{{'minute' | T}}</li>
								<li ng-class="{true:'cur',false:''}[curIndex==2]" ng-click="getByInterval('300',2)">5{{'minute' | T}}</li>
								<li ng-class="{true:'cur',false:''}[curIndex==3]" ng-click="getByInterval('900',3)">15{{'minute' | T}}</li>
								<li ng-class="{true:'cur',false:''}[curIndex==4]" ng-click="getByInterval('1800',4)">30{{'minute' | T}}</li>
							</ul>
							</span><span ng-click="showHour=!showHour;showMin=false"  ng-switch="curIndex"  ng-class="{true:'cur',false:''}[curIndex==5||curIndex==6||curIndex==7||curIndex==8||curIndex==9]" style="padding-right: 3px">
								<label ng-switch-when="5">1{{'hour' | T}}</label>
								<label ng-switch-when="6">2{{'hour' | T}}</label>
								<label ng-switch-when="7">4{{'hour' | T}}</label>
								<label ng-switch-when="8">6{{'hour' | T}}</label>
								<label ng-switch-when="9">12{{'hour' | T}}</label>
								<label ng-switch-default>{{"Hour11"|T}}</label>
								<i ng-if="showHour" class="iconfont icon-upsjsmall"></i><i ng-if="!showHour" class="iconfont icon-downsjsmall"></i>
							<ul ng-show="showHour">
								<li ng-class="{true:'cur',false:''}[curIndex==5]" ng-click="getByInterval('3600',5)">1{{'hour' | T}}</li>
								<li ng-class="{true:'cur',false:''}[curIndex==6]" ng-click="getByInterval('7200',6)">2{{'hour' | T}}</li>
								<li ng-class="{true:'cur',false:''}[curIndex==7]" ng-click="getByInterval('14400',7)">4{{'hour' | T}}</li>
								<li ng-class="{true:'cur',false:''}[curIndex==8]" ng-click="getByInterval('21600',8)">6{{'hour' | T}}</li>
								<li ng-class="{true:'cur',false:''}[curIndex==9]" ng-click="getByInterval('43200',9)">12{{'hour' | T}}</li>
							</ul>
							</span><span
								ng-class="{true:'cur',false:''}[curIndex==10]" ng-click="getByInterval('86400',10)">{{'dayLine' | T}}</span><span
								ng-class="{true:'cur',false:''}[curIndex==11]" ng-click="getByInterval('604800',11)">{{'weekLine' | T}}</span></label>
								<span  class="f-fr" ng-init="isFull=false" ng-show="!isFull" ng-click="fullpage();isFull=true;"><i class="iconfont icon-full"></i></span>
                                <span  class="f-fr"  ng-show="isFull" ng-click="offFullpage();isFull=false"><i class="iconfont icon-offfull"></i></span>
								<span class="f-fr" ng-class="{'cur':showDepth}" ng-click="showDepth=true">{{'depthGragh'|T}}</span>
								<span class="f-fr" ng-class="{'cur':!showDepth}" ng-click="showDepth=false">{{'kline'|T}}</span>
						</div>

						<div class="kline-con" id="chart_container" style="min-height:237px;height:347px">
	                   		<div  ng-show="!showDepth" id="chart" class="chart" style="height:100%;width: 100%"></div>
	                   		<div id="p" style="height:100%;width: 100%" ng-show="showDepth">
					             <div id="depth" style="height:100%;width: 100%"><div class="box-inner" style="height:100%;width: 100%;"></div></div>
					        </div>
						</div>
						</div> -->
					</div>
				<!-- 	<div class="fee">
						<div  ng-if="Islogin">
							<div class="iconfont icon-huoyan" ng-class="{'yellow':userBaseInfo.userData.commissionStatus==1}">
								<div class="feeTip">
									<p>
										<span ng-if="userBaseInfo.userData.commissionStatus==1">{{"BNBpayment"|T}}</span>
										<span ng-if="userBaseInfo.userData.commissionStatus==2">{{"BNBpaymentNotOpen"|T}}</span> 
										<a target="blank" href="https://binance.zendesk.com/hc/{{cur_lang=='cn'?'zh-cn':'en-us'}}/articles/115000583311"  class="yellow">{{"detail"|T}}</a> <span class="gray">|</span> <a target="blank" href="/userCenter/myAccount.html"  class="yellow">{{"closeIt"|T}}</a>
									</p>
								</div>
							</div>
							<label>{{'Fee'|T}}: </label>
							<span ng-if="Islogin&&userBaseInfo.userData.commissionStatus==1"><s>{{buyFee*100 | number:2}}%</s>&nbsp;{{buyFee*50| number:3}}%</span>
							<span ng-if="Islogin&&userBaseInfo.userData.commissionStatus==2">{{buyFee*100 | number:2}}%</span>
							<span ng-if="!Islogin">--%</span>
						</div>
                    </div> -->
					<!-- 下单form -->
					<div class="orderforms f-cb" style="top: 80px;">
						<div class="orderform-type">
							<span>Limit Order</span>
						</div>
						<!-- 限价委托 -->
						<div class="orderform-main f-cb" >
							<div class="f-fl">
								<div class="orderforms-hd">
									<div>
										<label>BUY  <?php echo $maincurr; ?></label>
										
										<span class="f-fr" id="subcurrbalance"></span> <span class="f-fr" ><?php echo $subcurr; ?> Balance: </span>
										<p><span class="f-fr" id="subcurrfreezebalance"></span> <span class="f-fr" >Freeze Balance: </span></p>
										</div>
								</div>
								<form name="buyForm"  novalidate autocomplete="off">
									
									<div class="orderforms-inputs">
	
										<div class="field f-cb">
											<label>Price</label>
											<div class="iptwrap leftBig">
												<input type="text" name="buyPrice" id="buyPrice"  required onkeyup="bidAmount()" />
												
												
											</div>
										</div>
										<div class="field f-cb">
											<label>Amount</label>
											<div class="iptwrap" >
												<input type="text" name="buyQuanity" id="buyQuanity" required  onkeyup="bidAmount()" />
												
											</div>
										</div>
										
										<div class="field f-cb">
											<label>Total</label>
											<div class="iptwrap">
												<input class="readonly" type="text" id="bid_vol" readonly/>
												<span class="unit"><?php echo $subcurr; ?></span>
											</div>
										</div>
									</div>
	
									<div id="buyform-error" class="error-box"></div>
									<div class="orderforms-btn">
									<?php if($this->session->userdata('_id')=='')
				                        { ?>
										<div  class="logout">
											<a href="<?php echo base_url();?>">Login</a> or <a href="/register.html">Register</a></div>
										<?php  } else {?>

										<input type="button" onclick="but_data();" value="Buy <?php echo $maincurr; ?>" class="btn btn-block btn-buy" />
										<?php } ?>
									</div>
								</form>
							</div>
							<div class="f-fr">
								<div class="orderforms-hd orderforms-hd-magenta">
									<div>
										<label>Sell  <?php echo $maincurr; ?></label>
											<span class="f-fr" id="maincurrbalance"></span> <span class="f-fr" ><?php echo $maincurr; ?> Balance: </span>
										<p><span class="f-fr" id="maincurrfreezebalance"></span> <span class="f-fr" >Freeze Balance: </span></p>
										</div>
								</div>
								<form name="sellForm"  autocomplete="off">
									
									<div class="orderforms-inputs">

										<div class="field f-cb">
											<label>Price</label>
											<div class="iptwrap leftBig">
												<input type="text" name="sellPrice" id="sellPrice" required onkeyup="askAmount();" />
												
											</div>
										</div>
										<div class="field f-cb">
											<label>Amount</label>
											<div class="iptwrap">
												<input type="text" onkeyup="askAmount();" name="sellQuanity" id="sellQuanity"  required />
												
											</div>
										</div>
										
										<div class="field f-cb">
											<label>Total</label>
											<div class="iptwrap">
												<input class="readonly" type="text" id="ask_vol" readonly/>
												<span class="unit"><?php echo $subcurr; ?></span>
											</div>
										</div>

									</div>

									<div id="sellform-error" class="error-box"></div>
									<div class="orderforms-btn">
									<?php if($this->session->userdata('_id')=='')
				                        { ?>
									    <div class="logout"><a href="<?php echo base_url();?>">Login</a> or <a href="<?php echo base_url();?>">Register</a> </div>
									    <?php } else { ?>

										<input type="button" onclick="sell_data();" value="Sell <?php echo $maincurr; ?>"  class="btn btn-block btn-sell"  />
										<?php } ?>
									</div>
	
								</form>
							</div>
						</div>
						
					</div>
				</div>
					
					<div class="main-aside" style="top:-58px;">
						<div class="depths" style="margin-top: 58px;">
							<div class="depthstitle f-cb">
								<ul class="tab-box" ng-init="curMarket=getQuoteAsset">
									<li class="f-fl" id="defaultStart" ><span class="iconfont icon-xingxing activeTabDefault">Favorites</span></li>
									
									<li class="f-fr  f-nomargin" >USDT</li>
									<li class="f-fr">BNB</li>
									<li class="f-fr">ETH</li>
									<li class="f-fr">BCH</li>
								</ul>
								<!-- <div class="searchFilter f-cb">
									<div class="search-box f-fl">
										<input type="text" id="search-int" ng-model="marketsKeyWords" ng-change="changeMarket(curMarket)"  >
									</div>
									
								</div> -->
							</div>
							<div class="market-box">
								<ul class="market-t">
									<li></li>
									<li class="f-left">Pair</li>

									<li class="f-center">LastPrice</li>

									<li class="f-cenetr">Change</li>

									
								</ul>
								<div class="market-con scrollStyle">
									
									<div id="curencylist"></div> 
								</div>
							</div>
						</div>	
										
						
						<div class="tradehistory">
						<div class="item-title">
							<h3>Trade History</h3>
							<div class="item-title-btns" >
								<span>Market</span>
								
							</div>
							
						</div>
						<div class="item-con" id="tradeHistory" style="margin-top:1px;">
						<div style="height:247px;overflow-y:auto;" class="scrollStyle" >
							
									<div id="tradehistory"></div>
							
						</div>
							
						</div>
					</div>
					</div>
				</div>
				
				
				<!-- user records -->
				<div class="userRecords f-cb" style="padding-top: 85px;">
					<div class="userRecords-title">
						<span style="color: black;">Open Orders</span>
						
					</div>
					<div class="userRecords-main">
						<!-- 当前委托 -->
						<div class="item-con">
							<table class="table table-striped">

								
								<thead>
									<tr>
										<th class="f-left">ORDER DATE</th>
										<th class="f-center">BID/ASK</th>
										<th class="f-center">UNITS FILLED <?php echo $subcurr; ?> </th>
										<th class="f-center">ACTUAL RATE</th>
										<th class="f-center">UNITS TOTAL <?php echo $subcurr; ?></th>
										<th class="f-center">UNITS TOTAL <?php echo $maincurr; ?></th>
										<th class="f-center">ACTION</th>
										
									</tr>
								</thead>
								</table>
								<?php if($this->session->userdata('_id')!='')
				                  { ?>
								<div class="scrollStyle" style="height:186px;overflow-y:auto;" >
									
										<div id="useropenorder"></div>
									
								</div>
								<?php } ?>

							</div>
					</div>
				
				</div>
				
				<div class="userRecords f-cb" >
					<div class="userRecords-title">
						<span class="cur" style="color: black;">My 24h Order History</span>
						<span class="cur" style="color: black;float: right;"><a href="<?php echo trading_url();?>/tradehistory?curr=<?php echo base64_encode("$maincurr/$subcurr");?>"> more </a> </span>
					</div>
					<div class="userRecords-main">
							<!-- 历史委托 -->
							<div class="item-con">
								<table class="table table-striped">
									
									<thead>
                                        <tr>
                                            <th class="f-left">ORDER DATE</th>
                                            <th class="f-center">BID/ASK</th>
											<th class="f-center">UNITS FILLED <?php echo $subcurr; ?></th>
											<th class="f-center">ACTUAL RATE</th>
											<th class="f-center">UNITS TOTAL <?php echo $subcurr; ?> </th>
											<th class="f-center">UNITS TOTAL <?php echo $maincurr; ?> </th>
											
                                        </tr>
									</thead>
								</table>
								<?php if($this->session->userdata('_id')!='')
				                  { ?>
								<div class="scrollStyle" style="overflow-y:auto;height:186px;" >
									
									<div id="usercloseorder"></div>
								
								<?php }?>
								
							</div>
							
					</div>
				
				</div>
				
				
				
			</div>
		</div>
		
	<!-- 	<div class="legal" ng-show="isShowLegal" ng-mouseover="isShowLegal=true" ng-mouseleave="isShowLegal=false">
			Legal
			<a ng-href="{{legalLink}}" target="_blank" class="iconfont icon-newWindow"></a>
		</div>	 -->

		
		<!-- 用户详情弹出框 -->
		<!-- <div id="pop-user" ng-if="showPopUser" class="pop-user" ng-click="stopBubble($event)">
			<div class="left-pop">
				<h2>Latest Messages</h2>
				<div id="privateMsgList" class="overflow">
					<dl  ng-repeat="x in personalMsg">
						<dt cid="{{ x.id }}">{{ x.username }} : </dt>
						<dd>{{ x.message }}</dd>
					</dl>

				</div>
				<div style="clear:both;"></div>
			</div>
			<div class="right-pop">
				<h2>User Info</h2>
				<div class="user-info">
				<div class="right">
						<h3>{{personalInfo.userId}}</h3>
						<div>{{personalInfo.selfDesc}}</div>
					</div>

					<div class="m-top">
						<h2>Send Private Message</h2>
						<textarea rows="10" cols="20" id="privateMsg" placeholder="Say something"></textarea>
						<span ng-click="sendPrivateMsg()" class="font font-send f-fr"></span>
					</div>

				</div>
			</div>
		</div> -->
	<style>
.modalDialog {
	position: fixed;
	font-family: Arial, Helvetica, sans-serif;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background: rgba(0,0,0,0.2);
	z-index: 99999;
	opacity:1;
	-webkit-transition: opacity 400ms ease-in;
	-moz-transition: opacity 400ms ease-in;
	transition: opacity 400ms ease-in;
	pointer-events: auto;
}
.modalDialog:target {
	opacity:1;
	pointer-events: auto;
}

.modalDialog > div {
	width: 600px;
	position: relative;
	margin: 10% auto;
	background: #fff;
	
}

.close {
	background: #e8b342;
	color: #FFFFFF;
	line-height: 25px;
	position: relative;
	text-align: center;
	width: auto;
	text-decoration: none;
	font-weight: bold;
	-moz-box-shadow: 1px 1px 3px #000;
	-webkit-box-shadow: 1px 1px 3px #000;
	box-shadow: 1px 1px 3px #000;
}

.safeTip{width: 488px;text-align: center;background: #fff}
.jgimg{padding:49px 0 20px 0}
.decp{text-align: center;font-size: 14px}
.decp p{line-height: 24px;color: #333}
.decp p:first-child{color:#ea2323; }
.yzChoose{width: 458px;margin: 35px auto}
.yzChoose a{display: inline-block;width: 143px;height: 36px;border: 1px solid #efefef;color:#666666;font-size: 14px;background: #fafafa;position: relative;padding:16px 11px 16px 68px;line-height: 36px }
.yzChoose a:hover{border: 1px solid #f6e4be;color:#e8b342; }
.yzChoose .imgicon{display: inline-block;
    width: 36px;
    height: 36px;
    vertical-align: middle;
    background: url(../assets/frontend/img/yzchoose.png) no-repeat center;
    position: absolute;}
 
.yzChoose .img-google1{background-position: -46px 0;top: 16px;left: 20px}  
.yzChoose .img-phone{background-position: -92px 0;top: 16px;left: 30px}  
.yzChoose a:hover .img-google1{background-position: 0 0;top: 16px;left: 20px}   
.yzChoose a:hover .img-phone{background-position: -131px 0;top: 16px;left:30px}

.btphone p{font-size: 14px;color: #666;text-align: left;}  
/* .btphone h3{font-size: 14px;color: #666;text-align: left;padding-bottom: 3px}   */
.yzChoose a:hover h3{color: #e8b342;}   
.yzChoose a:hover p{color: #e8b342} 
.btgoogle{margin-right: 10px;float: left;}   
.btgoogle p{font-size: 14px;line-height: 36px;text-align: left;}
.smalltip{text-align: right;font-size: 12px;color: #666;padding-bottom: 28px}
.smalltip span{padding-right: 15px;}
.smalltip {padding-right: 70px;}
.auth:hover { color: #e8b342; }

.close:hover { background: #e8b342; }
</style>

<?php if ($this->session->userdata('session_key')==0)
{ if( ($this->session->userdata('isPhoneFactor')=='0') && ($this->session->userdata('isTwoFactor')=='0')){
$this->session->set_userdata('session_key', 1);
	?>

<div id="openModal" class="modalDialog">
      
		<div class="safeTip" >
			<img class="jgimg" alt="" src="<?php echo asset_url();?>img/warning.png ">
			<div class="decp">
			<p>We strongly recommend you to enable 2FA on your account !</p>
		    <p>Please choose how you wish to receive 2FA code</p>
			</div>
			<div class="yzChoose">
			<a href="<?php echo tfauth_url(); ?>tfauth" class="btgoogle" ><span class="imgicon img-google1"></span><p >Google Authentication</p></a>
			<a ng-show="user.mobileNo!=null" onclick="layer.closeAll()"   class="btphone"><span class="imgicon img-phone"></span><p>SMS Authentication</p></a>
			<a ng-show="user.mobileNo==null" href="<?php echo tfauth_url(); ?>smsotp"  class="btphone"><span class="imgicon img-phone"></span><p>SMS Authentication</p></a>
			
			</div>
			<div class="smalltip"><span>I understand the risks for not enabling 2FA</span><a style="    font-size: 12px;padding: 8px 12px;" title="Close" class="close" class="btn btn-orange">Skip for now</a></div>
	       
	</div>
	
</div>

<?php }} ?>




<script>
$(".close").on('click',function(){
   $(".modalDialog").css({"opacity":"0","pointer-events":"none"});
});
</script>	



		<?php $this->load->view('include/footer');  ?>
	<!-- <script src="https://resource.binance.com/resources/js/isMobile.js" type="text/javascript" charset="utf-8"></script>
	 -->
	
	<script>
	
	
	/*$(function(){

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
		
		
		
		$(document).on("mouseover",".productSymbol",function(){
			$(".info-tips").show();
		});
		$(document).on("mouseout",".productSymbol",function(){
			$(".info-tips").hide();
		});
		
		
	})*/
	
	 /* function googleTranslateElementInit(lang) {
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
*/	
	</script>

	
	
	</body>
</html>


<script type="text/javascript" src="<?php echo asset_url();?>js/bignumber.js"></script>

