export const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export function calculateOrderAmount(params: any) {
  // TODO: Write logic to calculate order amount
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};

