import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { MdWebAsset } from "react-icons/md";

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
        <Link
          to={"https://twitter.com/The_api_guy33?t=xAKsZTpLidITkXlAGtTBWA&s=09"}
          className="btn btn-ghost btn-sm"
        >
          <FaXTwitter />
        </Link>
        <Link
          to={"https://portfolio-49f29.web.app"}
          className="btn btn-ghost btn-sm"
        >
          <MdWebAsset />
        </Link>
        <Link to={"https://github.com/vhiz"} className="btn btn-ghost btn-sm">
          <FaGithub />
        </Link>
        <Link
          to={
            "https://api.whatsapp.com/send/?phone=09056394367&text=Hello+welcome%2C+how+may+I+be+of+assistance&type=phone_number&app_absent=0"
          }
          className="btn btn-ghost btn-sm"
        >
          <FaWhatsapp />
        </Link>
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
