import { CartIcon } from "../icons";
import { useSelector } from "react-redux";
const Navbar = () => {


  // on the below line , useally developers type state instead of store. but for understand purpose i am using store because it is actually accessing the store itself.
  const { amount } = useSelector((store) => store.cart);

  return (
    <nav>
      <div className="nav-center">
        <h3>Redux Toolkit</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
