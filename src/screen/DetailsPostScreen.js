import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';

import cl from '../assets/colors/Color';
import sz from '../assets/size/Size';

export default class DetailsPostScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = ({navigation}) => {
    // return {
    //   header: null,
    // };
  };

  componentDidMount() {
    //
  }
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
  container: {flex: 1, padding: 10, marginTop: 20},
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
