 import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
 export default function CourtCard({ photo, title, price, onPress }: any) {
  return (
    <Pressable onPress={onPress} style={{ backgroundColor: 'white', borderRadius: 16, overflow: 'hidden', marginBottom: 12 }}>
      <Image source={photo} style={{ height: 160, width: '100%' }} resizeMode="cover" />
      <View style={{ padding: 12 }}>
        <Text style={{ fontSize: 18, fontWeight: '700' }}>{title}</Text>
        <Text style={{ color: '#334155', marginTop: 4 }}>${'{'}price{'}'}/hora</Text>
      </View>
    </Pressable>
    );
  }
