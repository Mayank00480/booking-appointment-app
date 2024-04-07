const Booking = require('../model/booking');
exports.getAppointment = (req,res,next) => {
  Booking.fetchAll()
   .then(resp => {
    res.json(resp);
   })
   .catch(err => {
    console.log(err);
   })
}

exports.postAppointment = (req,res,next) => {
const {userName , email , phoneNumber} =  req.body.data;
Booking.onSave(userName ,email , phoneNumber)
.then(resp => {
    res.send('success');
})
.catch(err => {
    console.log(err);
})
}

exports.deleteAppointment = (req,res,next) => {
   
    console.log( req.params.id);
    Booking.deleteById(req.params.id)
    .then(resp => {
        res.json(resp)
    })
    .catch(err => {
        console.log(err);
    })
} 