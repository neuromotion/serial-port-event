require('dotenv').config();

const fs = require('fs');
const SerialPort = require('serialport')

const event_code = process.env.EVENT_CODE;
const manufacturer = process.env.MANUFACTURER;

const getPort = async () => {
  const portList = await SerialPort.list()
  const device = portList.filter((device) => {
    return device.manufacturer === manufacturer;
  })
  const path = device[0].comName;
  const port = new SerialPort(path)
  return port
}

const writeToPort = async() => {
  const port = await getPort();
  port.write(Buffer.from([event_code]))
}

writeToPort();
