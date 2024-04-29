import { defer } from "react-router-dom";
import apiRequest from "./lib/axios";

export async function gigsLoader({ request, params }) {
  const query = request.url.split("?")[1];
  const gigPromise = apiRequest.get(`/gig?${query}`);
  return defer({
    gigResponse: gigPromise,
  });
}

export async function gigLoader({ request, params }) {
  const gigPromise = apiRequest.get(`/gig/single/${params.id}`);
  return defer({
    gigResponse: gigPromise,
  });
}
