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
    <View
      className="flex-1 items-center justify-center gap-4 bg-background px-6"
    >
      <Text className="text-3xl font-extrabold text-foreground">Home</Text>

      <View
        className="items-center justify-center rounded-2xl border-2 border-primary bg-card px-5 py-4"
      >
        <Text className="text-xl font-bold text-primary">Custom CSS works</Text>
      </View>

      <Text className="text-2xl font-bold text-foreground">Welcome:</Text>
      <Text className="text-lg text-muted-foreground">{user?.primaryEmailAddress?.emailAddress}</Text>

      <TouchableOpacity
        onPress={async () => {
          await signOut();
          router.replace("/sign-in");
        }}
        className="rounded-xl bg-primary px-5 py-3"
      >
        <Text className="font-semibold text-primary-foreground">Logout</Text>
      </TouchableOpacity>
    </View>
  );
}