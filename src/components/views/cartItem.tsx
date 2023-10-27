import React from "react";
import { Box, HStack, Image, VStack, Text, Button } from "@chakra-ui/react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useSelector } from "react-redux";
import { Product,Root } from "@/utils/types";
import { useDispatch } from "react-redux";
import { setCartData } from "@/dataslice";

const CartItem = () => {
  const dispatch = useDispatch();

  const cartData = useSelector((state:Root) => state?.cartData);

  const handleDelete = (index: number) => {
    const updatedCartData = [...cartData];
    updatedCartData.splice(index, 1);
    dispatch(setCartData(updatedCartData));
  };

  const handleIncrementProd = (id: number) => {
    const updatedCartData = cartData.map((product: Product) => {
      if (product.id === id) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    dispatch(setCartData(updatedCartData));
  };

  const handleDecrementProd = (id: number) => {
    const updatedCartData = cartData.map((product: Product) => {
      if (product.id === id && product.quantity > 1) {
        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    });
    dispatch(setCartData(updatedCartData));
  };

  if (!cartData || cartData.length === 0) {
    return (
      <HStack gap="20px" width={"40vw"} backgroundColor="whitesmoke" p="20px">
        <Text>Nothing In Cart.</Text>
      </HStack>
    );
  }

  return cartData?.map((product: Product, index: number) => (
    <HStack
      gap="20px"
      width={"fit-content"}
      backgroundColor="whitesmoke"
      p="20px"
      key={product.id}
    >
      <Image
        alt="image"
        src={product.image}
        width="250px"
        height="100%"
      ></Image>
      <Box display={"flex"} flexDirection="column">
        <Text fontWeight={600} fontSize="21px">
          {product.title}
        </Text>
        {/* <Text fontWeight={600} fontSize={"18px"}>Size:{size}</Text> */}
        <Text fontWeight={600} fontSize={"18px"}>
          ${product.price}
        </Text>
        <HStack>
          <HStack width={"400px"}>
            <Button
              border="1px solid gray"
              borderRadius="100"
              fontSize="18px"
              cursor="pointer"
              onClick={() => handleDecrementProd(product.id)}
              isDisabled={product.quantity < 2}
            >
              -
            </Button>
            <Text fontWeight={600} fontSize={"18px"}>
              {product.quantity}
            </Text>
            <Button
              border="1px solid gray"
              borderRadius="100"
              fontSize="18px"
              cursor="pointer"
              onClick={() => handleIncrementProd(product.id)}
            >
              +
            </Button>
          </HStack>
          <Box
            fontWeight={600}
            fontSize="25px"
            cursor="pointer"
            onClick={() => handleDelete(index)}
          >
            <RiDeleteBin6Line />
          </Box>
        </HStack>
      </Box>
    </HStack>
  ));
};

export default CartItem;
