import * as React from "react";
import { FlatList } from "react-native";
import { products } from "../Products";
import ProductCard from "./ProductCard";

export default function ProductsList({ addToCart }) {
  return (
    <FlatList
      data={products}
      keyExtractor={(product) => product.id}
      renderItem={({ item }) => <ProductCard {...item} addToCart={addToCart} />}
      contentContainerStyle={{
        paddingHorizontal: 15,
      }}
    />
  );
}
