import express from "express"

console.log('hell Daniel')

const app = express()
const PORT = 3005;

app.use(express.urlencoded({extended: true})); 
app.use(express.json());   

type Student = {
    name: string;
    grade: number;
}

const students: Student[] = [
    {name: "HJ", grade: 10},
    {name: "Joseph", grade: 11}
]

app.get("/", (req, res) => {

    res.send("hello")
})

app.put("/student")
app.delete("/student")

app.get("/student", (req, res) => {
    res.send(students)
})

app.post("/student", (req, res) => {
    const student = req.body
    console.log(student)
    students.push(student)

    res.status(200).send()
})


app.listen(PORT, () => {
    console.log(`Server is listening to the port: ${PORT}`)
    console.log(`http://localhost:${PORT}`)
    console.log(`http://localhost:${PORT}/student`)
})
// curl -X POST http://localhost:3000/student -d '{"name": "MJ", "grade": 12}' -H 'Content-Type: application/json'
//  npm install body-parser


// [{"name":"HJ","grade":10},{"name":"Joseph","grade":11},{"{name: \"MJ\", grade: 12}":""}]