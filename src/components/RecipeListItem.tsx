import { StyleSheet, View, Text } from 'react-native';

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
}: RecipeListItemProps) => (
  <View style={styles.item}>
    <View style={styles.column}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
    <View style={styles.column}>
      {url && <Text style={styles.url}>{url}</Text>}
      {rating && <Text style={styles.rating}>{`${rating} / 10`}</Text>}
    </View>
  </View>
);

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginBottom: 12,
    borderRadius: 10,
    flexDirection: 'row',
    minWidth: 400,
    borderWidth: 2,
  },
  column: {
    flex: 1,
    flexGrow: 1,
    padding: 5,
  },
  name: {
    fontWeight: 'bold',
  },
  description: {
    marginTop: 5,
  },
  url: {
    textAlign: 'right',
  },
  rating: {
    textAlign: 'right',
  },
});
