import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

// import SlackMessage from '../SlackMessage';

//
// class Chat extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>
// Chat
//         </Text>
//       </View>
//     );
//   }
// }
// export default Chat;
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

class Chat extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    messages: []
  };

  UNSAFE_componentWillMount() {
    this.setState({
      messages: [
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
            'Hello developer Hello developer Hello developer Hello developer Hello developer Hello developer Hello developer Hello developer',
          createdAt: new Date(),
          user: {
            _id: 3,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any'
          }
        },
        {
          _id: 3,
          text:
            ' developer developer developer developer developer developer developer developer developer developer developer developer developer developer developer developer developer developer ',
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
            'Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello ',
          createdAt: new Date(),
          user: {
            _id: 3,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any'
          }
        },
        {
          _id: 5,
          text:
            'New New New New New New New New New New New New New New New New New New New New New New New New New New New New New New New New New New New New New New New New New New ',
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
            'Hello developer Hello developer Hello developer Hello developer Hello developer Hello developer Hello developer Hello developer Hello developer Hello developer Hello developer Hello developer Hello developer ',
          createdAt: new Date(),
          user: {
            _id: 3,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any'
          }
        }
      ]
    });
  }

  renderAvatar = () => {
    <View style={{ width: 30, height: 30, backgroundColor: 'red' }}>
      {/* <Text>Avatar</Text> */}
    </View>;
  };

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));
  }

  deleteMessage = id => {
    const index = this.state.messages.findIndex(item => {
      return item._id === id;
    });
    // console.log(this.state.messages[index]);
    //call the animation
    const copy = [...this.state.messages];
    copy.splice(index, 1);
    this.setState({ messages: copy });
  };

  onLongPress(context, currentMessage) {
    console.log('onLongPress', context, currentMessage.text);
    const options = ['Copy Text', 'Delete', 'Cancel'];
    const cancelButtonIndex = options.length - 1;
    context.actionSheet().showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex
      },
      buttonIndex => {
        switch (buttonIndex) {
          case 0:
            Clipboard.setString(currentMessage.text);
            break;
          case 1:
            this.deleteMessage(currentMessage._id);
          default:
            break;
        }
      }
    );
  }

  testFunc = () => {
    console.warn('this is this.testFunc');
  };

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1
        }}
        renderMessage={this.renderMessage}
        showUserAvatar
        showAvatarForEveryMessage
        onLongPress={(context, currentMessage) => {
          this.onLongPress(context, currentMessage);
        }}
      />
    );
  }
}

export default Chat;

// import React from 'react';
// import { Platform, StyleSheet, Text, View } from 'react-native';
//
// import {
//   GiftedChat,
//   Actions,
//   Bubble,
//   SystemMessage
// } from 'react-native-gifted-chat';
// import CustomActions from './CustomActions';
// import CustomView from './CustomView';
//
// export default class Chat extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       messages: [],
//       loadEarlier: true,
//       typingText: null,
//       isLoadingEarlier: false
//     };
//
//     this._isMounted = false;
//     this.onSend = this.onSend.bind(this);
//     this.onReceive = this.onReceive.bind(this);
//     this.renderCustomActions = this.renderCustomActions.bind(this);
//     this.renderBubble = this.renderBubble.bind(this);
//     this.renderSystemMessage = this.renderSystemMessage.bind(this);
//     this.renderFooter = this.renderFooter.bind(this);
//     this.onLoadEarlier = this.onLoadEarlier.bind(this);
//
//     this._isAlright = null;
//   }
//
//   UNSAFE_componentWillMount() {
//     this._isMounted = true;
//     this.setState(() => {
//       return {
//         messages: [
//           {
//             _id: 1,
//             text: 'Hello developer',
//             createdAt: new Date(),
//             user: {
//               _id: 2,
//               name: 'React Native',
//               avatar: 'https://placeimg.com/140/140/any'
//             }
//           },
//           {
//             _id: 2,
//             text:
//               'Hello developer Hello developer Hello developer Hello developer Hello developer Hello developer Hello developer Hello developer',
//             createdAt: new Date(),
//             user: {
//               _id: 3,
//               name: 'React Native',
//               avatar: 'https://placeimg.com/140/140/any'
//             }
//           },
//           {
//             _id: 3,
//             text:
//               ' developer developer developer developer developer developer developer developer developer developer developer developer developer developer developer developer developer developer ',
//             createdAt: new Date(),
//             user: {
//               _id: 3,
//               name: 'React Native',
//               avatar: 'https://placeimg.com/140/140/any'
//             }
//           },
//           {
//             _id: 4,
//             text:
//               'Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello ',
//             createdAt: new Date(),
//             user: {
//               _id: 3,
//               name: 'React Native',
//               avatar: 'https://placeimg.com/140/140/any'
//             }
//           },
//           {
//             _id: 5,
//             text:
//               'New New New New New New New New New New New New New New New New New New New New New New New New New New New New New New New New New New New New New New New New New New ',
//             createdAt: new Date(),
//             user: {
//               _id: 3,
//               name: 'React Native',
//               avatar: 'https://placeimg.com/140/140/any'
//             }
//           },
//           {
//             _id: 6,
//             text:
//               'Hello developer Hello developer Hello developer Hello developer Hello developer Hello developer Hello developer Hello developer Hello developer Hello developer Hello developer Hello developer Hello developer ',
//             createdAt: new Date(),
//             user: {
//               _id: 3,
//               name: 'React Native',
//               avatar: 'https://placeimg.com/140/140/any'
//             }
//           }
//         ]
//       };
//     });
//   }
//
//   componentWillUnmount() {
//     this._isMounted = false;
//   }
//
//   onLoadEarlier() {
//     this.setState(previousState => {
//       return {
//         isLoadingEarlier: true
//       };
//     });
//
//     setTimeout(() => {
//       if (this._isMounted === true) {
//         this.setState(previousState => {
//           return {
//             messages: GiftedChat.prepend(previousState.messages, [
//               {
//                 _id: Math.round(Math.random() * 1000000),
//                 text:
//                   'It uses the same design as React, letting you compose a rich mobile UI from declarative components https://facebook.github.io/react-native/',
//                 createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
//                 user: {
//                   _id: 1,
//                   name: 'Developer'
//                 }
//               },
//               {
//                 _id: Math.round(Math.random() * 1000000),
//                 text:
//                   'React Native lets you build mobile apps using only JavaScript',
//                 createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
//                 user: {
//                   _id: 1,
//                   name: 'Developer'
//                 }
//               },
//               {
//                 _id: Math.round(Math.random() * 1000000),
//                 text: 'This is a system message.',
//                 createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
//                 system: true
//               }
//             ]),
//             loadEarlier: false,
//             isLoadingEarlier: false
//           };
//         });
//       }
//     }, 1000); // simulating network
//   }
//
//   onSend(messages = []) {
//     this.setState(previousState => {
//       return {
//         messages: GiftedChat.append(previousState.messages, messages)
//       };
//     });
//
//     // for demo purpose
//     this.answerDemo(messages);
//   }
//
//   answerDemo(messages) {
//     if (messages.length > 0) {
//       if (messages[0].image || messages[0].location || !this._isAlright) {
//         this.setState(previousState => {
//           return {
//             typingText: 'React Native is typing'
//           };
//         });
//       }
//     }
//
//     setTimeout(() => {
//       if (this._isMounted === true) {
//         if (messages.length > 0) {
//           if (messages[0].image) {
//             this.onReceive('Nice picture!');
//           } else if (messages[0].location) {
//             this.onReceive('My favorite place');
//           } else {
//             if (!this._isAlright) {
//               this._isAlright = true;
//               this.onReceive('Alright');
//             }
//           }
//         }
//       }
//
//       this.setState(previousState => {
//         return {
//           typingText: null
//         };
//       });
//     }, 1000);
//   }
//
//   onReceive(text) {
//     this.setState(previousState => {
//       return {
//         messages: GiftedChat.append(previousState.messages, {
//           _id: Math.round(Math.random() * 1000000),
//           text: text,
//           createdAt: new Date(),
//           user: {
//             _id: 2,
//             name: 'React Native'
//             // avatar: 'https://facebook.github.io/react/img/logo_og.png',
//           }
//         })
//       };
//     });
//   }
//
//   renderCustomActions(props) {
//     if (Platform.OS === 'ios') {
//       return <CustomActions {...props} />;
//     }
//     const options = {
//       'Action 1': props => {
//         alert('option 1');
//       },
//       'Action 2': props => {
//         alert('option 2');
//       },
//       Cancel: () => {}
//     };
//     return <Actions {...props} options={options} />;
//   }
//
//   renderBubble(props) {
//     return (
//       <Bubble
//         {...props}
//         wrapperStyle={{
//           left: {
//             backgroundColor: '#f0f0f0'
//           }
//         }}
//       />
//     );
//   }
//
//   renderSystemMessage(props) {
//     return (
//       <SystemMessage
//         {...props}
//         containerStyle={{
//           marginBottom: 15
//         }}
//         textStyle={{
//           fontSize: 14
//         }}
//       />
//     );
//   }
//
//   renderCustomView(props) {
//     return <CustomView {...props} />;
//   }
//
//   renderFooter(props) {
//     if (this.state.typingText) {
//       return (
//         <View style={styles.footerContainer}>
//           <Text style={styles.footerText}>{this.state.typingText}</Text>
//         </View>
//       );
//     }
//     return null;
//   }
//
//   deleteMessage = id => {
//     const index = this.state.messages.findIndex(item => {
//       return item._id === id;
//     });
//     // console.log(this.state.messages[index]);
//     //call the animation
//     const copy = [...this.state.messages];
//     copy.splice(index, 1);
//     this.setState({ messages: copy });
//   };
//
//   onLongPress(context, currentMessage) {
//     console.log('onLongPress', context, currentMessage.text);
//     const options = ['Copy Text', 'Delete', 'Cancel'];
//     const cancelButtonIndex = options.length - 1;
//     context.actionSheet().showActionSheetWithOptions(
//       {
//         options,
//         cancelButtonIndex
//       },
//       buttonIndex => {
//         switch (buttonIndex) {
//           case 0:
//             Clipboard.setString(currentMessage.text);
//             break;
//           case 1:
//             this.deleteMessage(currentMessage._id);
//           default:
//             break;
//         }
//       }
//     );
//   }
//
//   render() {
//     return (
//       <GiftedChat
//         messages={this.state.messages}
//         onSend={this.onSend}
//         loadEarlier={this.state.loadEarlier}
//         onLoadEarlier={this.onLoadEarlier}
//         isLoadingEarlier={this.state.isLoadingEarlier}
//         user={{
//           _id: 1 // sent messages should have same user._id
//         }}
//         renderActions={this.renderCustomActions}
//         renderBubble={this.renderBubble}
//         renderSystemMessage={this.renderSystemMessage}
//         renderCustomView={this.renderCustomView}
//         renderFooter={this.renderFooter}
//         onLongPress={(context, currentMessage) => {
//           this.onLongPress(context, currentMessage);
//         }}
//       />
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   footerContainer: {
//     marginTop: 5,
//     marginLeft: 10,
//     marginRight: 10,
//     marginBottom: 10
//   },
//   footerText: {
//     fontSize: 14,
//     color: '#aaa'
//   }
// });
