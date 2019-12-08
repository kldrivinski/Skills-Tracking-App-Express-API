const express = require("express");
const pool = require("./connection");
// route handles the URL
const routes = express.Router();






// GET / display employees with select ID

routes.get("/employees/:id", (req, res) => {
    const id = parseInt(req.params.id);
    let params = [id]
    let sql = "SELECT * FROM employee_skills WHERE id = $1::int";
    pool.query(sql, params).then(result => {
        if (result.rows.length !== 0) {
            res.json(result.rows[0]);
        }
        else {
            res.status(404);
            res.send("No item found");
        }
    })
});

// GET / display all employees

routes.get("/employees", (req, res) => {
    let sql = "SELECT * FROM employee_skills Order by id";
    pool.query(sql).then(result => {
        console.log(result.rows);
        res.json(result.rows);
    })
});




// GET // sort all employees by id desc

routes.get("/employees/desc", (req, res) => {
    let sql = "SELECT * FROM employee_skills Order by id Desc";
    pool.query(sql).then(result => {
        console.log(result.rows);
        res.json(result.rows);
    })
});

// GET / get employees ordered by id descending
routes.get("/employees/sortIdDsc", (req, res) => {
    let sql = "SELECT * FROM employee_skills Order by id Desc";
    pool.query(sql).then(result => {
        console.log(result.rows);
        res.json(result.rows);
    })
})


// GET / get employees ordered by name ascending 
routes.get("/employees/sortName", (req, res) => {
    let sql = "SELECT * FROM employee_skills Order by employeeName";
    pool.query(sql).then(result => {
        console.log(result.rows);
        res.json(result.rows);
    })
})


// GET / get employees ordered by named descending
routes.get("/employees/sortNameDsc", (req, res) => {
    let sql = "SELECT * FROM employee_skills Order by employeeName Desc";
    pool.query(sql).then(result => {
        console.log(result.rows);
        res.json(result.rows);
    })
})



// GET / get employees ordered by angular ascending 
routes.get("/employees/sortAngular", (req, res) => {
    let sql = "SELECT * FROM employee_skills Order by angular";
    pool.query(sql).then(result => {
        console.log(result.rows);
        res.json(result.rows);
    })
})


// GET / get employees ordered by angular descending
routes.get("/employees/sortAngularDsc", (req, res) => {
    let sql = "SELECT * FROM employee_skills Order by angular Desc";
    pool.query(sql).then(result => {
        console.log(result.rows);
        res.json(result.rows);
    })
})

// GET / get employees ordered by javascript ascending 
routes.get("/employees/sortJs", (req, res) => {
    let sql = "SELECT * FROM employee_skills Order by javascript";
    pool.query(sql).then(result => {
        console.log(result.rows);
        res.json(result.rows);
    })
})


// GET / get employees ordered by javscript descending
routes.get("/employees/sortJsDsc", (req, res) => {
    let sql = "SELECT * FROM employee_skills Order by javascript Desc";
    pool.query(sql).then(result => {
        console.log(result.rows);
        res.json(result.rows);
    })
})

// GET / get employees ordered by html ascending 
routes.get("/employees/sortHtml", (req, res) => {
    let sql = "SELECT * FROM employee_skills Order by html";
    pool.query(sql).then(result => {
        console.log(result.rows);
        res.json(result.rows);
    })
})


// GET / get employees ordered by html descending
routes.get("/employees/sortHtmlDsc", (req, res) => {
    let sql = "SELECT * FROM employee_skills Order by html Desc";
    pool.query(sql).then(result => {
        console.log(result.rows);
        res.json(result.rows);
    })
})


// GET / get employees ordered by css ascending 
routes.get("/employees/sortCss", (req, res) => {
    let sql = "SELECT * FROM employee_skills Order by css";
    pool.query(sql).then(result => {
        console.log(result.rows);
        res.json(result.rows);
    })
})


// GET / get employees ordered by css descending
routes.get("/employees/sortCssDsc", (req, res) => {
    let sql = "SELECT * FROM employee_skills Order by css Desc";
    pool.query(sql).then(result => {
        console.log(result.rows);
        res.json(result.rows);
    })
});

// GET / get employees ordered by email ascending 
routes.get("/employees/sortEmail", (req, res) => {
    let sql = "SELECT * FROM employee_skills Order by email";
    pool.query(sql).then(result => {
        console.log(result.rows);
        res.json(result.rows);
    })
});


// GET / get employees ordered by email descending
routes.get("/employees/sortEmailDsc", (req, res) => {
    let sql = "SELECT * FROM employee_skills Order by email Desc";
    pool.query(sql).then(result => {
        console.log(result.rows);
        res.json(result.rows);
    })
});






// // GET / get employees by region
// routes.get("/employees/:region", (req, res) => {
//     let region = (req.params.region);
//     let params = [region]
//     let sql = "SELECT * FROM employee_skills WHERE region = $1::varchar";
//     pool.query(sql, params).then(result => {
//         console.log(result.rows);
//         res.json(result.rows);
//     })
// })



// POST / create new employee
routes.post("/employees", (req, res) => {
    const employee = req.body;
    let sql = ` INSERT into employee_skills (employeeName, email, angular, javascript, HTML, CSS)
        VALUES ($1::text, $2::text, $3::int,$4::int,$5::int,$6::int) RETURNING *`;
    let params = [employee.employeeName, employee.email, employee.angular, employee.javascript, employee.html, employee.css];
    pool.query(sql, params).then(result => {
        res.status(201);
        res.json(result.rows[0])
    });

});




// PUT / update employee
routes.put("/employees/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const employee = req.body;
    // const sql = `UPDATE employee_skills
    //             SET employeeName=$1::text, email=$2::text, angular=$3::int, javascript=$4::int, html=$5::int, css=$6::int
    //             WHERE id=$7::int RETURNING *`;

    const sql = `UPDATE employee_skills
                SET email=$1::text
                WHERE id=$2::int RETURNING *`;
    const params = [employee.email, id];
    // const params = [employee.employeename, employee.email, employee.angular, employee.javascript, employee.html, employee.css, id];
    pool.query(sql, params).then(result => {
        res.status(200);
        res.send(result.rows[0]);
    });

});




// DELETE / delete employee
routes.delete("/employees/:id", (req, res) => {

    const id = parseInt(req.params.id);
    const params = [id];
    let sql = "DELETE from employee_skills WHERE id = $1::int";
    pool.query(sql, params).then(result => {
        res.status(204);
        res.send();
    })
});





// // GET / get employees ordered by skill level
// routes.get("/employees/:skill", (req, res) => {
//     let skill = (req.params.skill);
//     let params = [skill]
//     let sql = "SELECT * FROM employee_skills Order by $1::varchar DESC";
//     pool.query(sql, params).then(result => {
//         console.log(result.rows);
//         res.json(result.rows);
//     })
// })



// // GET by employee name
// attempting to query using like statement 
// could also do a get on init to pull in all the data and then loop through in the JS
// routes.get("/employees/:name", (req, res) => {
//     let name = ('%' + req.params.name);
//     let params = [name]
//     let sql = "SELECT * FROM employee_skills WHERE employeeName LIKE $1::varchar";
//     pool.query(sql, params).then(result => {
//         console.log(result.rows);
//         res.json(result.rows);
//     })
// })


module.exports = routes;