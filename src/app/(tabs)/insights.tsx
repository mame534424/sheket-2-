import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import TabScreenBackground from '../components/TabScreenBackground'
import UserProfileCard from '../components/insight/UserProfileCard'
import InsightStatsSection from '../components/insight/InsightStatsSection'
import InsightCategorySection from '../components/insight/InsightCategorySection'
import InsightsPrioritySection from '../components/insight/InsightsPrioritySection'
import ClearCompletedButton from '../components/insight/ClearCompletedButton'
import SentryFeedbackButton from '../components/insight/SentryFeedbackButton'

const insightsScreen = () => {
  return (
    <>
    <ScrollView
      className="bg-background flex-1 py-4"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ padding: 20, gap: 14 }}
      contentInsetAdjustmentBehavior="automatic">
        <TabScreenBackground/>

        <UserProfileCard/>

        
        <InsightCategorySection/>
        <InsightStatsSection/>
        <InsightsPrioritySection/>
        <ClearCompletedButton />
      </ScrollView>
      
      <SentryFeedbackButton />
      </>
  )
}

export default insightsScreen