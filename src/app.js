const express = require('express')
const bodyParser = require('body-parser')

const cors = require('cors')
const authMiddleware = require('./middlewares/authMiddleware')

const usersRouter = require('./routes/usersRouter')
const matchesRouter = require('./routes/matchesRouter')
const likesRouter = require('./routes/likesRouter')
const dislikeRouter = require('./routes/dislikeRouter')
const chatsRouter = require('./routes/chatsRouter')
const authRouter = require('./routes/authRouter')

const app = express()

app.use(cors());

app.use(authMiddleware)

app.use(bodyParser.json())

app.use(usersRouter)
app.use(matchesRouter)
app.use(likesRouter)
app.use(dislikeRouter)
app.use(chatsRouter)
app.use(authRouter)

app.listen(3001, () => console.log('Listening at 3001'))