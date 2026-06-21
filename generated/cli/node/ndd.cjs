#!/usr/bin/env node

const impl = require("../../../bin/ndd.cjs");

if (require.main === module) {
  impl.main().catch((error) => {
    console.error(error && error.message ? error.message : String(error));
    process.exit(1);
  });
}

module.exports = impl;
