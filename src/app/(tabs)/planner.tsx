import { View, Text, ScrollView} from 'react-native'
import React from 'react'
import { useGroceryStore } from '../store/grocery-store';
import TabScreenBackground from '../components/TabScreenBackground';
import { FontAwesome6 } from "@expo/vector-icons";
import PlannerHeroImage from '../components/planner/PlannerHeroImage';
import PlanViewFormCard from '../components/planner/PlanViewFormCard';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';

const PlannerScreen
 = () => {
  const {items}=useGroceryStore();
  const pendingitems=items.filter(item=>!item.purchased);
  const highPriorityItems=pendingitems.filter(item=>item.priority==="high");
  const totalUnits=pendingitems.reduce((sum,item)=>sum+item.quantity,0);

  return (
    <KeyboardAwareScrollView
    bottomOffset={80}
    className="bg-background flex-1 py-4"
    contentInsetAdjustmentBehavior="automatic"
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{ padding: 20, gap: 14 }}
    keyboardShouldPersistTaps="handled"
    >
      <TabScreenBackground/>
      <View className="gap-4 rounded-3xl border border-border bg-card/70 p-5">
        <View
        className='flex-row items-start justify-between'
        >
          <View className='flex-1 pr-4'>
            <Text className='text-xs font-semibold uppercase tracking-[1.2px] text-muted-foreground'
            >
              Grocery Planner
            </Text>
            <Text className='mt-1 text-3xl font-bold leading-9 text-foreground'>
              Plan smarter, shop calmer.
            </Text>
            <Text className='mt-2 text-sm leading-5 text-muted-foreground '>
              Organize your next grocery run with categories, quantities, and priority in one place.
            </Text>
          </View>
          <View className="h-12 w-12 items-center justify-center rounded-2xl bg-primary">
            <FontAwesome6 name="wand-magic-sparkles" size={18} color="#ffffff" />
          </View>
        </View> 
         <View className="flex-row gap-2">
          <View className="flex-1 rounded-2xl border border-border bg-background/80 p-3">
            <Text className="text-xs font-medium uppercase tracking-[1px] text-muted-foreground">
              Pending
            </Text>
            <Text className="mt-1 text-xl font-bold text-foreground">{pendingitems.length}</Text>
          </View>

          <View className="flex-1 rounded-2xl border border-border bg-background/80 p-3">
            <Text className="text-xs font-medium uppercase tracking-[1px] text-muted-foreground">
               High Priority
            </Text>
            <Text className="mt-1 text-xl font-bold text-foreground">{highPriorityItems.length}</Text>
          </View>

          <View className="flex-1 rounded-2xl border border-border bg-background/80 p-3">
            <Text className="text-xs font-medium uppercase tracking-[1px] text-muted-foreground">
              Units
            </Text>
            <Text className="mt-1 text-xl font-bold text-foreground">{totalUnits}</Text>
          </View>

         </View>
      </View>
      <PlannerHeroImage/>
      <View className="px-1">
         <Text className="text-sm font-semibold uppercase tracking-[1px] text-muted-foreground">
          Build your list
        </Text>
        <Text className="mt-1 text-sm text-muted-foreground">
          Add items with the right quantity, category, and urgency.
        </Text>
      </View>
      <PlanViewFormCard/>    
    </KeyboardAwareScrollView>
    )
}

export default PlannerScreen
