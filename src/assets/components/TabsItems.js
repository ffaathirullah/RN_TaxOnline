import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  Icon_Home,
  Icon_Home_aktif,
  Icon_notification,
  Icon_notification_aktif,
  Icon_Favorite,
  Icon_favorite_aktif,
  Icon_profile,
  Icon_profile_aktif,
} from '../../assets';

const TabsItems = ({label, isFocused, onPress, onLongPress}) => {
  const Icon = () => {
    if (label === 'Home') {
      return isFocused ? <Icon_Home_aktif /> : <Icon_Home />;
    }
    if (label === 'Notification') {
      return isFocused ? <Icon_notification_aktif /> : <Icon_notification />;
    }
    if (label === 'Favorite') {
      return isFocused ? <Icon_favorite_aktif /> : <Icon_Favorite />;
    }
    if (label === 'Profile') {
      return isFocused ? <Icon_profile_aktif /> : <Icon_profile />;
    }
    return <Icon_Home />;
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabsItems;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: isFocused => ({
    fontSize: 13,
    marginTop: 8,
    color: isFocused ? '#252E4E' : '#C3C8D8',
  }),
});
