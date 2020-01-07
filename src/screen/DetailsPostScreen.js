import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  PermissionsAndroid,
  TouchableOpacity,
  Alert
} from 'react-native';

// import RNFetchBlob from 'rn-fetch-blob';

import cl from '../assets/colors/Color';
import sz from '../assets/size/Size';

export default class DetailsPostScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = ({navigation}) => {
    return {
      header: (
        <View style={styles.containerNav}>
          <TouchableOpacity 
          // onPress={() => {this.downloadImage()}}
          >
            <Image
              style={styles.imageNav}
              source={require('../assets/images/download.png')}
            />
          </TouchableOpacity>
        </View>
      ),
    };
  };

  async componentDidMount() {
    // check permission WRITE_EXTERNAL_STORAGE
    // await request_storage_runtime_permission();
  }

  // download image
  downloadImage() {
    var date = new Date();

    var item = this.props.navigation.getParam('post', {img_url: ''});
    var image_URL = item.img_url;
    var ext = this.getExt(image_URL);
    ext = '.' + ext[0];
    const {config, fs} = RNFetchBlob;
    let PictureDir = fs.dirs.PictureDir;
    let options = {
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        path:
          PictureDir +
          '/image_' +
          Math.floor(date.getTime() + date.getSeconds() / 2) +
          ext,
        description: 'Image',
      },
    };
    config(options)
      .fetch('GET', image_URL)
      .then(res => {
        Alert.alert('Image Downloaded Successfully.');
      });
  }

  getExt = filename => {
    return /[.]/.exec(filename) ? /[^.]+$/.exec(filename) : undefined;
  };
  render() {
    let item = this.props.navigation.getParam('post', {});
    let img = item.img_url;
    let title = item.title;
    let date = item.date;
    let description = item.description;
    return (
      <ScrollView style={styles.container}>
        <Image style={styles.image} source={{uri: img}} />
        <Text style={styles.title}>{title} </Text>
        <Text style={styles.description}>{description} </Text>
        <Text style={styles.date}>{date} </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  containerNav: {
    height: 45,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 20,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  imageNav: {
    width: 30,
    height: 30,
  },
  container: {flex: 1, padding: 10},
  image: {
    width: sz.PostImageDetailsWidth,
    height: sz.PostImageDetailsHeight,
    borderRadius: sz.BorderImageRadius,
  },
  title: {
    fontSize: 26,
    color: cl.IconTabBarActive,
    textAlign: 'center',
    marginTop: 15,
  },

  description: {
    fontSize: 16,
    color: 'black',
    marginTop: 10,
    fontFamily: 'Times New Roman',
  },
  date: {
    fontSize: 18,
    color: 'black',
    marginTop: 10,
    textAlign: 'right',
    fontWeight: '600',
  },
});

export async function request_storage_runtime_permission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: 'ReactNativeCode Storage Permission',
        message:
          'ReactNativeCode App needs access to your storage to download Photos.',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      Alert.alert('Storage Permission Granted.');
    } else {
      Alert.alert('Storage Permission Not Granted');
    }
  } catch (err) {
    console.warn(err);
  }
}
