$(document).ready(function(){

	var start = 0;
	var score = 0;
	var num = 1;
	var buttonArray = [];
	var playArray = [];
	var i = 1; 
	var switchu = 0;

	$(".ready").click(function(){
		switchu = 1;
	});

	$(".st").click(function(){
		start = 1 - start;
		createPattern();
		Game();
		//winCheck();
		//alert("your turn");
		//switchu = 1;
	});

	$(".s").click(function() {
		var x = $(".led").css("background-color");
		//console.log(x);
		if(x == "rgb(0, 255, 102)"){
			$(".led").css("background-color","red");
			$(".s").html("Strict");
		}else{
			$(".led").css("background-color","#00FF66");
			$(".s").html("Easy");
		}
	});


	function createPattern() {
		//$(".red").css("background-color","#922b21");
				//console.log("before switch");
				setTimeout(function(){
				 var x = Math.floor((Math.random() * 4) + 1);
				 switch(x){
				 	case 1:
				 		//console.log("inside switch");
				 		$(".red").click();
				 		$("button.red").css("background-color"," #e53935 ");
				 		//$(".red").css("background-color","#922b21");
				 		setTimeout(function(){
				 			$(".red").css("background-color","#922b21");	
				 		},500);
				 		if(i<num){
				 			createPattern();
				 			i++;
				 		}
				 		break;
				 	case 2:
				 		$(".blue").click();
				 		$("button.blue").css("background-color","#6600FF");
				 		setTimeout(function(){
				 			$(".blue").css("background-color","#2874a6");	
				 		},500);
				 		if(i<num){
				 			createPattern();
				 			i++;
				 		}
				 		break;
				 	case 3:
				 		$(".green").click();
				 		$("button.green").css("background-color","#00CC99");
				 		setTimeout(function(){
				 			$(".green").css("background-color","#1e8449");	
				 		},500);
				 		if(i<num){
				 			createPattern();
				 			i++;
				 		}
				 		break;
				 	case 4:
				 		$(".yellow").click();
				 		$("button.yellow").css("background-color","#00CC99");
				 		setTimeout(function(){
				 			$(".yellow").css("background-color","#b7950b");	
				 		},500);
				 		if(i<num){
				 			createPattern();
				 			i++;
				 		}
				 		break;
				 }


				}, 1000);

		}


	function Game() {

	if(start === 1){

	$(".b").click(function(){
		//alert($(this).html());
		pushArray($(this).html());
		console.log(buttonArray);
		console.log(playArray);
		winCheck();
		//alert("saf");

	});
		function pushArray(col) {
			var audioElement = document.createElement('audio');
			if(col === "Red"){
				if (switchu == 0) {
					//alert("here");
				buttonArray.push(1);
			}else{
				playArray.push(1);
			}
				audioElement.setAttribute('src','https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
				//$.get();
				audioElement.addEventListener("loadeddata",function(){
					audioElement.play();
				},true);
			}
			else if (col === "Blue") {
				if (switchu == 0) {
				buttonArray.push(2);
			}else{
				playArray.push(2);
			}
				audioElement.setAttribute('src','https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
				//$.get();
				audioElement.addEventListener("loadeddata",function(){
					audioElement.play();
				},true);
			}
			else if (col === "Green") {
				if (switchu == 0) {
				buttonArray.push(3);
			}else{
				playArray.push(3);
			}
				audioElement.setAttribute('src','https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
				//$.get();
				audioElement.addEventListener("loadeddata",function(){
					audioElement.play();
				},true);
			}
			else if (col === "Yellow") {
				if (switchu == 0) {
				buttonArray.push(4);
			}else{
				playArray.push(4);
			}
				audioElement.setAttribute('src','https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
				//$.get();
				audioElement.addEventListener("loadeddata",function(){
					audioElement.play();
				},true);
			}
		}
	}
}
		function winCheck() {
			if(num == 20){
				alert("You win");
				resetGame();
			}
		else {
			console.log("ef");
			scoreUpdate();
			//location.reload();
			}
		}

		function scoreUpdate() {
			if(buttonArray.length == playArray.length)
			{
				//console.log("test1");
				for (var j=0;j<buttonArray.length;j++) {
				//	console.log("test 2");
						if(buttonArray[j] == playArray[j]){
				//			console.log("test 3");
							$("h1:last").html(num);
							num = num+1;
							switchu = 0;
							createPattern();
							//Game();
						}
						else
						{
							console.log("test 4");
							if($(".s").html() === "strict"){
								alert("you loose");
								resetGame();
							}
							else{
								console.log("test  5");
								alert("wrong button");
								playArray.pop();
								console.log(playArray);
							}
						}
					}
			}

		}



	


});
