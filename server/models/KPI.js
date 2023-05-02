import mongoose from 'mongoose';
import {loadType} from 'mongoose-currency';

const Schema = mongoose.Schema;
loadType(mongoose); // use loadType to display currencies correctly

const daySchema = new Schema(
  {
    date: String,
    revenue: {
      // allow support for 2 decimals and a number & conversion
      type: mongoose.Types.Currency, // this multiplies value * 100
      currency: 'USD',
      get: (v) => v / 100, // get real value by dividing by 100
    },
    expenses: {
      type: mongoose.Types.Currency,
      currency: 'USD',
      get: (v) => v / 100,
    },
  },
  {toJSON: {getters: true}}, // setting to use get properties to grab currencies
);

const monthSchema = new Schema(
  {
    month: String,
    revenue: {
      type: mongoose.Types.Currency,
      currency: 'USD',
      get: (v) => v / 100,
    },
    expenses: {
      type: mongoose.Types.Currency,
      currency: 'USD',
      get: (v) => v / 100,
    },
    operationalExpenses: {
      type: mongoose.Types.Currency,
      currency: 'USD',
      get: (v) => v / 100,
    },
    nonOperationalExpenses: {
      type: mongoose.Types.Currency,
      currency: 'USD',
      get: (v) => v / 100,
    },
  },
  {toJSON: {getters: true}},
);

const KPISchema = new Schema(
  {
    totalProfit: {
      type: mongoose.Types.Currency,
      currency: 'USD',
      get: (v) => v / 100,
    },
    totalRevenue: {
      type: mongoose.Types.Currency,
      currency: 'USD',
      get: (v) => v / 100,
    },
    totalExpenses: {
      type: mongoose.Types.Currency,
      currency: 'USD',
      get: (v) => v / 100,
    },
    expensesByCategory: {
      type: Map,
      of: {
        type: mongoose.Types.Currency,
        currency: 'USD',
        get: (v) => v / 100,
      },
    },
    monthlyData: [monthSchema],
    dailyData: [daySchema],
  },
  {timestamps: true, toJSON: {getters: true}},
);

const KPI = mongoose.model('KPI', KPISchema);

export default KPI;