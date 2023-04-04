import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import "./mygig.scss";

export default function MyGig() {
  return (
    <div className="mygig">
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
          <tr>
            <td>
              <img className="img" src="/img/vhiz.png" alt="" />
            </td>
            <td>Gig1</td>
            <td>$50</td>
            <td>49</td>
            <td>
              <img className="delete" src="/icon/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className="img" src="/img/vhiz.png" alt="" />
            </td>
            <td>Gig1</td>
            <td>$50</td>
            <td>49</td>
            <td>
              <img className="delete" src="/icon/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className="img" src="/img/vhiz.png" alt="" />
            </td>
            <td>Gig1</td>
            <td>$50</td>
            <td>49</td>
            <td>
              <img className="delete" src="/icon/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className="img" src="/img/vhiz.png" alt="" />
            </td>
            <td>Gig1</td>
            <td>$50</td>
            <td>49</td>
            <td>
              <img className="delete" src="/icon/delete.png" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
