import React from "react";

const PrimaryButton = ({ text, onClickHandler, sx }) => {
  return (
    <button
      onClick={onClickHandler}
      className={
        sx +
        " text-gray-100 font-medium rounded-sm text-xs bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 "
      }
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
