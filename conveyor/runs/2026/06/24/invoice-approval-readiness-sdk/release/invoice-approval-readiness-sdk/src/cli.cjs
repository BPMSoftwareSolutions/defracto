#!/usr/bin/env node
'use strict';
const fs = require('node:fs');
const { evaluateInvoiceApprovalReadiness } = require('./index.js');
const input = JSON.parse(fs.readFileSync(0, 'utf8') || '{}');
process.stdout.write(JSON.stringify(evaluateInvoiceApprovalReadiness(input)));