import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { useRouter } from 'expo-router'

const Index = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>INDEX</Text>
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={() => router.push('/login')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="SignUp" onPress={() => router.push('/signup')} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    
  },
  buttonContainer: {
    marginVertical: 10,
    width: '80%',
    
  },
})

export default Index