require('dotenv').config();

const fs = require('fs');
const SerialPort = require('serialport');

const manufacturer = process.env.MANUFACTURER;
const event_code = process.env.EVENT_CODE;

const isPort = async () => {
  const portList = await SerialPort.list()
  const device = portList.filter((device) => {
    return device.manufacturer === manufacturer;
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
    return device.manufacturer === manufacturer;
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
