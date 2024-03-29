import React, { useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";
import Payment from "./Payment";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from "./Orders"

const promise = loadStripe(
  'pk_test_51OP53MGjqjzw2KutWXI0K69oTOLYfdnyXHaf5FzMLehjbaJClJvgG64ohamLsFXp4ZdrhXB4DTBxvnOMCt5fHYs000kGOvQL4J'
);

function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <div>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
            path="/orders"
            element={
              <>
              <Header/>
              <Orders/>

              </>
            }
            />
            <Route path="/payment"
              element={
                <>
                <Header/>
                <Elements stripe={promise}>
                <Payment />
              </Elements>
              </>
            }
          />
          <Route
              path="/checkout"
              element={
                <>
                  <Header />
                  <Checkout />
                </>
              }
            />
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Home />
                </>
              }
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;