const EventEmitter = require("events");

class Logger extends EventEmitter {
  log(callbacks) {
    this.emit("log", "started...");
    callbacks();
    this.emit("log", "ended!");
  }
}
module.exports.Logger = Logger;
