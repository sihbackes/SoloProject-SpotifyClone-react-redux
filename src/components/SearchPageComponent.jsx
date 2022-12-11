import FooterComponent from "./FooterComponent";
import SearchComponent from "./SerachComponent";
import SideBar from "./SideBarComponent";
const SearchPage = () => {
  return (
    <>
      <div className="main d-flex">
        <SideBar />
        <SearchComponent />
      </div>
      <div className="wrapper1">
        <FooterComponent />
      </div>
    </>
  );
};

export default SearchPage;
