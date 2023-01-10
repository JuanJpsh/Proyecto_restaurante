const httpErrorServer = (res, err) => {
  console.error(err);
  res.status(500).send({
    error: "Server error",
  });
};

module.exports = { httpErrorServer };
