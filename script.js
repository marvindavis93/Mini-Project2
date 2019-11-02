

window.onload = function(){
    
//Global area
var optimalIDs=[4,0,2,6,8,1,3,5,7];

var cols = document.getElementsByClassName("col");
var grid=[['','',''],['','',''],['','','']]

var btn = document.getElementById("reset");
btn.addEventListener("click", reset);
 
//Function declaration area
for(var i=0; i<cols.length;i++) {
    cols[i].addEventListener("click", userTurn);
    
}



function userTurn(evt) {
   var id = evt.currentTarget.id; 
   var row = Math.floor(id/3);
   var col = id % 3;
   if(grid[row][col] === '') {
        grid[row][col] = 'X';          
        evt.currentTarget.innerHTML = 'X';
        evt.currentTarget.style.fontSize = "500%";
        computerTurn();
   }
   
}
function computerTurn() {
    //randomMove();
    optimalMove();
}
function randomMove() {
    var done=false;
    for(var i=0;i<3 && !done;i++) {
        for(var k=0;k<3 && !done;k++) {
            if(grid[i][k] === '') {
                grid[i][k]='O';
                done = true;
                cols[i*3+k].innerHTML = 'O';
                cols[i*3+k].style.fontSize = "500%"; 
            }
        }
    }
}
function optimalMove() {
    var done=false;
    for(var i=0;i<optimalIDs.length && !done;i++) {
        var id = optimalIDs[i];
        var row = Math.floor(id/3);
        var col = id % 3;        
        if(grid[row][col] === '') {
            grid[row][col]='O';
            done = true;
            cols[row*3+col].innerHTML = 'O';
            cols[row*3+col].style.fontSize = "500%"; 
        }
      
    }
}
function reset() {
    for(var i=0;i<3 ;i++) {
        for(var k=0;k<3;k++) {
            grid[i][k] = '';
            cols[i*3+k].innerHTML = '';            
            }
        }
       
  } 

}



