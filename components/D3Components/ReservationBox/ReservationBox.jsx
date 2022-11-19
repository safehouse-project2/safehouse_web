import AppText from "../AppText/AppText";
import { useRouter } from "next/router";

export default function ReservationBox({ post }) {
  const router = useRouter();

  return (
    <div className="r-box flex flex-col justify-start items-start gap-5 min-w-[340px] bg-[#fff] rounded-lg">
      <div className="w-[100%] px-5 pt-3">
        <AppText
          txt={post?.addressLine1 ? post.addressLine1 : "Address"}
          fontSize="16px"
          fontWeight="500"
          color="#5581AA"
        />
      </div>
      <div className="w-[100%] border flex flex-row gap-[100px] items-center px-5 pb-3 border-x-0">
        <div className="flex flex-col gap-3">
          <AppText
            txt={post?.city ? post.city : "City"}
            fontSize="16px"
            fontWeight="500"
          />
          <AppText
            txt={post?.province ? post.province : "Province"}
            fontSize="16px"
            fontWeight="400"
          />
        </div>
        <div className="flex">
          <img
            src={post?.image ? post.image[0] : "http://placekitten.com/40"}
            alt=""
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="flex justify-around items-center pb-5 w-[100%] border-x-0">
        <div
          className="cursor-pointer ml-[-15px]"
          onClick={() => {
            router.push(`/home/${post.id}`);
          }}
        >
          <AppText txt="See details" fontSize="16px" />
        </div>
        {/* <div className="cursor-pointer" onClick={() => router.push(`/edit`)}>
          <AppText txt="Edit" fontSize="16px" />
        </div>
        <div className="cursor-pointer" onClick={() => alert("Calling Emma")}>
          <AppText txt="Delete" fontSize="16px" />
        </div> */}
      </div>
    </div>
  );
}
