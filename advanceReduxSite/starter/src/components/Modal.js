import React from "react";

const Modal = () => {
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>Remove all items from your shopping cart?</h4>
        <div className="btn-container">
          <div type="button" className="btn confirm-btn">
            confirm
          </div>
          <div type="button" className="btn clear-btn">
            Cancel
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
