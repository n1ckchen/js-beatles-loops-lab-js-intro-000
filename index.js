// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}

function johnLennonFacts(facts) {
  var newArray = [];
  var num = 0;
  while ( num < facts.length) {
    newArray.push(`${facts[num]}!!!`);
    num++;
  }
  return newArray;
}

function iLoveTheBeatles(num) {
  var array = [];
  do {
    array.push("I love the Beatles!")
    num++;
  } while (num < 15);
  return array;
}
