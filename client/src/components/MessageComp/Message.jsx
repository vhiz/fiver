export default function Message({ own }) {
  return (
    <div className={`chat mt-2 ${own ? "chat-end" : "chat-start"}`}>
      <div
        className={`chat-bubble ${own ? "chat-bubble-info text-white" : ""}`}
      >
        <span className={`${own ? "opacity-80" : ""}`}>
          It's over Anakin, <br />I have the high ground.
        </span>
      </div>
      <div className="chat-footer opacity-50">Seen at 12:46</div>
    </div>
  );
}
