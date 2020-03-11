// Dynamically render page!!!
// Alert box or something that displays who's turn / who won / draw
// Actual game board with buttons that contain the "X's and O's" that can't be overwritten.  Buttons will be event listeners - onclick will be attached to the div itself on the cols.
// Declare Variables
// Draw board with javascript / not html

//variables
var clicks = 0;
var player = ["", "X", "O"];
var board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var turn = 0;
var winarr = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [6, 4, 2]];
const header = document.createElement("h1");

// start crying here!!! Ask about replacing innerHtml with "X or O" or can an onclick / event listener be added by id to each column?????
// Main Function

function build() {
  makeTable();
}

//button button who's got the button? After I get this array straightened out.
function reStart() {
  clicks = 0;
  turn = 0;
  //clear boar array
  for (i = 0; i < board.length; ++i)
    board[i] = 0;
  //clear innerHTML too
  blah.innerHTML = "";
  //remake grid
  makeTable();

}

//Make table
function makeTable() {
  //appends all the header stuff in - doesn't have to be in here
  header.id = "headId";
  header.innerText = "Tic-Tac-Toe";
  head.appendChild(header);

  // Makes the grid
  var k = 0;
  for (var i = 0; i < 3; i++) {
    var row = document.createElement("div");
    row.setAttribute('id', 'row' + i);
    row.className = 'row';

    for (var j = 0; j < 3; j++) {
      let col = document.createElement("div");
      col.setAttribute('id', k);
      col.addEventListener("click", tileClick);
      row.appendChild(col);
      col.className = "tik col-sm-2 text-center p-5 border border-dark bg-primary text-white";
      k++;

    }
    var container = document.getElementsByClassName("container")[0];
    container.setAttribute('id', 'blah');
    container.appendChild(row);
  }
}
//onclick for game tiles

function tileClick(e) {
  // set state, board and turn
  board[this.id] = Number(turn) + 1; // 0, 1
  // update the view
  var c = document.getElementById(this.id);
  if (turn) {
    c.innerHTML = '0';
  } else {
    c.innerHTML = 'X';
  }
  // set turn
  turn = !turn;
  //disable the ability to reclick tile - remove event listener
  c.removeEventListener('click', tileClick)
  clicks++;
  checkWin();
}

//checks to see if winner is achieved 
function checkWin() {
  // variables for counting, two loops to go through win array, count to 3 and / or 6 to see if there is a win.  Or 9 for a draw.  
  let win = 0;
  for (i = 0; i < winarr.length; i++) {
    var total = 0;
    for (j = 0; j < winarr[i].length; j++) {
      var pos = winarr[i][j];
      var val = board[pos];
      if (val == 0) {
        break;
      } else {
        total += val;
        if (j == 2 && total == 3) {
          win = 1;
        }
        if (j == 2 && total == 6) {
          win = 2;
        }
      }
    }
    if (win) {
      alert(player[win] + " won!!!");
      //console.log(player[win] + " won");
      break;
    } else {
      if (clicks == 9) {
        alert("It's a tie!  Please try again!?");
        //console.log("tie");
      }
    }
  }
  // how do I check for wins?
  // loop thru the wins
  // check each index of board by looping thru wins[i] -- a nested array
  // 
}
build();




