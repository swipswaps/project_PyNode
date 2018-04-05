const spawn = require("child_process").spawn;

const pyReq = data => {
  console.log("cwd", process.cwd());
  let py = spawn("python", ["./helpers/data_processing.py"]);
  console.log("py", py);
  let dataString = "";

  //once we get data back
  py.stdout.on("data", data => {
    dataString += data.toString();
  });

  py.stdout.on("end", function() {
    console.log("sum of numbers=", dataString);
  });

  py.stdin.write(JSON.stringify(data));
  py.stdin.end();
};

module.exports = pyReq;
