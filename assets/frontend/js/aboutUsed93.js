app.controller("aboutUsCtr",function($scope,$rootScope,$translate,$http){
	$rootScope.curPage='support';
	$rootScope.webtitle=$translate.instant('About Us');
	$scope.ncflag=false;
	$http.post('/ip2location/countryShort.html').success(function(data){
		if(data.success){
			$scope.ctry=data.ctry;
		    console.log($scope.ctry);
		    if($scope.ctry=='CN'){
		    	$scope.ncflag=false;
		    }else{
		     	$scope.ncflag=true;
		    }
		}
	
	})

	$scope.playVideo=function(a){
		if(a==1){
		if($scope.ncflag){
				layer.open({
					  type: 2,
					  title: false,
					  area: ['854px', '480px'],
					  shade: 0.8,
					  closeBtn: 2,
					 
					  shadeClose: true,
					  content: 'https://www.youtube.com/embed/aBznpE89UCM'
					});
				
				
			}else{
				layer.open({
					  type: 2,
					  title: false,
					  area: ['854px', '480px'],
					  shade: 0.8,
					  closeBtn: 2,
					 /* shadeClose: true,*/
					  content: 'https://player.youku.com/embed/XMzE4ODM5MDAzNg=='
					});
			}
	
		}else if(a==2){
			
			if($scope.ncflag){
				layer.open({
					  type: 2,
					  title: false,
					  area: ['854px', '480px'],
					  shade: 0.8,
					  closeBtn: 2,
					  shadeClose: true,
					  content: 'https://www.youtube.com/embed/dknuDeFX09M'
					});
				
				
			}else{
				layer.open({
					  type: 2,
					  title: false,
					  area: ['854px', '480px'],
					  shade: 0.8,
					  closeBtn: 2,
					 /* shadeClose: true,*/
					  content: 'https://player.youku.com/embed/XMzE4ODQzNTM2NA=='
					});
		}
			
		}else if(a==3){
			
			if($scope.ncflag){
				layer.open({
					  type: 2,
					  title: false,
					  area: ['854px', '480px'],
					  shade: 0.8,
					  closeBtn: 2,
					  shadeClose: true,
					  content: 'https://www.youtube.com/embed/wVQtvGFpicw'
					});
				
				
			}else{
				layer.open({
					  type: 2,
					  title: false,
					  area: ['854px', '480px'],
					  shade: 0.8,
					  closeBtn: 2,
					 /* shadeClose: true,*/
					  content: 'http://player.youku.com/embed/XMzI2MTU1MTk1Mg=='
					});
			}
		}
		$('iframe').attr('allowfullscreen','true')
	}


	
}


)
