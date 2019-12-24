import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import cl from '../assets/colors/Color';
import sz from '../assets/size/Size';

const listDocument = [
  {
    url: 'http://doanthanhnien.vn/Content/uploads/TB171.PDF',
    date: '02/07/2018',
    title: 'Thông báo triển khai kết luận số 02-KL/TWĐTN-CNĐT',
  },
  {
    url: 'http://doanthanhnien.vn/Content/uploads/TB171.PDF',
    date: '02/07/2018',
    title: 'Thông báo triển khai kết luận số 02-KL/TWĐTN-CNĐT',
  },
  {
    url: 'http://doanthanhnien.vn/Content/uploads/TB171.PDF',
    date: '02/07/2018',
    title: 'Thông báo triển khai kết luận số 02-KL/TWĐTN-CNĐT',
  },
  {
    url: 'http://doanthanhnien.vn/Content/uploads/TB171.PDF',
    date: '02/07/2018',
    title: 'Thông báo triển khai kết luận số 02-KL/TWĐTN-CNĐT',
  },
];

export default class DocumentScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
          data={listDocument}
          keyExtractor={(item, index) => index.toString()}
          renderItem={data => (
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('DetailsDocument', {
                  document: data.item,
                });
              }}>
              <View style={styles.card}>
                <Image
                  style={styles.image}
                  source={require('../assets/images/pdf.png')}
                />
                <View style={styles.details}>
                  <Text style={styles.title}>{data.item.title}</Text>
                  <Text style={styles.date}>{data.item.date}</Text>
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
    marginTop: 10,
  },
  details: {margin: 10, justifyContent: 'flex-end'},
  image: {
    width: sz.TabBarHeight,
    height: sz.TabBarHeight,
    borderRadius: sz.BorderImageRadius,
  },
  title: {fontSize: 16, color: cl.IconTabBarActive},
  date: {fontSize: 14, color: 'black'},
});
