import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import "./mygig.scss";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { useContext } from "react";
import { AuthContext } from "../../context/authContex";

export default function MyGig() {
  const { currentUser } = useContext(AuthContext);
  const { error, isLoading, data } = useQuery(
    ["mygigs", currentUser._id],
    async () => {
      const res = await makeRequest.get(`/gigs?userId=${currentUser._id}`);
      return res.data;
    }
  );

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (id) => {
      return makeRequest.delete(`/gigs/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["mygigs"] });
    },
  });

  const handleDelete = async (id) => {
    mutation.mutate(id);
  };
  return (
    <div className="mygig">
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
            <Link to={"/app/add"} className="link">
              <button>Add New Gig</button>
            </Link>
          </div>
          <table>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Sales</th>
              <th>Action</th>
            </tr>
            {data.map((gig) => (
              <tr key={gig._id}>
                <Link className="link" to={`/app/gig/${gig._id}`}>
                  <td>
                    <img className="img" src={gig.cover} alt="" />
                  </td>
                </Link>
                <td>{gig.title}</td>
                <td>${gig.price}</td>
                <td>{gig.sales}</td>
                <td>
                  <img
                    className="delete"
                    src="/icon/delete.png"
                    alt=""
                    onClick={() => handleDelete(gig._id)}
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
