const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const theatersService = require("./theaters.service");

//Controller function to return list of theaters
async function list(req, res, next) {
  const data = await theatersService.list();
  res.json({ data });
}

module.exports = {
    list: asyncErrorBoundary(list)
}