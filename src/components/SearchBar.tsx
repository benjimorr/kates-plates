import { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

export const SearchBar = () => {
  const [searchText, setSearchText] = useState<string>('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setSearchText}
        value={searchText}
        placeholder="Search Recipes"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  input: {
    height: 40,
    minWidth: 250,
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
});
