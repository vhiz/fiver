import { BsSend } from "react-icons/bs";

export default function MessageInput() {
  return (
    <div className="mt-auto w-full flex items-center gap-4 p-3">
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full"
      />
      <button className="btn btn-success">
        <BsSend />
      </button>
    </div>
  );
}
