import React from "react";
import Button from "../../ui/button/button";

function Nav() {
  return (
    <nav>
      <Button onClick={() => console.log("открытие окна оформления заказа")}>Купить</Button>
    </nav>
  );
}

export default Nav;
