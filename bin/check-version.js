
const p = require('./../package.json')
const pl = require('./../package-lock.json')


if(p.version != pl.version) {
  console.log("package.json: ", p.version)
  console.log("package-lock.json: ", pl.version)
  process.exit(1)
} else {
  console.log("check-version OK")
}
