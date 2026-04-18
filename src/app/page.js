import Banner from "./components/Banner/Banner";
import Stats from "./components/Stats/Stats";
import AllFriends from "./components/AllFriends/AllFriends";
export const metadata = {
  title: 'Home Page',
  description: 'This is home page',
}

export default function Home() {
  
  return (
    <main className="bg-base-200">
      <div className="max-w-290 mx-auto bg-base-200 px-5 md:px-8 xl:px-0">
      <Banner/>
      <Stats/>
      <AllFriends/>
      </div>
    </main>
  );
}
