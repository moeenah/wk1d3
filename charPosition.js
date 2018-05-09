//console.log(charPosition(process.argv.splice(2).toString));
console.log(charPosition(process.argv.splice(2).toString().replace(/,/g,' ')));
function charPosition(string) {

  var count = {};

  for (var i = 97; i <= 122; i ++) {
    var letter = String.fromCharCode(i);

    if (string.includes(letter)) {

      var reg = new RegExp(letter, 'g');
      var numTimes = string.match(reg).length;

      count[letter] = numTimes;


    }
  }

  var totalKeysNum = Object.keys(count).length;
  var keys = Object.keys(count);
  var newCount = {}

for (var j = 0; j < totalKeysNum; j ++) {
  var numCount = [];

  for (var k = 0; k < string.length; k ++) {
    if (string.charAt(k) === keys[j]) {
      numCount.push(k);
    }
  }
  newCount[keys[j]] = numCount;
}

  return newCount;

};