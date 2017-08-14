import { combineReducers } from 'redux';
import CurrencyReducer from './CurrencyReducer';
import GraphDataReducer from './GraphDataReducer';
import AllCurrenciesReducer from './AllCurrenciesReducer';

const rootReducer = combineReducers({
  currencies: CurrencyReducer,
  graphData: GraphDataReducer,
  allCurrencies: AllCurrenciesReducer,
});

export default rootReducer;
