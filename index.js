require('dotenv').config();

const fs = require('fs');
const SerialPort = require('serialport');

const event_code = parseInt(process.env.EVENT_CODE);
const vendorId = process.env.VENDORID;
const productId = process.env.PRODUCTID;

const isPort = async () => {
  const portList = await SerialPort.list()
  const device = portList.filter((device) => {
    return ((device.vendorId === vendorId.toUpperCase() ||
            device.vendorId === vendorId)  && device.productId === productId);
  })
  if (device.length === 1) {
    return true
  }
  else {
    return false
  }
}

const getPort = async () => {
  const portList = await SerialPort.list()
  const device = portList.filter((device) => {
    return ((device.vendorId === vendorId.toUpperCase() ||
            device.vendorId === vendorId)  && device.productId === productId);
  })
  const path = device[0].comName;
  const port = new SerialPort(path)
  return port
}

const port = getPort();

const sendToPort = async (port, event_code) => {
  port.then(p => p.write(Buffer.from([event_code])))
}

sendToPort(port, event_code)
