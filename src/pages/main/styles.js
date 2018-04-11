import { StyleSheet } from 'react-native';
import { colors } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundApp,
  },

  columnContainer: {
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },

  listHeaderFooter: {
    height: 15,
  },
});

export default styles;
