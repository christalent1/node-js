const http = require('http')



const fs = require('fs')
const server = http. createServer((req, res)=>{

    console.log('server require made')
    console.log(req.url)
    res.setHeader('content-Type', 'text/html')

    // res.written('<h1>Welcome to coding academy </h1>')
    // res.end()


// locathost

server.listen(3000,'localhost',() =>{

    console.log('server done start 00 for localhost 3000')
})

// send html

fs.readFile('./view/index.html',(err,data)=>{

    if (err) {
        console.log(err)
        res.end()
    }
   
    // res.written(data)
    res.end(data)
})
})

// localhost

server.listen(300,'localhost',()=>{
    console.log('server done start oo for localhost 3000')
})

