import Entypo from "@expo/vector-icons/Entypo";
import { Image, Pressable, Text, View } from "react-native";
import Checkbox from "expo-checkbox";
import { EditIcon, SelectedIcon, SelectIcon } from "@/constants/icons";
import { useState } from "react";
import { PaymentMethod } from "@/constants/images";
import { useRouter } from "expo-router";
export default function Checkout() {
  const [isChecked, setChecked] = useState(false);
  const [isFirstChecked, setFirstChecked] = useState(false);
  const navigation = useRouter();
  return (
    <View className="flex-1">
      <View className="flex-row justify-between mt-5 mx-4">
        <Text>2 Items in your cart</Text>
        <View className="flex items-center gap-x-2">
          <Text className="text-base">Total</Text>
          <Text className="text-[#4157FF] text-base">$185</Text>
        </View>
      </View>
      <Text className="mx-5 text-lg text-primary">Delivery Address</Text>
      <View className="mx-5 px-4 py-4 flex-row justify-between mt-3 border rounded  ">
        <View className="flex-row gap-x-3">
          <Image source={SelectedIcon} />
          <View className="">
            <Text className="text-primary">Home</Text>
            <Text className="">(205) 555-024</Text>
            <Text>1786 Wheeler Bridge</Text>
          </View>
        </View>

        <Pressable>
          <Image source={EditIcon} />
        </Pressable>
      </View>
      <View className="mx-5 px-4 py-4 flex-row justify-between mt-3  rounded  ">
        <View className="flex-row gap-x-3">
          <Image source={SelectIcon} />
          <View className="">
            <Text className="text-primary">Office</Text>
            <Text className="">(205) 555-024</Text>
            <Text>1786 Wheeler Bridge</Text>
          </View>
        </View>

        <Pressable>
          <Image source={EditIcon} />
        </Pressable>
      </View>
      <View className="mx-5 flex-row items-center justify-end">
        <Entypo name="plus" size={24} color="#4157FF" />
        <Text className="text-[#4157FF]">Add More</Text>
      </View>
      <View className="mx-5">
        <Text className="text-primary text-lg ">Payment Method</Text>
        <View className="flex-row  items-center mt-3">
          <Image source={PaymentMethod} className="mr-10" />
          <Text className="text-lg text-primary">Cash on Delivery</Text>
        </View>
      </View>
      <Pressable
        className="bg-[#4157FF] items-center mx-14 rounded-full py-3 mt-4"
        onPress={() => navigation.navigate("complete" as never)}
      >
        <Text className="text-white text-lg">Pay Now</Text>
      </Pressable>
    </View>
  );
}
