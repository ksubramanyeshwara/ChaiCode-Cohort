const fs = require("fs");

setTimeout(() => console.log("Set Timeout"), 0);
setImmediate(() => console.log("Set Immediate"));

fs.readFile("./index.js", (err, data) => {
  setTimeout(() => console.log("Set Timeout inside fs"), 0);
  //   it ran first because it was in the phase of event loop
  setImmediate(() => console.log("Set Immediate inside fs"));
});

console.log();
