import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
  padding: 14px;
`;

export const AlbumContainer = styled.TouchableOpacity`
  background: ${colors.container};
  flex-direction: row;
  max-width: 100px;
  margin-top: 16px;
  border-radius: 6px;
  overflow: hidden;
`;

export const Image = styled.Image`
  width: 60px;
  height: 60px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
`;

export const Title = styled.Text`
  font-family: roboto_700;
  color: ${colors.black};
`;

export const TopOptions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-top: 14px;
`;

export const Salutation = styled.Text`
  font-family: roboto_500;
  color: ${colors.black};
  font-size: 24px;
  margin-top: -6px;
`;

export const OptionsButton = styled.TouchableOpacity`
`;

export const RecommendedContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const TitleContainer = styled.View`
  padding: 7px;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 40px;
`;