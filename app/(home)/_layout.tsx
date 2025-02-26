import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const HomeLayout = () => {
  return (
    <Tabs>  
        <Tabs.Screen name="home" options={{headerShown: false}}/>
        <Tabs.Screen name="aboutus" />
    </Tabs>
  )
}

export default HomeLayout
