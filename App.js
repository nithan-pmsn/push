/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import PushNotification from 'react-native-push-notification';

const App: () => React$Node = () => {



  useEffect(() => {
    console.warn("summa")
    PushNotification.configure({
      onRegister: function (token) {
        console.log('TOKEN:', token);
      },
      onNotification: function (notification) {
        console.log('NOTIFICATION:', notification);
      },
      senderID: "240054625468",
      permissions: {
        alert: true,
        badge: true,
        sound: true
      },
      popInitialNotification: true,
      requestPermissions: true,
    });
    // setTimeout(() => {
    //   PushNotification.localNotification({
    //     ticker: "My Notification Ticker",
    //     autoCancel: true,
    //     largeIcon: "ic_launcher",
    //     smallIcon: "ic_notification", // (optional) default: "ic_notification" with fallback for "ic_launcher"
    //     bigText: "My big text that will be shown when notification is expanded", // (optional) default: "message" prop
    //     subText: "This is a subText", // (optional) default: none
    //     color: "red", // (optional) default: system default
    //     vibrate: true, // (optional) default: true
    //     vibration: 300, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
    //     tag: "some_tag", // (optional) add tag to message
    //     group: "group", // (optional) add group to message
    //     ongoing: false, // (optional) set whether this is an "ongoing" notification
    //     priority: "high", // (optional) set notification priority, default: high
    //     visibility: "private", // (optional) set notification visibility, default: private
    //     importance: "high", // (optional) set notification importance, default: high
    //     allowWhileIdle: false, // (optional) set notification to work while on doze, default: false
    //     ignoreInForeground: false, // (optional) if true, the notification will not be visible when the app is in the foreground (useful for parity with how iOS notifications appear)

    //     /* iOS only properties */
    //     alertAction: "view", // (optional) default: view
    //     category: "", // (optional) default: empty string
    //     userInfo: {}, // (optional) default: {} (using null throws a JSON value '<null>' error)

    //     /* iOS and Android properties */
    //     title: "My Notification Title", // (optional)
    //     message: "My Notification Message", // (required)
    //     playSound: false, // (optional) default: true
    //     soundName: "default", // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
    //     number: 10, // (optional) Valid 32 bit integer specified as string. default: none (Cannot be zero)
    //     repeatType: "day", // (optional) Repeating interval. Check 'Repeating Notifications' section for more info.
    //     actions: '["Yes", "No"]', // (Android only) See the doc for notification actions to know more
    //   });
    // }, 5000);
  }, [])


  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>


          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
