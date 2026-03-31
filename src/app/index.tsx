import { useAuth } from "@clerk/clerk-expo";
import { Redirect } from "expo-router";
import { ActivityIndicator, View } from "react-native";

export default function IndexPage() {
  const { isLoaded, isSignedIn } = useAuth();
  // is loaded means that the auth state has been determined, and we can show the appropriate screen which means their is session on the app 

  if (!isLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  if (isSignedIn) {
    return <Redirect href="/home" />;
  }

  return <Redirect href="/sign-in" />;
}