## Node.js script to detect event marker's serial port and send event signal.

### Usage
##### Set up
Install dependencies:
```shell
npm install
```
Find the manufacturer of the device and add to `.env` file.
```shell
npm run find
```
This will print all objects with serial port connections to the terminal. Find the corresponding device, and add the `manufacturer` to the `.env` file.  
For example:
```ini
MANUFACTURER=Teensyduino
EVENT_CODE=1
```
##### Run script  
This will send the event code set in the `.env` file to the device.

```shell
npm start
```
