import React from "react";

const ModalForm = ({ buttonText, ButtonIcon }) => {
  return (
    <div>
      <button
        className="btn w-full lg:w-auto"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        <ButtonIcon />
        {buttonText}
      </button>
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ModalForm;
