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
  const rainbowColors = [ 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
  let currentColorIndex = 0; // Keep track of color

  return chalk[rainbowColors[currentColorIndex++ % rainbowColors.length]](level);
}

  }
}

module.exports = colorfulLogger;
