import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 36,

  },
  input: {
    height: 56,
    width: '100%',
    borderColor: '#1c4490',
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 8,
    padding: 12,

  },

  button: {
    height: 56,
    width: '100%',
    backgroundColor: '#1c4490',
    borderRadius: 5,
    fontSize: 18,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: 'white',
    fontSize: 22,
  },

  message: {
    fontSize: 18,
    color: 'green',
    marginTop: 36,
  },
});
