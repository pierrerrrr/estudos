#!/usr/bin/env node
import arg from 'arg';
import chalk from 'chalk'
import pkgUp from 'pkg-up'

try {
  const args = arg({
    "--start": Boolean,
    "--build": Boolean,
  });

  if (args["--start"]) {
    const pkgPath = pkgUp.sync({ cwd: process.cwd() });
    const pkg = require(pkgPath);
    if (pkg.tool) {
      console.log("Found configuration", pkg.tool);
    } else {
      console.log(chalk.yellow("Could not find configuration, using default"));
    }
    console.log(chalk.bgCyanBright("starting the app..."));
  }
} catch (e) {
  console.log(chalk.yellow(e.message));
  console.log();
  usage();
}

function usage() {
  console.log(`${chalk.whiteBright("tool[CMD]")}
    ${chalk.greenBright("--start")}\tStarts the app
    ${chalk.greenBright("--build")}\tBuilds the app`);
}
