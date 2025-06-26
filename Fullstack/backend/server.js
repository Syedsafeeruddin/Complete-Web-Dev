import express from 'express';

const app = express()

const port = process.env.PORT || 3000

// app.get('/', (req, res) => {
//     res.send('Hello from the backend')
// })

// get a list of 5 joke

app.get('/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "A joke",
            content: "This is a joke"
        },
        {
            id: 2,
            title: "A 2nd joke",
            content: "This is another joke"
        },
        {
            id: 3,
            title: "A 3rd joke",
            content: "This is third joke"
        },
        {
            id: 4,
            title: "A 4th joke",
            content: "This is fourth joke"
        },
        {
            id: 5,
            title: "A 5th joke",
            content: "This is fifth joke"
        }
    ]
    res.send(jokes)
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})