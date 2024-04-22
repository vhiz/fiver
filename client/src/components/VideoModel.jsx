import useVideoStore from "../useStore/useVideoStore";

export default function VideoModel() {
  const { setVideo, video } = useVideoStore();
  return (
    <dialog id="videoModal" className="modal">
      <div className="modal-box max-w-[90vw] lg:max-w-[70vw] h-[50vh] p-0 bg-transparent">
        {video && (
          <video autoPlay controls className="w-full h-full object-cover">
            <source src={video} type="video/mp4" />
          </video>
        )}
      </div>
      <form method="dialog" className="modal-backdrop">
        <button onClick={() => setVideo(null)}>close</button>
      </form>
    </dialog>
  );
}
