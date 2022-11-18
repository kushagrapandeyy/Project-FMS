function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
	background_color = color(255);
	board_color = color(95, 95, 155);
	ball_color = color(0);
	font_color = color(0);

	board_center_x = width*0.5;
	board_center_y = height*0.5 + 128;

	board_width = 250;
	board_height = 20;

	board_rotation_speed = PI / 254; // rotation per tick
	
	ball_radius = 15;

	score_per_tick = 1/30;
	multiplier_increase_stack_limit = 0.1;
	multiplier_increase_per_tick = 0.01/25;

	game_setup();
}


function game_setup() {
	board_angle = random(PI / 128, PI/64);
	if (random(0, 1) < 0.5) {
		board_angle = -board_angle;
	}

	ball_pos = 0.5;
	ball_speed = 0;

	multiplier = 1;
	multiplier_increase_stack = 0;

	score = 0;
	
	ticks = 0;

	game_over = false;
}
var background_color;
var board_color;
var ball_color;
var font_color;

var board_angle;
var board_rotation_speed;
var board_width;
var board_height;
var board_center_x;
var board_center_y;
var ball_pos;
var ball_speed;
var ball_radius;

var ticks;

var multiplier;
var score;
var score_per_tick;

var multiplier_increase_per_tick;

var multiplier_increase_stack;
var multiplier_increase_stack_limit;

var top_score = 0;

var game_over = false;

function tick() {
	if (mouseIsPressed && (mouseX < width/2) || keyIsDown(LEFT_ARROW)){
		board_angle -= board_rotation_speed;
	} else if (mouseIsPressed && (mouseX >= width/2) || keyIsDown(RIGHT_ARROW)) {
		board_angle += board_rotation_speed;
	}

	ball_speed += map(board_angle, -PI/2, PI/2, -0.001 * multiplier, 0.001 * multiplier);
	ball_pos += ball_speed;
	
	if ((ball_pos <= 0) || (ball_pos >= 1)) {
		game_over = true;
	}

	var board_bias = (ball_pos - 0.5) * PI / 1023;
	board_angle += board_bias;

	multiplier_increase_stack += multiplier_increase_per_tick;
	if (multiplier_increase_stack >= multiplier_increase_stack_limit) {
		multiplier += multiplier_increase_stack;
		multiplier_increase_stack -= multiplier_increase_stack_limit;
	}

	score += score_per_tick * multiplier;

	ticks += 1;

	top_score = max(score, top_score);
}

function draw() {
	if (!game_over) {
		tick();
	}
	background(background_color);

	colorMode(HSB);
	var board_color2 = color(ticks%360, 39, 61);
	colorMode(RGB);
	fill(board_color2);
	noStroke();
	rectMode(CENTER);
	push();
	translate(board_center_x, board_center_y);
	rotate(board_angle);
	rect(0, 0, board_width, board_height);

	fill(ball_color);
	translate(-board_width/2, -(board_height/2 + ball_radius/2));
	ellipse(ball_pos * board_width, 0, ball_radius, ball_radius);


	pop();

	fill(font_color);
	textFont("Courier New", 84);
	textAlign(CENTER);
	text(round(score).toString(), width/2, height/2);
	textFont("Courier New", 24);
	//text("Multiplier: " + (round(10 * multiplier)/10).toString() + "x", width/2, height/2 + 48);
	text("Top score: " + round(top_score).toString(), width/2, height/2 + 72);
}

function mousePressed() {
	if (game_over) {
		game_setup();
	}
}
