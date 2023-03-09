import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { RecipeList } from '../components/recipes/RecipeList';

export const RecipesScreen = () => (
  <SafeAreaView style={styles.container}>
    <RecipeList />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    marginTop: StatusBar.currentHeight,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
