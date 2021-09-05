import { useState, useCallback } from "react"
import { useHistory } from "react-router-dom"
import axios from "axios"
import { User } from "../types/user"

export const useAuth = () => {
  const history = useHistory();

  const [loading, setLoading] = useState(false);

  const login = useCallback(
    (id: string) => {
      setLoading(true);

      axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
        if (res.data) {
          history.push("/home")
        } else {
          alert("ユーザが見つかりません")
        }
      }).catch(() => alert("ログインできません")).finally(() => setLoading(false))
    },
    [history],
  );
  return { login, loading };
};
