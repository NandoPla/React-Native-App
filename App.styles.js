import { StyleSheet } from "react-native";

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold"
  },
  subtitle: {
    color: "blue",
    fontSize: 24,
  },
  inputText: {
    color:"white",
    height: 40,
    margin: 12,
    borderWidth: 10,
    padding: 10,
    borderColor: "#000000",
  },
  buttonContainer: {  
    margin: 20  
  },  
  multiButtonContainer: {  
    margin: 20,  
    flexDirection: 'row',  
    justifyContent: 'space-between'  
  },
  clickButton: {
    marginTop: 10,
    backgroundColor: "white",
  },
  text: {
    fontSize: 24,
  }
});

export default styles
