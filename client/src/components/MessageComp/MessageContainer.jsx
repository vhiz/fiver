import { useEffect, useRef } from "react";
import Message from "./Message";
import MessageInput from "./MessageInput";

export default function MessageContainer() {
  const endRef = useRef();

  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <dialog id="message" className="modal">
      <div className="modal-box w-[100vw] max-w-[100vw] lg:max-w-[80vw] max-h-[100vh] lg:h-[calc(100vh-5rem)] flex flex-col p-0">
        <form method="dialog" className="lg:hidden">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <div className="flex p-3 input-bordered border-b gap-2 items-center">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <span>Michael James</span>
        </div>
        <div className="flex-1 h-full overflow-y-scroll scrollbar-none w-full p-3">
          <Message />
          <Message />
          <Message own />
          <Message />
          <Message own />
          <Message />
          <Message />
          <Message />
          <div ref={endRef}></div>
        </div>
        <MessageInput />
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}
