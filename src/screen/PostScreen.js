import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import cl from '../assets/colors/Color';
import sz from '../assets/size/Size';
import {FlatList} from 'react-native-gesture-handler';

const listPost = [
  {
    title: 'Minh Chau HR',
    img_url:
      'https://img2.thuthuatphanmem.vn/uploads/2019/02/22/hinh-nen-gai-xinh-dang-yeu_121750884.jpg',
    date: '22/11/2019',
    description:
      'Nhắc đến phái nữ là chúng ta liên tưởng tới những hình ảnh người con gái xinh đẹp, dịu dàng, dễ thương. Nếu bạn đang tìm kiếm những ảnh gái xinh để làm hình nền thì các bạn cùng đón xem những hình ảnh dưới đây nhé!',
  },
  {
    title: 'Minh Hang Tester',
    img_url:
      'https://img2.thuthuatphanmem.vn/uploads/2019/02/22/tong-hop-hinh-anh-gai-xinh_121752490.jpg',
    date: '22/11/2019',
    description:
      'Nhắc đến phái nữ là chúng ta liên tưởng tới những hình ảnh người con gái xinh đẹp, dịu dàng, dễ thương. Nếu bạn đang tìm kiếm những ảnh gái xinh để làm hình nền thì các bạn cùng đón xem những hình ảnh dưới đây nhé!',
  },
  {
    title: 'Thu Huong Tester',
    img_url:
      'https://img2.thuthuatphanmem.vn/uploads/2019/02/22/hinh-nen-gai-xinh-full-hd_121751381.jpg',
    date: '22/11/2019',
    description:
      'Nhắc đến phái nữ là chúng ta liên tưởng tới những hình ảnh người con gái xinh đẹp, dịu dàng, dễ thương. Nếu bạn đang tìm kiếm những ảnh gái xinh để làm hình nền thì các bạn cùng đón xem những hình ảnh dưới đây nhé!',
  },
  {
    title: 'Tu Anh Tester',
    img_url:
      'https://img2.thuthuatphanmem.vn/uploads/2019/02/22/hinh-nen-gai-xinh-2k-cho-pc_121750528.jpg',
    date: '22/11/2019',
    description:
      'Nhắc đến phái nữ là chúng ta liên tưởng tới những hình ảnh người con gái xinh đẹp, dịu dàng, dễ thương. Nếu bạn đang tìm kiếm những ảnh gái xinh để làm hình nền thì các bạn cùng đón xem những hình ảnh dưới đây nhé!',
  },
  {
    title: 'Thuy Hang Tester',
    img_url:
      'https://img2.thuthuatphanmem.vn/uploads/2019/02/22/anh-gai-xinh-hinh-nen_121749562.jpg',
    date: '22/11/2019',
    description:
      'Nhắc đến phái nữ là chúng ta liên tưởng tới những hình ảnh người con gái xinh đẹp, dịu dàng, dễ thương. Nếu bạn đang tìm kiếm những ảnh gái xinh để làm hình nền thì các bạn cùng đón xem những hình ảnh dưới đây nhé!',
  },
];

export default class PostScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  static navigationOptions = ({navigation}) => {
    return {
      header: null,
    };
  };

  componentDidMount() {
    // fetch data here
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={true}
          data={listPost}
          keyExtractor={(item, index) => index.toString()}
          renderItem={data => (
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('DetailsPost', {
                  post: data.item,
                })
              }>
              <View style={styles.card}>
                <Image
                  style={styles.image}
                  source={
                    //require('../assets/images/car.jpg')
                    {
                      uri: data.item.img_url,
                    }
                  }
                />
                <View style={styles.details}>
                  <Text style={styles.title}>Title: {data.item.title}</Text>
                  <Text style={styles.date}>Date: {data.item.date}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, padding: 10},
  card: {
    flexDirection: 'row',
    borderColor: cl.IconTabBarActive,
    borderWidth: 1,
    marginTop: 10,
    borderRadius: sz.BorderImageRadius,
  },
  details: {margin: 10, justifyContent: 'flex-end'},
  image: {
    width: sz.PostImage,
    height: sz.PostImage,
    borderRadius: sz.BorderImageRadius,
  },
  title: {fontSize: 18, color: cl.IconTabBarActive},
  date: {fontSize: 14, color: 'black'},
});
