const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51IGYfsL9hoQ3d8UK6BXirL9VGd4yICdVPQTdY38wr3kh60L16kNXM9AyXLF8h6EP3aOrx12qu0CDVgXYAnfuDdUM00FcLRVIpB"
);
// API (to set up)

//  - App config
const app = express();

//  - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//  - API routes
app.get("/", (req, res) => {
  res.status(200).send("Hello tammy");
});

app.post("/payments/create", async (req, res) => {
  const total = req.query.total; // to get the total from the axios
  console.log("Payment Request Received BOOM!! total >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits of currency
    currency: "usd",
  });
  // OK - Created
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//  - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-87b0d/us-central1/api
