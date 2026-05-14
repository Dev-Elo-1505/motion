import { useAuth } from "@clerk/expo";
import { Redirect } from "expo-router";


const Index = () => {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) return null;

  if (isSignedIn) {
    return <Redirect href="/(tabs)" />;
  }

  return <Redirect href="/(auth)/login" />;
};

export default Index;