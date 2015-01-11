$(document).ready(function(){
 	Parse.initialize("zXRdCeohlIaA3E5xkDjlEm3QdAscxKhmAcl4SbHn", "j8pF7mXZq4mcQFlZXqc10EeiKqCh6VrZktXpcFtd");
 	//Parse.initialize("你的Application ID ", "你的JavaScript key");
 	// 預設顯示第一個 Tab
	var _showTab = 0;
	var $defaultLi = $('ul.tabs_l li').eq(_showTab).addClass('active');
	$($defaultLi.find('a').attr('id')).siblings().hide();
 
	// 當 li 頁籤被滑過時...
	// 若要改成滑鼠點擊 li 頁籤就切換時, 把 mouseover 改成 click
	$('ul.tabs_l li').mouseover(function() {
		// 找出 li 中的超連結的id
		var $this = $(this),
			_clickTab = $this.find('a').attr('id');
		// 把目前點擊到的 li 頁籤加上 .active
		// 並把兄弟元素中有 .active 的都移除 class
		$this.addClass('active').siblings('.active').removeClass('active');
		$('ul.tabs_r li').removeClass('active');
		// 淡入相對應的內容並隱藏兄弟元素
		$(_clickTab).stop(false, true).fadeIn().siblings().hide();
 				//跳過當前動畫效果,停在動畫執行之後
		return false;
	}).find('a').focus(function(){
		this.blur();
	});
	$('ul.tabs_r li').mouseover(function() {
		var $this = $(this),
			_clickTab = $this.find('a').attr('id');
		$this.addClass('active').siblings('.active').removeClass('active');
		$('ul.tabs_l li').removeClass('active');
		$(_clickTab).stop(false, true).fadeIn().siblings().hide();
		return false;
	}).find('a').focus(function(){
		this.blur();
	});

	$(function(){
	// 預設標題區塊的 top
	var _titleHeight = 51;
	$('.tab_content').each(function(){
		// 先取得區塊的高及標題區塊等資料
		var $this = $(this), 
			_height = $this.height(), 
			$caption = $('.tab_context', $this),
			_captionHeight = 140,
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
	$('.vote').click(function(){
		var $this = $(this),
			_clickTab = $this.attr('id');
			if(_clickTab=="#tab1_v"){
				_Tab="柯基犬";
				_img="tab1";
				pet=1;
			}
			else if(_clickTab=="#tab2_v"){
				_Tab="柴犬";
				_img="tab2";
				pet=2;
			}
			else if(_clickTab=="#tab3_v"){
				_Tab="牧羊犬";
				_img="tab3";
				pet=3;
			}
			else if(_clickTab=="#tab4_v"){
				_Tab="鬆獅犬";
				_img="tab4";
				pet=4;
			}
			else if(_clickTab=="#tab5_v"){
				_Tab="哈士奇";
				_img="tab5";
				pet=5;
			}
			else if(_clickTab=="#tab6_v"){
				_Tab="黃金獵犬";
				_img="tab6";
				pet=6;
			}
			else if(_clickTab=="#tab7_v"){
				_Tab="臘腸犬";
				_img="tab7";
				pet=7;
			}
			else if(_clickTab=="#tab8_v"){
				_Tab="法國鬥牛犬";
				_img="tab8";
				pet=8;
			}
			$('.votepage').show();
			$( ".voteto h3" ).remove();
			$('<h3>我要投給-'+_Tab+'</h3>').appendTo( '.voteto');
			$( ".voteto img" ).remove();
			$('<img style="display:block; margin:auto;border:3px solid black" src="images/'+_img+'.png"></img>').appendTo( '.voteto');
			$( "#pet" ).remove();
			$('<input type="hidden" id="pet" name="pets" value='+pet+'>').appendTo( '#my');
	});
	$('.cancleX').click(function(){
			$('.votepage').hide();
	});
	$('.tabs_r').click(function(){
			$('.votepage').hide();
	});
	$('.tabs_l').click(function(){
			$('.votepage').hide();
	});
	
	$( "form" ).submit(function( event ) {
  		event.preventDefault();
  		var VoteInfo = Parse.Object.extend("VoteInfo");
		var voteinfo = new VoteInfo();
  		var VotePet = Parse.Object.extend("PetCount");
		var votepet = new VotePet();
  		var votename = myform.votename.value;
		var phone = myform.phone.value;  
		var reason = myform.reason.value;
		
		if(votename.length<1){
			alert("請輸入姓名");
		}
		else if( phone.length<1){
			alert("請輸入手機");
		}
		else if(phone.length<10){
			alert("手機號碼不足十碼");
		}
		else if(phone.length>10){
			alert("手機號碼超過十碼");
		}
		else if(phone.match(/\D+/)!=null){		
			alert("手機號碼格式錯誤，請輸入數字");
		}
		else if(phone.charAt(0)!=0 || phone.charAt(1)!=9){		
			alert("手機號碼格式錯誤");
		}
		else if(reason.length<10){
			alert("請輸入十字以上的原因");
		}
		else{
			var query = new Parse.Query(VoteInfo);
			query.equalTo("VotePhone", phone);
			query.find({
  			success: function(results) {
    		
    			if(results.length==0){
    				if(confirm("確認要投下這票嗎？")){
	    				if(pet=="1"){
							votepet.set("objectId", "kW99XDyIr9");
							votepet.save(null, {
				  			success: function(votepet) {
				    			votepet.increment("Pet1");
				    			votepet.save();
				  			}
							});
						}
						else if(pet=="2"){
							votepet.set("objectId", "kW99XDyIr9");
							votepet.save(null, {
				  			success: function(votepet) {
				    			votepet.increment("Pet2");
				    			votepet.save();
				  			}
							});
						}
						else if(pet=="3"){
							votepet.set("objectId", "kW99XDyIr9");
							votepet.save(null, {
				  			success: function(votepet) {
				    			votepet.increment("Pet3");
				    			votepet.save();
				  			}
							});
						}
						else if(pet=="4"){
							votepet.set("objectId", "kW99XDyIr9");
							votepet.save(null, {
				  			success: function(votepet) {
				    			votepet.increment("Pet4");
				    			votepet.save();
				  			}
							});
						}
						else if(pet=="5"){
							votepet.set("objectId", "kW99XDyIr9");
							votepet.save(null, {
				  			success: function(votepet) {
				    			votepet.increment("Pet5");
				    			votepet.save();
				  			}
							});
						}
						else if(pet=="6"){
							votepet.set("objectId", "kW99XDyIr9");
							votepet.save(null, {
				  			success: function(votepet) {
				    			votepet.increment("Pet6");
				    			votepet.save();
				  			}
							});
						}
						else if(pet=="7"){
							votepet.set("objectId", "kW99XDyIr9");
							votepet.save(null, {
				  			success: function(votepet) {
				    			votepet.increment("Pet7");
				    			votepet.save();
				  			}
							});
						}
						else if(pet=="8"){
							votepet.set("objectId", "kW99XDyIr9");
							votepet.save(null, {
				  			success: function(votepet) {
				    			votepet.increment("Pet8");
				    			votepet.save();
				  			}
							});
						}
						voteinfo.set("VoteName", votename); 
						voteinfo.set("VotePhone", phone);
						voteinfo.set("VoteReason", reason);
						voteinfo.set("VotePet", parseInt(pet));
						voteinfo.save(null, {
					  	success: function(voteinfo) {
					    // Execute any logic that should take place after the object is saved.
					    	alert("恭喜你完成投票囉！快來看看自己支持的萌寵有沒有上榜吧");
					    	location.reload();
					  	},
					  	error: function(voteinfo, error) {
					    // Execute any logic that should take place if the save fails.
					    // error is a Parse.Error with an error code and description.
					   		alert('Error: ' + error.description);
					  	}
						});					
						$('.votepage').hide();
					}
    			}else{   					
    				alert("此手機號碼已投過票囉!");
    			}
  			},	
 		 	error: function(error) {
    			alert("Error: " + error.code + " " + error.message);
  			}
			});
			
		}
		
	});

	var PetCount = Parse.Object.extend("PetCount");
	var query = new Parse.Query(PetCount);
	var sort=[];
	var win;
		query.get("kW99XDyIr9", {
 	 		success: function(petCount) {
 	 			var votes1 = petCount.get("Pet1");
 	 			$('#one_vote .counter').text(votes1);
 	 			sort[0]=votes1;
 	 			var path1=sort[0]*0.085;
				$("#one_pet img").animate({left:path1+"px"},10000);
 	 			
 	 			var votes2 = petCount.get("Pet2");
 	 			$('#two_vote .counter').text(votes2);
 	 			sort[1]=votes2;
 	 			var path2=sort[1]*0.085;
				$("#two_pet img").animate({left:path2+"px"},9000);
 	 			
 	 			var votes3 = petCount.get("Pet3");
 	 			$('#three_vote .counter').text(votes3);
 	 			sort[2]=votes3;
 	 			var path3=sort[2]*0.085;
				$("#three_pet img").animate({left:path3+"px"},8000);
 	 			
 	 			var votes4 = petCount.get("Pet4");
 	 			$('#four_vote .counter').text(votes4);
 	 			sort[3]=votes4;
 	 			var path4=sort[3]*0.085;
				$("#four_pet img").animate({left:path4+"px"},7000);
 	 			
 	 			var votes5 = petCount.get("Pet5");
 	 			$('#five_vote .counter').text(votes5);
 	 			sort[4]=votes5;
 	 			var path5=sort[4]*0.085;
				$("#five_pet img").animate({left:path5+"px"},6000);
 	 			
 	 			var votes6 = petCount.get("Pet6");
 				$('#six_vote .counter').text(votes6);
 				sort[5]=votes6;
 				var path6=sort[5]*0.085;
				$("#six_pet img").animate({left:path6+"px"},5000);
 	 			
 	 			var votes7 = petCount.get("Pet7");
 	 			$('#seven_vote .counter').text(votes7);
 	 			sort[6]=votes7;
 	 			var path7=sort[6]*0.085;
				$("#seven_pet img").animate({left:path7+"px"},4000);
 	 			
 	 			var votes8 = petCount.get("Pet8");
 	 			$('#eight_vote .counter').text(votes8); 	
 	 			sort[7]=votes8;
 	 			var path8=sort[7]*0.085;
				$("#eight_pet img").animate({left:path8+"px"},3000);

				sort.sort(function(a, b) {return a - b;});
				win=sort[7];
				if(win==votes1){
					$("#one_vote").css('background-image', 'url(images/gold.png)');
				}
				else if(win==votes2){
					$("#two_vote").css('background-image', 'url(images/gold.png)');
				}
				else if(win==votes3){
					$("#three_vote").css('background-image', 'url(images/gold.png)');
				}
				else if(win==votes4){
					$("#four_vote").css('background-image', 'url(images/gold.png)');
				}
				else if(win==votes5){
					$("#five_vote").css('background-image', 'url(images/gold.png)');
				}
				else if(win==votes6){
					$("#six_vote").css('background-image', 'url(images/gold.png)');
				}
				else if(win==votes7){
					$("#seven_vote").css('background-image', 'url(images/gold.png)');
				}
				else if(win==votes8){
					$("#eight_vote").css('background-image', 'url(images/gold.png)');
				}


				
    // The object was retrieved successfully.
  	 		},
  	 		error: function(petCount, error) {
  				alert("Error: " + error.code + " " + error.message);	
    // The object was not retrieved successfully.
    // error is a Parse.Error with an error code and description.
	  		}
		});
		
		
		//$("#two_vote").css('background-image', 'url(images/gold.png)');
	
	 	
	
})