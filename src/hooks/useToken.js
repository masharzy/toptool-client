import axios from "axios";
import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const name = user?.user?.displayName;
    const image = user?.user?.photoURL;
    const email = user?.user?.email;

    const currentUser = { name, email, image };
    if (email) {
      axios
        .put(`http://localhost:5000/user/${email}`, currentUser)
        .then((res) => {
          const accessToken = res.data.token;
          localStorage.setItem("accessToken", accessToken);
          setToken(accessToken);
        });
    }
  }, [user]);
  return [token];
};

export default useToken;
