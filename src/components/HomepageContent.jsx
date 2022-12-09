import FetchComponent from "./FetchData";

const HomepageContent = () => {
  return (
    <div class="center-section">
      <div class="center-nav-bar px-35 py-2">
        <div class="btns-prev-next">
          <img class="img-btn" src="img/prev.svg" alt="" />

          <img class="img-btn" src="img/next.svg" alt="" />
        </div>

        <div class="user-name-div d-flex text-white">
          <div class="user-name-image px-1">
            <i class="bi bi-person-circle"></i>
          </div>
          <div class="user-name-text px-1">User Name</div>
          <div class="px-1">
            <i class="dropdownBtn bi bi-caret-down-fill"></i>
          </div>
        </div>
        <button class="btn d-none navbar-signup-btn">Sign Up</button>
        <button class="btn d-none navbar-login-btn">Log In</button>
        <ul class="dropMenu d-none">
          <li>Account</li>
          <li>Profile</li>
          <li>Upgrade to Premium</li>
          <li>Settings</li>
          <li class="logout-btn">Log out</li>
        </ul>
      </div>

      <div class="good-morning-section">
        <h2 class="px-35">Good Morning</h2>
        <div class="good-morning row mx-1">
          {<FetchComponent artist="good morning" />}
        </div>
      </div>
      <div class="recently-played-section">
        <h2 class="px-35">Recently Played</h2>
        <div class="recently-played row mx-1">
          {<FetchComponent artist="greenday" />}
        </div>
      </div>
      <div class="shows-to-try-section">
        <h2 class="px-35">Shows To Try</h2>
        <div class="shows-to-try row mx-1">
          {<FetchComponent artist="rihanna" />}
        </div>
      </div>
    </div>
  );
};

export default HomepageContent;
