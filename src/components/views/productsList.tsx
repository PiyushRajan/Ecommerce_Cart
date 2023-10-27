import React, { useState,useEffect } from 'react'
import { Box,Text } from '@chakra-ui/react'
import Item from './Item'
import { useSelector } from "react-redux";
import { Root,Product } from '@/utils/types';

const ProductsList = () => {
  const [productLength, setProductLength] = useState<number | null>(null)

  const data = useSelector((state:Root)=> state?.initialData?.products);
  const selectedData = useSelector((state:Root)=>state?.filterData);

  const filteredData = data?.filter((product: Product) => {
    if (!selectedData || selectedData.length === 0) {
      return true;
    }
    return product.availableSizes.some((size: string) => selectedData.includes(size));
  });

  const filteredDataLength = filteredData ? filteredData.length : 0;

  useEffect(()=>{
    setProductLength(filteredDataLength);
  },[filteredData])

  return (
    <Box>
      <Text fontSize={"21px"}>{productLength} Product&apos;s found</Text>
      <Box display="grid" gridTemplateColumns={"220px 220px 220px 220px"} gap="20px">
      <Item/>
      </Box>
    </Box>
  )
}

export default ProductsList
