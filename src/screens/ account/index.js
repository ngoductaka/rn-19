import { Pressable, StyleSheet, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { View, Text, Image } from 'react-native-ui-lib';
import LinearGradient from 'react-native-linear-gradient';


import _, { cloneDeep } from 'lodash'
import axios from 'axios';
import moment from 'moment';

const { height, width } = Dimensions.get('window');
const initState = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
];
// 20.998913, 105.840258
const Account = () => {
  const [data, loading, errors] = useRequest('https://api.weatherapi.com/v1/current.json?key=f78a706310ca4bdf97b135039221204&q=Hanoi&aqi=no', []);
  console.log("data", { data, loading })

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={['#FFFFFF', '#C0F0E7', '#77B7D6', '#386CCE']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
        style={{ flex: 1 }}>
        <View style={{ flex: 1 }} flex center>
          <View style={{ height: width / 2, width: width / 2 }}>
            <Image style={{ flex: 1, height: null, width: null }} source={{ uri: `https://cdn.weatherapi.com/weather/64x64/day/116.png` }} />
          </View>
        </View>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={{ color: '#FEFF87', fontSize: 120, opacity: 0.6 }}>{_.get(data, 'current.temp_c', 'default value')}°</Text>
          <Text style={{ color: '#FEFF87', fontSize: 30, color: '#fff' }}>{_.get(data, 'current.condition.text', 'default value')}</Text>
        </View>
        <View style={{ flex: 1, }}>
          <View style={{
            flexDirection: 'row',
            paddingHorizontal: 15,
            flex: 1,
            alignItems: 'flex-end',
            justifyContent: 'space-around', alignItems: 'center'
          }}>
            {new Array(7).fill('').map((i, index) => {
              const today = moment().get('day');
              return (
                <View style={{
                  paddingVertical: 2,
                  paddingHorizontal: 4,
                  borderBottomColor: today === index ? '#fff' : 'none', borderBottomWidth: today === index ? 4 : 0,
                }}>
                  <Text>{day[index]}</Text>
                </View>
              )
            })}
          </View>
          <View style={{
            flex: 1,
            paddingHorizontal: 15,
          }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              {new Array(9).fill('').map((i, index) => {
                return (
                  <View style={{ position: 'relative' }}>
                    <View style={{ height: 8, width: 2, backgroundColor: '#222' }} />
                    <View style={{ position: 'absolute', width: 20, bottom: -20, left: -7 }}>
                      {index & 1 ? null : <Text style={{}}>10</Text>}
                    </View>
                  </View>
                )

              })
              }
            </View>
          </View>
          {/* <Text>{moment().format('ddd')}</Text> */}
        </View>
      </LinearGradient>


    </View>
  );
};

const day = [
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat',
]

const useRequest = (api, context) => {

  const [data, setData] = useState([]);
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);


  React.useEffect(() => {
    _handleCallApi();
  }, context);

  const _handleCallApi = async function () {
    // c2 es7
    try {
      setLoading(true);
      const { data } = await axios.get(api);
      setLoading(false);
      setData(data)
    } catch (err) {
      setErrors(err)
    }
  };

  return [data, loading, errors];
}

export default Account;
var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
