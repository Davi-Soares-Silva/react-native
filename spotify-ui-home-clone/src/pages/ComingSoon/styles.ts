import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { Platform } from 'react-native';
import colors from '../../styles/colors';

const statusBarHeight = Platform.OS === 'android' ? 
  Constants.statusBarHeight : 0;

export const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: ${colors.primary};  
`;

export const Title = styled.Text`
  font-family: roboto_700;
  color: ${colors.black};
  font-size: 32px;
`;