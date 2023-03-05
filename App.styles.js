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
    fontSize: 25,
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
  }
});

export default styles