import { StyleSheet, Linking } from 'react-native';
import { Card, Text, Button, IconButton } from 'react-native-paper';
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
  <Card elevation={3} style={styles.item}>
    <Card.Title title={name} titleVariant="titleLarge" />
    <Card.Content>
      <Text variant="bodyMedium">{description}</Text>
      {rating && <Text variant="bodyMedium">Rating: {`${rating} / 10`}</Text>}
    </Card.Content>
    <Card.Actions>
      <IconButton icon="pencil" onPress={() => {}} />
      {url && (
        <Button
          mode="contained"
          accessibilityLabel="View Recipe"
          uppercase
          onPress={() => Linking.openURL(url)}
        >
          View Recipe
        </Button>
      )}
    </Card.Actions>
  </Card>
);

const styles = StyleSheet.create({
  item: {
    marginHorizontal: SPACING.large,
    marginVertical: SPACING.small,
  },
});
