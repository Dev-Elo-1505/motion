import { Link } from "expo-router"
import {View, Text} from "react-native"

const OnboardingScreen = () => {
    return(
        <View>
            <Text>OnboardingScreen</Text>
            <Link href="/(auth)/login">Go to login</Link>
        </View>
    )
}

export default OnboardingScreen