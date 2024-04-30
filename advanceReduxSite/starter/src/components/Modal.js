import React from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../features/modal/modalSlice";
import { clearCart } from "../features/cart/cartSlice";

const Modal = () => {
  const dispatch = useDispatch();

  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>Remove all items from your shopping cart?</h4>
        <div className="btn-container">
          <div onClick={()=>{
            dispatch(clearCart());
            dispatch(closeModal());
          }} type="button" className="btn confirm-btn">
            confirm
          </div>
          <div onClick={()=>dispatch(closeModal())} type="button" className="btn clear-btn">
            Cancel
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
