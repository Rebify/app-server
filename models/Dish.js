const mongoose = require('mongoose');

const { Schema } = mongoose;

const dishSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    section: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    ingredients: [
      {
        type: String,
      },
    ],
    menuId: {
      type: mongoose.Types.ObjectId,
      ref: 'Menu',
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: (doc, ret) => {
        ret.id = doc._id;
        delete ret._id;
        delete ret.__v;
        return ret;
      },
    },
  }
);

const Dish = mongoose.model('Dish', dishSchema);
module.exports = Dish;
