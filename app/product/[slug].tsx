import { Product1 } from "@/constants/images";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Stack, useLocalSearchParams } from "expo-router";
export default function ProductDetails() {
  const scrollOffsetValue = useSharedValue<number>(0);
   const { slug } = useLocalSearchParams<{ slug: string }>();
  return (
    <ScrollView className="flex-1 bg-white px-5 py-2">
         <Stack.Screen options={{ title: slug }} />
      <Text className="text-primary text-lg">Sugar Free Gold Low Calories</Text>
      <Text>Etiam mollis metus non purus </Text>
      <View className="items-center p-3 bg-[#F8F8F8] roundee-xl">
        <Image source={Product1} />
      </View>
      <View className="flex-row justify-between mt-3 py-2 items-center border-b">
        <View className="flex-1 ">
          <View className="flex-row items-center space-x-2">
            <Text className="line-through">$90</Text>
            <Text className="text-primary text-lg">$50</Text>
          </View>
          <Text>Etiam mollis </Text>
        </View>
        <View className="flex-row items-center space-x-3">
          <Pressable>
            <MaterialIcons name="add-box" size={24} color="#006AFF" />
          </Pressable>

          <Text className="text-[#006AFF]">Add to Cart</Text>
        </View>
      </View>
      <View className="flex-1 py-2">
        <Text className="text-primary capitalize text-base">Package size</Text>
        <View className="flex-row justify-between space-x-2  mt-3">
          <Pressable className="flex-1 border border-[#FFA41B] rounded items-center  gap-y-1">
            <Text className="text-[#FFA41B] font-bold">$123</Text>
            <Text className="text-[#FFA41B] ">500 pellets</Text>
          </Pressable>
          <Pressable className="flex-1 shadow-xl items-center bg-[#F5F5F5] gap-y-1">
            <Text className="text-primary ">$123</Text>
            <Text className="text-primary ">500 pellets</Text>
          </Pressable>
          <Pressable className="flex-1 shadow-xl items-center bg-[#F5F5F5] gap-y-1">
            <Text className="text-primary ">$123</Text>
            <Text className="text-primary ">500 pellets</Text>
          </Pressable>
        </View>
        <Text className="my-2 text-primary font-semibold">Product Details</Text>
        <Text className="text-align">
          Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi ut
          nisi odio. Nulla facilisi. Nunc risus massa, gravida id egestas a,
          pretium vel tellus. Praesent feugiat diam sit amet pulvinar finibus.
          Etiam et nisi aliquet, accumsan nisi sit.
        </Text>
        <Text className="my-2 text-primary font-semibold">Ingredients</Text>
        <Text className="text-align ">
          Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi ut
          nisi odio. Nulla facilisi. Nunc risus massa, gravida id egestas a,
          pretium vel tellus. Praesent feugiat diam sit amet pulvinar finibus.
          Etiam et nisi aliquet, accumsan nisi sit.
        </Text>
        <View className="flex-row mt-2 items-center space-x-4">
          <Text className="text-primary font-semibold">Expiry Date</Text>
          <Text>25/12/2023</Text>
        </View>
        <View className="flex-row my-2 items-center space-x-4">
          <Text className="text-primary font-semibold">Brand Name</Text>
          <Text>Something</Text>
        </View>
        <Pressable className="bg-primary items-center mb-5 mx-6 py-4 rounded-full">
          <Text className="text-white text-lg uppercase">Go to Cart</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
