import { useState } from "react";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <FirstTab />
        <FeaturesTab />
        <ExtentionTab />
        <Faq />
      </main>
      <EmailSubscription />
      <Footer />
    </>
  );
}

function NavBar() {
  return (
    <>
      <div className="navbar bg-body-tertiary">
        <div className="deskNav">
          <a className="navbar-brand" href="#">
            <img src="/images/logo-bookmark.svg" alt="img-logo" />
          </a>
          <ul className="deskList">
            <li>features</li>
            <li>pricing</li>
            <li>contact</li>
            <li className="active">login</li>
          </ul>
          <div
            className="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                <img src="/images/logo-bookmark.svg" alt="img-logo" />
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <hr />
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    features
                  </a>
                </li>
                <hr />
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    pricing
                  </a>
                </li>
                <hr />
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    contact
                  </a>
                </li>
                <hr />
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    login
                  </a>
                </li>
              </ul>
              <div className="social">
                <img
                  src="/public/images/icon-facebook.svg"
                  alt="facebook-icon"
                />
                <img src="/public/images/icon-twitter.svg" alt="twitter-icon" />
              </div>
            </div>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <img
              src="/images/icon-hamburger.svg"
              alt="menu-icon"
              className="hamburger-menu"
            />
          </button>
        </div>
      </div>
    </>
  );
}

function FirstTab() {
  return (
    <div className="simpleBookmark">
      <div className="firstTab">
        <span className="shape"></span>
        <img src="/images/illustration-hero.svg" alt="hero" className="hero" />
      </div>

      <div className="hero-p">
        <h1>A Simple Bookmark Manager</h1>
        <p>
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="get-it">
          <GetIt className="getit active">Get it on Chrome</GetIt>
          <GetIt className="getit">Get it on Firefox</GetIt>
        </div>
      </div>
    </div>
  );
}

function GetIt({ children, className }) {
  return <button className={className}>{children}</button>;
}

function FeaturesTab() {
  const [activeTab, setActiveTab] = useState(0);

  function handleTabClick(index) {
    setActiveTab(index);
  }

  return (
    <>
      <div className="feature">
        <div className="features">
          <h1>Features</h1>
          <p>
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>

        <div className="featurelist">
          <hr />
          <FeaturesList1
            onClick={() => handleTabClick(0)}
            isActive={activeTab === 0}
          >
            Simple Bookmarking
          </FeaturesList1>
          <hr />
          <FeaturesList1
            onClick={() => handleTabClick(1)}
            isActive={activeTab === 1}
          >
            Speedy Searching
          </FeaturesList1>
          <hr />
          <FeaturesList1
            onClick={() => handleTabClick(2)}
            isActive={activeTab === 2}
          >
            Easy Sharing
          </FeaturesList1>
          <hr />
        </div>
      </div>
      <div className="tab">
        <FeaturesList2 activeTab={activeTab} />
      </div>
    </>
  );
}

function FeaturesList1({ children, isActive, onClick }) {
  return (
    <div
      className={`featurelist1 ${isActive ? "active" : "featurelist1"}`}
      onClick={onClick}
    >
      <p>{children}</p>
    </div>
  );
}

function FeaturesList2({ activeTab }) {
  const Tab = [
    {
      TabImage: (
        <img
          src="/images/illustration-features-tab-1.svg"
          alt="tab-1 image"
        />
      ),
      TabHeading: <h1>Bookmark in one click</h1>,
      TabWord: (
        <p>
          Organize your bookmarks however you like. Our simple drag-and-drop
          interface gives you complete control over how you manage your
          favourite sites.
        </p>
      ),
    },
    {
      TabImage: (
        <img
          src="/images/illustration-features-tab-2.svg"
          alt="tab-2 image"
        />
      ),
      TabHeading: <h1>Intelligent search</h1>,
      TabWord: (
        <p>
          Our powerful search feature will help you find saved sites in no time
          at all. No need to trawl through all of your bookmarks.
        </p>
      ),
    },
    {
      TabImage: (
        <img
          src="/images/illustration-features-tab-3.svg"
          alt="tab-3 image"
        />
      ),
      TabHeading: <h1>Share your bookmarks</h1>,
      TabWord: (
        <p>
          Easily share your bookmarks and collections with others. Create a
          shareable link that you can send at the click of a button.
        </p>
      ),
    },
  ];

  const { TabImage, TabHeading, TabWord } = Tab[activeTab] || Tab[0];

  return (
    <>
      <div className="simpleBookmark2">
        <div className="secondTab">{TabImage}</div>
        <span className="shape2"></span>
        <div className="bookmark">
          {TabHeading}
          {TabWord}
        </div>
        <MoreInfo className="more style">More Info</MoreInfo>
      </div>
    </>
  );
}

function ExtentionTab() {
  return (
    <>
      <div className="extention">
        <h1>Download the extension</h1>
        <p>
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>
      </div>
      <div className="cards">
        <BrowserCard className="card">
          <img src="/images/logo-chrome.svg" alt="chrome" className="img" />
          <h1>Add to Chrome</h1>
          <p>Minimum version 62</p>
          <img src="/images/bg-dots.svg" alt="dots" className="dots" />
          <button>Add & Install Extention</button>
        </BrowserCard>

        <BrowserCard className="card">
          <img src="/images/logo-firefox.svg" alt="firefox" className="img" />
          <h1>Add to Firefox</h1>
          <p>Minimum version 55</p>
          <img src="/images/bg-dots.svg" alt="dots" className="dots" />
          <button>Add & Install Extention</button>
        </BrowserCard>

        <BrowserCard className="card">
          <img
            src="/public/images/logo-Opera.svg"
            alt="Opera"
            className="img"
          />
          <h1>Add to Opera</h1>
          <p>Minimum version 46</p>
          <img src="/images/bg-dots.svg" alt="dots" className="dots" />
          <button>Add & Install Extention</button>
        </BrowserCard>
      </div>
    </>
  );
}

function BrowserCard({ children, className }) {
  return <div className={className}>{children}</div>;
}

function Faq() {
  return (
    <>
      <div className="faq">
        <h1>Frequently Asked Questions</h1>
        <p>
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
      </div>
      <div className="accordions">
        <Accordion
          Question="What is Bookmark?"
          Answers="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis"
        />
        <hr />
        <Accordion
          Question="How can I request a new browser?"
          Answers="Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet."
        />
        <hr />
        <Accordion
          Question="Is there a mobile app?"
          Answers="Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum."
        />
        <hr />
        <Accordion
          Question="What about other Chromium browsers?"
          Answers="Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit."
        />
        <hr />
      </div>
      <MoreInfo className="more">More Info</MoreInfo>
    </>
  );
}

function MoreInfo({ children, className }) {
  return (
    <div className="mores">
      <button className={className}>{children}</button>
    </div>
  );
}

function Accordion({ Question, Answers }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleAccordion() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="accordions" onClick={handleAccordion}>
        <div className={`accordion ${isOpen ? "active" : "accordion"}`}>
          <p>{Question}</p>
          <img
            src="/images/icon-arrow.svg"
            alt="arrow"
            className={isOpen ? "arrow close" : "arrow"}
          />
        </div>

        {isOpen && <div className="answer">{Answers}</div>}
      </div>
    </>
  );
}

function EmailSubscription() {
  return (
    <div>
      <form>
        <span>35,000+ already joined</span>
        <h1>Stay up-to-date with what we’re doing</h1>
        <input for="email" type="email" />
        <button>Contact Us</button>
      </form>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <svg width="148" height="25" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fill-rule="evenodd">
          <path
            d="M37 6.299h5.227c.746 0 1.434.155 2.062.466.629.311 1.123.735 1.484 1.27s.542 1.12.542 1.754c0 .672-.165 1.254-.495 1.746-.33.491-.762.868-1.297 1.129v.15c.697.248 1.25.643 1.661 1.185.41.541.616 1.191.616 1.95 0 .735-.196 1.385-.588 1.951a3.817 3.817 0 0 1-1.587 1.307c-.665.305-1.403.457-2.212.457H37V6.299zm5.04 5.45c.548 0 .986-.152 1.316-.457.33-.305.495-.688.495-1.148 0-.448-.159-.824-.476-1.13-.318-.304-.738-.457-1.26-.457H39.52v3.192h2.52zm.28 5.619c.61 0 1.086-.159 1.428-.476.342-.317.513-.731.513-1.241 0-.51-.174-.927-.522-1.251-.349-.324-.847-.485-1.494-.485H39.52v3.453h2.8zm12.927 2.595c-1.307 0-2.492-.308-3.556-.924a6.711 6.711 0 0 1-2.511-2.53c-.61-1.07-.915-2.246-.915-3.528 0-1.281.305-2.457.915-3.528a6.711 6.711 0 0 1 2.51-2.529C52.756 6.308 53.94 6 55.248 6c1.306 0 2.492.308 3.556.924a6.711 6.711 0 0 1 2.51 2.53c.61 1.07.915 2.246.915 3.527 0 1.282-.305 2.458-.915 3.528a6.711 6.711 0 0 1-2.51 2.53c-1.064.616-2.25.924-3.556.924zm0-2.39a4.52 4.52 0 0 0 2.258-.578 4.177 4.177 0 0 0 1.615-1.624c.392-.697.588-1.494.588-2.39 0-.896-.196-1.692-.588-2.389a4.177 4.177 0 0 0-1.615-1.624 4.52 4.52 0 0 0-2.258-.579 4.47 4.47 0 0 0-2.25.579 4.195 4.195 0 0 0-1.605 1.624c-.392.697-.588 1.493-.588 2.39 0 .895.196 1.692.588 2.389a4.195 4.195 0 0 0 1.605 1.624 4.47 4.47 0 0 0 2.25.578zm15.353 2.39c-1.307 0-2.492-.308-3.556-.924a6.711 6.711 0 0 1-2.51-2.53c-.61-1.07-.915-2.246-.915-3.528 0-1.281.305-2.457.914-3.528a6.711 6.711 0 0 1 2.511-2.529C68.108 6.308 69.294 6 70.6 6c1.307 0 2.492.308 3.556.924a6.711 6.711 0 0 1 2.51 2.53c.61 1.07.915 2.246.915 3.527 0 1.282-.305 2.458-.914 3.528a6.711 6.711 0 0 1-2.511 2.53c-1.064.616-2.25.924-3.556.924zm0-2.39a4.52 4.52 0 0 0 2.259-.578 4.177 4.177 0 0 0 1.614-1.624c.392-.697.588-1.494.588-2.39 0-.896-.196-1.692-.588-2.389a4.177 4.177 0 0 0-1.614-1.624 4.52 4.52 0 0 0-2.259-.579 4.47 4.47 0 0 0-2.25.579 4.195 4.195 0 0 0-1.605 1.624c-.392.697-.588 1.493-.588 2.39 0 .895.196 1.692.588 2.389a4.195 4.195 0 0 0 1.606 1.624 4.47 4.47 0 0 0 2.249.578zM79.83 6.3h2.52v5.73h.15l4.89-5.73h3.043v.149L85.6 11.973l5.338 7.542v.149h-3.08l-3.994-5.693-1.512 1.773v3.92h-2.52V6.299zM93.779 6h3.248l3.546 9.39h.15L104.268 6h3.267v13.365h-2.501v-6.589l.15-2.221h-.15l-3.398 8.81h-1.96l-3.416-8.81h-.149l.15 2.221v6.59h-2.483V6zm20.8 0h2.894l5.021 13.365h-2.781l-1.12-3.192h-5.115l-1.12 3.192h-2.781L114.579 6zm3.193 7.859l-1.176-3.36-.486-1.606h-.149l-.485 1.606-1.195 3.36h3.49zM124.553 6h4.872c.871 0 1.646.18 2.324.541.678.361 1.204.862 1.577 1.503.374.64.56 1.366.56 2.175 0 .858-.27 1.62-.812 2.286a4.617 4.617 0 0 1-2.044 1.447l-.018.13 3.584 5.134v.15h-2.894l-3.453-5.022h-1.176v5.021h-2.52V6zm4.853 6.03c.573 0 1.04-.175 1.4-.523.361-.349.542-.79.542-1.326 0-.51-.172-.945-.514-1.306-.342-.361-.806-.542-1.39-.542h-2.371v3.696h2.333zm7.23-6.03h2.52v5.73h.15l4.89-5.73h3.043v.15l-4.835 5.525 5.34 7.541v.15h-3.08l-3.996-5.694-1.512 1.773v3.92h-2.52V6z"
            fill="#FFF"
            fill-rule="nonzero"
          />
          <g>
            <circle fill="#5267DF" cx="12.5" cy="12.5" r="12.5" />
            <path
              d="M9 9v10l3.54-3.44L16.078 19V9a2 2 0 0 0-2-2H11a2 2 0 0 0-2 2z"
              fill="#FFF"
            />
          </g>
        </g>
      </svg>
      <ul>
        <li>features</li>
        <li>pricing</li>
        <li>Contact</li>
      </ul>
      <div className="socials">
        <img src="/public/images/icon-facebook.svg" alt="facebook-icon" />
        <img src="/public/images/icon-twitter.svg" alt="twitter-icon" />
      </div>
    </footer>
  );
}

export default App;
