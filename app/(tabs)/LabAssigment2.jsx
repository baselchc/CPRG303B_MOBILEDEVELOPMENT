import { FlatList, SafeAreaView, StyleSheet, Text, View, Image, Button } from 'react-native';
import React, { useState } from 'react';

const Data = [
  {
    id: "2",
    name: "John Doe",
    url: "https://gravatar.com/avatar/27205e5c51cb03f862138b22bcb5dc20f94a342e744ff6df1b8dc8af3c865109",
    EmailId: "Email",
    likes: "72"
  },
];

const Item = ({item}) => {
  const [likes, setLikes] = useState((item.likes, 10));
  const [dislikes, setDislikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  return (
    <View style={styles.item}>
      <View style={styles.row}>
        <Image source={{ uri: item.url }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text>{item.EmailId}</Text>
          <Text>Likes: {likes}</Text>
          <Text>Dislikes: {dislikes}</Text>
          <View style={styles.buttonContainer}>
            <Button title="Like" onPress={handleLike} />
            <Button title="Dislike" onPress={handleDislike} />
          </View>
        </View>
      </View>
    </View>
  );
};

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        data={Data}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 45,
  },
  item: {
    backgroundColor: 'gray',
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 13,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 32,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
});
