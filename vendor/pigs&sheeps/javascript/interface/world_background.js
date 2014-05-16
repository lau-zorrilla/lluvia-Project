World.prototype.draw_background = function(ctx){

	//cielo
	ctx.fillStyle = '#B5CDFF';
	ctx.fillRect (0, 0, 852, 502);


	// sol
	ctx.beginPath();
	ctx.arc(50,40,30,0,Math.PI*2, true);
	ctx.fillStyle="yellow";
	ctx.shadowBlur=80;
	ctx.shadowOffsetX=-20;
	ctx.shadowOffsetY=-10;
	ctx.shadowColor="yellow"
	ctx.fill();


	//nubes
	ctx.beginPath();
	ctx.arc(800,100,41,0,Math.PI*2, true);
	ctx.fillStyle = 'white';
	ctx.fill();
	ctx.beginPath();
	ctx.arc(140,100,62,0,Math.PI*2, true);
	ctx.fillStyle = 'white';
	ctx.fill();
	ctx.arc(200,100,62,0,Math.PI*2, true);
	ctx.fillStyle = 'white';
	ctx.fill();
	ctx.beginPath();
	ctx.arc(300,100,62,0,Math.PI*2, true);
	ctx.fillStyle = 'white';
	ctx.fill();
	ctx.beginPath();
	ctx.arc(350,100,80,0,Math.PI*2, true);
	ctx.fillStyle = 'white';
	ctx.fill();
	ctx.beginPath();
	ctx.arc(455,100,46,0,Math.PI*2, true);
	ctx.fillStyle = 'white';
	ctx.fill();
	ctx.beginPath();
	ctx.arc(500,100,30,0,Math.PI*2, true);
	ctx.fillStyle = 'white';
	ctx.fill();
	ctx.beginPath();
	ctx.arc(573,100,62,0,Math.PI*2, true);
	ctx.fillStyle = 'white';
	ctx.fill();
	ctx.beginPath();
	ctx.arc(640,100,25,0,Math.PI*2, true);
	ctx.fillStyle = 'white';
	ctx.fill();
	ctx.beginPath();
	ctx.arc(700,100,44,0,Math.PI*2, true);
	ctx.fillStyle = 'white';
	ctx.fill();
	ctx.beginPath();
	ctx.arc(746,100,23,0,Math.PI*2, true);
	ctx.fillStyle = 'white';
	ctx.fill();
	ctx.beginPath();
	ctx.arc(850,120,45,0,Math.PI*2, true);
	ctx.fillStyle = 'white';
	ctx.fill();


	//cesped
	ctx.beginPath();
	var gr=ctx.createLinearGradient(0,150,0,280);
	gr.addColorStop(0,"#6B8E23");
	gr.addColorStop(1,"#9ACD32");
	ctx.fillStyle=gr;
	ctx.fillRect(0,120,852, 502);
	ctx.fill();


/////// corral  //////

	/*horizontal bar top*/
	ctx.beginPath();
	ctx.moveTo(832,123);
	ctx.lineTo(618,123);
	ctx.strokeStyle = "brown";
	ctx.lineWidth=4;
	ctx.stroke();

	/*vertical bar left*/
	ctx.beginPath();
	ctx.moveTo(550,170);
	ctx.lineTo(618,123);
	ctx.strokeStyle = "brown";
	ctx.lineWidth=4;
	ctx.stroke();

    /*vertical bar right*/
	//32
	ctx.beginPath();
	ctx.moveTo(790,170);
	ctx.lineTo(832,123);
	ctx.strokeStyle = "brown";
	ctx.lineWidth=4;
	ctx.stroke();

    /*horizontal bar right*/
	ctx.beginPath();
	ctx.moveTo(732,170);
	ctx.lineTo(790,170);
	ctx.strokeStyle = "brown";
	ctx.lineWidth=4;
	ctx.stroke();

    /*horizontal bar left*/
	ctx.beginPath();
	ctx.moveTo(550,170);
	ctx.lineTo(618,170);
	ctx.strokeStyle = "brown";
	ctx.lineWidth=4;
	ctx.stroke();

/*Distance between doors: 104*/

/*short lines bottom left*/
var e = 632

for (var i = 0; i < 5; i++) {
	e -= 16
    ctx.beginPath();
    ctx.moveTo(e,170);
    ctx.lineTo(e,190);
    ctx.strokeStyle = "brown";
    ctx.lineWidth=3;
    ctx.stroke();
};

/*short lines bottom right*/
var f = 805

for (var i = 0; i < 4; i++) {
	f -= 17
    ctx.beginPath();
    ctx.moveTo(f,170);
    ctx.lineTo(f,190);f
    ctx.strokeStyle = "brown";
    ctx.lineWidth=3;
    ctx.stroke();
};

/*short lines top*/
var x = 605
for(var i=0; i<15; i++){
	x+=15
   ctx.beginPath();
   ctx.moveTo(x,142);
   ctx.lineTo(x,125);
   ctx.strokeStyle = "brown";
   ctx.lineWidth=3;
   ctx.stroke();
   }


/*Short lines left*/
var a = 618
var b = 120

for(var i=0; i<5; i++){
	a -= 13
	b += 10
    ctx.beginPath();
    ctx.moveTo(a,(b + 20));
    ctx.lineTo(a,b);
    ctx.strokeStyle = "brown";
    ctx.lineWidth=3;
    ctx.stroke();
}


/*short lines right*/
var h = 832
var k = 123

for (var i = 0; i < 4; i++) {
	h -= 11
	k += 12
    ctx.beginPath();
    ctx.moveTo(h,(k + 20));
    ctx.lineTo(h,k);
    ctx.strokeStyle = "brown";
    ctx.lineWidth=3;
    ctx.stroke();
};

///////////// fin corral  ////////////

	//arbol
	ctx.beginPath();
	ctx.moveTo(52,120);
	ctx.lineTo(52,140);
	ctx.strokeStyle = "brown";
	ctx.lineWidth=5;
	ctx.shadowColor="black"
	ctx.shadowBlur=60;
	ctx.shadowOffsetX=10;
	ctx.shadowOffsetY=10;
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(50,110,10,0,Math.PI*2, true);
	ctx.fillStyle = 'green';
	ctx.fill();

	ctx.beginPath();
	ctx.arc(50,100,5,0,Math.PI*2, true);
	ctx.fillStyle = 'green';
	ctx.fill();

	ctx.beginPath();
	ctx.arc(60,105,8,0,Math.PI*2, true);
	ctx.fillStyle = 'green';
	ctx.fill();

	ctx.beginPath();
	ctx.arc(60,115,6,0,Math.PI*2, true);
	ctx.fillStyle = 'green';
	ctx.fill();

	ctx.beginPath();
	ctx.arc(55,120,4,0,Math.PI*2, true);
	ctx.fillStyle = 'green';
	ctx.fill();

	ctx.beginPath();
	ctx.arc(45,115,7,0,Math.PI*2, true);
	ctx.fillStyle = 'green';
	ctx.fill();

	ctx.beginPath();
	ctx.arc(45,105,5,0,Math.PI*2, true);
	ctx.fillStyle = 'green';
	ctx.fill();

	//caseta
	ctx.beginPath();
	ctx.moveTo(150,140);
	ctx.lineTo(150,180);
	ctx.lineTo(200,175);
	ctx.lineTo(200,135);
	ctx.lineTo(147,140);
	ctx.lineTo(175,100);
	ctx.lineTo(206,136);
	ctx.fillStyle = '#d2b681';
	ctx.strokeStyle = "#924f3a";
	ctx.shadowBlur=50;
	ctx.shadowOffsetX=35;
	ctx.shadowOffsetY=20;
	ctx.fill();
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(176,100);
	ctx.lineTo(176,140);
	ctx.strokeStyle = "#924f3a";
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(159,119);
	ctx.lineTo(176,139);
	ctx.strokeStyle = "#924f3a";
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(193,119);
	ctx.lineTo(176,138);
	ctx.strokeStyle = "#924f3a";
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(175,100);
	ctx.lineTo(149,80);
	ctx.lineTo(120,118);
	ctx.lineTo(145,142);
	ctx.fillStyle = '#924f3a';
	ctx.strokeStyle = "#924f3a";
	ctx.fill();
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(150,180);
	ctx.lineTo(125,145);
	ctx.lineTo(125,120);
	ctx.lineTo(149,142);
	ctx.lineTo(150,180);
	ctx.fillStyle = '#d2b681';
	ctx.strokeStyle = "#924f3a";
	ctx.fill();
	ctx.stroke();

	//puerta casa
	ctx.beginPath();
	ctx.moveTo(180,179);
	ctx.lineTo(180,160);
	ctx.lineTo(174,160);
	ctx.lineTo(174,180);
	ctx.fillStyle = '#2d2c20';
	ctx.strokeStyle = "#2d2c20";
	ctx.fill();
	ctx.stroke();

	//ventana
	ctx.beginPath();
	ctx.moveTo(169,146);
	ctx.lineTo(184,145);
	ctx.lineWidth=9;
	ctx.strokeStyle = "#2d2c20";
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(176,149,5,0,Math.PI, true);
	ctx.fillStyle = '#f3c627';
	ctx.fill();


	//arbol
	ctx.beginPath();
	ctx.moveTo(322,130);
	ctx.lineTo(322,150);
	ctx.strokeStyle = "brown";
	ctx.lineWidth=5;
	ctx.stroke();


	ctx.beginPath();
	ctx.arc(320,120,10,0,Math.PI*2, true);
	ctx.fillStyle = 'green';
	ctx.fill();

	ctx.beginPath();
	ctx.arc(320,110,5,0,Math.PI*2, true);
	ctx.fillStyle = 'green';
	ctx.fill();

	ctx.beginPath();
	ctx.arc(330,115,8,0,Math.PI*2, true);
	ctx.fillStyle = 'green';
	ctx.fill();

	ctx.beginPath();
	ctx.arc(330,125,6,0,Math.PI*2, true);
	ctx.fillStyle = 'green';
	ctx.fill();

	ctx.beginPath();
	ctx.arc(325,130,4,0,Math.PI*2, true);
	ctx.fillStyle = 'green';
	ctx.fill();

	ctx.beginPath();
	ctx.arc(315,125,7,0,Math.PI*2, true);
	ctx.fillStyle = 'green';
	ctx.fill();

	ctx.beginPath();
	ctx.arc(315,115,5,0,Math.PI*2, true);
	ctx.fillStyle = 'green';
	ctx.fill();

	//arbusto
	ctx.beginPath();
	ctx.arc(280,140,8,0,Math.PI*2, true);
	ctx.fillStyle = '#458b00';
	ctx.shadowBlur=20;
	ctx.shadowOffsetX=10;
	ctx.shadowOffsetY=10;
	ctx.fill();

	ctx.beginPath();
	ctx.arc(280,130,4,0,Math.PI*2, true);
	ctx.fillStyle = '#458b00';
	ctx.fill();

	ctx.beginPath();
	ctx.arc(290,135,9,0,Math.PI*2, true);
	ctx.fillStyle = '#458b00';
	ctx.fill();

	ctx.beginPath();
	ctx.arc(290,145,5,0,Math.PI*2, true);
	ctx.fillStyle = '#458b00';
	ctx.fill();

	ctx.beginPath();
	ctx.arc(285,150,3,0,Math.PI*2, true);
	ctx.fillStyle = '#458b00';
	ctx.fill();

	ctx.beginPath();
	ctx.arc(275,145,8,0,Math.PI*2, true);
	ctx.fillStyle = '#458b00';
	ctx.fill();

	ctx.beginPath();
	ctx.arc(275,135,6,0,Math.PI*2, true);
	ctx.fillStyle = '#458b00';
	ctx.fill();

	//arbusto

	ctx.beginPath();
	ctx.arc(300,143,8,0,Math.PI*2, true);
	ctx.fillStyle = '#458b00';
	ctx.fill();

	ctx.beginPath();
	ctx.arc(300,133,4,0,Math.PI*2, true);
	ctx.fillStyle = '#458b00';
	ctx.fill();

	ctx.beginPath();
	ctx.arc(310,138,9,0,Math.PI*2, true);
	ctx.fillStyle = '#458b00';
	ctx.fill();

	ctx.beginPath();
	ctx.arc(310,148,5,0,Math.PI*2, true);
	ctx.fillStyle = '#458b00';
	ctx.fill();

	ctx.beginPath();
	ctx.arc(305,153,3,0,Math.PI*2, true);
	ctx.fillStyle = '#458b00';
	ctx.fill();

	ctx.beginPath();
	ctx.arc(295,148,8,0,Math.PI*2, true);
	ctx.fillStyle = '#458b00';
	ctx.fill();

	ctx.beginPath();
	ctx.arc(295,138,6,0,Math.PI*2, true);
	ctx.fillStyle = '#458b00';
	ctx.fill();

	//arbusto

	ctx.beginPath();
	ctx.arc(360,145,8,0,Math.PI*2, true);
	ctx.fillStyle = '#458b00';
	ctx.fill();

	ctx.beginPath();
	ctx.arc(360,135,4,0,Math.PI*2, true);
	ctx.fillStyle = '#458b00';
	ctx.fill();

	ctx.beginPath();
	ctx.arc(370,140,9,0,Math.PI*2, true);
	ctx.fillStyle = '#458b00';
	ctx.fill();

	ctx.beginPath();
	ctx.arc(370,150,5,0,Math.PI*2, true);
	ctx.fillStyle = '#458b00';
	ctx.fill();

	ctx.beginPath();
	ctx.arc(365,155,3,0,Math.PI*2, true);
	ctx.fillStyle = '#458b00';
	ctx.fill();

	ctx.beginPath();
	ctx.arc(355,150,8,0,Math.PI*2, true);
	ctx.fillStyle = '#458b00';
	ctx.fill();

	ctx.beginPath();
	ctx.arc(355,140,6,0,Math.PI*2, true);
	ctx.fillStyle = '#458b00';
	ctx.fill();

	// arbusto bajo

	ctx.beginPath();
	ctx.arc(60,470,30,0,Math.PI*2, true);
	ctx.fillStyle='#33D633';
	ctx.strokeStyle = "#33D633";
	ctx.lineWidth=1;
	ctx.fill();
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(80,450,30,0,Math.PI*2, true);
	ctx.fill();
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(50,430,30,0,Math.PI*2, true);
	ctx.fill();
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(30,470,30,0,Math.PI*2, true);
	ctx.fill();
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(60,470,30,0,Math.PI*2, true);
	ctx.fill();
	ctx.stroke();
	// frutos
	ctx.beginPath();
	ctx.arc(60,470,3,0,Math.PI*2, true);
	ctx.fillStyle='#FF0000';
	ctx.fill();
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(65,478,3,0,Math.PI*2, true);
	ctx.fillStyle='#FF0066';
	ctx.fill();
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(40,470,3,0,Math.PI*2, true);
	ctx.fillStyle='#FF0000';
	ctx.fill();
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(30,450,3,0,Math.PI*2, true);
	ctx.fillStyle='#FF0000';
	ctx.fill();
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(25,420,3,0,Math.PI*2, true);
	ctx.fillStyle='#FF0066';
	ctx.fill();
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(43,420,3,0,Math.PI*2, true);
	ctx.fillStyle='#FF0000';
	ctx.fill();
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(43,440,3,0,Math.PI*2, true);
	ctx.fillStyle='#FF0000';
	ctx.fill();
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(60,445,3,0,Math.PI*2, true);
	ctx.fillStyle='#FF0066';
	ctx.fill();
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(95,445,3,0,Math.PI*2, true);
	ctx.fillStyle='#FF0000';
	ctx.fill();
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(15,460,3,0,Math.PI*2, true);
	ctx.fillStyle='#FF0000';
	ctx.fill();
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(15,480,3,0,Math.PI*2, true);
	ctx.fillStyle='#FF0066';
	ctx.fill();
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(70,420,3,0,Math.PI*2, true);
	ctx.fillStyle='#FF0000';
	ctx.fill();
	ctx.stroke();

	ctx.shadowBlur=20;
	ctx.shadowOffsetX=25;
	ctx.shadowOffsetY=0;


	/*
	   ctx.beginPath();
	   ctx.moveTo(570,260);
	   ctx.lineTo(570,210);
	   ctx.strokeStyle = "white";
	   ctx.lineWidth=5;
	   ctx.stroke();

	   ctx.beginPath();
	   ctx.moveTo(575,215);
	   ctx.lineTo(525,200);
	   ctx.strokeStyle = "white";
	   ctx.lineWidth=5;
	   ctx.stroke();
	   */

	// arbusto
	/*
	   ctx.beginPath();
	   ctx.arc(300,300,62,0,Math.PI*2, true);
	   ctx.fillStyle = 'white';
	   ctx.fill();
	   */
}
