// import { styles } from "@/styles/home.styles";
import { Show, useClerk, useUser } from "@clerk/expo";
import { Pressable, Text, View, StyleSheet } from "react-native";

const HomeScreen = () => {
    const { signOut } = useClerk()
    const { user } = useUser()
return (
    <View style={styles.container}>
        <Text style={{color: "black"}}>Home screen</Text>
        <Show when="signed-in">
        <Text style={{color: "white"}}>Hello {user?.emailAddresses[0].emailAddress}</Text>
        <Pressable style={styles.button} onPress={() => signOut()}>
          <Text style={{color: "white"}}>Sign out</Text>
        </Pressable>
      </Show>
    </View>
)
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    gap: 16,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#0a7ea4',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
})
