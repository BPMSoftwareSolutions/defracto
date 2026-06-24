# Invoice Approval Readiness SDK

Checks whether invoice packets include purchase order, receiving, and manager approval evidence before payment submission.

## Install

This package is a release-review candidate materialized by the conveyor. Archive publication is blocked until a governed package archive step exists.

## Usage

```js
const { evaluateInvoiceApprovalReadiness } = require('./src');
const result = evaluateInvoiceApprovalReadiness(invoicePacket);
```

## Status

Accepted for release review. Not published to a package registry.