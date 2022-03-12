const express = require("express");
const upload = multer();
const app = express();
const stripe = require("stripe")("sk_test_tL1NWAPOtmuSOmmsEEYAVor200W6pCtRi4");
app.use(express.static(path.join(__dirname, "./views")));
app.use(express.static("."));

app.use(express.json());
app.use(express.static("public"));
app.use(upload.array());
app.get("/render", (req, res) => {
  console.log(req.query);
  res.render("complete.html");
});

app.get("/create-checkout-session", async (req, res) => {
  const YOUR_DOMAIN = "http://localhost:3000";

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "inr",
          product_data: {
            name: "Horse Transport",
            images: ["https://i.imgur.com/EHyR2nP.png"],
          },
          unit_amount: req.query.amount * 100,
        },
        quantity: 1,
      },
    ],
    mode: "payment",

    success_url: `${YOUR_DOMAIN}/render`,
    cancel_url: `${YOUR_DOMAIN}/render`,
  });
  console.log(session);
  res.redirect(303, session.url);
});
