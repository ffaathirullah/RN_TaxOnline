import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {User_Pic, IconSearch, User_pic1, User_pic2} from '../../assets';
import BottomIcon from '../components/BottomIcon';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#ADD8E6', '#E5E7F8', '#FFFFFF']}
        style={styles.gradient}>
        <View style={styles.view1}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.bagianAtas}>
              <User_Pic style={styles.logo} />
              <Text style={styles.textNama}>Hallo Syahrial</Text>
            </View>
            <Text style={styles.text1}>Find the professional tax advisor,</Text>
            <Text style={styles.text2}>quickly and promising.</Text>
            <View styles={styles.search}>
              <TextInput
                placeholder="Search By Consultant"
                style={styles.txtInput}
              />
              <IconSearch style={styles.searchIcon} />
            </View>
            <Text style={{marginTop: 20}}>Browse By Category</Text>
            <View style={styles.iconLayanan}>
              <BottomIcon
                title="Layanan Pajak"
                title2="Perorangan"
                type="layanan"
              />
              <BottomIcon
                title="Layanan Pajak"
                title2="Perusahaan"
                type="layanan"
              />
              <BottomIcon
                title="Calculation &"
                title2="Reporting Tax"
                type="layanan"
              />
              <BottomIcon title="Perizinan" title2="Khusus" type="layanan" />
              <BottomIcon title="Pengurusan" title2="PKP" type="layanan" />
              <BottomIcon title="Pengurusan " title2="SKB" type="layanan" />
            </View>
            <Text style={{marginTop: 20}}>Our Top Consultant</Text>
            <View>
              <View>
                <TouchableOpacity onPress={() => navigation.navigate('Rating')}>
                  <View style={styles.bagianAtas}>
                    <User_pic1 style={styles.logo} />
                    <View>
                      <Text style={styles.textNama}>Dzuha</Text>
                      <Text style={styles.textNama}>Tax Advisor</Text>
                    </View>
                  </View>
                </TouchableOpacity>
                <View style={styles.bagianAtas}>
                  <User_pic2 style={styles.logo} />
                  <View>
                    <Text style={styles.textNama}>Wani</Text>
                    <Text style={styles.textNama}>
                      Acounting Staff Administrator
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </LinearGradient>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  view1: {
    marginLeft: 23,
    marginRight: 10,
    marginTop: 14,
  },
  logo: {
    resizeMode: 'cover',
  },
  bagianAtas: {
    flexDirection: 'row',
    marginVertical: 15,
    alignItems: 'center',
  },

  textNama: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 24,
    marginLeft: 13,
  },
  text1: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 30,
    color: '#252E4E',
    marginTop: windowHeight * 0.0301970443,
  },
  text2: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 30,
    color: '#252E4E',
  },
  txtInput: {
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 10,
    height: windowHeight * 0.05911330049,
    width: windowWidth * 0.912,
    marginTop: windowHeight * 0.03201970443,
    backgroundColor: '#fff',
  },
  search: {
    position: 'relative',
  },
  searchIcon: {
    position: 'absolute',
    height: windowHeight * 0.05911330049,
    top: windowHeight * 0.05077832512,
    right: windowWidth * 0.04533333333,
    alignSelf: 'flex-end',
  },
  iconLayanan: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    flexWrap: 'wrap',
  },
});

export default Home;
