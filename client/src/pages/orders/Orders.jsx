import { useQuery } from "@tanstack/react-query";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import "./orders.scss";
import { makeRequest } from "../../axios";
import { useContext } from "react";
import { AuthContext } from "../../context/authContex";
import { Link, useNavigate } from "react-router-dom";

export default function Orders() {
  const { currentUser } = useContext(AuthContext);

  const { error, isLoading, data } = useQuery(["orders"], async () => {
    const res = await makeRequest.get(`/orders`);
    return res.data;
  });

  const navigate = useNavigate();

  const handleContact = async (order) => {
    const sellerId = order.sellerId;
    const buyerId = order.buyerId;
    const id = sellerId + buyerId;
    try {
      const res = await makeRequest.get(`/conversations/single/${id}`);
      navigate(`/app/messages/${res.data.id}`);
    } catch (error) {
      if (error.response.status === 404) {
        const res = await makeRequest.post(`/conversations`, {
          to: currentUser.isSeller ? buyerId : sellerId,
        });
        navigate(`/app/messages/${res.data.id}`);
      }
    }
  };

  return (
    <div className="orders">
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
            <h1>Orders</h1>
          </div>
          <table>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Contact</th>
            </tr>

            {data.map((order) => (
              <tr key={order}>
                <Link className="link" to={`/app/gig/${order.gigId}`}>
                  <td>
                    <img className="img" src={order.img} alt="" />
                  </td>
                </Link>
                <td>{order.title}</td>
                <td>${order.price}</td>
                <td>
                  <img
                    className="delete"
                    src="/icon/email.png"
                    alt=""
                    onClick={() => handleContact(order)}
                  />
                </td>
              </tr>
            ))}
          </table>
        </div>
      )}
    </div>
  );
}
