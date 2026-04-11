import { useAuth } from "@clerk/clerk-expo";
import { Redirect, Stack } from "expo-router";
import { NativeTabs } from "expo-router/build/native-tabs/NativeTabs";
import { ActivityIndicator, useColorScheme, View } from "react-native";
import { Tabs } from "expo-router";

export default function HomeLayout() {
  const { isLoaded, isSignedIn } = useAuth();
  const colorSheme=useColorScheme();
  const isDark = colorSheme === "dark";
  const tabTintColor = isDark ? "hsl(142 70% 54%)" : "hsl(147 75% 33%)";

  if (!isLoaded) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <ActivityIndicator />
      </View>
    );
  }

  if (!isSignedIn) {
    return <Redirect href="/sign-in" />;
  }

  return (
  <NativeTabs tintColor={tabTintColor}>
    <NativeTabs.Trigger name="home">
      <NativeTabs.Trigger.Icon
        sf={{
          default: "list.bullet.clipboard",
          selected: "list.bullet.clipboard.fill",
        }}
        md="checklist"
      />
      <NativeTabs.Trigger.Label>List</NativeTabs.Trigger.Label>
    </NativeTabs.Trigger>

    <NativeTabs.Trigger name="planner">
      <NativeTabs.Trigger.Icon
        sf={{
          default: "plus.circle",
          selected: "plus.circle.fill",
        }}
        md="add_circle"
      />
      <NativeTabs.Trigger.Label>Planner</NativeTabs.Trigger.Label>
    </NativeTabs.Trigger>

    <NativeTabs.Trigger name="insights">
      <NativeTabs.Trigger.Icon
        sf={{
          default: "chart.bar",
          selected: "chart.bar.fill",
        }}
        md="bar_chart"
      />
      <NativeTabs.Trigger.Label>Insights</NativeTabs.Trigger.Label>
    </NativeTabs.Trigger>
  </NativeTabs>
);
}