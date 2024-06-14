const mysql = require("mysql2");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Durg@002022",
  database: "mobiles",
});

function getMobiles(id) {
  return new Promise(function (sucess, reject) {
    if(id){
      con.query(`select * from mobiles where id=?`,[id], function (err, rows, col) {
        if (err) {
          reject(500);
        } else {
          sucess(rows);
        }
      
      });

    }
    else{
      
    }
    con.query(`select * from mobiles`, function (err, rows, col) {
      if (err) {
        reject(500);
      } else {
        sucess(rows);
      }
      con.end();
    });
  });
}

function addMobile(n, p, r, s) {
  return new Promise(function (sucess, reject) {
    con.query(
      `insert into mobiles (name,price,ram,storage) values (?,?,?,?) `,
      [n, p, r, s],
      function (err, res) {
        if (err) {
            reject(500);
        } else {
            sucess(res);
        }
      }
    );
  });
}

function updateMobile(id, n, p, r, s) {
  return new Promise(function (sucess, reject) {
    con.query(
      `update mobiles set name=?,price=?,ram=?,storage=? where id=?`,
      [ n, p, r, s,id],
      function (err, res) {
        if (err) {
            reject(500);
        } else {
            sucess(res);
        }
      }
    );
  });
}

function deleteMobile(id) {
  return new Promise(function (sucess, reject) {
    getMobiles(id)
    .then((rows)=>{
      if(rows.length>0){
        con.query(`delete from mobiles where id=?`, [id], function (err, res) {
          if (err) {
            reject(500);
          } else {
            sucess(res);
          }
        });
      }

      else{
        reject(404)
      }

    })
  
  });
}

module.exports = { addMobile, getMobiles, updateMobile, deleteMobile };
