import { FaFacebook } from "react-icons/fa";
import { FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="footer items-center p-4 bg-neutral text-neutral-content">
      <aside className="items-center grid-flow-col">
        <h2 className="text-xl font-semibold">fiverr</h2>
        <p>Copyright © 2024 - All right reserved</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <button className="btn btn-ghost btn-sm">
          <FaFacebook />
        </button>
        <button className="btn btn-ghost btn-sm">
          <FaXTwitter />
        </button>
        <button className="btn btn-ghost btn-sm">
          <FaInstagram />
        </button>
        <button className="btn btn-ghost btn-sm">
          <FaYoutube />
        </button>
      </nav>
    </footer>
  );
}
