const sqlite3 = require('sqlite3').verbose();

// BACKEND FILE FOR MY DATABASES QUERIES

// je veux lier ma DB avec le frontEnd

const getDB = () => {
    //console.log("getDBToFRont workin ok")
    const sqlite3 = require('sqlite3').verbose();

    // open the database
    let db = new sqlite3.Database('./DB/DB.animals', sqlite3.OPEN_READONLY, (err) => {
        if (err) {
            console.error(err.message);
        }
        console.log(db.animals);
    });

    // close the database
    db.close((err) => {
        if (err) {
            console.error(err.message);
        }
        //console.log('Close the database connection.');
    });
};

const sendDBToFront = () => {
    let db = new sqlite3.Database('./DB/DB.animals', sqlite3.OPEN_READONLY, (err) => {
        if (err) {
            console.error(err.message);
        }
    });

    db.serialize(() => {
        db.each(`SELECT * FROM animals`, (err, row) => {
            if (err) {
                console.error(err.message);
            }
            console.log(row.nom + " " + row.ordre + " " + row.milieu_de_vie + " " + row.régime_alimentaire);
        });
    });

    db.close((err) => {
        if (err) {
            console.error(err.message);
        }
    });
}

exports.getDB = getDB;
exports.sendDBToFront = sendDBToFront;