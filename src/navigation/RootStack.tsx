import React from "react";
import { useAuthentication } from "../utils/hooks/useFirebaseAuth";
import { MainStack } from "./MainStack";
import { AuthStack } from "./AuthStack";

export const RootStack = () => {
  const { user } = useAuthentication();

  return user ? <MainStack /> : <AuthStack />;
};
