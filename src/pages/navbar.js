export default function Navbar () {
    return (
        <div className="navbar">
            <nav class="navbar bg-body-tertiary fixed-top ">
  <div class="container-fluid ">
    <a class="navbar-brand" href="/">Sally Mugisha Wanga</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Portfolio Menu</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/projects">About me</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Projects
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Atlas Tea Brokers</a></li>
              <li>
                <hr class="dropdown-divider"/>
              </li>
              <li><a class="dropdown-item" href="#">Evergreen Farms Limited</a></li>
               <li>
                <hr class="dropdown-divider"/>
              </li>
                <li><a class="dropdown-item" href="#">Material UI documentation project</a></li>
                 <li>
                <hr class="dropdown-divider"/>
              </li>
                <li><a class="dropdown-item" href="#">Wordpress projects</a></li>
             
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/projects">Contact Me</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
        </div>
    );
}