const fs = require('fs')

const file = fs.readFileSync('./ru/translation.json', 'utf-8')

const parsed = JSON.parse(file)

let str = ''

for (const [key, value] of Object.entries(parsed)) {
  str += `${key} => ${value} \n`
}

fs.writeFileSync('uz_translation.txt', str)

console.log(str)
