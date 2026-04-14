import { useAuth, useUser } from "@clerk/clerk-expo";
import { router } from "expo-router";
import { ScrollView } from "react-native";
import { Text, TouchableOpacity, View } from "react-native";
import TabScreenBackground from "../components/TabScreenBackground";
import HeroScreenLayout from "../components/list/HeroScreenLayout";
import { useGroceryStore } from "../store/grocery-store";
import PendingItemCard from "../components/list/PendingItemCard";
import CompletedItemsSection from "../components/list/CompletedItemsSection";

export default function ListItemPage() {
  const {items}=useGroceryStore();
  const pendingitems=items.filter(item=>!item.purchased);
  return (
    <ScrollView
      className="bg-background flex-1 py-4"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ padding: 20, gap: 14 }}>
      <TabScreenBackground />
      <HeroScreenLayout/>

      <View
      className="flex-row items-center justify-between px-1"
      >
        <Text className="text-sm font-semibold uppercase tracking-[1px] text-muted-foreground">
          Shopping items
        </Text>
        <Text className="text-sm text-muted-foreground">{pendingitems.length} active</Text>
      </View>
      {pendingitems.map((item) => (
        <PendingItemCard key={item.id} item={item} />
      ))}
      <CompletedItemsSection />
    </ScrollView>
  );
}