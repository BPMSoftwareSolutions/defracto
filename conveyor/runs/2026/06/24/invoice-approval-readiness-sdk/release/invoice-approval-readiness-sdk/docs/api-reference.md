# API Reference

## evaluateInvoiceApprovalReadiness(packet)

Returns a result with `status`, `blockers`, and `nextAction`.

### Supported blockers

- `missing_invoice_core_fields`
- `missing_purchase_order`
- `missing_receiving_evidence`
- `missing_manager_approval`
- `amount_outside_po_tolerance`