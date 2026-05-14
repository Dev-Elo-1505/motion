import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import { styles } from "@/styles/auth.styles";
import { useAuth, useSignUp } from "@clerk/expo";
import { useSignInWithGoogle } from "@clerk/expo/google";
import { Ionicons } from "@expo/vector-icons";
import { Redirect, useRouter } from "expo-router";
import { useState } from "react";
import { Platform, Text, TouchableOpacity, View } from "react-native";

const SignupScreen = () => {
  const { errors, signUp, fetchStatus } = useSignUp();
  const { startGoogleAuthenticationFlow } = useSignInWithGoogle();
  const { isSignedIn } = useAuth();
  const router = useRouter();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  if (Platform.OS !== "ios" && Platform.OS !== "android") return null;

  const handleGoogleAuth = async () => {
    setLoading(true)
    try {
      const { createdSessionId, setActive } = await startGoogleAuthenticationFlow()

      if (createdSessionId && setActive) {
        await setActive({session: createdSessionId})
        router.replace('/(tabs)')
      }
    } catch (error: any) {
       if (error?.code === 'SIGN_IN_CANCELLED' || error?.code === '-5') {
        return
      }

      console.error('Google sign-in error:', JSON.stringify(error, null, 2))
    } finally {
      setLoading(false)
    }
  };

  const finishSignUp = async () => {
    await signUp.finalize({
      navigate: ({ session }) => {
        if (session?.currentTask) {
          console.log(session?.currentTask);
          return;
        }
        router.replace("/(tabs)");
      },
    });
  };

  const handleSignUp = async () => {
    setLoading(true);
    try {
      const { error } = await signUp.password({
        emailAddress,
        password,
      });

      if (error) {
        console.error(JSON.stringify(error, null, 2));
        return;
      }

      await signUp.verifications.sendEmailCode();
    } catch (err: any) {
      console.error(`Sign Up Error:: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async () => {
    setLoading(true);
    try {
      await signUp.verifications.verifyEmailCode({ code });

      if (signUp.status === "complete") {
        await finishSignUp();
      } else {
        console.error("Sign-up attempt not complete:", signUp);
      }
    } catch (err: any) {
      console.error("Verification attempt not complete:", signUp);
    } finally {
      setLoading(false);
    }
  };

  if (signUp.status === "complete" || isSignedIn) {
    return <Redirect href="/(tabs)" />;
  }

  const needsEmailVerification =
    signUp.status === "missing_requirements" &&
    signUp.unverifiedFields.includes("email_address") &&
    signUp.missingFields.length === 0;

  if (needsEmailVerification) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Verify your account</Text>
        <CustomInput
          label="Enter your verification code"
          value={code}
          onChangeText={setCode}
          keyboardType="numeric"
        />
        {errors.fields.code && (
          <Text style={styles.error}>{errors.fields.code.message}</Text>
        )}
        <CustomButton
          text={loading ? "Verifying..." : "Verify"}
          style={({ pressed }) => [
            styles.primaryButton,
            fetchStatus === "fetching" && styles.primaryButtonDisabled,
            pressed && styles.buttonPressed,
          ]}
          onPress={handleVerify}
          disabled={fetchStatus === "fetching"}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.closeButton}
          activeOpacity={0.8}
          onPress={() => router.back()}
        >
          <Ionicons name="close" size={18} color="#f5f5f5" />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Create an Account</Text>

        <CustomInput
          label="Email"
          placeholder="Email"
          placeholderTextColor="#6b7280"
          value={emailAddress}
          onChangeText={setEmailAddress}
          autoFocus
          autoCapitalize="none"
          autoComplete="email"
          keyboardType="email-address"
        />
        {errors.fields.emailAddress && (
          <Text style={styles.error}>{errors.fields.emailAddress.message}</Text>
        )}

        <CustomInput
          label="Password"
          placeholder="Password"
          placeholderTextColor="#6b7280"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          helperText="Passwords must contain at least 8 characters."
          rightIcon={
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <Ionicons name="eye-outline" size={18} color="#f5f5f5" />
              ) : (
                <Ionicons name="eye-off-outline" size={18} color="#f5f5f5" />
              )}
            </TouchableOpacity>
          }
        />
        {errors.fields.password && (
          <Text style={styles.error}>{errors.fields.password.message}</Text>
        )}
        <CustomButton
          text={loading ? "Creating account..." : "Sign Up"}
          onPress={handleSignUp}
        />

        <View style={styles.loginSection}>
          <Text style={styles.loginPrompt}>Already have an account?</Text>
          <TouchableOpacity onPress={() => router.push("/(auth)/login")}>
            <Text style={styles.loginLink}>Login here</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.termsText}>
          By signing up you are agreeing to our{" "}
          <Text style={styles.termsLink}>Terms of Service</Text>. View our{" "}
          <Text style={styles.termsLink}>Privacy Policy</Text>.
        </Text>

        <View style={styles.dividerRow}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>or</Text>
          <View style={styles.dividerLine} />
        </View>

        <TouchableOpacity
          style={styles.socialButton}
          activeOpacity={0.85}
          onPress={handleGoogleAuth}
        >
          <Ionicons
            name="logo-google"
            size={18}
            color="#f5f5f5"
            style={styles.socialIcon}
          />
          <Text style={styles.socialButtonText}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton} activeOpacity={0.85}>
          <Ionicons
            name="logo-apple"
            size={18}
            color="#f5f5f5"
            style={styles.socialIcon}
          />
          <Text style={styles.socialButtonText}>Continue with Apple</Text>
        </TouchableOpacity>
      </View>
      <View nativeID="clerk-captcha" />
    </View>
  );
};

export default SignupScreen;
