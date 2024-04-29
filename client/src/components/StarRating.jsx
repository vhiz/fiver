import { FaStar } from "react-icons/fa";

export default function StarRating({ starNumber }) {
  const stars = [];

  for (let i = 0; i < starNumber; i++) {
    stars.push(<FaStar key={i} className="text-yellow-500 text-xs" />);
  }

  return <div className="flex gap-1">{stars}</div>;
}
