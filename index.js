const addDays = require("date-fns/addDays");

function getDateAfterXDays(days) {
  let newDate = addDays(new Date(2020, 8, 22), days);
  console.log(
    `${newDate.getDate()}-${newDate.getMonth() + 1}-${newDate.getFullYear()}`
  );
}

module.exports = getDateAfterXDays();
