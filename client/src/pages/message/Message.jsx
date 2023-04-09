import { useParams } from "react-router-dom";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import MessageBox from "../../components/message/MessageBox";
import "./message.scss";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { useContext } from "react";
import { AuthContext } from "../../context/authContex";

export default function Message() {
  const { id } = useParams();
  const { error, isLoading, data } = useQuery(["messages", id], async () => {
    const res = await makeRequest.get(`/messages/${id}`);
    return res.data;
  });

  const { currentUser } = useContext(AuthContext);

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (messages) => {
      return makeRequest.post(`/messages`, messages);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["messages"] });
    },
  });

  const handleSend = async (e) => {
    e.preventDefault();

    var messages = {
      conversationId: id,
      desc: e.target[0].value,
    };
    mutation.mutate(messages);

    e.target[0].value = "";
  };

  return (
    <div className="message">
      <div className="contanier">
        <Breadcrumbs />
        {isLoading ? (
          <div className="load">
            <img src="/icon/loading.gif" alt="" />
          </div>
        ) : error ? (
          <div className="load">
            <img src="/icon/error.gif" alt="" />
          </div>
        ) : (
          <div className="messages">
            {data.map((item) => (
              <MessageBox own={currentUser._id === item.userId} message={item} key={item._id} />
            ))}
          </div>
        )}
        <hr />
        <form className="write" onSubmit={handleSend}>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="write a message"
            required
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
