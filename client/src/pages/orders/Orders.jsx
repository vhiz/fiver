import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import "./orders.scss";

export default function Orders() {
  const currentUser = {
    id: 1,
    username: "vhiz",
    isSeller: true,
    img: "/img/vhiz.png",
  };
  return (
    <div className="orders">
      <div className="contanier">
        <Breadcrumbs />
        <div className="title">
          <h1>Gigs</h1>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>{currentUser.isSeller ? "Buyer" : "Seller"}</th>
            <th>Contact</th>
          </tr>
          <tr>
            <td>
              <img className="img" src="/img/vhiz.png" alt="" />
            </td>
            <td>Gig1</td>
            <td>$50</td>
            <td>Vhiz</td>
            <td>
              <img className="delete" src="/icon/email.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className="img" src="/img/vhiz.png" alt="" />
            </td>
            <td>Gig1</td>
            <td>$50</td>
            <td>Vhiz</td>
            <td>
              <img className="delete" src="/icon/email.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className="img" src="/img/vhiz.png" alt="" />
            </td>
            <td>Gig1</td>
            <td>$50</td>
            <td>Vhiz</td>
            <td>
              <img className="delete" src="/icon/email.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className="img" src="/img/vhiz.png" alt="" />
            </td>
            <td>Gig1</td>
            <td>$50</td>
            <td>Vhiz</td>
            <td>
              <img className="delete" src="/icon/email.png" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
