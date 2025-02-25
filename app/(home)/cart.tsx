import { Image, Pressable, Text, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { Category1, Category2 } from "@/constants/images";
import { FlashList } from "@shopify/flash-list";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { useRouter } from "expo-router";

const DATA = [
  {
    title: "Sugar free gold",
    subtitle: "bottle of 500 pellets",
    bg: Category1,
    quantity: "2",
    price: "25",
  },
  {
    title: "Sugar free gold",
    subtitle: "bottle of 500 pellets",
    bg: Category2,
    quantity: "2",
    price: "25",
  },
];
export default function Cart() {
  const navigation=useRouter()
  return (
    <View className="flex-1">
      <View className="flex-row justify-between my-10 mx-4">
        <Text>2 Items in your cart</Text>
        <View className="flex-row items-center gap-x-2">
          <Entypo name="plus" size={24} color="#4157FF" />
          <Text className="text-[#4157FF]">Add More</Text>
        </View>
      </View>
      <FlashList
        data={DATA}
        renderItem={({ item }) => (
          <View className="flex-row shadow-xl rounded-xl justify-between bg-[#F3F4F5] mb-3 mx-3">
            <View className="">
              <Image source={item.bg} className="w-50 h-50" />
            </View>
            <View className="flex-1 mx-3">
              <View className="flex-1 gap-y-2">
                <Text className="text-[#090F47] text-base">{item.title}</Text>
                <Text className="">{item.subtitle}</Text>
              </View>
              <Text className="text-[#4157FF] text-lg">${item.price}</Text>
            </View>
            <View className="flex-1 justify-between">
              <View className="items-end">
                <EvilIcons name="close-o" size={32} color="#000000" />
              </View>
              <View className="flex-row bg-[#F2F4FF] rounded-full mx-2 gap-x-2 items-center mb-5">
                <Pressable className="bg-[#DFE3FF] rounded-full">
                  <Entypo name="minus" size={24} color="#157FF" />
                </Pressable>
                <Text>{item.quantity}</Text>
                <Pressable className="bg-[#A0ABFF] rounded-full ">
                  <Entypo name="plus" size={24} color="white" />
                </Pressable>
              </View>
            </View>
          </View>
        )}
        estimatedItemSize={200}
      />
      <View className="flex-1 mx-5">
        <Text className="text-[#4157FF] font-bold text-base">
          Payment Summary
        </Text>
        <View className="gap-y-2 mt-2">
          <View className="flex-row justify-between items-center">
            <Text>Order Total</Text>
            <Text className="text-[#4157FF]">228.80</Text>
          </View>
          <View className="flex-row justify-between items-center">
            <Text>Items Discount</Text>
            <Text className="text-[#4157FF]">- 28.80</Text>
          </View>
          <View className="flex-row justify-between items-center">
            <Text>Coupon Discount</Text>
            <Text className="text-[#4157FF]">-15.80</Text>
          </View>
          <View className="flex-row justify-between items-center">
            <Text>Shipping</Text>
            <Text className="text-[#4157FF]">Free</Text>
          </View>
          <View className="flex-row justify-between items-center">
            <Text className="text-[#4157FF] text-lg">Total</Text>
            <Text className="text-[#4157FF]">182</Text>
          </View>
        </View>
        <Pressable
        onPress={()=>navigation.navigate("checkout" as never)}
         className="bg-primary items-center p-2 mx-10 mt-5 rounded-full ">
          <Text className="text-white text-lg">Place Order</Text>
        </Pressable>
      </View>
    </View>
  );
}
