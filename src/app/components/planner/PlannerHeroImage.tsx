import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import { LinearGradient } from 'expo-linear-gradient';



const PlannerHeroImage = () => {
    
  return (
    <View className="overflow-hidden rounded-[30px] border border-border bg-card">
      <Image source={require('../../../../assets/images/hero.png')} 
       style={{ width: '100%', height: 200 }}
       />

       <LinearGradient
        pointerEvents="none"
        colors={["rgba(0,0,0,0.4)", "transparent"]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={{ position: "absolute", top: 0, left: 0, right: 0, height: 72 }}
      />
      
      <LinearGradient
        pointerEvents="none"
        colors={["transparent", "rgba(0,0,0,0.4)"]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 72 }}
      />
    </View>
  )
}

export default PlannerHeroImage