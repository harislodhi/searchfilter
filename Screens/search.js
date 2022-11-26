import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Search = (props) => {
  return (
    <View>
              <TouchableOpacity onPress={() => props.navigation.navigate('addnew')}>

      <Text>search karo</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({})