import { styles } from "@/styles/auth.styles";
import { ReactNode } from "react";
import {
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";

interface CustomInputProps extends TextInputProps {
  label?: string;
  helperText?: string;
  rightIcon?: ReactNode;
  onPressRightIcon?: () => void;
}

const CustomInput = ({
  label,
  helperText,
  rightIcon,
  onPressRightIcon,
  style,
  ...inputProps
}: CustomInputProps) => {
  return (
    <View style={styles.fieldGroup}>
      {!!label && <Text style={styles.label}>{label}</Text>}

      <View style={styles.passwordRow}>
        <TextInput
          style={[styles.input, rightIcon ? styles.passwordInput : null, style]}
          {...inputProps}
        />

        {rightIcon ? (
          <TouchableOpacity
            style={styles.eyeButton}
            activeOpacity={0.7}
            onPress={onPressRightIcon}
            disabled={!onPressRightIcon}
          >
            {rightIcon}
          </TouchableOpacity>
        ) : null}
      </View>

      {!!helperText && <Text style={styles.helperText}>{helperText}</Text>}
    </View>
  );
};

export default CustomInput;
