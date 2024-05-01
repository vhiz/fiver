import BreadCrumbs from "../components/BreadCrumbs";
import Head from "../components/GigComp/Head";
import CheckOut from "../components/GigComp/CheckOut";
import { useNavigate, useParams } from "react-router-dom";
import Error from "../components/Error";
import apiRequest from "../lib/axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useGigStore from "../useStore/useGigStore";
import useUserStore from "../useStore/useUserStore";
import toast from "react-hot-toast";

export default function Gig() {
  const { id } = useParams();
  const { gig, setGig } = useGigStore();
  const { currentUser } = useUserStore();
  const navigate = useNavigate();
  const { isLoading, error } = useQuery({
    queryKey: ["gig", id],
    queryFn: async () =>
      await apiRequest.get(`/gig/single/${id}`).then((res) => {
        setGig(res.data);
        return res.data;
      }),
  });
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: () => {
      return apiRequest.post("/conversation", { receiverId: gig?.userId });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["conversations"] });
      navigate("/message");
    },
    onError: (error) => {
      if (error.response.status === 409) {
        navigate("/messages");
        return;
      }
      toast.error("Something went wrong");
    },
  });
  function handleMessage() {
    mutation.mutate();
  }
  return (
    <div className="flex gap-24 p-3">
      <div className="lg:flex-[2] w-full">
        {isLoading ? (
          <div className="flex flex-col gap-4 w-full">
            <div className="flex gap-4 items-center">
              <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
              <div className="flex flex-col gap-4">
                <div className="skeleton h-4 w-20"></div>
                <div className="skeleton h-4 w-28"></div>
              </div>
            </div>
            <div className="skeleton h-[34vh] w-full"></div>
            <div className="skeleton h-9 w-28"></div>
            <div className="skeleton h-9 w-full"></div>
            <div className="skeleton h-9 w-full"></div>
          </div>
        ) : error ? (
          <Error />
        ) : (
          <>
            <BreadCrumbs page={gig?.title} cat={gig?.cat} />
            <Head />
          </>
        )}
      </div>
      <div className="lg:flex-1 hidden lg:block">
        {isLoading ? (
          <div className="skeleton h-[40vh] w-full"></div>
        ) : error ? (
          <Error />
        ) : (
          <CheckOut />
        )}
      </div>
      {isLoading ? (
        ""
      ) : error ? (
        ""
      ) : (
        <>
          {gig.userId !== currentUser.id && (
            <button
              disabled={mutation.isPending}
              className={`btn glass fixed bottom-10 left-4 rounded-full h-20 ${
                mutation.isPending ? "btn-disabled" : ""
              }`}
              onClick={handleMessage}
            >
              <div className="avatar">
                <div className="w-12 rounded-full">
                  <img src={gig.user.img} />
                </div>
              </div>
              <h2>Message</h2>
            </button>
          )}
        </>
      )}
    </div>
  );
}
