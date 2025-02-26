import { CartIcon, NotificationIcon } from "@/constants/icons";
import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import { Image, TouchableOpacity, View } from "react-native";

export default function productRootLayout() {
    const navigation=useRouter()
  return (
    <Stack>
      <Stack.Screen
        name="[slug]"
        options={() => ({
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.back()}>
              <Ionicons name="arrow-back" size={24} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View className="flex-row items-center space-x-4">
              <Image source={NotificationIcon} />
              <Image source={CartIcon} />
            </View>
          ),
        })}
      />
    </Stack>
  );
}
