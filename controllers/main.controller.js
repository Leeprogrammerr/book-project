

const mainController = async (req, res) => {
  try {

    res.render("index")
  } catch (error) {
    console.log(error);
  }
};

module.exports = mainController;
