import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  StatusBar,
  Button,
  FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ListRow from './ListRow';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any'
          }
        },
        {
          _id: 2,
          text:
            'This is really cool. I like how we can write many different messages to each other',
          createdAt: new Date(),
          user: {
            _id: 3,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any'
          }
        },
        {
          _id: 3,
          text: 'Did you see this new article about trump? ',
          createdAt: new Date(),
          user: {
            _id: 3,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any'
          }
        },
        {
          _id: 4,
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales id nunc a sagittis. Mauris feugiat at urna sed fringilla. Aenean bibendum, orci vitae vulputate aliquet, neque diam venenatis purus, id pharetra lacus nibh ut velit.',
          createdAt: new Date(),
          user: {
            _id: 3,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any'
          }
        },
        {
          _id: 5,
          text: 'Testing',
          createdAt: new Date(),
          user: {
            _id: 3,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any'
          }
        },
        {
          _id: 6,
          text:
            'Hello developer Hello developer Hello developer Hello developer Hello developer Hello developer Hello developer Hello developer ',
          createdAt: new Date(),
          user: {
            _id: 3,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any'
          }
        }
      ]
    };
  }
  UNSAFE_componentWillMount() {
    this.startHeaderHeight = 80;
    if (Platform.OS == 'android') {
      this.startHeaderHeight = 100 + StatusBar.currentHeight;
    }
  }

  handleAdd = async () => {
    try {
      const res = await fetch('https://randomuser.me/api');
      const result = await res.json();
      this.setState({
        people: [...this.state.people, result.results[0]]
      });
    } catch (err) {
      alert(JSON.stringify(err));
    }
  };

  handleRemove = index => {
    const start = this.state.people.slice(0, index);
    const end = this.state.people.slice(index + 1);
    this.setState({
      people: start.concat(end)
    });
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <FlatList
            style={{ marginTop: 20 }}
            data={this.state.people}
            renderItem={({ item, index }) => (
              <ListRow
                {...item}
                index={index}
                onRemove={() => this.handleRemove(index)}
              />
            )}
            keyExtractor={item => item._id}
          />
        </View>
      </SafeAreaView>
    );
  }
}
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center'
  }
});
