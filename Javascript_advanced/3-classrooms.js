function createClassRoom(numbersOfStudents) {
  function studentSeat(seat) {
    return function() {
      return seat;
    }
  }

  var students = [];
  for (var i = 0; i < numbersOfStudents; i++) {
    var seatNumber = studentSeat(i + 1);
    students.push(seatNumber());
  }

  return students;
}

var classRoom = createClassRoom(10);
console.log(classRoom);
