import { useSignIn } from "@clerk/clerk-expo";
import { Link, router } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function SignInPage() {
  const { isLoaded, signIn, setActive } = useSignIn();

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const onSignInPress = async () => {
    if (!isLoaded) return;

    try {
      const result = await signIn.create({
        identifier: emailAddress,
        password,
      });

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        router.replace("/home");
      } else {
        Alert.alert("Sign in not complete", "Please try again.");
      }
    } catch (err: any) {
      console.log("Sign in error:", JSON.stringify(err, null, 2));
      Alert.alert(
        "Sign in error",
        err?.errors?.[0]?.longMessage || "Something went wrong"
      );
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        padding: 24,
        gap: 16,
      }}
    >
      <Text style={{ fontSize: 28, fontWeight: "700" }}>Welcome back</Text>

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
        onPress={onSignInPress}
        style={{
          backgroundColor: "black",
          padding: 14,
          borderRadius: 10,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontWeight: "600" }}>Sign In</Text>
      </TouchableOpacity>

      <Link href="/sign-up" style={{ textAlign: "center" }}>
        Don’t have an account? Sign up
      </Link>
    </View>
  );
}