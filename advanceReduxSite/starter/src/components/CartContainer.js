import React from "react";
import CartItem from "./CartItem";
import { clearCart, calculateTotals } from "../features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
const CartContainer = () => {
  const { cartItem, amount, total, isLoading } = useSelector(
    (store) => store.cart
  );

  const dispatch = useDispatch();

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>Your Bag</h2>
          <h4 className="empty-cart">is Currently Empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>Your Bag</h2>
        <div>
          {cartItem.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
      </header>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${`${total}`}</span>
          </h4>
        </div>
        <button
          onClick={() => {
            dispatch(clearCart());
          }}
          className="btn clear-btn"
        >
          Clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
