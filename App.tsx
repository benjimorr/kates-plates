import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProvider } from 'react-native-paper';
import { RecipesScreen } from './src/screens/RecipesScreen';

const App = (): JSX.Element => (
  <PaperProvider>
    <RecipesScreen />
    <StatusBar style="auto" />
  </PaperProvider>
);

export default App;
