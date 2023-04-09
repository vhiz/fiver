import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import "./messages.scss";
import moment from "moment";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { useContext } from "react";
import { AuthContext } from "../../context/authContex";
export default function Messages() {
  const { currentUser } = useContext(AuthContext);

  const { error, isLoading, data } = useQuery(["convesations"], async () => {
    const res = await makeRequest.get(`/conversations`);
    return res.data;
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (id) => {
      return makeRequest.put(`/conversations/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["convesations"] });
    },
  });

  const handleRead = async (id) => {
    mutation.mutate(id);
  };

  return (
    <div className="messages">
      {isLoading ? (
        <div className="load">
          <img src="/icon/loading.gif" alt="" />
        </div>
      ) : error ? (
        <div className="load">
          <img src="/icon/error.gif" alt="" />
        </div>
      ) : (
        <div className="contanier">
          <Breadcrumbs />
          <div className="title">
            <h1>Gigs</h1>
          </div>
          <table>
            <tr>
              <th>{currentUser.isSeller ? "Buyer" : "Seller"}</th>
              <th>Last Message</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
            {data.map((c) => (
              <tr
                className={
                  (currentUser.isSeller && !c.readBySeller) ||
                  (!currentUser.isSeller && !c.readByBuyer && "active")
                }
                key={c.id}
              >
                <td>{currentUser.isSeller ? c.buyerId : c.sellerId}</td>
                <td>
                  <Link to={`/app/messages/${c.id}`} className="link">
                    {c?.lastMessage?.substring(0, 100)}.....
                  </Link>
                </td>
                <td>{moment(c.updatedAt).fromNow()}</td>
                <td>
                  {(currentUser.isSeller && !c.readBySeller) ||
                    (!currentUser.isSeller && !c.readByBuyer && (
                      <button onClick={() => handleRead(c.id)}>
                        Mark as read
                      </button>
                    ))}
                </td>
              </tr>
            ))}
          </table>
        </div>
      )}
    </div>
  );
}
