import { StatusBar } from 'expo-status-bar';
import { RecipesScreen } from './src/screens/RecipesScreen';

const App = (): JSX.Element => (
  <>
    <RecipesScreen />
    <StatusBar style="auto" />
  </>
);

export default App;
