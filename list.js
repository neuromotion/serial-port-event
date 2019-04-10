require('dotenv').config();

const SerialPort = require('serialport');
const vendorId = process.env.VENDORID;
const productId = process.env.PRODUCTID;

// SerialPort.list().then(values => values.filter(v => ((v.vendorId === vendorId.toUpperCase() || v.vendorId === vendorId)  && v.productId === productId))).then(console.log);
SerialPort.list().then(console.log)
