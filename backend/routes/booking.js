const express = require('express');
const router = express.Router();
const appointmentControllers = require('../controllers/booking');
router.get('/apointments', appointmentControllers.getAppointment );
router.post('/add' ,appointmentControllers.postAppointment);
router.delete('/delete/:id',appointmentControllers.deleteAppointment);

module.exports = router;