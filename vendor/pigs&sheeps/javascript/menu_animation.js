function change_image(){
    document.getElementById('menu_img').src="images/sheep2.png"
}

function first_image(){
    document.getElementById('menu_img').src="images/sheep1.png"
}

function countdown(device){	
	document.getElementById("timer").style.fontWeight ="bold"
	document.getElementById("timer").style.color="#996842" //inicializa color de fuente

	device.clock = new Clock(device, 120) // reloj de 2 minutos

    timer = setInterval( // cada segundo se ejecuta la funcion
	
	function(){
		if(device.clock.remaining_time <= 10)
			document.getElementById("timer").style.color="red" //cambia color de fuente

		document.getElementById("timer").innerHTML=device.clock.get_string() //escribe en el div "timer"
		
		if (device.clock.running == false)
			clearInterval(timer) // detiene setInterval
	}	
	,1000);

	
   /* sec =0;
    min =2;
    seconds = document.getElementById("seconds");
    minutes = document.getElementById("minutes");

    var timer = setInterval(
	function(){
	if (minutes.innerHTML=="0" && seconds.innerHTML=="01"){
	    clearInterval(timer);
	    seconds.innerHTML="00"
	    device.gameover_pig();
	}
	else{
	    if(min >=0 && sec<=59){
		if(sec==0){
		    sec=59;
		    min--;
		    minutes.innerHTML = min;

		}
		if(min==0 && sec<=9){
		    seconds.style.color="red";
		    minutes.style.color="red";
		    seconds.innerHTML =  "0" + sec;

		}
		else{
		    if(sec>=10)
			seconds.innerHTML =  sec;
		    else
			seconds.innerHTML = "0" + sec;
		}
		sec--;
	    }
	}
    }
	,1500);*/


}
