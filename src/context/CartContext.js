import React, { useState } from "react";

const CartContext = React.createContext([]);

export const CartContextProvider = (props) => {
  const [cartList, setCartList] = useState([]);
  const [cartButton, setCartButton] = useState(false);

  function CartIsClicked() {
    setCartButton((prev) => !prev);
  }

  function displayAmount(id) {
    const foundItem = cartList.find((item) => item.id === id);
    return foundItem ? foundItem.quantity : 0;
  }

  function indexPresent(id) {
    const foundItem = cartList.find((item) => item.id === id);
    return !!foundItem;
  }

  function increaseQuantity(id) {
    setCartList((prevCartList) => {
      const itemIndex = prevCartList.findIndex((item) => item.id === id);

      if (itemIndex !== -1) {
        prevCartList[itemIndex].quantity += 1;
        prevCartList[itemIndex].totalPrice =
          prevCartList[itemIndex].quantity * prevCartList[itemIndex].price;
        return [...prevCartList];
      }
      return prevCartList;
    });
  }

  function dereaseQuantity(id) {
    setCartList((prevCartList) => {
      const itemIndex = prevCartList.findIndex((item) => item.id === id);

      if (itemIndex !== -1) {
        if (prevCartList[itemIndex].quantity === 0) {
          return [...prevCartList];
        }
        prevCartList[itemIndex].quantity -= 1;
        prevCartList[itemIndex].totalPrice =
          prevCartList[itemIndex].quantity * prevCartList[itemIndex].price;
        return [...prevCartList];
      }
      return prevCartList;
    });
  }

  function addToList(item) {
    setCartList((prev) => [...prev, item]);
  }

  function logOrder() {
    console.log("Ordering...");
    console.log(cartList);
    CartIsClicked();
    setCartList([]);
  }

  // console.log(cartList);

  return (
    <CartContext.Provider
      value={{
        increaseQuantity,
        dereaseQuantity,
        addToList,
        cartList,
        indexPresent,
        CartIsClicked,
        cartButton,
        displayAmount,
        logOrder,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
