const httpErrorServer = (res, err) => {
  console.log(err);
  res.status(500).send({
    error: "Server error",
  });
};

module.exports = { httpErrorServer };
