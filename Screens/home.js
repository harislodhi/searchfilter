import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Title from './title'

const Home = (props) => {
  return (
    <View>
        <TouchableOpacity onPress={() => props.navigation.navigate('search')}>
    <Text>This is Text</Text>
    </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})