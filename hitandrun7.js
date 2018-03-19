// Snake variables
var xpos =200;
var y =400;
var xspeed=5;
var yspeed=7;
var score1 =0;
var score2 =0;
var imgsnake;

// Distance between snake and players
var pos;
var poll;
var pull;

//player 1 variables
var player1;
var xspeed2w1=10;
var xspeed2w2=10;
var yspeed2w1=10;
var yspeed2w2=10;
var xpos1=300;
var y1=200;


//Player 2 variables
var player2;
var xspeed1w1=10;
var xspeed1w2=10;
var yspeed1w1=10;
var yspeed1w2=10;
var xpos2=100;
var y2 =100;	

//food variables
var xfood=200;
var yfood=150;

// Distance between food and and players variables
var pos1;
var pos2;
var possnake;

function preload(){
	imgsnake=loadImage("https://3.bp.blogspot.com/--P2PIRtCq60/Wqtzf_I_EJI/AAAAAAAAFgE/Er5-XK8BnYYBWeY0Pl39aQDlwCODtKEQgCLcBGAs/s1600/snake.png");
	player1=loadImage("https://2.bp.blogspot.com/-qu6SGGsZgtI/Wqt4tthNQsI/AAAAAAAAFgU/qiwBp2UsokMLwk2SoFeo6tmBsyMWzD3swCLcBGAs/s1600/player4.png");
	player2=loadImage("https://2.bp.blogspot.com/-q2HsLq-4sEw/Wqt4wXQ1gtI/AAAAAAAAFgY/1x63X6Jca400nPzhfi7EljSERVNzz5MTwCLcBGAs/s1600/player3.png");
	}
function setup(){
	createCanvas(700,700);
        }

function draw(){
	clear();

//score player 1
	fill(255);
	background(100,200,200);
	textSize(30);
	text("player1: "+score1,10,30);

//score player 2
	fill(255);	
	textSize(30);
	text("player2: "+score2,540,30);
	
//food
	fill(0);
	ellipse(xfood,yfood,50,50);

// Distance between food and "snake and players"
	pos1=dist(xpos1,y1,xfood,yfood);
	pos2=dist(xpos2,y2,xfood,yfood);
	possnake=dist(xpos,y,xfood,yfood);

//snake and player1 distances btwn	
	poll=dist(xpos1,y1,xpos,y);

//snake and player1 distances btwn
	pull=dist(xpos2,y2,xpos,y);

//player 1 position & movement using buttons
	image(player1,xpos1,y1)
	if(keyIsDown(RIGHT_ARROW)){
	xpos1=xpos1+xspeed1w1;
	}
	if(keyIsDown(LEFT_ARROW)){
	xpos1=xpos1-xspeed1w2;
	}
	if(keyIsDown(UP_ARROW)){
	y1=y1-yspeed1w1;
	}
	if(keyIsDown(DOWN_ARROW)){
	y1=y1+yspeed1w2;
	}
// checking for walls for player 1
	if(xpos1>=630){
	xspeed1w1=0;
	} else{
	xspeed1w1=10;
	}
	if(xpos1<=0){
	xspeed1w2=0;
	} else{
	xspeed1w2=10;
	}
	if(y1<=0){
	yspeed1w1=0;
	} else{
	yspeed1w1=10;
	}
	if(y1>=572){
	yspeed1w2=0;
	} else{
	yspeed1w2=10;
	}

//player 2 position & movement using buttons A D W X
	image(player2,xpos2,y2);
	if(keyIsDown(68)){
	xpos2=xpos2+xspeed2w1;
	}
	if(keyIsDown(65)){
	xpos2=xpos2-xspeed2w2;
	}
	if(keyIsDown(87)){
	y2=y2-yspeed2w1;
	}
	if(keyIsDown(88)){
	y2=y2+yspeed2w2;
	}
// checking for walls for player 2
	if(xpos2>=630){
	xspeed2w1=0;
	} else{
	xspeed2w1=10;
	}
	if(xpos2<=0){
	xspeed2w2=0;
	} else{
	xspeed2w2=10;
	}
	if(y2<=0){
	yspeed2w1=0;
	} else{
	yspeed2w1=10;
	}
	if(y2>=572){
	yspeed2w2=0;
	} else{
	yspeed2w2=10;
	}
	
//snake position and movement
	image(imgsnake,xpos,y);
	xpos=xpos+xspeed;
	y=y+yspeed;
//move in x-axis
	if (xpos>=700){
		xspeed=xspeed*-1;
	}
	if(xpos<=0){
		xspeed=xspeed *-1;
	}
//move in y axis
	if (y<=0){
		yspeed=yspeed *-1;
	}
	if(y>=572){
		yspeed=yspeed *-1;
	}

//Player 1 scoring 
	if (pos<=30){
		score1 =score1+1;
		xpos1=100;
	}

//player 2 scoring
	if (pos<=30){
		score2 =score2+1;
		xpos1=100;
	}
//game ending/over
//snake touching player 1 or player 2 
	if (poll<=30 || pull<=30){
	textSize(100);
	text("game over",100,200);
	textSize(50);
	text("Player1 "+"\n "+ score1,100,400);
	textSize(50);
	text("Player2 "+"\n "+ score2,400,400);
	

// stopping  snake  
	xspeed=0;
	yspeed=0;

//stopping player1
	xspeed1w1=0;
	xspeed1w2=0;
	yspeed1w1=0;
	yspeed1w2=0;

//stopping player2
	xspeed2w1=0;
	xspeed2w2=0;
	yspeed2w1=0;
	yspeed2w2=0;
	}
//Eating food item
	if (pos1<=20){
	background(0);
	var rx = random(650);
	score1 =score1+1;
	xfood=rx;
	var ry = random(650);
	yfood=ry;
	}
	if (pos2<=20){
	background(0);
	score2 =score2+1;
	var rx = random(650);
	xfood=rx;
	var ry = random(650);
	yfood=ry;
	}
	if (possnake<=20){
	background(0);
	var rx = random(650);
	xfood=rx;
	var ry = random(650);
	yfood=ry;
	}

}

