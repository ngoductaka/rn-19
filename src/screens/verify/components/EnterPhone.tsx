import {StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import {View, Text, Button, Colors, Typography} from 'react-native-ui-lib';
import Input from '../../../components/TextField/Input';

const width_screen = Dimensions.get('window').width;

interface Props {
  onContinue: () => void;
}

const EnterPhone = ({onContinue}: Props) => {
  return (
    <View flex width={width_screen}>
      <Text white title3b margin-40>
        To continue enter your phone number
      </Text>
      <Input assetName="iconPhone" placeHolder="Phone" keyboardType="numeric" />
      <View marginH-40 marginT-32>
        <Button
          label="CONTINUE"
          backgroundColor={Colors.primary}
          color={Colors.n3}
          labelStyle={Typography.b16}
          onPress={() => {
            onContinue();
          }}
        />
      </View>
    </View>
  );
};

export default EnterPhone;

const styles = StyleSheet.create({});
