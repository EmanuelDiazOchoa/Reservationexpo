 import React from 'react';
import { Dimensions, Image, View } from 'react-native';
import Swiper from 'react-native-swiper';
 const { width } = Dimensions.get('window');
 export default function SwiperHero() {
  return (
    <View style={{ height: 220 }}>
      <Swiper autoplay loop showsPagination>
        {[
          require('../assets/images/cancha1.jpg'),
          require('../assets/images/cancha2.jpg'),
          require('../assets/images/cancha3.jpg'),
        ].map((src, i) => (
          <Image key={i} source={src} style={{ width, height: 220 }} resizeMode="cover" />
        ))}
      </Swiper>
    </View>
  );
 }