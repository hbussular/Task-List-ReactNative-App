import { Platform, StyleSheet } from "react-native";

export const AppStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  viewContainer: {
    paddingHorizontal: 30,
    paddingVertical: 50,
    flex: 1,
    backgroundColor: 'black',
  }
});

export const homeStyles = StyleSheet.create({
  homeView: {
    marginVertical: 20,
  },
  textInput: {
    padding: Platform.OS === 'ios' ? 15 : 12,
    backgroundColor: '#29292e',
    color: '#f1f1f1',
    fontSize: 18,
    borderRadius: 7,
    borderWidth: 1,
    marginVertical: 15,
  },
  text: {
    color: '#f1f1f1',
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
  },
  touchableOpacity: {
    backgroundColor: '#eba417',
    paddingVertical: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },
  opacityText: {
    color: '#121214',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export const componentStyles = StyleSheet.create({
  flatList: {
    marginTop: 10,
    alignItems: 'center',
  },
  listItem: {
    backgroundColor: '#4DA8DA',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
  componentOpacityText: {
    color: '#f1f1f1',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  listTitleText: {
    color: '#f1f1f1',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 30,
  }
});
