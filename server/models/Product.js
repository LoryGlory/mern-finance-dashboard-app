import mongoose from 'mongoose';
import {loadType} from 'mongoose-currency';

const Schema = mongoose.Schema;
loadType(mongoose); // use loadType to display currencies correctly

const ProductSchema = new Schema(
  {
    price: {
      type: mongoose.Types.Currency,
      currency: 'USD',
      get: (v) => v / 100,
    },
    expense: {
      type: mongoose.Types.Currency,
      currency: 'USD',
      get: (v) => v / 100,
    },
    transactions: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Transaction', // refer to transaction schema object
    }],
  },
  {timestamps: true, toJSON: {getters: true}},
);

const Product = mongoose.model('Product', ProductSchema);

export default Product;