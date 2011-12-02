function Game() {
	ISubject.call(this);
	this.Start = function() {
		this.notify(this, "start");
	}
}
function GameRender() {
	IObserver.call(this);
}
GameRender.prototype.update = function(observer, msg) {
	var canvas = $('#canvasMain');
	var ctx = canvas[0].getContext("2d");

	ctx.fillStyle = "rgb(200,0,0)";
	ctx.fillRect(10, 10, 55, 50);

	ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
	ctx.fillRect(30, 30, 55, 50)
}
Game.prototype = new ISubject();
$(function() {
	window.Game = new Game();
	window.Game.addObserver(new GameRender());
	window.Game.Start();
});