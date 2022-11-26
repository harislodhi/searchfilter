import { StyleSheet, Text, View, TouchableOpacity , SafeAreaView } from 'react-native'
import React from 'react'
import Form from '../components/Form';

const Addnew = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
       <Form></Form>
      </View>
    </SafeAreaView>
  );
};
 
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  itemStyle: {
    padding: 10,
  },
});

export default Addnew

