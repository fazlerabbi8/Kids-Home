export const orderInvoiceTemplate = ({ deliveryInfo, cartItems, subtotal, orderId }) => {
  const itemsRows = cartItems
    .map(
      (item) => `
      <tr>
        <td style="padding:8px;border-bottom:1px solid #eee;">${item.title}</td>
        <td style="padding:8px;border-bottom:1px solid #eee;text-align:center;">${item.quantity}</td>
        <td style="padding:8px;border-bottom:1px solid #eee;text-align:right;">৳${item.price.toFixed(2)}</td>
        <td style="padding:8px;border-bottom:1px solid #eee;text-align:right;">৳${(item.price * item.quantity).toFixed(2)}</td>
      </tr>
    `
    )
    .join("");

  return `
  <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#333;">
    <h2 style="color:#111;">Order Confirmation - Kids Home</h2>
    <p>Hi ${deliveryInfo.fullName},</p>
    <p>Thank you for your order! Here are your order details:</p>

    <p style="color:#666;font-size:13px;">Order ID: <strong>${orderId}</strong></p>

    <h3 style="margin-top:24px;">Delivery Information</h3>
    <p style="margin:4px 0;">${deliveryInfo.fullName}</p>
    <p style="margin:4px 0;">${deliveryInfo.phone}</p>
    <p style="margin:4px 0;">${deliveryInfo.address}, ${deliveryInfo.city} - ${deliveryInfo.postalCode}</p>
    ${deliveryInfo.notes ? `<p style="margin:4px 0;color:#666;">Note: ${deliveryInfo.notes}</p>` : ""}

    <h3 style="margin-top:24px;">Order Summary</h3>
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      <thead>
        <tr style="background:#f9f9f9;">
          <th style="padding:8px;text-align:left;">Item</th>
          <th style="padding:8px;text-align:center;">Qty</th>
          <th style="padding:8px;text-align:right;">Price</th>
          <th style="padding:8px;text-align:right;">Total</th>
        </tr>
      </thead>
      <tbody>
        ${itemsRows}
      </tbody>
    </table>

    <div style="text-align:right;margin-top:16px;font-size:16px;">
      <strong>Total: ৳${subtotal.toFixed(2)}</strong>
    </div>

    <p style="margin-top:32px;color:#999;font-size:12px;">
      This is an automated email. If you have any questions, please contact our support.
    </p>
  </div>
  `;
};