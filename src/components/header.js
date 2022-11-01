import logo from '../logo.svg';

const Header = () => {
    return (

<header className="site-navbar py-4 js-sticky-header site-navbar-target" role="banner">
  <div className="container-fluid">
    <div className="d-flex align-items-center">
      <div className="site-logo">
      <img src={logo} alt="airasia" title="airasia" className="logo" />
      </div>
      <div className="ml-auto">
        <nav className="site-navigation position-relative text-right" role="navigation">
          <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
            <li><a href="#home-section" className="nav-link">Home</a></li>
            <li><a href="#promotions-section" className="nav-link">Promotions</a></li>
            <li><a href="#services-section" className="nav-link">FAQs</a></li>
          </ul>
        </nav>
      </div>
      <div className="ml-auto">
        <nav className="site-navigation position-relative text-right" role="navigation">
          <ul className="site-menu main-menu site-menu-dark js-clone-nav mr-auto d-none d-lg-block">
            <li className="cta"><a href="#contact-section" className="nav-link"><span className="rounded border border-primary">Get more promos</span></a></li>
          </ul>
        </nav>
        <a href="#" className="d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black float-right"><span class="icon-menu h3"></span></a>
      </div>
    </div>
  </div>
</header>

    )
}
 
export default Header;