import React from 'react';
import { 
  SafeAreaView,
  VirtualizedList,
  StyleSheet, 
  View, 
  Text, 
  Button 
} from 'react-native';

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function CommunityScreen({ navigation }) {
    return (
      <View style={styles.screen}>
      </View>
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
