import { Logobg } from "@/constants/images";
import { useNavigation } from "expo-router";
import { Button, Image, Pressable, Text, TextInput, View } from "react-native";

export default function Pin() {
  const navigation = useNavigation();
  return (
    <View className=" flex-1 bg-white justify-center items-center ">
      <View className="flex justify-center items-center ">
        <Image
          source={Logobg}
          className="w-40 h-40 mx-6 items-center justify-center"
        />
        <Text className="text-[#090F47] text-xl ">Elbethel Medical</Text>
      </View>
      <Text className="text-[#090F47] mx-12 mt-10">
        Please Enter your Mobile Number to Login/Sign Up
      </Text>
      <View className="w-full  items-center justify-center mt-4 px-12">
        <TextInput
          className="border rounded-xl w-full "
          placeholder="+2519000000"
        />
      </View>

      <Pressable
        className="bg-primary mt-12 py-2 px-20 rounded-xl text-white"
        onPress={() => navigation.navigate("verify" as never)}
      >
        <Text className="text-white">Continue</Text>
      </Pressable>
    </View>
  );
}
