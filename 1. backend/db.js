// #19 DB connection
const db = require('mysql')
const connData = require('./db.json')

const exec = (sql, arr) => new Promise((resolve, reject) => {
	const conn = db.createConnection(connData)
	conn.query(sql, arr, (err, rows)=>{
		err? reject(err) : resolve(rows)
		conn.end()
	})
})

module.exports = exec
