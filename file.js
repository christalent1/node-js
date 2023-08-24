const fs = require('fs')

// read from File

// fs.readFile('./text/blog.txt', (err,res) =>{

//     if (err){

//         Console.log(err)
//     }
// })

fs.readFile('./text/blog.txt', (err, res) =>{

    if (err) {

        console.log(err)
    }

    console.log(res.toString());
})

fs.writeFile('./text/blog.txt','i love cding programming',(err,res)=>{

    console.log('written')

})


// directory
// create folder

if(!fs.existsSync('./img')){

    fs.mkdir('./img',(err,res)=>{
        if(err) console.log(err)
        console.log('folder create')
    })

}

// delete folder

if(fs.existsSync('./img')){

    fs.mkdir('./img',(err,res)=>{
        if(err) console.log(err)
        console.log('folder delete')
    })

}

// delete file

if(fs.existsSync('./img/blog')){

    fs.mkdir('./img',(err,res)=>{
        if(err) console.log(err)
        console.log('folder delete')
    })

}



