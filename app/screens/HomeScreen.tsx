import React from 'react';
import { View, Button, StyleSheet, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import SwiperHero from '../components/SwiperHero';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <SwiperHero />
        <View style={styles.buttonContainer}>
          <Button
            title="Buscar Canchas"
            onPress={() => router.push('/courts')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    margin: 20,
  },
});