const spawn = require("child_process").spawn;
const pyPath = "./helpers/data_processing.py";

const pyReq = (cmd, data) => {
  return new Promise((resolve, reject) => {
    const py = spawn(cmd, [pyPath]);
    let stdoutData = "";

    py.stdin.write(JSON.stringify(data));
    py.stdin.end();

    py.stdout.on("data", data => {
      stdoutData += data.toString();
    });

    py.stdout.on("end", function() {
      //console.log("sum of numbers=", stdoutData);
      resolve(stdoutData);
    });
  });
};

module.exports = pyReq;
