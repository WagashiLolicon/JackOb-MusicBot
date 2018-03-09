const chalk = require('chalk');
module.exports = client => {
    console.log(chalk.rgb(0, 255, 0).underline(`I\'m Online ${new Date}`));
};
