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

export default function QuestScreen({ navigation }) {
    return (
      <View style={styles.screen}>
        <SafeAreaView style={styles.container}>
          <VirtualizedList
              initialNumToRender={4}
              renderItem={({item}) => <Item title={item.title} />}
              keyExtractor={item => item.id}
          />
        </SafeAreaView>
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
