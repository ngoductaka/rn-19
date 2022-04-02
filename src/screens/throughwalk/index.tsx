import React from 'react';
import {
  View,
  Text,
  Assets,
  Colors,
  Button,
  Typography,
} from 'react-native-ui-lib';
import {ImageBackground, SafeAreaView, StyleSheet} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../nav/RootStack';
const Throughwalk = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View flex>
      <ImageBackground
        source={Assets.icons['bgThroughwalk']}
        style={styles.container}>
        <Text title3b white center marginB-10>
          WELCOME TO{'\n'}GEEZ APP
        </Text>
        <Text r14 white center>
          Make your design workflow easier and{'\n'}save your time
        </Text>
      </ImageBackground>

      <View absB marginH-16 marginB-16 absH>
        <SafeAreaView>
          <Button
            label="GET STARTED"
            backgroundColor={Colors.primary}
            color={Colors.n3}
            labelStyle={Typography.b16}
            onPress={() => {
              navigation.navigate('SignIn');
            }}
          />
        </SafeAreaView>
      </View>
    </View>
  );
};
export default Throughwalk;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.black,
  },
});
