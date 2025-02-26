import { StyleSheet, Image, Platform, View, Text } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { UserIcon } from '@/constants/icons';
import { UserBg } from '@/constants/images';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from "@expo/vector-icons/Entypo";
export default function TabTwoScreen() {
  return (
    <View className="flex-1 p-5">
      <Text className="text-primary text-lg">My Profile</Text>
      <View className="flex-row mt-3 gap-x-2">
        <Image source={UserBg} />
        <View>
          <Text className="text-base">Hi,Elebethel Dinku</Text>
          <Text>Welcome to Elebethel medical store</Text>
        </View>
      </View>
      <View className="flex-1 mt-6">
        <View className="flex-row justify-between shadow-2xl">
          <View className="flex-row gap-x-3 ">
            <FontAwesome name="edit" size={24} color="black" />
            <Text className="text-primary">Edit Profile</Text>
          </View>

          <Entypo name="chevron-small-right" size={24} color="black" />
        </View>
        <View className="flex-row justify-between shadow-2xl mt-4">
          <View className="flex-row gap-x-3 ">
            <FontAwesome name="edit" size={24} color="black" />
            <Text className="text-primary">My Orders</Text>
          </View>

          <Entypo name="chevron-small-right" size={24} color="black" />
        </View>
        <View className="flex-row justify-between shadow-2xl mt-4">
          <View className="flex-row gap-x-3 ">
            <FontAwesome name="edit" size={24} color="black" />
            <Text className="text-primary">Billing</Text>
          </View>

          <Entypo name="chevron-small-right" size={24} color="black" />
        </View>
        <View className="flex-row justify-between shadow-2xl mt-4">
          <View className="flex-row gap-x-3 ">
            <FontAwesome name="edit" size={24} color="black" />
            <Text className="text-primary">FAQ</Text>
          </View>

          <Entypo name="chevron-small-right" size={24} color="black" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
