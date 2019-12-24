import {Dimensions} from 'react-native';
const width = Math.round(Dimensions.get('window').width);
const height = Math.round(Dimensions.get('window').height);

export default {
  TabBarIcon: 40,
  TabBarHeight: 60,
  TabBarTextSize: 18,
  ScreenWidth: width,
  ScreenHeight: height,
  PostImage: width / 3,
  PostImageDetailsWidth: width - 10,
  PostImageDetailsHeight: ((width - 5) / 16) * 9,
  PostImageBorderRadius: 5,
  LogoLoginSize: width / 4,
  BorderImageRadius: 5,
};
