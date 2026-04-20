import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#fc5200",
        tabBarInactiveTintColor: "white",
        tabBarStyle: {
          backgroundColor: "#000",
          elevation: 0,
          paddingBottom: 8,
          paddingTop: 8,
          borderTopWidth: 0,
          height: 54,
          position: "absolute",
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          title: "Activity",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="radio-button-on" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "You",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="trending-up" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
