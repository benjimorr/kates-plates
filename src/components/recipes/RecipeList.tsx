import { useState } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import { RecipeListItem } from './RecipeListItem';
import { SearchBar } from '../SearchBar';
import { recipes as testRecipes } from '../../utils/recipeData';
import { WIDTH } from '../../utils/layout';

export const RecipeList = (): JSX.Element => {
  const [recipes, _] = useState<Recipe[]>(testRecipes);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recipes</Text>
      <SearchBar />
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
  list: {
    width: WIDTH,
  },
});
