import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import "./messages.scss";
import moment from "moment";
export default function Messages() {
  const message = ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Accusantium nihil eum soluta error reprehenderit quis doloribus at
  hic amet! Minus sapiente esse doloribus suscipit laborum
  cupiditate culpa quaerat a iure!`;
  return (
    <div className="messages">
      <div className="contanier">
        <Breadcrumbs />
        <div className="title">
          <h1>Gigs</h1>
        </div>
        <table>
          <tr>
            <th>Buyer</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr className="active">
            <td>Gustavo</td>
            <td>
              <Link to={'/app/messages/1'} className="link">{message.substring(0, 100)}.....</Link>
            </td>
            <td>{moment(Date.now()).fromNow()}</td>
            <td>
              <button>Mark as read</button>
            </td>
          </tr>
          <tr className="active">
            <td>Gustavo</td>
            <td>
              <Link to={'/app/messages/1'} className="link">{message.substring(0, 100)}.....</Link>
            </td>
            <td>{moment(Date.now()).fromNow()}</td>
            <td>
              <button>Mark as read</button>
            </td>
          </tr>
          <tr>
            <td>Gustavo</td>
            <td>
              <Link to={'/app/messages/1'} className="link">{message.substring(0, 100)}.....</Link>
            </td>
            <td>{moment(Date.now()).fromNow()}</td>
          </tr>
          <tr>
            <td>Gustavo</td>
            <td>
              <Link to={'/app/messages/1'} className="link">{message.substring(0, 100)}.....</Link>
            </td>
            <td>{moment(Date.now()).fromNow()}</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
