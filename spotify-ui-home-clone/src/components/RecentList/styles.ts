import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const Container = styled.ScrollView.attrs({
  horizontal: true,
})`
  padding: 14px;
`;

export const AlbumContainer = styled.TouchableOpacity`
  margin-right: 14px;
  max-width: 130px;
`;

export const Image = styled.Image`
  width: 120px;
  height: 120px;
`;

export const Title = styled.Text`
  color: ${colors.black};
  font-family: roboto_700;
  font-size: 14px;
`;

export const TitleContainer = styled.View`
  max-height: 60px;
  max-width: 120px;
  flex-direction: row;
  flex-wrap: wrap;
`;