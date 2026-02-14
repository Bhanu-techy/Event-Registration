const express = require('express')
const path = require('path')

const {open} = require('sqlite')
const sqlite3 = require('sqlite3')
const cors = require('cors')
const app = express()
const jwt = require('jsonwebtoken')

app.use(cors())
app.use(express.json())

const bcrypt = require('bcrypt')

const dbPath = path.join(__dirname, 'database.db')

let db = null

const initializeDBAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    })
    app.listen(5000, () => {
      console.log('Server Running at http://localhost:5000/')
    })
    
  } catch (e) {
    console.log(`DB Error: ${e.message}`)
    process.exit(1)
  }
}

initializeDBAndServer()

app.post("/register",async (req, res)=>{
    const {name, email, password} = req.body
    const user = await db.get(`select * from users where email = '${email}'`)
    if (user === undefined){
        const hashpassword= await bcrypt.hash(password,10)
        const query = `insert into users (name, email, password)
        values('${name}', '${email}', '${hashpassword}')`
        const response = await db.run(query)

        const payload = {
        name: name,
      };
      const jwtToken = jwt.sign(payload, "MY_SECRET_TOKEN");
      res.json({ jwt_token :jwtToken, userId : response.lastID });
    }else{
        res.json({error_msg : "user already exists"})
    }
})

app.post('/login', async (req, res) =>{
    const {email, password} = req.body
    const user = await db.get(`select * from users where email = '${email}'`)
    if (user === undefined){
        res.status(400).json({error_msg : "user not exists"})
    }else{
        const isPasswordMatched = await bcrypt.compare(password, user.password)
        if (isPasswordMatched){
            const payload = {email};

            const jwtToken = jwt.sign(payload, "MY_SECRET_TOKEN");
            res.json({ jwt_token : jwtToken, userId : user.id  });
        }else{
            return res.status(400).json({error_msg : "Invalid Password"})
        }
    }
})

app.get('/events', async (req, res)=>{
    const response = await db.all('select * from events')
    res.send(response)
})

app.post('/registration', async (req, res)=>{
    const {userId, eventId} = req.body

    const existing = await db.get(
        `SELECT id FROM registrations
        WHERE user_id = ? AND event_id = ?`,
        [userId, eventId]
    );
    if (existing) {
        res.status(400).json({error_msg :"User already registered for this event"});
    }
    await db.run(
    `INSERT INTO registrations (user_id, event_id)
     VALUES (?, ?)`,
    [userId, eventId]);

    res.json({message : "Event Registered"})

})

app.get('/registration', async (req, res)=>{
    const response = await db.all(`SELECT 
    events.name AS event_name,
    events.event_date
    FROM registrations
    JOIN users ON registrations.user_id = users.id
    JOIN events ON registrations.event_id = events.id;`)
    res.send(response)
})

app.get('/registration/:id', async (req, res)=>{
    const {id} = req.params
    const response = await db.all(`SELECT 
    events.name AS event_name,
    events.event_date
    FROM registrations
    JOIN users ON registrations.user_id = users.id
    JOIN events ON registrations.event_id = events.id 
    where user_id = ${id}`)
    res.send(response)
})