import moment from "moment";

export default function Message({ own, message }) {
  return (
    <div
      className={`chat mt-2 ${
        own ? `chat-end` : `chat-start ${message.new ? "animate-shakeX" : ""}`
      }`}
    >
      <div
        className={`chat-bubble ${own ? "chat-bubble-info text-white" : ""}`}
      >
        <span className={`${own ? "opacity-80" : ""}`}>{message.text}</span>
      </div>
      <div className="chat-footer opacity-50">
        {moment(message.createdAt).fromNow()}
      </div>
    </div>
  );
}
