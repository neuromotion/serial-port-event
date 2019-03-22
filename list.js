require('dotenv').config();

const SerialPort = require('serialport');

const event_code = parseInt(process.env.EVENT_CODE);
const manufacturer = process.env.MANUFACTURER;

SerialPort.list().then(console.log);
