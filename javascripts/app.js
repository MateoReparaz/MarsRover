// Rover Object Goes Here
// ======================
var rover1 = {
  name : "Roberto",
  direction: "N",
  position: [0,0],//x,y
  travelLog: [],
  nextTurn : "X"
}

var rover2 = {
  name: "Roberta",
  direction: "N",
  position: [9,9],
  travelLog: [],
  nextTurn: "O"
}
var rover = [rover2, rover1];

var travelLog = [];

var obstacle1 = {
  position: [5,5]
}
var obstacle2 = {
  position: [3,4]
}
// ======================
function turnLeft(rover){
  switch (rover.direction){
    case 'N':
    rover.direction = "W"
    break;
    case 'E':
    rover.direction = "N"
    break;
    case 'S':
    rover.direction = "E"
    break;
    case 'W':
    rover.direction = "S"
    break;
  }
  console.log("turnLeft was called New Rover direction is: [" + rover.direction + "] ");
}

function turnRight(rover){
  switch (rover.direction){
    case 'N':
    rover.direction = "E"
    break;
    case 'E':
    rover.direction = "S"
    break;
    case 'S':
    rover.direction = "W"
    break;
    case 'W':
    rover.direction = "N"
    break;
  }
  console.log("turnRight was called New Rover direction is: [" + rover.direction +"]");
}

function moveForward(rover){
  switch (rover.direction){
    case 'N':
    rover.position[0]-=1
    break;
    case 'E':
    rover.position[0]+=1
    break;
    case 'S':
    rover.position[1]+=1
    break;
    case 'W':
    rover.position[1]-=1
  }
  if (rover.position[0] < 0){
    rover.position[0]+=1;
    console.log("Rover position readjusted, End of the line buddy!");
  }
  if (rover.position[0] > 9){
    rover.position[0]-=1;
    console.log("Rover position readjusted, Get back here little guy, you are gonna fall!");
  }
  if (rover.position[1] < 0){
    rover.position[1] += 1;
    console.log("Rover position readjusted, 404 Place not found");
  }
  if (rover.position[1] > 9){
    rover.position[1] -= 1;
    console.log("Rover position readjusted, You have reached the world's edge, none but devils play past here");
  }
  if (rover.position[0] == 5 && rover.position[1] == 5){
    rover.position[0]-=1;
    console.log("Obstacle detected, choose a different path.");
  }
  if (rover.position[0] == 3 && rover.position[1] == 4){
    rover.position[0]-=1;
    console.log("Obstacle detected, choose a different path.");
  }
  if (rover1.position[0] == rover2.position[0] && rover1.position[1] == rover2.position[1]){
    rover.position[0]-=1;
    console.log("Imminent collision detected! change direction");
  }
  travelLog.push(rover.name + ':'+[rover.position[0],rover.position[1]]);
  console.log("moveForward was called, New rover position is: ["+rover.position[0]+'x',rover.position[1]+'y'+"]");
}

function moveBackwards(rover){
  switch (rover.direction){
    case 'N':
    rover.position[0]+=1
    break;
    case 'E':
    rover.position[0]-=1
    break;
    case 'S':
    rover.position[1]-=1
    break;
    case 'W':
    rover.position[1]+=1
  }
  if (rover.position[0] < 0){
    rover.position[0]+=1;
    console.log("Rover position readjusted, End of the line buddy!");
  }
  if (rover.position[0] > 9){
    rover.position[0]-=1;
    console.log("Rover position readjusted, Get back here little guy, you are gonna fall!");
  }
  if (rover.position[1] < 0){
    rover.position[1] += 1;
    console.log("Rover position readjusted, 404 Place not found");
  }
  if (rover.position[1] > 9){
    rover.position[1] -= 1;
    console.log("Rover position readjusted, You have reached the world's edge, none but devils play past here");
  }
  if (rover.position[0] == 5 && rover.position[1] == 5){
    rover.position[0]+=1;
    console.log("Obstacle detected, choose a different path.");
  }
  if (rover.position[0] == 3 && rover.position[1] == 4){
    rover.position[0]+=1;
    console.log("Obstacle detected, choose a different path.");
  }
  if (rover1.position[0] == rover2.position[0] && rover1.position[1] == rover2.position[1]){
    rover.position[0]+=1;
    console.log("Imminent collision detected! change direction");
  }  
  travelLog.push(rover.name + ':'+[rover.position[0],rover.position[1]]);
  console.log("moveBackwards was called, New rover position is: ["+rover.position[0]+'x',rover.position[1]+'y'+"]");
}

var nextTurn = "X";
function changeTurn(){
  if(nextTurn == "X"){
       nextTurn = "O";
       console.log("Turn changed! Now is turn for rover2");
  } else {
       nextTurn = "X";
       console.log("Turn changed! Now is turn for rover1");    
  }
}

function commands(rover,commands){

  for (var i = 0; i< commands.length; i++){
    if (commands[i]=== "f" && rover.nextTurn == nextTurn){
      moveForward(rover);
    }
    else if (commands[i]=== "b" && rover.nextTurn == nextTurn){
      moveBackwards(rover);  
    }
    else if (commands[i]=== "r" && rover.nextTurn == nextTurn){
      turnRight(rover);
    }
    else if (commands[i]=== "l" && rover.nextTurn == nextTurn){
      turnLeft(rover);
    }
    else {
      console.log("Invalid command" + "["+commands[i]+"]");
    }
  }
}

console.log("Rover1 has the first turn, use 'changeTurn();' to change it.");
console.log("To move rovers 1 or 2 use: 'commands(rover1,'...')' or 'commands(rover2,'...'')'");
console.log("To see the travel log use 'travelLog' function");

