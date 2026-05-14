import { COLORS } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b0b0f",
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 24,
  },
  header: {
    alignItems: "flex-end",
    marginBottom: 32,
  },
  closeButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#1a1a21",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 1,
  },
  title: {
    fontWeight: "800",
    fontSize: 28,
    color: "#f5f5f5",
    marginBottom: 28,
    letterSpacing: -0.3,
  },
  fieldGroup: {
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    color: "#e7e7ea",
    marginBottom: 8,
  },
  input: {
    height: 46,
    borderWidth: 1,
    borderColor: "#2a2a33",
    borderRadius: 4,
    paddingHorizontal: 12,
    fontSize: 14,
    color: "#f5f5f5",
    backgroundColor: "#121218",
  },
  passwordRow: {
    position: "relative",
    justifyContent: "center",
  },
  passwordInput: {
    paddingRight: 44,
  },
  eyeButton: {
    position: "absolute",
    right: 12,
    height: 46,
    justifyContent: "center",
    alignItems: "center",
  },
  helperText: {
    fontSize: 12,
    color: "#a1a1aa",
    marginTop: 8,
  },
  primaryButton: {
    height: 38,
    borderRadius: 4,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
  },
  primaryButtonDisabled: {
    backgroundColor: "#2a2a33",
  },
  buttonPressed: {
    opacity: 0.8,
  },
  primaryButtonText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "700",
  },
  termsText: {
    fontSize: 11,
    lineHeight: 16,
    color: "#a1a1aa",
    marginTop: 12,
  },
  termsLink: {
    textDecorationLine: "underline",
    color: "#e5e5e5",
  },
  dividerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 22,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#2a2a33",
  },
  dividerText: {
    marginHorizontal: 12,
    fontSize: 12,
    color: "#a1a1aa",
  },
  socialButton: {
    height: 40,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#2a2a33",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: 14,
    backgroundColor: "#121218",
  },
  socialButtonText: {
    fontSize: 14,
    color: "#f5f5f5",
    fontWeight: "600",
    marginLeft: 10,
  },
  socialIcon: {
    width: 18,
    height: 18,
  },

  error: {
    color: "#ff6b6b",
    fontSize: 12,
    marginTop: 6,
    marginLeft: 2,
  },
  loginSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 16,
    gap: 4,
  },
  loginPrompt: {
    fontSize: 13,
    color: "#a1a1aa",
  },
  loginLink: {
    fontSize: 13,
    color: COLORS.primary,
    fontWeight: "600",
    textDecorationLine: "underline",
  },
});
