import React, {useState} from "react";
import Button from "../button/button";

export default function Counter({ initValue }) {

  const [value, setValue] = useState(initValue || 1)

  const handlerPlus = () => {
    setValue(value + 1)
    console.log("123")
  }

  const handlerMinus = () => {
    setValue(value - 1)
    console.log("321")
  }



  return(
    <>
      <Button type="button" onClick={handlerMinus}>-</Button>
      <span>{value}</span>
      <Button type="button" onClick={handlerPlus}>+</Button>
    </>
  )
}