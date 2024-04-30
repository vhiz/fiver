import { defer } from "react-router-dom";
import apiRequest from "./lib/axios";

export async function gigsLoader({ request, params }) {
  const query = request.url.split("?")[1];
  const gigPromise = apiRequest.get(`/gig?${query}`);
  return defer({
    gigResponse: gigPromise,
  });
}

