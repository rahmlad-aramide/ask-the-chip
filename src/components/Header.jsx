import React from "react";
import Button from "./Button";

const Header = () => {
  return (
    <div>
      <div>
        <h1>Welcome to our Community of Entrepreneurs</h1>
        <h2>
          And indeed the worst of my faults was a certain impatient gaiety of
          disposition, such as has made the happiness of many, but such as I
          found it hard to reconcile with.
        </h2>
        <div>
            <Button path='sign-in' title='Sign In' />
        </div>
      </div>
    </div>
  );
};

export default Header;
