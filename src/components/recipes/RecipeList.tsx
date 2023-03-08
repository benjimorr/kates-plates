import { useState } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RecipeListItem } from './RecipeListItem';
import { recipes as testRecipes } from '../../utils/recipeData';
import { WIDTH, SPACING } from '../../utils/layout';

export const RecipeList = (): JSX.Element => {
  const [recipes, _] = useState<Recipe[]>(testRecipes);
  const [searchText, setSearchText] = useState<string>('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recipes</Text>
      <View style={styles.searchContainer}>
        <Searchbar
          placeholder="Search Recipes"
          onChangeText={setSearchText}
          value={searchText}
        />
      </View>
      <FlatList
        data={recipes}
        renderItem={({ item }) => <RecipeListItem {...item} />}
        keyExtractor={item => item.id}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
  },
  searchContainer: {
    width: WIDTH,
    padding: SPACING.medium,
  },
  list: {
    width: WIDTH,
  },
});
