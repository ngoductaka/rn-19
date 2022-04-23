import {KeyboardTypeOptions, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {View, Colors, Image} from 'react-native-ui-lib';

interface Props {
  assetName: string;
  placeHolder: string;
  keyboardType?: KeyboardTypeOptions | undefined;
  value?: string,
  onChangeText?: any, 
}

const Input = ({assetName, placeHolder, keyboardType, value, onChangeText}: Props) => {
  return (
    <View style={styles.container}>
      <View width={24} height={24} center marginR-16>
        <Image assetName={assetName} />
      </View>
      <TextInput
        placeholder={placeHolder}
        placeholderTextColor={'#9F9F9F'}
        style={styles.input}
        keyboardType={keyboardType}
        {...{value, onChangeText}}
        // showSoftInputOnFocus={false}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 40,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: Colors.rgba(Colors.white, 0.2),
  },
  input: {
    fontSize: 14,
    color: Colors.white,
  },
});
