import {
  createContext,
  useState,
  PropsWithChildren,
  useContext,
  useEffect,
} from "react";
import { UserContextType } from "../types/UserContextType";
import { User } from "../types/User";
import { UserLogin } from "../types/UserLogin";
import { fetcher } from "../lib/fetcher";
import { Text } from "react-native";

const UserContext = createContext<UserContextType>({
  user: null,
  signIn: () => {},
  signOut: () => {},
});

const useProvideAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetcher.post("?m=sessioncheck&v=2&autologin=0").then(function (response) {
      if (response.data) {
        setUser(response.data);
      }
    });

    setIsLoading(false);
  }, []);

  const signIn = (data: UserLogin) => {
    fetcher
      .post(`?m=login&v=2&my_email=${data.email}&my_password=${data.password}`)
      .then(function (response) {
        setUser(response.data);
      })
      .catch(function (error) {
        return null;
      });
  };
  const signOut = () => {
    fetcher
      .post(`?m=logout&v=1&PHPSESSID=${user?.sessionId}`)
      .then(() => {
        setUser(null);
      })
      .catch(function (error) {
        return null;
      });
  };
  return { user, isLoading, signIn, signOut };
};

export const useAuth = () => {
  return useContext(UserContext);
};

export const UserContextProvider = ({ children }: PropsWithChildren) => {
  const data = useProvideAuth();
  return (
    <UserContext.Provider value={data}>
      {data.isLoading ? <Text>Loading...</Text> : children}
    </UserContext.Provider>
  );
};
