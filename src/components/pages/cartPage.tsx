import React from "react";
import CartItem from "../views/cartItem";
import { Box, HStack,Text, Button } from "@chakra-ui/react";
import {useSelector} from "react-redux"
import { Product,Root } from "@/utils/types";


const CartPage = () => {
  const cartData = useSelector((state:Root)=> state?.cartData);
  const productNumbers = cartData.length;

  const price = cartData.reduce((previous:number,current:Product)=>{
    return current.price*current.quantity + previous;
  },0).toFixed(2)

  const handleOrder = () => {
    alert(`Order Placed,Pay $${price} on delivery.`)
  }

  return (
    <Box display="flex" gap={"20px"} padding={"50px"}>
      <Box flex={1} display={"flex"} flexDirection={"column"} gap={"20px"}>
        <CartItem />
      </Box>
      <Box
        flex={1}
        display="flex"
        flexDirection="column"
        p={"20px"}
        gap={"20px"}
        height={"fit-content"}
        backgroundColor={"whitesmoke"}
      >
        <HStack justifyContent={"space-between"}>
          <Text fontWeight={600} fontSize={"21px"}>Total Amount for ({productNumbers}) items</Text>
          <Text fontWeight={600} fontSize={"21px"}>${price}</Text>
        </HStack>
        <Button
          variant="unstyled"
          backgroundColor="black"
          color="white"
          width="100%"
          p="15px 0"
          cursor="pointer"
          fontSize={"16px"}
          onClick={handleOrder}
        >
          Place Order
        </Button>
      </Box>
    </Box>
  );
};

export default CartPage;
