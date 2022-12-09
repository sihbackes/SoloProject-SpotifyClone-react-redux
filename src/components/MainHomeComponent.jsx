import FooterComponent from "./FooterComponent";
import HomepageContent from "./HomepageContent";
import SideBar from "./SideBarComponent";

const MainHome = () => {
  return (
    <>
      <div className="main d-flex">
        <SideBar />
        <HomepageContent />
      </div>
      <div class="wrapper1">
        <FooterComponent />
      </div>
    </>
  );
};

export default MainHome;
