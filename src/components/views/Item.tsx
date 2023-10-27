import { VStack,Image,Text } from '@chakra-ui/react'
import React from 'react'
import AddToCartButton from '../buttons/AddToCartButton'
import { useSelector } from "react-redux";
import { Root,Product } from '@/utils/types';

const Item = () => {
  const data = useSelector((state:Root)=> state?.initialData?.products);
  const selectedData = useSelector((state:Root)=>state?.filterData);

  const filteredData = data?.filter((product: Product)=> {
    if (!selectedData || selectedData.length === 0) {
      return true;
    }
    return product.availableSizes.some((size: string)=> selectedData.includes(size));
  })


  return (
    filteredData?.map((val:Product)=> (
    <VStack width="fit-content" key={val.id}>
      <Image src={val.image} alt='image' width="220px" height="250px"></Image>
      <Text fontWeight={600} fontSize="21px" textAlign={"center"} height={"50px"}>{val.title}</Text>
      <Text fontWeight={600}>${val.price}</Text>
      <AddToCartButton productId={val.id}/>
    </VStack>
    ))
  )
}

export default Item;
