$(document).ready(function() {
	$(".thumbnail_hover").hover(function() {
		$(this).stop().animate({"opacity": 1}, "slow");
	}, function () {
		$(this).stop().animate({"opacity": 0}, "slow");
	});
	
	$(".shover").hover(function() {
		$(this).stop().animate({"opacity": 0.5}, "slow");
	}, function () {
		$(this).stop().animate({"opacity": 0}, "slow");
	});
	
	$(".cd_block").hover(function() {
		$(".track_block", this).stop().animate({"opacity": 0.5}, "slow");
		$(".cd_title", this).stop().animate({"opacity": 1}, "slow");
	}, function () {
		$(".track_block", this).stop().animate({"opacity": 0}, "slow");
		$(".cd_title", this).stop().animate({"opacity": 0}, "slow");
	});
	
	$(".date").hover(function() {
		$(this).stop().animate({"opacity": 1}, 300);
	}, function () {
		$(this).stop().animate({"opacity": 0.4}, 300);
	});
});
