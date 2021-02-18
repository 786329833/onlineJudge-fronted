var mysql=require('mysql');

var connection = mysql.createConnection({
    host: 'lengpengfei.com',
    port: '3306',
    user: 'root',
    password: 'A66ef46acb03',
    database: 'wordpress'
});


// 选择数据库todos
app.get("/choosedb", function (req, res) {
    const chooseDatabaseSql = "use online_judge";
    db.query(chooseDatabaseSql, (err, result) => {
      if (err) {
      } else {
        res.send("choose db success");
      }
    });
  });
  

// 查找
function select() {
    connection.connect(function (err) {
        if (err) {
            console.error('error connecting:' + err.stack)
        }
        console.log('connected as id ' + connection.threadId);
    })

    connection.query('SELECT * FROM judgestatus_casestatus', function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is:', results);
    });
    connection.end();
}

select();