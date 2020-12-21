import Constants from 'expo-constants';
import styled from 'styled-components/native';
import { Platform } from 'react-native';
import colors from './../../styles/colors';

const statusBarHeight = Platform.OS === 'android' ? 
  Constants.statusBarHeight : 0;


export const Wrapper = styled.SafeAreaView`
  padding-top: ${statusBarHeight + 'px'};
  flex: 1;
  background: ${colors.primary};
`;

export const Main = styled.View`

`;

export const Container = styled.View`
  padding-left: 14px;
`;