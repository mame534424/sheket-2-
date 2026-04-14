import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useGroceryStore } from '@/app/store/grocery-store'

const HeroScreenLayout = () => {
    const { items, loadItems } = useGroceryStore();
    useEffect(() => {
        loadItems();
    }, [])
    console.log("Grocery items in HeroScreenLayout:", items);
    const completedItems = (items.filter(item => item.purchased)).length;
    const pendingItems = items.length - completedItems;
    const completionRate = items.length ? Math.round((completedItems / items.length) * 100) : 0;
    const today = new Date();

    const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
    });

  return (
    
    <View className="rounded-3xl bg-primary p-5">
  
        {/* Date + label */}
        <Text className="text-sm font-semibold uppercase tracking-[1px] text-primary-foreground/70">
            Today • {formattedDate}
        </Text>

        <Text className="mt-1 text-3xl font-extrabold text-primary-foreground">
            Your Grocery Board
        </Text>

        {/* Stats */}
        <Text className="mt-1 text-sm text-primary-foreground/80">
            {pendingItems} pending · {completedItems} completed
        </Text>

        {/* Progress bar */}
        <View className="mt-4 overflow-hidden rounded-full bg-white/50">
            <View
            className="h-2 rounded-full bg-secondary"
            style={{ width: `${completionRate}%` }}
            />
        </View>

</View>
  );
  
}

export default HeroScreenLayout