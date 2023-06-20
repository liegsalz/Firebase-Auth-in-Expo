import React, {useState} from "react";
import {StyleSheet, Text, TextInput, View} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {Input, Button} from "react-native-elements";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {useNavigation} from "@react-navigation/native";
import {FirebaseError} from "firebase/app";

export const SignInScreen: React.FC = () => {
  const auth = getAuth();

  const [value, setValue] = useState({
    email: "",
    password: "",
    error: "",
  });

  const signUp = async () => {
    if (value.email === "" || value.password === "") {
      setValue({
        ...value,
        error: "Email and password are mandatory.",
      });
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, value.email, value.password);
    } catch (error) {
      setValue({
        ...value,
        error: error instanceof FirebaseError ? error.message : "unkown error",
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text>Sign in screen!</Text>

      {value.error && (
        <View style={styles.error}>
          <Text>{value.error}</Text>
        </View>
      )}

      <View style={styles.controls}>
        <TextInput
          placeholder="Email"
          value={value.email}
          onChangeText={(text) => setValue({...value, email: text})}
        />

        <TextInput
          placeholder="Password"
          value={value.password}
          onChangeText={(text) => setValue({...value, password: text})}
          secureTextEntry={true}
        />
        <Button title="Sign in" buttonStyle={styles.control} onPress={signUp} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  controls: {
    flex: 1,
    width: 400,
    height: 40,
  },

  control: {
    marginTop: 10,
  },

  error: {
    marginTop: 10,
    padding: 10,
    color: "#fff",
    backgroundColor: "#D54826FF",
  },
});
