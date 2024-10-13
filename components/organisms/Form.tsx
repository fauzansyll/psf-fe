import React from "react";

import Book from "../atoms/Book";
import BgPopUp from "../molecules/Toast";

const Form = () => {
  return (
    <div className="position-fixed  top-0 start-0 end-0 bottom-0">
      <BgPopUp />
      <Book />
    </div>
  );
};

export default Form;
