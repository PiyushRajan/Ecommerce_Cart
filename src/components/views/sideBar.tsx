import { Box, VStack, Text, HStack } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { useRouter } from "next/router";
import { setFilteredData } from "@/dataslice";
import {useSelector, useDispatch} from "react-redux";
import { Root } from '@/utils/types';


const SideBar = () => {
  const cartData = useSelector((state:Root)=> state?.cartData);

  const cartLength = cartData.length;

  const dispatch = useDispatch();

  const router = useRouter();

  const selectedSizes = useSelector((state:Root)=>state?.filterData)

  const sizes = ["XS", "S", "M", "ML", "L", "XL", "XXL"];

  const handleCart = () => {
    router.push("/cart");
  };

  const handleSelectSize = (index:number) => {
    if(selectedSizes !== null) {
      const selectedSize = sizes[index];
      if (selectedSizes.includes(selectedSize)){
        const updatedSize = selectedSizes.filter((size:string)=> size !== selectedSize);
        dispatch(setFilteredData(updatedSize));
      }
      else{
        dispatch(setFilteredData([...selectedSizes,selectedSize]));
      }
    }
  }
  


  return (
    <Box>
      <VStack>
        <Text fontSize="21px" fontWeight={600}>
          Sizes:
        </Text>
        <HStack>
          {sizes.map((ele, index) => (
            <Box
              key={index}
              width="45px"
              height="45px"
              borderRadius="100"
              display="flex"
              justifyContent="center"
              alignItems="center"
              cursor="pointer"
              backgroundColor={
                selectedSizes.includes(ele) ? "black" : "rgb(236, 236, 236)"
              }
              color={selectedSizes.includes(ele) ? "white" : "black"}
              onClick={()=>handleSelectSize(index)}
            >
              {ele}
            </Box>
          ))}
        </HStack>
        <HStack
          justifyContent={"center"}
          alignItems={"center"}
          fontSize={"30px"}
          backgroundColor={"black"}
          color={"white"}
          width={"70px"}
          height={"70px"}
          borderRadius={"100"}
          marginTop={"80px"}
          onClick={handleCart}
          cursor={"pointer"}
          position={"relative"}
        >
          <FaShoppingCart />
          <Box
            position={"absolute"}
            left="36px"
            top="7px"
            textAlign={"center"}
            borderRadius={"7px"}
            width={"18px"}
            height={"18px"}
            backgroundColor={"#ff6161"}
            border={"1px solid #fff"}
            fontWeight={600}
            color={"white"}
            fontSize={"12px"}
          >
            {cartLength}
          </Box>
        </HStack>
      </VStack>
    </Box>
  );
};

export default SideBar;
