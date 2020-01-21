import React, { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default function App() {
  const [name, setName] = useState('giedrius')
  const [title, setTitle] = useState({ type: 'Android', content: 'dating' })
  const handleClick = () => {
    setName('grudinsky')
    setTitle({ type: 'iOS', content: 'mapping' })
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>React Native App</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.boldText}>Created by {name}</Text>
        <Text>This is an {title.type} app for {title.content}.</Text>
        <View style={styles.buttonContainer}>
          <Button title='update state' onPress={handleClick} />
        </View>
      </View> 
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    backgroundColor: 'pink',
    padding: 20
  },
  boldText: {
    fontWeight: 'bold'
  }, 
  body: {
    backgroundColor: 'yellow',
    padding: 20
  }, 
  buttonContainer: {
    marginTop: 20
  }
})
