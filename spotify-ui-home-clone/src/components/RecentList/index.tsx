import React from 'react';

import { 
  Container,
  AlbumContainer,
  Image,
  Title,
  TitleContainer,
} from './styles';

import data from './data';

interface ItemProps{
  item: typeof data[0],
}

const RecentList: React.FC = () => {
  const RecentItem: React.FC<ItemProps> = ({ item }) => (
    <AlbumContainer>
      <Image source={item.source}/>
      <TitleContainer>
        <Title numberOfLines={2}>{item.title}</Title>
      </TitleContainer>
    </AlbumContainer>
  )
  return (
    <Container>
      {data.map( item => (
        <RecentItem key={item.id} item={item}/>
      ))}
    </Container>
  );
};

export default RecentList;
