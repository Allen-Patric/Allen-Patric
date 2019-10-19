function myFunction() {
  console.log("Did I pass the pre-course project?");
}
var day = 'Tuesday'
if (day === "Monday") {
  console.log("4 more days to a new drop");
} else if (day === 'Tuesday'){
  console.log('3 more days to a new drop')
} else if (day === 'Wednesday'){
  console.log('2 more days to a new drop')
} else if (day === 'Thursday'){
  console.log('1 more days to a new drop')
} else if (day === 'Friday'){
  console.log('New episode drops today!')
}
else {
  console.log('Its weekend');
}


var cast = ["Kyle", "Andy", "AP"];
for (var i = 0; i < cast.length; i++) {
  console.log(i)
  console.log(cast[i]);
  
}
console.log(cast.length);