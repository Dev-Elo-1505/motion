import { styles } from "@/styles/auth.styles";
import { Pressable, PressableProps, Text } from "react-native";

interface CustomButtonProps extends PressableProps {
  text: string;
  onPress: () => void;
}

const CustomButton = ({ text, onPress, ...props }: CustomButtonProps) => {
  return (
    <Pressable onPress={onPress} {...props} style={styles.primaryButton}>
      <Text style={styles.primaryButtonText}>{text}</Text>
    </Pressable>
  );
};

export default CustomButton;
