import { useState, useCallback } from "react"
import { useHistory } from "react-router-dom"
import axios from "axios"
import { User } from "../types/user"
import { UseMessage } from "./useMessage";

export const useAuth = () => {
  const history = useHistory();
  const { showMessage } = UseMessage();

  const [loading, setLoading] = useState(false);

  const login = useCallback(
    (id: string) => {
      setLoading(true);

      axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
        if (res.data) {
          showMessage({title: "ログインしました", status: "success"})
          history.push("/home")
        } else {
          showMessage({title: "ユーザが見つかりません", status: "error"})
        }
      }).catch(() => showMessage({title: "ログインできません", status: "error"})).finally(() => setLoading(false))
    },
    [history, showMessage],
  );
  return { login, loading };
};
