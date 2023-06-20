import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from "react-native-elements";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { FirebaseError } from "firebase/app";

export const SignUpScreen: React.FC = () => {
  const auth = getAuth();

  const navigation = useNavigation();

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
      await createUserWithEmailAndPassword(auth, value.email, value.password);
      navigation.navigate("Sign In" as never);
    } catch (error) {
      setValue({
        ...value,
        error: error instanceof FirebaseError ? error.message : "unkown error",
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text>Sign up screen!</Text>

      {value.error && (
        <View style={styles.error}>
          <Text>{value.error}</Text>
        </View>
      )}

      <View style={styles.controls}>
        <TextInput
          placeholder="Email"
          value={value.email}
          onChangeText={(text) => setValue({ ...value, email: text })}
        />

        <TextInput
          placeholder="Password"
          value={value.password}
          onChangeText={(text) => setValue({ ...value, password: text })}
          secureTextEntry={true}
        />

        <Button title="Sign up" buttonStyle={styles.control} onPress={signUp} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    color: "black",
    justifyContent: "center",
    flex: 1,
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
    color: "#000000",
    backgroundColor: "#D54826FF",
  },
});
