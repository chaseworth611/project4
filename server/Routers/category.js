import express from 'express'
import db from '../dbConnection.js'
const Router = express.Router()

Router.get ("/", async(req, res)=> {
  console.log ("Login Router ...")
  try {
    const [rows] = await db.query ("SELECT * from categories")
    console.log ("Rows: ", rows)
    if (rows.length == 0)
      res.status(404).send("category not found")
    else
      res.status(200).send(rows)
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).send("Server error while logging in");
  }
})

export default Router;