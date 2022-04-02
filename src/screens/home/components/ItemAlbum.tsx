import {ImageBackground, StyleSheet} from 'react-native';
import React from 'react';
import {View, Text, Image} from 'react-native-ui-lib';
import {IDataNewAlbum} from './ListHeaderHome';

interface Props {
  item: IDataNewAlbum;
}

const ItemAlbum = ({item}: Props) => {
  return (
    <View width={200} height={200} marginH-10>
      <ImageBackground source={item.uri} style={styles.imgBackground}>
        <Text b16 white marginL-16>
          {item.name}
        </Text>
        <Text r12 marginB-8 marginL-16 white>
          {item.author}
        </Text>
      </ImageBackground>
      <View style={styles.conntainerAbs}>
        <Image source={item.uri} style={styles.imgShadow} blurRadius={10} />
      </View>
    </View>
  );
};

export default ItemAlbum;

const styles = StyleSheet.create({
  imgBackground: {
    width: 188,
    height: 188,
    justifyContent: 'flex-end',
  },
  conntainerAbs: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    zIndex: -1,
    borderRadius: 5,
    overflow: 'hidden',
  },
  imgShadow: {
    width: 188,
    height: 188,
  },
});
