import {Dimensions} from 'react-native';
const width = Math.round(Dimensions.get('window').width);
const height = Math.round(Dimensions.get('window').height);

export default {
  TabBarIcon: 40,
  TabBarHeight: 60,
  TabBarTextSize: 18,
  ScreenWidth: width,
  ScreenHeight: height,
  PostImageWidth: width - 10,
  PostImageHeight: ((width - 5) / 16) * 9,
  PostImageBorderRadius: 5,
  LogoLoginSize: width / 4,
};
