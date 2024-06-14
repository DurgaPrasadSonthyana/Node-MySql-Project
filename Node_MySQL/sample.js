// const os = require('os')
// const path = require('path')
// const fs =require('fs')
// const http= require('http')
// const {addNumber,subNumber,divNumber,mulNumber}=require('./demo')


// OS 

// console.log(os.type())
// console.log(os.version())
// console.log(os.freemem())
// console.log(os.cpus())

// console.log(__dirname)
// console.log(__filename)
 

// PATH

// console.log(path.dirname(__filename))
// console.log(path.basename(__filename))
// console.log(path.extname(__filename))
// console.log(path.parse(__filename))

// FS

// fs.readFile("demo.txt",'utf8',(err,data)=>{
//      if(err){
//         console.log(err)
//      }
//      console.log(data)
// }) 

// fs.writeFile("example.html",'utf8',(err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log('File Created')
// })
// const content= "My name is Durga this Dynamic data"
// fs.writeFile('example.html',content,(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("FIle content is sucess")
//     }
// })

// fs.rename('example.html','updatedFile.js',(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("File Updated")
//     }
// })

// fs.unlink("updatedFile.js",(err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("File Deleted")
//     }
// })

// HTTP


// const myServer = http.createServer((req,res)=>{
//   res.write("HI welcome to my server")
//   res.end()
// })

// myServer.listen(5500)


//LOCAL MODULE


// console.log(addNumber(5,6))
// console.log(subNumber(5,6))
// console.log(mulNumber(5,6))
// console.log(divNumber(5,6))


const express = require('express')
const app = express()
const{addMobile,getMobiles,updateMobile,deleteMobile}=require('./db');
app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.get('/mobiles',(req,res)=>{  
  getMobiles()
  .then(()=>{
     res.send(req.body)
  })

  .catch((err)=>{
    res.send(err)    
  })

})


app.post('/mobiles',(req,res)=>{  
  addMobile(req.body.name,req.body.price,req.body.ram,req.body.storage)
  .then((mobiles)=>{
     res.send(mobiles)
  })

  .catch((err)=>{
    res.send(err)
  })
})


app.put('/mobiles',(req,res)=>{  
  updateMobile(req.body.id,req.body.name,req.body.price,req.body.ram,req.body.storage)
  .then(()=>{
     res.send(req.body)
  })

  .catch((err)=>{
    res.send(err)
  })
})


app.delete('/mobiles',(req,res)=>{  
  deleteMobile(req.body.id)
  .then(()=>{
     res.send("deleted")
  })
  .catch((err)=>{
    res.send(err)
  })
})

app.listen(4500,()=>{
    console.log("server started at 4500")
})
