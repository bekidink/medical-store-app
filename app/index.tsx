import { useNavigation } from "expo-router";
import { Image } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
export default function Index() {
  const navigation = useNavigation();
  return (
    <Onboarding
      onSkip={() => navigation.navigate("pin" as never)} // Navigate after skipping
      onDone={() => navigation.navigate("pin" as never)}
      pages={[
        {
          backgroundColor: "#fff",
          image: (
            <Image source={require("../assets/images/splash_image_1.png")} />
          ),
          title: "View and buy Medicine online",
          subtitle: "Done with React Native Onboarding Swiper",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image source={require("../assets/images/splash_image_1.png")} />
          ),
          title: "View and buy Medicine online",
          subtitle: "Done with React Native Onboarding Swiper",
        },
      ]}
    />
  );
}
