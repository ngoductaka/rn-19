import {Dimensions, StyleSheet, TextInput, Modal} from 'react-native';
import React from 'react';
import {
  View,
  Text,
  Button,
  Colors,
  Typography,
  TouchableOpacity,
} from 'react-native-ui-lib';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../nav/RootStack';
const width_screen = Dimensions.get('window').width;

const array_length = [1, 2, 3, 4];

const EnterCode = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const refInput = React.useRef<TextInput>(null);
  const [code, setCode] = React.useState<string>('');
  const [visible, setVisible] = React.useState<boolean>(false);
  return (
    <View flex width={width_screen}>
      <Text white title3b margin-40>
        Verify phone number
      </Text>
      <View row spread marginH-40 marginB-16 marginT-32>
        {array_length.map((item, index) => {
          return (
            <TouchableOpacity
              style={{
                width: 45,
                height: 60,
                borderBottomColor: !!code[index] ? Colors.primary : '#37383C',
                borderBottomWidth: 3,
              }}
              center
              key={index}
              onPress={() => {
                // if (!!refInput.current) {
                //   refInput.current.focus();
                // }
                refInput.current?.focus();
              }}>
              <Text b16 white>
                {code[index]}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View marginH-40 marginT-32>
        <Button
          label="CONTINUE"
          backgroundColor={Colors.primary}
          color={Colors.n3}
          labelStyle={Typography.b16}
          onPress={() => {
            setVisible(true);
          }}
        />
        <Button
          label="Resent Code"
          color={Colors.primary}
          labelStyle={Typography.b16}
          onPress={() => {}}
          link
          marginT-16
        />
      </View>

      <TextInput
        style={{backgroundColor: 'red', position: 'absolute', top: -100}}
        ref={refInput}
        keyboardType="numeric"
        maxLength={array_length.length}
        onChangeText={value => {
          setCode(value);
        }}
      />

      <Modal
        animationType="fade"
        // transparent={true}
        visible={visible}
        onRequestClose={() => {
          setVisible(!visible);
        }}>
        <View flex centerV backgroundColor="#0E0B1F">
          <Text title3b white marginB-12 center>
            Almost done!
          </Text>
          <Text r14 white center>
            Please Verify your Phone.{' '}
          </Text>

          <View marginH-40 marginT-64>
            <Button
              label="CONTINUE"
              backgroundColor={Colors.primary}
              color={Colors.n3}
              labelStyle={Typography.b16}
              onPress={() => {
                setVisible(false);
                navigation.navigate('MainTab');
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default EnterCode;

const styles = StyleSheet.create({});
