const beautify = require('js-beautify').js

const downloadFile = (data) => {
    data = JSON.parse(data);
    let serverString = `const express = require('express')
const app = express()
const port = ${data.port}

`;
    if (data.mongooseUrl) {
        serverString += `const mongoose = require('mongoose')

    mongoose.connect("${data.mongooseUrl}")
.then(() => {
  console.log('connected to databse')
})
.catch(() => {
  console.log("db connection failed")
})
`
    }

    if (data.accessControl) {
        //    let endString = data.gets.toString()
        serverString += ` app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers',
         'Origin, X-Requested-With, Content-Type, Accept, Authorization');
         `;
        if (data.gets.length) {
            serverString += ` res.setHeader(
           'Access-Control-Allow-Methods',
           '${data.gets}');`;
        }
        serverString += `     next();
      })
      `;
    }

    if (data.endpoints) {
        data.endpoints.reverse().map(item => serverString += 'app.get("' + item.key + '",' + item.value + ')\r\n');
    }

    serverString += `
app.listen(port, () => console.log('Example app listening on port ${data.port}!'))`;
    try {
        const url = window.URL.createObjectURL(new Blob([beautify(serverString, {
            indent_size: 2,
            space_in_empty_paren: true
        })]), {
            type: 'application/json'
        });
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'server.js');
        document.body.appendChild(link);
        link.click();
    } catch (err) {
        console.log('An error occured/n' + err);
    }
}

module.exports = downloadFile