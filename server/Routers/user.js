import express from 'express'
import db from '../dbConnection.js'
const Router = express.Router()

Router.post ("/", async(req, res)=> {
  console.log ("Login Router ...")
  const { username, password } = req.body
  console.log (username, password)
  try {
    const [rows] = await db.query ("SELECT * from users WHERE username = ? AND password = ? ", [username, password])
    console.log ("Rows: ", rows)
    if (rows.length == 0)
      res.status(404).send("User not found")
    else
      res.status(200).send("Login successful")
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).send("Server error while logging in");
  }
})

export default Router;