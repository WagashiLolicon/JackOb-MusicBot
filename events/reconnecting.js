const chalk = require('chalk');
module.exports = client => {
    console.log(chalk.rgb(255, 136, 0).underline(`Reconnected ${new Date}`));
};
