#!/usr/bin/env node

const chokidar = require("chokidar");

chokidar
  .watch(".")
  .on("add", () => console.log("STARTING USERS PROGRAM"))
  .on("change", () => console.log("FILE CHANGED"))
  .options("unlink", () => console.log("FILE UNLINKED"));
