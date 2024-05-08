const chalk = require('chalk');
const moment = require('moment');
const winston = require('winston');

const colorfulLogger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ level, message, timestamp }) => {
      const formattedTimestamp = chalk.pink(moment(timestamp).format('YYYY-MM-DD HH:mm:ss'));
      const formattedLevel = getFormattedLevel(level);
      return `${formattedTimestamp} ${formattedLevel}: ${message}`;
    })
  ),
  transports: [
    new winston.transports.Console()
  ],
});

function getFormattedLevel(level) {
  switch (level) {
    case 'info':
      return chalk.red(level);
    case 'warn':
      return chalk.green(level);
    case 'error':
      return chalk.yellow(level);
    default:
      return level;
  }
}

module.exports = colorfulLogger;
