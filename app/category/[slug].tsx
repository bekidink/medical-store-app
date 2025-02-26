import ProductCard from "@/components/ProductCard";
import {
  Category1,
  Category2,
  Category3,
  Product1,
  Product2,
} from "@/constants/images";
import { Product } from "@/types/models/Product";
import { FlashList } from "@shopify/flash-list";
import { Stack, useLocalSearchParams } from "expo-router";
import { Image, Pressable, Text } from "react-native";
import { View } from "react-native";
const DATA = [
  {
    title: "Sugar Substitute",
    bg: Category1,
  },
  {
    title: "Juices & Vinegars",
    bg: Category2,
  },
  {
    title: "Vitamins ",
    bg: Category3,
  },
];
const ProductData = [
  {
    name: "Accu-check Active Test Strip",
    id: "1",
    price: 23,
    rating: 45,
    image: Product1,
  },
  {
    name: "Accu-check Active Test Strip",
    id: "2",
    price: 23,
    rating: 45,
    image: Product2,
  },
  {
    name: "Accu-check Active Test Strip",
    id: "3",
    price: 23,
    rating: 45,
    image: Product2,
  },
  {
    name: "Accu-check Active Test Strip",
    id: "4",
    price: 23,
    rating: 45,
    image: Product2,
  },
  {
    name: "Accu-check Active Test Strip",
    id: "5",
    price: 23,
    rating: 45,
    image: Product2,
  },

  {
    name: "Accu-check Active Test Strip",
    id: "6",
    price: 23,
    rating: 45,
    image: Product2,
  },
];
export default function Category() {
    const { slug } = useLocalSearchParams<{ slug: string }>();
  return (
    <View className="flex-1 bg-white px-5">
      <Stack.Screen options={{ title: slug }} />
      <Text className="text-primary text-lg">Categories</Text>
      <View className="flex-row justify-between gap-2">
        {DATA.map((item) => (
          <Pressable className="flex-col  space-x-0 p-1">
            <Image source={item.bg} />
            <Text className="mt-3 text-primary w-full">{item.title}</Text>
          </Pressable>
        ))}
      </View>
      <Text className="text-primary text-lg">All Products</Text>
      <FlashList
        data={ProductData}
        renderItem={({ item }) => (
          <ProductCard
            id={item?.id!}
            name={item?.name!}
            image={item?.image}
            price={0}
            rating={0}
            onSale={true}
          />
        )}
        estimatedItemSize={200}
        numColumns={2}
      />
    </View>
  );
}
