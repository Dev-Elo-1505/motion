import { useAuth } from "@clerk/expo";
import { Redirect, Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function AuthLayout() {
  const {isSignedIn} = useAuth()

  if (isSignedIn) {
    return <Redirect href="/(tabs)" />
  }
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="onboarding" />
      <Stack.Screen name="login" />
      <Stack.Screen name="signup" />
    </Stack>
  );
}
