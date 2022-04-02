import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const Onboarding = () => {

  

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnSkip}>
        <Text style={styles.txtSkip}>Skip</Text>
      </TouchableOpacity>
      <Image
        source={require('../../assets/imgs/ob1.png')}
        style={styles.imgOb}
      />
      <Text style={styles.txtTitle}>Numerous free trial courses</Text>
      <Text style={styles.txtDescription}>
        Free courses for you to find your way to learning
      </Text>
      <View style={styles.containerDots}>
        <View style={styles.dotActive} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '20%',
  },
  btnSkip: {
    alignItems: 'flex-end',
    marginBottom: 12,
  },
  txtSkip: {
    marginRight: 16,
    fontSize: 14,
    color: '#858597',
  },
  imgOb: {
    alignSelf: 'center',
    marginBottom: 34,
  },
  txtTitle: {
    marginBottom: 21,
    alignSelf: 'center',
    fontSize: 22,
    fontWeight: '600',
    color: '#1F1F39',//hard code
  },
  txtDescription: {
    fontSize: 16,
    color: '#858597',
    alignSelf: 'center',
    marginBottom: 12,
  },
  containerDots: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dotActive: {
    height: 5,
    width: 28,
    backgroundColor: '#3D5CFF',
    marginHorizontal: 5,
    borderRadius: 5,
  },
  dot: {
    height: 5,
    width: 9,
    backgroundColor: '#EAEAFF',
    marginHorizontal: 5,
    borderRadius: 5,
  },
});
