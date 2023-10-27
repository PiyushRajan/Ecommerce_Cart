import React from "react";
import { Button } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { Root,Product } from '@/utils/types';
import { useRouter } from "next/router";
import { setCartData } from "@/dataslice";

const AddToCartButton = ({productId}: {productId : number}) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const data = useSelector((state:Root)=> state?.initialData?.products);
  const cartData = useSelector((state:Root)=> state?.cartData);

  const handleAddToCart = () => {
    const productInCart = cartData?.find((product:Product)=> product.id === productId);
    if(productInCart) {
      router.push("/cart")
    }

    const productToAdd = data?.find((product:Product)=> product.id === productId);
    if(productToAdd && !productInCart) {
      const cartProduct = [...cartData,productToAdd];
      dispatch(setCartData(cartProduct));
  }
  }
  return (
    <Button
      variant="unstyled"
      backgroundColor="black"
      color="white"
      width="100%"
      p="15px 0"
      cursor="pointer"
      onClick={handleAddToCart}
    >
      {cartData.some((product:Product)=> product.id === productId) ? "Go To Cart" : "Add to Cart"}
    </Button>
  );
};

export default AddToCartButton;
