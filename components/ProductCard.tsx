import React from "react";
import { View, Text, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Product } from "@/types/models/Product";

const ProductCard = (data: Product) => {
  return (
    <View className="w-40 bg-white rounded-2xl shadow-md p-3 items-center relative">
      {/* Sale Badge */}
      <View className="absolute top-0 left-0 bg-red-500 px-3 py-1 rounded-tl-2xl rounded-br-2xl">
        <Text className="text-white text-xs font-bold">
          {data.onSale && "SALE"}
        </Text>
      </View>

      {/* Product Image */}
      <Image
        source={require(data.image)} // Adjust path accordingly
        className="w-28 h-24 mt-4"
        resizeMode="contain"
      />

      {/* Product Info */}
      <View className="mt-3 items-center">
        <Text className="text-sm font-bold text-center">{data.name}</Text>
        <Text className="text-lg font-bold text-black mt-1">${data.price}</Text>

        {/* Rating */}
        <View className="flex-row items-center bg-yellow-400 px-2 py-1 rounded-full mt-2">
          <FontAwesome name="star" size={14} color="#fff" />
          <Text className="text-white font-bold text-sm ml-1">
            {data.rating}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;
