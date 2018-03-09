const chalk = require('chalk');
module.exports = client => {
    console.log(chalk.rgb(255, 31, 31).underline(`Disconected ${new Date}`));
};
