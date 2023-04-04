import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import MessageBox from "../../components/message/MessageBox";
import "./message.scss";

export default function Message() {
  return (
    <div className="message">
      <div className="contanier">
        <Breadcrumbs />
        <div className="messages">
          <MessageBox />
          <MessageBox own={true}/>
          <MessageBox />
          <MessageBox own={true}/>
          <MessageBox />
          <MessageBox own={true}/>
        </div>
        <hr />
        <div className="write">
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="write a message"
          ></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
}
