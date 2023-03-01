import { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { SPACING, WIDTH } from '../utils/layout';

export const SearchBar = (): JSX.Element => {
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
  container: {
    width: WIDTH,
  },
  input: {
    height: 40,
    marginVertical: SPACING.medium,
    marginHorizontal: SPACING.xlarge,
    padding: SPACING.medium,
    borderRadius: SPACING.small,
    borderWidth: 1,
  },
});
