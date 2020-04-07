const skeletonPublicKey = 'pk_test_dLLz3vzxbi4qOqH0CYOEAHE200C0CpPM9Z';
const skeletonSecretKey = 'sk_test_f9KteemadPogtp5npIndk8G200r4lMFxuW';

var stripePublic = require('stripe')(skeletonPublicKey);
var stripeSecret = require('stripe')(skeletonSecretKey);

const debug = (data) => {
  console.log(JSON.stringify(data, 2, " "));
}

const runAsync = async () => {
  // const creditCardToken = await stripePublic.tokens.create({
  //   card: {
  //     number: '5555555555554444',
  //     exp_month: 4,
  //     exp_year: 2021,
  //     cvc: '314',
  //   },
  // });
  // debug({
  //   creditCardToken
  // });

  const paymentMethod = await stripePublic.paymentMethods.create({
    type: 'card',
    card: {
      number: '4000000000000127',
      exp_month: 4,
      exp_year: 2021,
      cvc: '314',
    },
  });
  debug({
    paymentMethod
  });

  // const customer = await stripeSecret.customers.create({
  //   payment_method: paymentMethod.id,
  // });
  // debug({
  //   customer
  // });

  // const deleteResponse = await stripeSecret.customers.del(
  //   customer.id
  // );
  // console.log({deleteResponse});

  // const setupIntentCreate = await stripeSecret.setupIntents.create({
  //   customer: customer.id,
  //   payment_method: paymentMethod.id,
  // });
  // debug({
  //   setupIntentCreate
  // });

  // const setupIntentUpdate = await stripeSecret.setupIntents.update(
  //   setupIntentCreate.id, {
  //     customer: customer.id,
  //     payment_method: paymentMethod.id
  //   }
  // );
  // debug({
  //   setupIntentUpdate
  // });

  // const setupIntentConfirm = await stripeSecret.setupIntents.confirm(
  //   setupIntentCreate.id, {
  //     payment_method: paymentMethod.id,
  //   }
  // );
  // debug({
  //   setupIntentConfirm
  // });

  // const paymentIntentCreate = await stripeSecret.paymentIntents.create({
  //   amount: 2000,
  //   currency: 'usd',
  //   payment_method_types: ['card'],
  //   customer: customer.id,
  //   payment_method: paymentMethod.id,
  //   capture_method: "manual",
  // });
  // debug({
  //   paymentIntentCreate
  // });

  // const paymentIntentConfirm = await stripeSecret.paymentIntents.confirm(
  //   paymentIntentCreate.id, {
  //     payment_method: paymentMethod.id,
  //   }
  // );
  // debug({
  //   paymentIntentConfirm
  // });

  // const paymentIntentCancel = await stripeSecret.paymentIntents.cancel(
  //   paymentIntentCreate.id
  // );
  // debug({
  //   paymentIntentCancel
  // });

  // const paymentIntentCapture = await stripeSecret.paymentIntents.capture(
  //   paymentIntentCreate.id
  // );
  // debug({
  //   paymentIntentCapture
  // });
};

runAsync()
  .catch(console.log);
