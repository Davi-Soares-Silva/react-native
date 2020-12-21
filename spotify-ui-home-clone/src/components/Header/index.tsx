import React from 'react';
import { Feather } from '@expo/vector-icons';

import colors from '../../styles/colors';
import data from './data';

import { 
  Container,
  AlbumContainer,
  Image,
  Title,
  TopOptions,
  Salutation,
  OptionsButton,
  RecommendedContainer,
  TitleContainer,
} from './styles';

interface ItemProps{
  item: typeof data[0];
}

const Header: React.FC = () => {
  const AlbumItem: React.FC<ItemProps> = ({ item }) => (
    <AlbumContainer>
      <Image source={item.source}/>
      <TitleContainer>
        <Title numberOfLines={2}>{item.title}</Title>
      </TitleContainer>
    </AlbumContainer>
  )

  return (
    <Container>
      <TopOptions>
        <Salutation>Boa Tarde</Salutation>
        <OptionsButton>
          <Feather name="settings" size={24} color={colors.black}/>
        </OptionsButton>
      </TopOptions>

      <RecommendedContainer>
        {data.map(item => (
          <AlbumItem key={item.id} item={item}/>
        ))}
      </RecommendedContainer>
    </Container>
  );
};

export default Header;
