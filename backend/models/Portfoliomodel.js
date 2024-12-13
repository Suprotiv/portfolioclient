const mongoose = require('mongoose');

const PortfolioItemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  video: {
    type: String,
    required: true
  },
  orientation: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true, // restricts type to these values
  }
});

const PortfolioItem = mongoose.model('portfolioitems', PortfolioItemSchema);

module.exports = PortfolioItem;
