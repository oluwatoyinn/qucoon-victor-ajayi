// import logo from './logo.svg';
import React from "react"
import './App.css';
import {Route, Switch,} from 'react-router-dom'
import {Provider} from "react-redux"
import {persistGate} from 'redux-persist/integration/react'
import {store,persistor} from './store'
import BillCategories from "./components/BillCategories";
import NavBar from './components/NavBar';
import BillerCategoriesList from "./components/BillerCategoriesList";
import BillerProductList from "./components/BillerProductList";
import BillerValidation from "./components/BillerValidation";
import BillerPayment from "./components/BillerPayment";

function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <persistGate persistor={persistor}>
          <div className="wrapperBackground">
            <NavBar />
            <Switch>
              <Route exact path="/" component={BillCategories} />
              <Route  path="/billerCategories/:id" component={BillerCategoriesList} />
              <Route path="/billerProduct" component={BillerProductList} />
              <Route path="/billerValidate" component={BillerValidation} />
              <Route path="/billerPayment" component={BillerPayment} />
            </Switch>
          </div>
        </persistGate>
      </Provider>
    </React.Fragment>
  );
}
export default App;
