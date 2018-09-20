

(function($){
	$.fn.extend({
		waterflow:function(){
			var boxWidth=this.width();
			var items=this.find('.item');
			var itemWidth=items.outerWidth();
			var rowNum=5;
			var space=(boxWidth-(itemWidth*rowNum))/rowNum-1;
			var itemArray=[];
			items.each(function(index,el){
				if(index<rowNum){
					itemArray[index]=$(el).outerHeight();
					var left=index*(itemWidth+space);
					$(el).css({
						top:0,
						left:left
					})
				}else{
					var minHeight=itemArray[0];
					var minIndex=0;
					var height=$(el).outerHeight();
					for(var i in itemArray){
						if(itemArray[i]<minHeight){
							minHeight=itemArray[i];
							minIndex=i;
						}
					}
					itemArray[minIndex]=minHeight+height+space;
					$(el).css({
						top:minHeight+space,
						left:minIndex*(itemWidth+space)
					});
				}
			});
			var maxHeight=itemArray[0];
			for(var j in itemArray){
				if(itemArray[j]>maxHeight){
					itemArray[j]=maxHeight
				}
			}
			this.height(maxHeight);
		}
	});
})(jQuery);
function ajaxGetImg(pageNum){
	url:"jqueryajax.php",
	type:"post",
	date:{page:pageNum},
	dataType:"json",
		success:function(responseData){
			if(responseData.length==0){
				$('#loadmore').text('没有更多数据');
				return;
			}
			for(var i in responseData){
				var title=responseData[i].title;
				var img=responseData[i].path;
				var divo=$('<div/>',{class:'item'}).appendTo('.items');
					$('<img/>',{src:img}).appendTo(divo);
					$('<p/>').html(title).appendTo(divo);
			}
			$('.items img').on('load',function(){
				$('.items').waterflow();
			});
		},
		error:function(xhr,error,ex){
			alert('服务器错误!稍后重试!');
		}	
	});
}
}
$(window).on('load',function(){
	ajaxGetImg(1);
	var pageNum=1;
	$('#loadmore').click(function(){
		pageNum++;
		ajaxGetImg(pageNum);
	});
	$(window).scroll(function(){
		var totalHeight=Math.ceil($(window).scrollTop()+$(window).height());
		console.log('totalHeight===>',totalHeight);
		console.log('docuemtnHeight==>',$(document).height());
		if(totalHeight>=$(document).height()){
			pageNum++;
			ajaxGetImg(pageNum);
		}
	});
});