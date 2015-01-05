$(document).ready(function(){
 // 預設顯示第一個 Tab
	var _showTab = 0;
	var $defaultLi = $('ul.tabs_l li').eq(_showTab).addClass('active');
	$($defaultLi.find('a').attr('href')).siblings().hide();
 
	// 當 li 頁籤被點擊時...
	// 若要改成滑鼠移到 li 頁籤就切換時, 把 click 改成 mouseover
	$('ul.tabs_l li').mouseover(function() {
		// 找出 li 中的超連結 href(#id)
		var $this = $(this),
			_clickTab = $this.find('a').attr('href');
		// 把目前點擊到的 li 頁籤加上 .active
		// 並把兄弟元素中有 .active 的都移除 class
		$this.addClass('active').siblings('.active').removeClass('active');
		$('ul.tabs_r li').removeClass('active');
		//$this.addClass('active').siblings().removeClass('active');
		// 淡入相對應的內容並隱藏兄弟元素
		$(_clickTab).stop(false, true).fadeIn().siblings().hide();
 				//跳過當前動畫效果,停在動畫執行之後
		return false;
	}).find('a').focus(function(){
		this.blur();
	});
	$('ul.tabs_r li').mouseover(function() {
		// 找出 li 中的超連結 href(#id)
		var $this = $(this),
			_clickTab = $this.find('a').attr('href');
		// 把目前點擊到的 li 頁籤加上 .active
		// 並把兄弟元素中有 .active 的都移除 class
		$this.addClass('active').siblings('.active').removeClass('active');
		$('ul.tabs_l li').removeClass('active');
		//$this.addClass('active').siblings().removeClass('active');
		// 淡入相對應的內容並隱藏兄弟元素
		$(_clickTab).stop(false, true).fadeIn().siblings().hide();
 				//跳過當前動畫效果,停在動畫執行之後
		return false;
	}).find('a').focus(function(){
		this.blur();
	});

	$(function(){
	// 預設標題區塊 .abgne_tip_gallery_block .caption 的 top
	var _titleHeight = 51;
	$('.tab_content').each(function(){
		// 先取得區塊的高及標題區塊等資料
		var $this = $(this), 
			_height = $this.height(), 
			$caption = $('.tab_context', $this),
			_captionHeight = 90,
			_speed = 200;
 
		// 當滑鼠移動到區塊上時
		$this.hover(function(){
			// 讓 $caption 往上移動
			$caption.stop().animate({
				top: _height - _captionHeight
			}, _speed);
		}, function(){
			// 讓 $caption 移回原位
			$caption.stop().animate({
				top: _height - _titleHeight
			}, _speed);
		});
	});
});


})