var allNames = [];

var Robot = function () {
  var setName = Robot.prototype.newName();
  this.name = setName;
};

Robot.prototype.newName = function() {
  var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "1234567890";
  var robotName = '';
  var unique = false;
  while (unique === false){
    for (var i = 0; i < 2; i++) {
      robotName += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    for (var j = 0; j < 3; j++) {
      robotName += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }
    if(allNames.indexOf(robotName) === -1){
      allNames.push(robotName);
      return robotName;
    }
    else{
      unique = false;
    }
  }
};

Robot.prototype.reset = function(){
  this.name = Robot.prototype.newName();
};



module.exports = Robot;
