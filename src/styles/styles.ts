import { StyleSheet } from "react-native";

export const AppStyles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
  },
  viewContainer: {
    paddingHorizontal: 20,
    width: '100%',
    height: '100%',
    backgroundColor: '#fffff2',
  }
})

export const homeStyles = StyleSheet.create({
  homeView: {
    marginVertical: 20,
  },
  textInput: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 15,
    backgroundColor: '#FFF8DC'
  },
  text: {
    color: '#2F2F2F',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  touchableOpacity: {
    borderRadius: 10,
    paddingVertical: 10,
    width: '100%',
    backgroundColor: '#3A6EA5',
    alignItems: 'center',
  },
  opacityText: {
    color: '#F2F2F2',
  },
})

export const componentStyles = StyleSheet.create({
  flatList: {
    marginTop: 10,
    alignItems: 'center'
  },
  listItem: {
    backgroundColor: '#F28A30',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    width: '100%'
  },
  componentOpacityText: {
    color: '#2F2F2F',
    textAlign: 'center'
  },
})
