import { View, Text,Pressable } from 'react-native'
import React from 'react'
import * as Sentry from '@sentry/react-native';
import {FontAwesome6} from "@expo/vector-icons"
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const SentryFeedbackButton = () => {
    const inset=useSafeAreaInsets();

  return (
    <View
    style={{
        position:"absolute",
        bottom:inset.bottom+16,
        right:16,
        zIndex:50
    }}
    >
      <Pressable
        onPress={() => Sentry.showFeedbackWidget()}
        className={`flex-row items-center gap-2 rounded-full border px-4 py-3 border-border bg-card`}
      >
        <FontAwesome6 name="comment-dots" size={14} color="hsl(136 42% 92%)" />
        <Text className={`text-sm font-semibold text-foreground`}>Feedback</Text>
      </Pressable>
    </View>
  )
}

export default SentryFeedbackButton