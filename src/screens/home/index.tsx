import {ImageSourcePropType} from 'react-native';
import React from 'react';
import {View, Assets} from 'react-native-ui-lib';
import {FlatList} from 'react-native';
import Item from './components/Item';
import ListHeaderHome from './components/ListHeaderHome';

export interface IDataHome {
  id: string;
  name: string;
  author: string;
  uri: ImageSourcePropType;
}

const dataHome: IDataHome[] = [
  {
    id: '0',
    name: 'Nice For What',
    author: 'Avinci John',
    uri: Assets.imgs.dataHome1,
  },
  {
    id: '1',
    name: 'Where can I get some ?',
    author: 'Arian Grande',
    uri: Assets.imgs.dataHome2,
  },
  {
    id: '2',
    name: 'Why do we use it ?',
    author: 'Alan Walker',
    uri: Assets.imgs.dataHome3,
  },
  {
    id: '3',
    name: 'Fall Out BoysNice For What',
    author: 'Avinci John',
    uri: Assets.imgs.dataHome4,
  },
];

const Home = () => {
  return (
    <View flex backgroundColor="#0E0B1F">
      <FlatList
        data={dataHome}
        renderItem={({item, index}) => {
          return <Item item={item} index={index} />;
        }}
        keyExtractor={item => item.id}
        ListHeaderComponent={() => {
          return <ListHeaderHome />;
        }}
      />
    </View>
  );
};

export default Home;
