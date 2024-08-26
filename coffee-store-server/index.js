const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// coffeeMaster
// CRccCXFOqSvpQzhb

// const uri =
//   "mongodb+srv://coffeeMaster:CRccCXFOqSvpQzhb@cluster0.n7e36sw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const uri = `mongodb+srv://${process.env.SERVER_NAME}:${process.env.SERVER_PASS}@cluster0.n7e36sw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    // authentication related api
    app.post("/jwt", async (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.TOKEN_KEY, {
        expiresIn: "1h",
      });
      res.cookie("token", token).send({ message: "cookie send successfully" });
    });

    // server related apis
    const coffeeCollection = client
      .db("coffeeMasterDb")
      .collection("coffeeData");
    const userCollection = client.db("coffeeMasterDb").collection("userData");

    app.get("/coffee", async (req, res) => {
      const token = req.cookies.token;
      const data = coffeeCollection.find();
      const result = await data.toArray();
      res.send(result);
    });

    app.get("/coffee/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await coffeeCollection.findOne(query);
      res.send(result);
    });

    app.post("/coffee", async (req, res) => {
      const coffeeData = req.body;
      const result = await coffeeCollection.insertOne(coffeeData);
      res.send(result);
    });

    app.put("/coffee/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedCoffee = req.body;
      const coffee = {
        $set: {
          name: updatedCoffee.name,
          chef: updatedCoffee.chef,
          supplier: updatedCoffee.supplier,
          taste: updatedCoffee.taste,
          category: updatedCoffee.category,
          details: updatedCoffee.details,
          photo: updatedCoffee.photo,
        },
      };

      const result = await coffeeCollection.updateOne(filter, coffee, options);

      res.send(result);
    });

    app.delete("/coffee/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await coffeeCollection.deleteOne(query);
      res.send(result);
    });

    // user related apis

    app.get("/users", async (req, res) => {
      const cursor = userCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    app.post("/users", async (req, res) => {
      const data = req.body;
      const result = await userCollection.insertOne(data);
      res.send(result);
    });

    app.patch("/users", async (req, res) => {
      const user = req.body;
      const filter = { email: user.email };
      const updatedDoc = {
        $set: {
          lastLoggedAt: user.lastLoggedAt,
        },
      };
      const result = await userCollection.updateOne(filter, updatedDoc);
      res.send(result);
    });

    app.delete("/users/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = userCollection.deleteOne(query);
      res.send(result);
    });

    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Coffee is making on my server");
});

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
