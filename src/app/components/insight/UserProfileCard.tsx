import { View, Text, Pressable} from 'react-native'
import React from 'react'
import { useClerk, useUser } from '@clerk/clerk-expo'
import { Image } from 'expo-image';
import { FontAwesome6 } from "@expo/vector-icons";

const UserProfileCard = () => {
    const {user}=useUser();
    const {signOut}=useClerk();
    const email=user?.primaryEmailAddress?.emailAddress;
    const name= user?.fullName||email?.split('@')[0];

  return (
    <View className="rounded-3xl border border-border bg-card p-4">
         <View className="flex-row items-center gap-3">
            <View className="size-12 rounded-full overflow-hidden">
                 <Image source={{ uri: user?.imageUrl }} style={{ width: "100%", height: "100%" }} />
            </View>
            <View className="flex-1">
                <Text className="text-xs uppercase tracking-[1px] text-muted-foreground">
                    Signed in as
                </Text>
                <Text className="mt-1 text-lg font-bold text-foreground">{name}</Text>
                <Text className="text-sm text-muted-foreground">{email}</Text>
            </View>
            <Pressable
          onPress={() => signOut()}
          className="h-9 w-9 items-center justify-center rounded-xl bg-destructive">
            
                <FontAwesome6 name="right-from-bracket" size={13} color="#d45f58" />
            </Pressable>
         </View>
    </View>
  ) 
}

export default UserProfileCard