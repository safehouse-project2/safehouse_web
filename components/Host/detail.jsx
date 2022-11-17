import ReservationBox from "../D3Components/ReservationBox/ReservationBox";
import AppText from "../D3Components/AppText/AppText";
import { useAuth } from "../../AuthContext/AuthContext";
import { useState, useEffect, useRef } from "react";
import { useRouter } from 'next/router'



export default function HostDetail({
  
  state = [{ userId: "" }, { userId: "" }],
}) {
  const [data, setData] = useState(state);
  const { currentUser, logout } = useAuth();
  useEffect(() => {
    if (state.length > 0) {
      setData(state.filter(item => item.userId === currentUser.uid));
    }
  }, [state]);
  const findCurrentPage = id => {
    if (data.length) {
      return data.findIndex(obj => obj.id === id);
    }
    return;
  };
  const router = useRouter()
  async function handleLogout(){
    try{
      router.push('/auth/login')
        await logout()
    } catch {
        setError('Failed to log out')  
    }
}

async function handleUpdate(){
  console.log(currentUser)
}
  return (
    <>
     <div>
        <button onClick={handleUpdate}>update account</button>
        <button onClick={handleLogout}>logout</button>
       <p>Hi {currentUser && currentUser.displayName?.split(" ")[0]}</p> 
       <p>Hoe you are having a great day!</p>
       <img  src={currentUser.photoURL}/>
       <p>{currentUser.displayName}</p>


    </div>
      <div className="flex flex-col gap-3">
        <AppText
          txt={
            currentUser?.displayName
              ? `Hello ${currentUser.displayName} 👋`
              : "Hello 👋"
          }
          fontSize="34px"
        />
        {/* <AppText
          txt="What do you want to do ?"
          fontSize="16px"
          color="#8c8c8c"
        /> */}
      </div>

      <div key={self.crypto.randomUUID()} className="flex flex-col pt-10 justify-start items-start gap-3">
        <AppText txt="Your postings" fontSize="20px" />
        {data.length > 0 ? (
          data.map(item => (
            <>
              <ReservationBox key={item.id} data={data} post={item} />
              <AppText
                key={item.userId}
                txt={
                  data?.length
                    ? findCurrentPage(item.id) + 1 + "/" + data.length
                    : "1/7"
                }
                color="#cdcdcd"
                fontSize="12px"
              />
            </>
          ))
        ) : (
          <AppText txt="You have no postings" fontSize="16px" />
        )}
      </div>

      {/* <div className="flex flex-col pt-10 justify-start items-start gap-3">
        <AppText txt="Your reviews 🌟" fontSize="20px" />
        <div className="flex flex-col gap-5">
          <ReviewBox />
          <ReviewBox />
          <ReviewBox />
        </div>
      </div> */}
    </>
  );
}
