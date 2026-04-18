"use client"
import useFriends from "@/app/hooks/useFriends";
import FriendCard from "../FriendCard/FriendCard";
import Loading from "../Loading/Loading";

const AllFriends = () => {
    const {friends, loading}= useFriends()
    // console.log(friends);
    
    return (
        <div className="bg-[#f8fafc] pt-10 pb-20">
            <div className="">
            <h2 className="font-bold text-3xl mb-4 text-[#1F2937]">Your Friends</h2>
            {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-4"> */}

                {loading ? <Loading></Loading>
                   : <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                       {friends.map(friend=> <FriendCard key={friend.id} friend={friend}></FriendCard>)}
                   </div> 
                }

            {/* </div> */}

            </div>
            
            
        </div>
    );
};

export default AllFriends;