import { useQuery } from "@tanstack/react-query";
import "./messagebox.scss";
import { makeRequest } from "../../axios";

export default function MessageBox({ own, message }) {
  const { error, isLoading, data } = useQuery(
    ["messagesUser", message.userId],
    async () => {
      const res = await makeRequest.get(`/users/${message.userId}`);
      return res.data;
    }
  );

  return (
    <div className={own ? "messagebox own" : "messagebox"}>
      {isLoading ? (
        "loading.."
      ) : error ? (
        "error"
      ) : (
        <img src={data.img || "/icon/no.png"} alt="" />
      )}
      <p>{message.desc}</p>
    </div>
  );
}
