import {
  StyleSheet,
  View,
  Text,
  Linking,
  TouchableOpacity,
} from 'react-native';
import { SPACING } from '../../utils/layout';

interface RecipeListItemProps {
  name: string;
  description: string;
  url?: string;
  rating?: string;
}

export const RecipeListItem = ({
  name,
  description,
  url,
  rating,
}: RecipeListItemProps): JSX.Element => (
  <View style={styles.item}>
    <View style={[styles.column, styles.columnLeft]}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
    <View style={[styles.column, styles.columnRight]}>
      {url && (
        <TouchableOpacity onPress={() => Linking.openURL(url)}>
          <Text style={styles.url}>Link</Text>
        </TouchableOpacity>
      )}
      {rating && <Text style={styles.rating}>{`${rating} / 10`}</Text>}
    </View>
  </View>
);

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    padding: SPACING.medium,
    marginHorizontal: SPACING.xlarge,
    marginBottom: SPACING.large,
    borderRadius: SPACING.medium,
    borderWidth: 2,
  },
  column: {
    margin: SPACING.small,
  },
  columnLeft: {
    flex: 1,
    flexGrow: 3,
  },
  columnRight: {
    flex: 1,
    flexGrow: 1,
  },
  name: {
    fontWeight: 'bold',
  },
  description: {
    marginTop: SPACING.xsmall,
  },
  url: {
    textAlign: 'right',
  },
  rating: {
    textAlign: 'right',
    marginTop: SPACING.xsmall,
  },
});
