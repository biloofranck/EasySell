import { View, Text } from 'react-native'
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import React from 'react'
import { Stack, Tabs } from 'expo-router'

const RootLayout = () => {
  return <GluestackUIProvider mode="light"><Tabs/></GluestackUIProvider>;
}

export default RootLayout