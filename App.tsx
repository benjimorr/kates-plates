import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { RecipeList } from './src/components/RecipeList';

const App = (): JSX.Element => (
  <>
    <SafeAreaView style={styles.container}>
      <RecipeList />
    </SafeAreaView>
    <ExpoStatusBar style="auto" />
  </>
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

export default App;
