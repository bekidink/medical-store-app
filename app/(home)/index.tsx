import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  TextInput,
  ScrollView,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { HomeAd1, HomeBg, HomeMed, UserBg } from "@/constants/images";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { services } from "@/services";
import { FlashList } from "@shopify/flash-list";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
const DATA = [
  {
    title: "Accu-check Active",
    subtitle: "Test Strip",
    price: "112",
    rating: "2",
    bg: HomeMed,
  },
  {
    title: "Accu-check Active",
    subtitle: "Test Strip",
    price: "112",
    rating: "2",
    bg: HomeMed,
  },
  {
    title: "Accu-check Active",
    subtitle: "Test Strip",
    price: "112",
    rating: "2",
    bg: HomeMed,
  },
  {
    title: "Accu-check Active",
    subtitle: "Test Strip",
    price: "112",
    rating: "2",
    bg: HomeMed,
  },
];
export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (text: string) => {
    setSearchQuery(text);
  };

  return (
    <View className="flex-1">
      <Image
        source={HomeBg}
        className="w-full absolute top-0  right-0 left-0 z-[-1]"
      />
      <View className="position top-10 mx-4">
        <View className="flex-row justify-between items-center">
          <Image source={UserBg} />
          <View className="flex-row gap-x-3">
            <Ionicons name="notifications-sharp" size={24} color="black" />
            <Ionicons name="notifications-sharp" size={24} color="black" />
          </View>
        </View>
        <Text className="text-white text-lg mt-5">Hi,Kobeki</Text>
        <Text className="text-white text-lg mt-2">
          Welcome to Nilkanth Medical Store
        </Text>
        <View className="relative -bottom-5 bg-white h-10 rounded-full">
          <TextInput
            className="text-base p-2 text-gray-900"
            placeholder="Search Medicine & Healthcare Products"
            placeholderTextColor="#6b7280"
            value={searchQuery}
            onChangeText={handleSearch}
          />
        </View>
      </View>
      <ScrollView className="mt-20 mx-3">
        <Text className="text-secondary text-lg">Top Categories</Text>
        <View className="flex-row gap-x-9 mt-3 ">
          {services.map((item, i) => (
            <View className="flex">
              <Image source={item.bg} />
              <Text className="text-base text-secondary">{item.title}</Text>
            </View>
          ))}
        </View>
        <Image source={HomeAd1} className="w-full mt-2 rounded-xl " />
        <View className="flex-row justify-between mt-2">
          <Text>Deals of the Day</Text>
          <Text>More</Text>
        </View>
        <View className="mx-5">
          <FlashList
            data={DATA}
            renderItem={({ item }) => (
              <View className="flex-1 shadow-xl bg-[#F3F4F5]">
                <View className="items-center justify-center">
                  <Image source={item.bg} />
                </View>
                <Text className="text-xs">{item.title}</Text>
                <Text className="text-xs">{item.title}</Text>
                <Text className="text-xs text-secondary mt-1">
                  RS.{item.price}
                </Text>
                <View className=" flex-row items-center absolute bottom-0 bg-[#FFC000] py-[0.5] gap-x-1 right-2 w-10 rounded-l-full">
                  <FontAwesome5 name="star" size={10} color="white" />{" "}
                  <Text className="text-white">{item.rating}</Text>
                </View>
              </View>
            )}
            estimatedItemSize={200}
            numColumns={2}
          />
        </View>
      </ScrollView>
    </View>
  );
}
