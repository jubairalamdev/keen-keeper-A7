import Image from "next/image";
import Link from "next/link";

const FriendCard = ({friend}) => {
    const {id, name, picture, days_since_contact, status, tags} = friend
    return (
        <Link href={`/friends/${id}`} className="bg-white rounded-lg shadow-md shadow-base-content/5 transition hover:shadow-xl hover:-translate-y-1 p-7 hover:bg-success/5 text-center space-y-2">
            <div className="flex justify-center items-center">
                <Image src={picture}
                alt="Friend"
                height={600}
                width={600}
                className="rounded-full h-20 w-20 object-cover"></Image>
            </div>
            <h2 className="text-xl font-bold text-base-content/90">{name}</h2>
            <p className="text-sm text-base-content/60">{days_since_contact}d ago</p>
            <div className="flex justify-center items-center gap-2 flex-wrap text-[#244D3F]">
                {
                    tags.map((tag, id)=> 
                    <span key={id} className="bg-green-100 py-1 px-3 rounded-full uppercase  text-xs">
                        {tag}
                    </span>
                    )
                }
            </div>
            <div className="flex justify-center items-center gap-2 mt-3">
                <span className={
                    `text-white capitalize  
                    ${status === "almost due"
                    ? "bg-orange-400" 
                    : status==="overdue"
                    ? "bg-red-600" 
                    : status==="on track"
                    ? "bg-green-900" 
                    : ""} rounded-full py-1 px-3 text-sm`
                }>
                    {status}
                </span>
            </div>
            
        </Link>
    );
};

export default FriendCard;