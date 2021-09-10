import React, {useEffect, useState} from 'react';
import {
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Icon_rating} from '../Icon';

const {width, height} = Dimensions.get('window');

function Rating({navigation}) {
  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={['#ADD8E6', '#E5E7F8', '#FFFFFF']}
        style={styles.gradient}>
        <View style={styles.header}>
          <Text style={{fontWeight: '500', fontSize: 24}}>Help us</Text>
          <Text style={{fontWeight: '500', fontSize: 24}}>
            Be Better by Giving a Rating
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../assets/images/UserPic.png')}
            style={{
              height: 120,
              width: 120,
              borderRadius: 60,
            }}
          />
          <Text
            style={{
              color: '#252E4E',
              fontFamily: 'Poppins',
              fontStyle: 'normal',
              fontWeight: 'normal',
              fontSize: 20,
              lineHeight: 30,
              textAlign: 'center',
              marginTop: 5,
            }}>
            Dzuha
          </Text>
          <Text style={{fontWeight: '300'}}>Tax Advisor</Text>
          <Icon_rating style={{marginTop: 20}} />
          <TouchableOpacity style={styles.button}>
            <Text style={{color: '#fff'}}>Rate Dzuha</Text>
          </TouchableOpacity>
          <Text style={{marginTop: 60, fontWeight: '300'}}>
            Report for Bad Service
          </Text>
        </View>
      </LinearGradient>
    </ScrollView>
  );
}

export default Rating;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  header: {
    height: 110,
    marginTop: 100,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#252E4E',
    width: 180,
    height: 45,
    padding: 10,
    borderRadius: 20,
    marginTop: 20,
  },
});
