import * as React from "react";
import styled from "styled-components";
import AppText from "../AppText/AppText";
import { useRouter } from "next/router";

const BackgroundImageContainer = styled.div`
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 33.98%,
      rgba(0, 0, 0, 0.85) 100%
    ),
    url(${props => props.src || "./vercel.svg"});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-width: 250px;
  min-height: 200px;
  background-color: #272727;
  border-radius: 10px;
  display: flex;
  flex: none;
  flex-direction: column;
  justify-content: flex-start;
  padding: 120px 20px 20px 20px;
  box-shadow: 0px 4px 37px rgba(0, 0, 0, 0.35);
  transition: all 0.4s ease-in-out;
  // :hover {
  //     scale: 1.05;
  // }
`;

export default function Slider({
  state = {
    city: "Default Location",
    province: "Default Province",
    distance: "4km",
    image: "./vercel.svg",
  },
}) {
  const router = useRouter();
  const findCurrentPage = id => {
    if (state.length) {
      return state.findIndex(obj => obj.id === id);
    }
    return;
  };
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        alignItems: "flex-start",
        overflowX: "auto",
        width: "100vw",
        paddingLeft: "20px",
        // maxWidth: "80vw",
        msOverflowStyle: "none",
        scrollbarWidth: "none",
        backgroundColor: "#fff",
      }}
      className="cursor-pointer"
    >
      {state.map(post => (
        <BackgroundImageContainer
          //   src={post.image && post.length > 0 ? post.image[0] : "./vercel.svg"}
          src={post.image[0]}
          onClick={() => router.push(`/home/${post.id}`)}
        >
          <AppText
            txt={
              post.addressLine1
                ? post.addressLine1
                : "" + ", " + post.city
                  ? post.city
                  : ""
            }
            color="#f5f5f5"
            fontSize="24px"
          />

          <div className="flex gap-[200px] items-center">
            <AppText txt="4km" color="#cdcdcd" fontSize="16px" />
            <AppText
              txt={
                state.length
                  ? findCurrentPage(post.id) + 1 + "/" + state.length
                  : "1/7"
              }
              color="#cdcdcd"
              fontSize="16px"
            />
          </div>
        </BackgroundImageContainer>
      ))}
    </div>
  );
}
