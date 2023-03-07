// const fs = require('fs')
// const quote = "No beauty shines brighter than good heart"

// fs.writeFile("./awesome.html", quote, (err) => {
//     console.log("completed Writing!")
// })

// const quote2 = "live more, worry less"
// for (var i = 1; i <= process.argv[2]; i++) {
//     fs.writeFile(`./backup/text-${i}.html`, quote2, (err) => {

//         console.log("comleted writing")

//     })

// }

// fs.readFile("./cool.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.log(err)
//     }
//     else {
//         console.log(data)
//     }
// })

// const quote3 = "Live happily"
// fs.appendFile("./fun.html", "\n" + quote3, (err) => {
//     console.log("completed appending")
// })
// for (let i = 1; i < 30; i++) {
//     fs.unlink(`./backup/text-${i}.html`, (err) => {
//         console.log("deleted ")
//     })
// }
const fs = require("fs")
const quote = "Earn save travel repeat"
const quote1 = "LIVE HAPPILY"
// for (var i = 1; i <= process.argv[2]; i++) {
//     fs.writeFile(`./backup/text-${i}.html`, quote, (err) => {
//         console.log("File has been created")
//     })
// }

// fs.readFile('./backup/text-1.html', "utf-8", (err, data) => {
//     if (err) {
//         console.log("Error", err)
//     }
//     else {
//         console.log(data)
//     }
// })
// fs.appendFile('./backup/text-1.html', "\n" + quote1, (err) => {
//     console.log("updated")
// })

for (var i = 0; i < 26; i++) {

    fs.unlink(`./backup/text-${i}.html`, (err) => {
        console.log("deleted")
    })
}