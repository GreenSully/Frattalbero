var animate = /*window.requestAnimationFrame ||
window.webkitRequestAnimationFrame ||
window.mozRequestAnimationFrame ||*/
function(callback) { window.setTimeout(callback, 1000/30) };
var canvas=document.createElement ("canvas");
var ctx;
ctx=canvas.getContext("2d");

var width=1000;
var height=800;
canvas.width=width;
canvas.height=height;



var linee=Array();
var index=0;
var size=1;
linee[index]=new line(500,800,90,200);

var step = function(){
	
	linee[index].draw();
	linee[size++]=new line(linee[index].nx,linee[index].ny,linee[index].angle-45,linee[index].dim*0.7);
	
	linee[size++]=new line(linee[index].nx,linee[index].ny,linee[index].angle+45,linee[index].dim*0.7);
	
	index++;
	
	if(index>1000){
		return ;
	}
animate(step);
};

function line(x,y,angle,dim){
	this.x=x;
	this.y=y;
	this.nx;
	this.ny;
	this.angle=angle;
	this.dim=dim;
	
	this.draw=function(){
		this.nx=this.x+Math.cos(angle/180*Math.PI)*dim;
		this.ny=this.y-Math.sin(angle/180*Math.PI)*dim
		ctx.beginPath();
		ctx.moveTo(this.x,this.y);
		ctx.lineTo(this.nx,this.ny);
		ctx.lineWidth=this.dim;
		if(this.dim>40){
			ctx.strokeStyle="#6d4c09";
		}
		else{
			ctx.strokeStyle="green";
		}
		ctx.stroke();
	};
}


window.onload=function(){
document.body.appendChild(canvas);
animate(step);
};
