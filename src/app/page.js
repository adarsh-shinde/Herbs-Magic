import Items from "../../comps/Items/Items";
import Navbar from "../../comps/Navbar/Navbar";
import SearchBar from "../../comps/SearchBar/SearchBar";
import Sort from "../../comps/Sort/Sort";

export default function Home() {
   return (
      <div>
         <Navbar />
         <SearchBar />
         <Sort/>
         {/* <Items/> */}
      </div>
   );
}
