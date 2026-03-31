import { useAuth, useUser } from "@clerk/clerk-expo";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function HomePage() {
  const { isLoaded, isSignedIn, signOut } = useAuth();
  const { user } = useUser();

  if (!isLoaded) return null;

  if (!isSignedIn) {
    router.replace("/sign-in");
    return null;
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", gap: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Home</Text>
        <View className="flex-1 items-center justify-center bg-white">
            <Text className="text-2xl font-bold text-red-600">NativeWind works</Text>
        </View>

      <Text
      className="text-2xl font-bold text-red-600"
      >Welcome:</Text>
      <Text className="text-lg">{user?.primaryEmailAddress?.emailAddress}</Text>

      <TouchableOpacity
        onPress={async () => {
          await signOut();
          router.replace("/sign-in");
        }}
        style={{
          backgroundColor: "black",
          padding: 12,
          borderRadius: 8,
        }}
      >
        <Text style={{ color: "white" }}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}