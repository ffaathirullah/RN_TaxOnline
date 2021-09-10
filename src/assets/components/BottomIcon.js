import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import React from 'react';

import {First_medical, Berat, Mata} from '../../assets';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const BottomIcon = ({title, title2, type}) => {
  const Icon = () => {
    if (title === 'Layanan Pajak' && title2 === 'Perorangan') {
      return <First_medical />;
    }
    if (title === 'Layanan Pajak' && title2 === 'Perusahaan') {
      return <Berat />;
    }
    if (title === 'Calculation &' && title2 === 'Reporting Tax') {
      return <Mata />;
    }
    if (title === 'Perizinan' && title2 === 'Khusus') {
      return <First_medical />;
    }
    if (title === 'Pengurusan' && title2 === 'PKP') {
      return <Berat />;
    }
    if (title === 'Pengurusan' && title2 === 'SKB') {
      return <Mata />;
    }
    return <First_medical />;
  };
  return (
    <TouchableOpacity style={styles.container(type)}>
      <View style={styles.button(type)}>
        <Icon />
      </View>
      <Text style={styles.text(type)}>{title}</Text>
      <Text style={styles.text(type)}>{title2}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: type => ({
    marginBottom: type === 'layanan' ? 12 : 0,
    marginRight: type === 'layanan' ? 30 : 0,
    backgroundColor: '#fff',
    width: windowWidth * 0.212,
    height: windowHeight * 0.112,
    justifyContent: 'center',
    borderRadius: 15,
  }),
  text: type => ({
    fontSize: 10,
    fontFamily:
      type === 'layanan' ? 'TitilliumWeb-Light' : 'TitilliumWeb-Regular',
    textAlign: 'center',
  }),
  button: type => ({
    flex: 1,
    backgroundColor: '#fff',
    padding: type === 'layanan' ? 12 : 7,
    borderRadius: 10,
    justifyContent: 'center',
    paddingLeft: 24,
  }),
});
export default BottomIcon;
