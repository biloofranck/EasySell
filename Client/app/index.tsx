import { View, Text } from 'react-native'
import React from 'react'

const HomeScreen = () => {
    const name:string ="Franck Branly"
  return (
    <View>
      <Text className='p-10 font-extrabold text-4xl'>Hello!, {name}</Text>
    </View>
  )
}

export default HomeScreen