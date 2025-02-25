import { SuccessBg } from "@/constants/images";
import { useNavigation, useRouter } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";

export default function Complete() {
  const navigation = useRouter();
  return (
    <View className=" flex-1 bg-white justify-center items-center ">
      <View className="flex justify-center items-center ">
        <Image source={SuccessBg} />
      </View>
      <Text className="text-primary text-2xl mt-3">Thank You</Text>
      <Text className="mx-10 my-4 text-base">
        Your Order will be delivered with invoice #9ds69hs. You can track the
        delivery in the order section.
      </Text>
      <Pressable
        className="absolute bottom-10 bg-primary px-14 py-4 rounded-full"
        onPress={() => navigation.navigate("(home)" as never)}
      >
        <Text className="text-white">Continue Order</Text>
      </Pressable>
    </View>
  );
}
