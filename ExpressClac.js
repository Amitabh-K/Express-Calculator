var app = require('express') ();

var bodyParser = require('body-parser');

app.use(bodyParser.json());

PORT = process.env.PORT || 3000;

app.get("/operations/:firstNum/:secondNum", function(req, res) {

  var operations = req.params.operations;
  
  var firstNum = parseInt(req.params.firstNum);
  var secondNum = parseInt(req.params.secondNum);
  var result;

  switch (operations) {

    case "add":
    case "+":
      result = firstNum + secondNum;
      
      case "subtract":
      case "-":
        result = firstNum - secondNum;
        break;
        case "multiply":
          case "*":
            result = firstNum * secondNum;
            break;
            case "/":
              result = firstNum / secondNum;
              break;
              default:
              result = "Sorry! The only valid operations are add, subtract, multiply, and divide.";

  }

  req.send(result.toString());


});

app.listen(PORT, function () {
  console.log("Listening on " + PORT);
});
