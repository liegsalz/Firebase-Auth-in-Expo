import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";

const auth = getAuth();

export const useAuthentication = () => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const unsubOnStateChanged = onAuthStateChanged(auth, (user) => {
      if (user) {
        // The user is signed in
        setUser(user);
      } else {
        // The user is not signed in
        setUser(undefined);
      }
    });

    return unsubOnStateChanged;
  }, []);

  return {
    user,
  };
};
