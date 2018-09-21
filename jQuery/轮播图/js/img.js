var num = 0;
var y = 0;
var flag = false;
var shuff_ul = document.querySelector('.shuff_tu ul')
var ols = document.querySelectorAll('.big_screen ol li')
ols[0].style.background = "#FF7467";

function changImg() {
	if(flag) {
		num = hello - 1;
		y = hello - 1;
		flag = false;
	}
	if(num == 3) {
		num = -1;
	}
	if(y == 3) {
		y = -1;
	}
	num++; //1
	y++;
	console.log("num111 = " + num);
	console.log("y111 = " + y);
	shuff_ul.style.left = -num * 100 + "%";
	for(var i = 0; i < ols.length; i++) {
		ols[i].style.background = "#000000"
	}
	ols[y].style.background = "#ff7467"
}
var imgTime = setInterval(changImg, 2000)

function continueImg() {
	clearInterval(imgTime)
	imgTime = setInterval(changImg, 2000)
}
var liEles = document.querySelectorAll('.shuff_tu>ul>li')

function lastMove() {
	num--;
	y--;
	if(num < 0) {
		num = liEles.length - 1;
	}
	console.log("num = " + num)
	if(y < 0) {
		y = ols.length - 1
	}
	shuff_ul.style.left = -num * 100 + "%";
	for(var i = 0; i < ols.length; i++) {
		ols[i].style.background = "#000000"
	}
	ols[y].style.background = "#ff7467"
}
$('.big_screen').mouseover(function() {
	clearInterval(imgTime);
})
$('.big_screen').mouseout(function() {
	continueImg();
})
$('#left').click(function() {
	lastMove();
	continueImg();
})
$('#right').click(function() {
	changImg();
	continueImg();
})

function delay2s() {

}
var ols = $('.big_screen ol li');
var $banner_ul = $('.shuff_tu ul');
ols.click(function() {
	for(var i = 0; i < ols.length; i++) {
		ols[i].style.background = "#000000"
	}
	$(this).css('background', '#ff7467');
	$($banner_ul).css('left', -$(this).index() * 100 + '%');
	hello = $(this).index();
	flag = true;
	console.log("hello = " + hello);
	continueImg();
})