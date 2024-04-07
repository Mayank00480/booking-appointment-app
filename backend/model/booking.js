const db = require('../database/index')
class Booking{
    static onSave(userName , emailId , password){
       return db.execute('INSERT INTO bookingApp(userName , emailId , password) VALUES(?,?,?)',[userName , emailId , password]);
       
    }
    static fetchAll() {
        return db.execute('SELECT * FROM bookingApp');
    }
    static deleteById(id){
        return db.execute('DELETE FROM bookingApp where id = ?',[id]);
    }
}

module.exports = Booking;