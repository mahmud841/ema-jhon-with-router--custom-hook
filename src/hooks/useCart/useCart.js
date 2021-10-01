import { useEffect } from "react";
import { useState } from "react"

const useCart = products => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (products.length){
      const savedCart = getStoreCart()
  }, [products])
}