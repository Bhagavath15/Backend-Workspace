const cTof = (c) => { return (c * (9 / 5) + 32) }
console.log(cTof(process.argv[2]).toFixed(2))