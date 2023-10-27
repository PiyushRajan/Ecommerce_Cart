import React,{useEffect} from "react";
import { Box } from "@chakra-ui/react";
import SideBar from "../views/sideBar";
import ProductsList from "../views/productsList";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "@/dataslice";
import {Root} from "../../utils/types"


const ProductsPage = () => {

  const dispatch = useDispatch();

  const fetchData = () => {
    try {
      axios.get("products.json").then((res) => {
        dispatch(setData(res?.data));
      });
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(()=> {
    fetchData();
  },[])

  return (
    <Box>
      <Box display={"flex"}>
        <Box className="Sidebar" flex={1} justifySelf={"flex-start"}>
          <SideBar />
        </Box>
        <Box className="Products-wrapper" flex={2}>
          <ProductsList/>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductsPage;
