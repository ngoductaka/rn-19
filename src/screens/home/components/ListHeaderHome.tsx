import {ImageSourcePropType, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {View, Text, Assets} from 'react-native-ui-lib';
import ItemAlbum from './ItemAlbum';
import VideoWeekly from './VideoWeekly';
export interface IDataNewAlbum {
  id: string;
  name: string;
  author: string;
  uri: ImageSourcePropType;
}

const dataNewAlbum: IDataNewAlbum[] = [
  {
    id: '0',
    name: 'Pray For You',
    author: 'The Weekend',
    uri: Assets.imgs.dataAlbum1,
  },
  {id: '1', name: 'Do it', author: 'Milian Luu', uri: Assets.imgs.dataAlbum2},
  {
    id: '2',
    name: 'Pray For You',
    author: 'The Weekend',
    uri: Assets.imgs.dataAlbum1,
  },
  {id: '3', name: 'Do it', author: 'Milian Luu', uri: Assets.imgs.dataAlbum2},
];

const ListHeaderHome = () => {
  return (
    <View>
      <View row centerV spread paddingV-20 paddingH-24>
        <Text title5b white>
          New Albums
        </Text>
        <Text b12 white onPress={() => {}}>
          View all
        </Text>
      </View>
      <View height={200} marginB-20>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scrollView}>
          {dataNewAlbum.map((item, index) => {
            return <ItemAlbum key={index} item={item} />;
          })}
        </ScrollView>
      </View>

      <View paddingV-20 paddingH-24>
        <Text title5b white>
          Geez Weekly
        </Text>
      </View>

      <VideoWeekly />
      <View paddingV-20 paddingH-24>
        <Text title5b white>
          Recently Music
        </Text>
      </View>
    </View>
  );
};

export default ListHeaderHome;

const styles = StyleSheet.create({
  scrollView: {
    paddingLeft: 14,
  },
});
