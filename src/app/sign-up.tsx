import { useSignUp } from "@clerk/clerk-expo";
import { Link, router } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function SignUpPage() {
  const { isLoaded, signUp, setActive } = useSignUp();

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState("");

  const onSignUpPress = async () => {
    if (!isLoaded) return;

    try {
      await signUp.create({
        emailAddress,
        password,
      });

      await signUp.prepareEmailAddressVerification({
        strategy: "email_code",
      });

      setPendingVerification(true);
    } catch (err: any) {
      console.log("Sign up error:", JSON.stringify(err, null, 2));
      Alert.alert(
        "Sign up error",
        err?.errors?.[0]?.longMessage || "Something went wrong"
      );
    }
  };

  const onVerifyPress = async () => {
    if (!isLoaded) return;

    try {
      const result = await signUp.attemptEmailAddressVerification({
        code,
      });

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        router.replace("/home");
      } else {
        Alert.alert("Verification not complete", "Please try again.");
      }
    } catch (err: any) {
      console.log("Verification error:", JSON.stringify(err, null, 2));
      Alert.alert(
        "Verification error",
        err?.errors?.[0]?.longMessage || "Something went wrong"
      );
    }
  };

  if (pendingVerification) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          padding: 24,
          gap: 16,
        }}
      >
        <Text style={{ fontSize: 28, fontWeight: "700" }}>
          Verify your email
        </Text>

        <TextInput
          placeholder="Enter verification code"
          value={code}
          onChangeText={setCode}
          style={{
            borderWidth: 1,
            borderColor: "#ccc",
            padding: 14,
            borderRadius: 10,
          }}
        />

        <TouchableOpacity
          onPress={onVerifyPress}
          style={{
            backgroundColor: "black",
            padding: 14,
            borderRadius: 10,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontWeight: "600" }}>
            Verify Email
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        padding: 24,
        gap: 16,
      }}
    >
      <Text style={{ fontSize: 28, fontWeight: "700" }}>Create account</Text>

      <TextInput
        placeholder="Email"
        autoCapitalize="none"
        keyboardType="email-address"
        value={emailAddress}
        onChangeText={setEmailAddress}
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 14,
          borderRadius: 10,
        }}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 14,
          borderRadius: 10,
        }}
      />

      <TouchableOpacity
        onPress={onSignUpPress}
        style={{
          backgroundColor: "black",
          padding: 14,
          borderRadius: 10,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontWeight: "600" }}>Sign Up</Text>
      </TouchableOpacity>

      <Link href="/sign-in" style={{ textAlign: "center" }}>
        Already have an account? Sign in
      </Link>
    </View>
  );
}