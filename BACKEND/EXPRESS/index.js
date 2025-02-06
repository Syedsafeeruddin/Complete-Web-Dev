import express from 'express'

const app = express()
const port = 8000
app.use(express.json())

let teaData = []
let nextID = 1

// add a Tea(CREATE operation)
app.post('/teas', (req, res) => {
    const {name, price} = req.body
    const newTea = {id: nextID++, name, price}
    teaData.push(newTea)
    res.status(200).send(newTea)
})

// get all Teas(READ operation)
app.get('/teas', (req, res) => {
    res.status(200).send(teaData)
})

// find specific Tea
app.get('/teas/:id', (req, res) =>{
    const tea = teaData.find(t => t.id === parseInt(req.params.id))
    if(!tea){
        return res.status(404).send('404 Page not found')
    }
    res.status(200).send(tea)
})

// update Tea(UPDATE opertaion)
app.put('/teas/:id', (req, res) => {
    const tea = teaData.find(t => t.id === parseInt(req.params.id))
    if(!tea){
        return res.status(404).send('404, Page not found')
    }
    const {name, price} = req.body
    tea.name = name
    tea.price = price
    res.status(200).send(tea)
})

// delete Tea(DELETE operation)
app.delete('/teas/:id', (req, res) => {
    const teaIndex = teaData.findIndex(t => t.id === parseInt(req.params.id))
    if(teaIndex === -1){
        return res.status(404).send('404, Page not found')
    }
    teaData.splice(teaIndex, 1)
    return res.status(200).send('Tea deleted')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}...`)
})