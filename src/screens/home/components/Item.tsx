import {StyleSheet} from 'react-native';
import React from 'react';
import {Assets, Image, Text, TouchableOpacity, View} from 'react-native-ui-lib';
import {IDataHome} from '../index';

interface Props {
  item: IDataHome;
  index: number;
}

const Item = ({item, index}: Props) => {
  return (
    <TouchableOpacity>
      <View row centerV paddingH-24 paddingV-10>
        <Text white r14>
          {index + 1}
        </Text>
        <Image source={item.uri} style={{width: 32, height: 32}} marginH-20 />
        <View flex>
          <Text white r16>
            {item.name}
          </Text>
          <Text r12 color="#817A7A">
            {item.author}
          </Text>
        </View>
        <TouchableOpacity>
          <Image source={Assets.icons.more_horiz} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default Item;

const styles = StyleSheet.create({});
