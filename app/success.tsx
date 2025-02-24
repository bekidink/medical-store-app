import { SuccessBg } from "@/constants/images";
import { Image, Pressable, Text, View } from "react-native";

export default function Success() {
  return (
    <View className=" flex-1 bg-white justify-center items-center ">
      <View className="flex justify-center items-center ">
        <Image source={SuccessBg} />
      </View>
      <Text className="text-[#090F47] text-lg mt-3">Phone Number Verified</Text>
      <Text className="mx-10 my-4 text-base">
        Congradulations, your phone number has been verified. You can start
        using the app
      </Text>
      <Pressable className="items-center justify-center mt-24 px-12 bg-primary rounded-full py-2">
        <Text className="text-white text-base uppercase">Continue</Text>
      </Pressable>
    </View>
  );
}
