import React from "react";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../features/modal/modalSlice";
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
            total <span>${`${total.toFixed(2)}`}</span>
          </h4>
        </div>
        <button
          onClick={() => {
            dispatch(openModal());
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
