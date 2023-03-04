import { StyleSheet } from "react-native";

 const title = StyleSheet.create({
  color: "red"
 });

 const subtitle = StyleSheet.create({
  color: "blue"
 })

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: "#fff"
  },
  subtitle: {
    color: "#fff",
    fontSize: 24
  }
});

export default styles
export {title, subtitle}