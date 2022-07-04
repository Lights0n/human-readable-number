module.exports = function toReadable(number) {
  // turns digits no words 
  // 1) create array
  // 2) add word witch == digit
  // 3) take away 1-st digit from original
  // 4) recursy! 
  // 5) turn array into a string
  number = number.toString();
  let answer = [];
  if (number[0] == '0') {
    return 'zero';
  }
  for (let i = -1; i <= number.length; i++) {
    if (number.length == 3) {
      number[0] == '1' ? answer.push("one") : false;
      number[0] == '2' ? answer.push("two") : false;
      number[0] == '3' ? answer.push("three") : false;
      number[0] == '4' ? answer.push("four") : false;
      number[0] == '5' ? answer.push("five") : false;
      number[0] == '6' ? answer.push("six") : false;
      number[0] == '7' ? answer.push("seven") : false;
      number[0] == '8' ? answer.push("eight") : false;
      number[0] == '9' ? answer.push("nine") : false;
      answer.push('hundred');
      // cut 1-st digit here and do next cycle
      number = number.slice(1);
    }
    else if (number.length == 2) {
      if (number[0] == '1') {
        number[1] == '0' ? answer.push("ten") : false;
        number[1] == '1' ? answer.push("eleven") : false;
        number[1] == '2' ? answer.push("twelve") : false;
        number[1] == '3' ? answer.push("thirteen") : false;
        number[1] == '4' ? answer.push("fourteen") : false;
        number[1] == '5' ? answer.push("fifteen") : false;
        number[1] == '6' ? answer.push("sixteen") : false;
        number[1] == '7' ? answer.push("seventeen") : false;
        number[1] == '8' ? answer.push("eighteen") : false;
        number[1] == '9' ? answer.push("nineteen") : false;
        break;
      }
      number[0] == '2' ? answer.push("twenty") : false;
      number[0] == '3' ? answer.push("thirty") : false;
      number[0] == '4' ? answer.push("forty") : false;
      number[0] == '5' ? answer.push("fifty") : false;
      number[0] == '6' ? answer.push("sixty") : false;
      number[0] == '7' ? answer.push("seventy") : false;
      number[0] == '8' ? answer.push("eighty") : false;
      number[0] == '9' ? answer.push("ninety") : false;
      number = number.slice(1);
      // cut 1-st digit AGAIN here and do next cycle
    }
    else if (number.length == 1) {
      console.log('mi tyt');
      number[0] == '1' ? answer.push("one") : false;
      number[0] == '2' ? answer.push("two") : false;
      number[0] == '3' ? answer.push("three") : false;
      number[0] == '4' ? answer.push("four") : false;
      number[0] == '5' ? answer.push("five") : false;
      number[0] == '6' ? answer.push("six") : false;
      number[0] == '7' ? answer.push("seven") : false;
      number[0] == '8' ? answer.push("eight") : false;
      number[0] == '9' ? answer.push("nine") : false;
      number = number.slice(1);
    }
  }
  answer = answer.join(" ");
  return answer;
}
console.log(module.exports(0));