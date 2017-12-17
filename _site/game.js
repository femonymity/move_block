const TILE = 32
let cvs = document.getElementById("canvas");
let context = cvs.getContext("2d");

//position to be controlled by key input
let block = {
  x: 0,
  y: 0,
};

//for grabbing key input
document.addEventListener('keydown', function(event) {
  if(event.keyCode == 37) { //left
    block.x -= TILE;
  } else if(event.keyCode == 38) { //up
    block.y -= TILE;
  } else if(event.keyCode == 39) { //right
    block.x += TILE;
  } else if(event.keyCode == 40) { //down
    block.y += TILE;
  }
});

function drawBlock(x, y) {
  context.beginPath();
  context.fillStyle = '#faa';
  context.fillRect(x, y, TILE, TILE);
};

function loop() {
  context.save();
  context.clearRect(0, 0, 300, 300);

  drawBlock(block.x, block.y);
  
  context.restore();
  window.requestAnimationFrame(loop);

};
//animation - call this every split second!
window.requestAnimationFrame(loop);


// img = document.getElementsByName('images/gamecat.png')
// context.drawImage(img, 10, 10);
