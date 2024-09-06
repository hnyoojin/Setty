import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function CalendarScreen({navigation}) {
    return (
      <View style={styles.screen}></View>
        /*<View style={styles.screen}>
            <Button style={styles.button}
                title="Go Home"
                onPress={() => navigation.goBack()}
            />
        </View>*/
    )
}
const styles = StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: '#E5D0FD',
      alignItems: 'left',
    },
    button: {
      backgroundColor: '#7030B8',
      fontSize: 600,
    },
  });
  
