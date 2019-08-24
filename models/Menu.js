const mongoose = require('mongoose');

const { Schema } = mongoose;

const menuSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (doc, ret) => {
        ret.id = doc._id;
        delete ret._id;
        delete ret.__v;
        return ret;
      },
    },
  }
);

menuSchema.virtual('dishes', {
  ref: 'Dish',
  localField: '_id',
  foreignField: 'menuId',
});

const Menu = mongoose.model('Menu', menuSchema);
module.exports = Menu;
