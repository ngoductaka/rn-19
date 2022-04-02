import {StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {View, Colors, Image, TouchableOpacity} from 'react-native-ui-lib';

interface Props {
  placeHolder?: string;
}

const InputPassword = ({placeHolder = 'Password'}: Props) => {
  const [secure, setSecure] = React.useState<boolean>(true);

  return (
    <View style={styles.container}>
      <View width={24} height={24} center marginR-16>
        <Image assetName={'icon_password'} />
      </View>
      <TextInput
        placeholder={placeHolder}
        placeholderTextColor={'#9F9F9F'}
        style={styles.input}
        secureTextEntry={secure}
      />
      <TouchableOpacity
        style={{width: 24, height: 24}}
        center
        onPressIn={() => {
          setSecure(false);
        }}
        onPressOut={() => {
          setSecure(true);
        }}>
        <Image assetName="icon_eye" />
      </TouchableOpacity>
    </View>
  );
};

export default InputPassword;

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
    flex: 1,
  },
});
