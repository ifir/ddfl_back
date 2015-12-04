$(function(){
	
	var $iframe = $('#iframe');
	//iframe地址数组,按顺序写src地址即可
	var srcStr = [
					//律师管理
					['unaudit-lawyer.html', 'hire-lawyer.html', 'unaudit-other.html', 'hire-other.html', 'people.html'], 
					//法律产品
					['low-product.html'], 
					//法律知识
					['low-knowledge.html', ''], 
					//收费产品
					['business-product.html', 'personal-product.html', 'business-package.html', 'personal-package.html', 'add-charge-product.html'], 
					//热门话题
					['marriage-topic.html', 'traffic-topic.html', 'knowledge-topic.html', 'contract-topic.html', 'consumption-topic.html', 'add-hot-topic.html']
			];
	if(window.sessionStorage){
		//本地session获取
		var parentNum = sessionStorage.getItem('parentIndex');
		var childNum = sessionStorage.getItem('childIndex');
		if(!parentNum == '' || !childNum == ''){
			var parentNumAdd = parseInt(parentNum) + 1;
			$('.child-menu li').removeClass('list-cur');
			$('.child-menu').hide();
			$('.child-menu').eq(parentNum).show();
			$('#child-menu'+parentNumAdd+' li').eq(childNum).addClass('list-cur');
			$iframe.attr("src",srcStr[parentNum][childNum]);
			}
	}
	$('#parent-menu li').each(function(index){

		$(this).find('a').click(function(){
			_this = $(this);
			_this.next().slideToggle("low");

		})
		//分配iframe src地址
		if(index == 0){//律师管理
			iframeSrc('child-menu1');
		}else if(index == 1){//法律产品
			iframeSrc('child-menu2');
		}else if(index == 2){//法律知识
			iframeSrc('child-menu3');
		}else if(index == 3){//收费产品
			iframeSrc('child-menu4');
		}else if(index == 4){//热门话题
			iframeSrc('child-menu5');
		}
			//封装iframe src地址
			function iframeSrc(obj){
				$('#'+obj+' li').each(function (i){
					$(this).click(function (){
						_this = $(this);
						$iframe.attr("src",srcStr[index][i]);
						$('.child-menu li').removeClass('list-cur');
						_this.addClass('list-cur');
						if(window.sessionStorage){
						//本地session设置							
							sessionStorage.setItem("parentIndex", index); 
							sessionStorage.setItem("childIndex", i); 
						}
					});
				});
			}


	})

			
})//end