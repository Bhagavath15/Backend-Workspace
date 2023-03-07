const os = require('os') //inbuild package
console.log(`free memory in GB, ${(os.freemem() / 1024 / 1024 / 1024).toFixed(2)}, Gb`)
console.log('version', os.version())
console.log('CPU', os.cpus())


