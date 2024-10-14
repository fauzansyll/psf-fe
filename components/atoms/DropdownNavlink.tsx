import React from "react";
import Button from "./Button";

const DropdownNavlink = () => {
  return (
    <div>
      <div className="font-weight-bold">Home</div>
      <div className="font-weight-bold">About</div>
      <div className="font-weight-bold">Field</div>
      <div className="font-weight-bold">Facilities</div>
      <Button color="secondary" type="button" onClick={() => {}}>
        Sign In
      </Button>
    </div>
  );
};

export default DropdownNavlink;
