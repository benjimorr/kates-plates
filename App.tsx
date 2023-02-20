import { StyleSheet, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { RecipeList } from './src/components/RecipeList';

const App = () => (
  <>
    <SafeAreaView style={styles.container}>
      <RecipeList />
    </SafeAreaView>
    <StatusBar style="auto" />
  </>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
