import React from 'react';

import { LinearGradient } from 'expo-linear-gradient'
import { Wrapper, Main } from './styles';
import { StyleSheet, View, Text } from 'react-native';

import Header from '../../components/Header';
import { FlatList } from 'react-native-gesture-handler';

import SimpleTitle from '../../components/SimpleTitle';
import RecentList from '../../components/RecentList';

interface Item{
  key: string,
  render: () => JSX.Element,
  isTitle?: boolean,
}

const Home: React.FC = () => {
  const data = React.useMemo( () => {
    const items: Item[] = [
      {
        key: 'Recent Played',
        render: () => <SimpleTitle>Tocadas Recentemente</SimpleTitle>,
        isTitle: true,
      },

      {
        key: 'A1',
        render: () => <RecentList/>
      },

      {
        key: 'Programs to Know',
        render: () => <SimpleTitle>Tocadas Recentemente</SimpleTitle>,
        isTitle: true,
      },

      {
        key: 'A2',
        render: () => <RecentList/>
      }
    ]

    return items;
  }, []);

  return (
    <Wrapper>
      <LinearGradient 
        colors={['#320f98', '#000000']} 
        style={style.linearGradient}
        start={[0.0, 0.0]}
        end={[0.2, 1]}
      >
        <Header/>
      </LinearGradient>
      <Main>
        <FlatList<Item> 
          data={data}
          renderItem={({ item }) => item.render()}
          keyExtractor={ item => item.key}
        />
      </Main>
    </Wrapper>
  );
};

const style = StyleSheet.create({
  linearGradient: {
    width: '100%',
  }
})

export default Home;
