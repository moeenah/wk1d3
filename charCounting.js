console.log(countLetters(process.argv.splice(2)));

function countLetters(string) {

  string = string.join("").toLowerCase();

  var count = {};

  for (var i = 97; i <= 122; i ++) {
    var letter = String.fromCharCode(i);

    if (string.includes(letter)) {

      var reg = new RegExp(letter, 'g');
      var numTimes = string.match(reg).length;

      count[letter] = numTimes;

    }
  }

  return count;

};