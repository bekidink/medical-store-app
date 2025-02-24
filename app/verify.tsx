import color from "@/themes/app.colors";
import { fontSizes, windowHeight, windowWidth } from "@/themes/app.constant";
import { Stack, useNavigation } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import OTPTextInput from "react-native-otp-textinput";
export default function Verify() {
    const navigation=useNavigation()
  return (
    <View className="flex-1 px-6 py-5 bg-white">
      <Text className="text-[#090F47] text-xl">Enter the verify code</Text>
      <Text className="text-[#090F47] text-base my-4">
        We just send you a verification code via phone +91 9265614292
      </Text>
      <OTPTextInput
        handleTextChange={(code) => console.log(code)}
        inputCount={6}
        textInputStyle={style.otpTextInput}
        tintColor={color.subtitle}
        autoFocus={false}
      />
      <Pressable
        className="items-center justify-center my-4 mx-10 bg-primary rounded-full py-2"
        onPress={() => navigation.navigate("success" as never)}
      >
        <Text className="text-white text-lg">Submit Code</Text>
      </Pressable>
      <Text className="text-[#090F47] mx-14">
        The verify code will expire in 00:59
      </Text>
      <Pressable className="items-center justify-center my-4 mx-10  rounded-full py-2">
        <Text className="text-primary text-base">Resend Code</Text>
      </Pressable>
    </View>
  );
}

export const style = StyleSheet.create({
  otpTextInput: {
    backgroundColor: color.lightGray,
    borderColor: color.lightGray,
    borderWidth: 0.5,
    borderRadius: 6,
    width: windowWidth(60),
    height: windowHeight(40),
    borderBottomWidth: 0.5,
    color: color.subtitle,
    textAlign: "center",
    fontSize: fontSizes.FONT22,
    marginTop: windowHeight(10),
  },
});
