import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {Button} from "react-native-elements";
import {useAuthentication} from "../../utils/hooks/useFirebaseAuth";
import {getAuth, signOut} from "firebase/auth";

export const HomeScreen = () => {
  const {user} = useAuthentication();

  const auth = getAuth();

  return (
    <View style={styles.container}>
      <Text>Welcome {user?.email}!</Text>

      <Button
        title="Sign Out"
        style={styles.button}
        onPress={() => signOut(auth)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginTop: 10,
  },
});
