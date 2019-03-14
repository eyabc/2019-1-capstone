// #19 DB connection
const db = require('mysql')
/* db.json 파일은 조원들에게만 카톡으로 알려줌
{
	"host": "",
	"user": "",
	"password": "",
	"database": ""
} 형식임
*/
const connData = require('./db.json')

const exec = (sql, arr) => new Promise((resolve, reject) => {
	const conn = db.createConnection(connData)
	conn.query(sql, arr, (err, rows)=>{
		err? reject(err) : resolve(rows)
		conn.end()
	})
})

module.exports = exec
