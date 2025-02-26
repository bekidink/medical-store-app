import { NotificationIcon } from "@/constants/icons";
import { Image, ScrollView, Text, View } from "react-native";

export default function Notification() {
  return (
    <ScrollView className="flex-1 bg-white p-4">
      <View className="flex-row justify-between space-x-2 mt-14 shadow-xl border border-[#E7E9EC] rounded-xl p-1">
        <Image source={NotificationIcon} />
        <View className="flex-1 gap-y-2">
          <Text>
            We know that — for children AND adults — learning is most effective
            when it is
          </Text>
          <Text>Aug 12, 2020 at 12:08 PM</Text>
        </View>
        <View className="h-10"></View>
      </View>
      <View className="flex-row justify-between space-x-2 mt-4 shadow-xl border border-[#E7E9EC] rounded-xl p-1">
        <Image source={NotificationIcon} />
        <View className="flex-1 gap-y-2">
          <Text>
            We know that — for children AND adults — learning is most effective
            when it is
          </Text>
          <Text>Aug 12, 2020 at 12:08 PM</Text>
        </View>
        <View className="h-10"></View>
      </View>
      <View className="flex-row justify-between space-x-2 mt-4 shadow-xl border border-[#E7E9EC] rounded-xl p-1">
        <Image source={NotificationIcon} />
        <View className="flex-1 ">
          <Text>
            We know that — for children AND adults — learning is most effective
            when it is
          </Text>
          <Text className="mt-2">Aug 12, 2020 at 12:08 PM</Text>
        </View>
        <View className="h-10"></View>
      </View>
      <View className="flex-row justify-between space-x-2 mt-4 shadow-xl border border-[#E7E9EC] rounded-xl p-1">
        <Image source={NotificationIcon} />
        <View className="flex-1 gap-y-2">
          <Text>
            We know that — for children AND adults — learning is most effective
            when it is
          </Text>
          <Text>Aug 12, 2020 at 12:08 PM</Text>
        </View>
        <View className="h-10"></View>
      </View>
    </ScrollView>
  );
}
