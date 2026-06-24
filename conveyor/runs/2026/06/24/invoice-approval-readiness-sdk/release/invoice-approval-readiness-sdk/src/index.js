'use strict';

function blocker(code, message) {
  return { code, message };
}

function evaluateInvoiceApprovalReadiness(packet) {
  const input = packet || {};
  const blockers = [];
  if (!input.invoiceNumber || !input.vendor || typeof input.amount !== 'number') {
    blockers.push(blocker('missing_invoice_core_fields', 'Invoice number, vendor, and numeric amount are required.'));
  }
  if (!input.purchaseOrder) {
    blockers.push(blocker('missing_purchase_order', 'Invoice cannot proceed because no purchase order was provided.'));
  }
  if (!input.receivingEvidence || input.receivingEvidence.received !== true) {
    blockers.push(blocker('missing_receiving_evidence', 'Invoice requires receiving evidence before payment.'));
  }
  if (!input.approval || !input.approval.approvedBy) {
    blockers.push(blocker('missing_manager_approval', 'Invoice requires manager approval before payment.'));
  }
  if (input.purchaseOrder && typeof input.purchaseOrder.amount === 'number' && typeof input.amount === 'number') {
    const tolerance = typeof input.purchaseOrder.tolerancePercent === 'number' ? input.purchaseOrder.tolerancePercent : 0.05;
    const allowedDelta = Math.abs(input.purchaseOrder.amount) * tolerance;
    const delta = Math.abs(input.amount - input.purchaseOrder.amount);
    if (delta > allowedDelta) {
      blockers.push(blocker('amount_outside_po_tolerance', 'Invoice amount is outside the purchase order tolerance.'));
    }
  }
  const status = blockers.length ? 'blocked' : 'passed';
  return {
    schemaVersion: 'defracto.invoice-approval-readiness.result.v1',
    status,
    invoiceNumber: input.invoiceNumber || null,
    vendor: input.vendor || null,
    amount: typeof input.amount === 'number' ? input.amount : null,
    blockers,
    nextAction: status === 'passed' ? 'Invoice packet is ready for payment approval workflow.' : 'Attach purchase order, receiving evidence, and manager approval before payment.',
    proofSurfaceOnly: true
    };
}

module.exports = { evaluateInvoiceApprovalReadiness };