import { COLORS } from "@/constants/theme";
import { useAuth } from "@clerk/expo";
import { Redirect } from "expo-router";
import { ActivityIndicator, View } from "react-native";


const Index = () => {
  const {isSignedIn, isLoaded} = useAuth()
  if (!isLoaded) {
    return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color={COLORS.primary} />
    </View>)
  }

  if (isSignedIn) {
    return <Redirect href="/(tabs)" />
  }

  return <Redirect href="/(auth)/login" />
};

export default Index;