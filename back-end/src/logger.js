const logger = (req, res, next) => {
  // console.clear()
  console.log("\n",
    "-----------------------------\n", 
    "<//////    Request    //////>\n",
    "req.body: \n", req.body, "\n",
    "-----------------------------\n",
  )
  next()
}

module.exports = logger