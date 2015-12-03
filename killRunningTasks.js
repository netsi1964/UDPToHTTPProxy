var lsof = require('lsof');

var info = "%s \"%s\" (pid:%s) in state \"%s\" running on port %s Launced by %s";
/*
options:
  options.ports = A comma separated list of ports you want to look format ["8001, 8080, 8000"]
  options.command = A comma separated list of task names which have running tasks (on given ports) ["node,Python"]
*/
module.exports = (function(options) {

  // lsof.raw(function(data) {
//   console.log(data);
// });

  options = options || {};
  options.ports = (typeof options.ports !== "undefined") ? options.ports.toString() : "8001, 8080, 8000";
  options.commands = (typeof options.commands !== "undefined") ? options.commands.toString() : "node,Python";

  options.commands = options.commands.split(",");
  options.ports = options.ports.split(",");

  console.log("Will test port(s) %s for task(s) started by %", options.ports, options.commands);

  options.ports.map(function(port) {
    lsof.rawTcpPort(port, function(tasks) {
      console.log("checking port %d found %d tasks started by %s", port, tasks.length, options.commands.join(" or "));
      tasks.filter(function(task) {
          console.log(info, "Found task ", task.name, task.pid, task.state, port, task.command);
          return options.commands.indexOf(task.command) > -1;
        })
        .map(function(task) {
          console.log(info, "Send command SIGINT to task ", task.name, task.pid, task.state, port, task.command);
          process.kill(task.pid, "SIGINT");
        });
    });
  });
})();
