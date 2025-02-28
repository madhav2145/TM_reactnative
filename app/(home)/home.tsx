// import { View, Text, StyleSheet } from 'react-native'
// import React from 'react'
// import { Link } from 'expo-router'

// const Home = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Home</Text>
//       <Link replace href="/">Log Out</Link>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   text: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
// })

// export default Home
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

const Home = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>

      <View style={styles.statContainer}>
        <Text style={styles.statLabel}>Total Number of Vehicles:</Text>
        <TouchableOpacity onPress={() => router.push('/')}>
        {/* vehicles */}
          <Text style={styles.statValue}>120</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.statContainer}>
        <Text style={styles.statLabel}>Pollution Expiry in 30 Days:</Text>
        <TouchableOpacity onPress={() => router.push('/')}>
        {/* pollution-expiry */}
          <Text style={styles.statValue}>10</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.statContainer}>
        <Text style={styles.statLabel}>Insurance Expiry in 30 Days:</Text>
        <TouchableOpacity onPress={() => router.push('/')}>
        {/* insurance-expiry */}
          <Text style={styles.statValue}>8</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.statContainer}>
        <Text style={styles.statLabel}>AITP Expiry in 30 Days:</Text>
        <TouchableOpacity onPress={() => router.push('/')}>
        {/* aitp-expiry */}
          <Text style={styles.statValue}>5</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.statContainer}>
        <Text style={styles.statLabel}>Fitness Expiry in 30 Days:</Text>
        <TouchableOpacity onPress={() => router.push('/')}>
        {/* fitness-expiry */}
          <Text style={styles.statValue}>7</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.statContainer}>
        <Text style={styles.statLabel}>Permit Expiry in 30 Days:</Text>
        <TouchableOpacity onPress={() => router.push('/')}>
        {/* permit-expiry */}
          <Text style={styles.statValue}>6</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.addButton} onPress={() => router.push('/')}>
      {/* add-vehicle */}
        <Text style={styles.addButtonText}>Add Vehicle</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton} onPress={() => router.replace('/')}> 
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0A3D91',
    textAlign: 'center',
    marginBottom: 20,
  },
  statContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  statLabel: {
    fontSize: 16,
    color: '#5A7184',
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#D01C1F',
  },
  addButton: {
    backgroundColor: '#D01C1F',
    paddingVertical: 15,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  logoutButton: {
    marginTop: 20,
    alignItems: 'center',
  },
  logoutText: {
    color: '#D01C1F',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Home;
