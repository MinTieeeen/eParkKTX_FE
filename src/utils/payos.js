const { PayOS } = require('@payos/node');

// Initialize PayOS with your credentials
const payos = new PayOS(
  process.env.REACT_APP_PAYOS_CLIENT_ID,
  process.env.REACT_APP_PAYOS_API_KEY,
  process.env.REACT_APP_PAYOS_CHECKSUM_KEY
);

export const createPaymentLink = async (paymentData) => {
  try {
    const paymentLink = await payos.createPaymentLink({
      orderCode: paymentData.orderCode,
      amount: paymentData.amount,
      description: paymentData.description,
      returnUrl: `${window.location.origin}/payment-success?orderId=${paymentData.orderCode}`,
      cancelUrl: `${window.location.origin}/payment-cancel?orderId=${paymentData.orderCode}`,
      items: paymentData.items || [],
      buyerName: paymentData.buyerName,
      buyerEmail: paymentData.buyerEmail,
      buyerPhone: paymentData.buyerPhone,
      expiredAt: Math.floor(Date.now() / 1000) + 15 * 60, // 15 minutes from now
    });

    return paymentLink.checkoutUrl;
  } catch (error) {
    console.error('Error creating payment link:', error);
    throw error;
  }
};

export const verifyPayment = async (orderCode) => {
  try {
    const paymentInfo = await payos.getPaymentLinkInformation(orderCode);
    return paymentInfo;
  } catch (error) {
    console.error('Error verifying payment:', error);
    throw error;
  }
};