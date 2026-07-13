import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <div class="container my-5">
        <footer class="text-center text-lg-start text-color footer">
          <div class="container-fluid p-4 pb-0">
            <section class="">
              <div class="row">
                <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color">Cherish Cart</h5>

                  <p>
                    Welcome to Cherish Cart, your ultimate online gift destination!
                    Discover a curated collection of unique and thoughtful gifts
                    perfect for any occasion. Shop with us and find something
                    special for your loved ones today!
                  </p>
                </div>

                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-4">Home</h5>

                  <ul class="list-unstyled mb-0">
                    <li>
                      <a href="/" class="text-color">
                         Home
                      </a>
                    </li>
                   
                  </ul>
                </div>

                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-4">About us</h5>

                  <ul class="list-unstyled mb-0">
                    <li>
                      <a href="/Aboutus" class="text-color">
                      Aboutus
                      </a>
                    </li>
                   
                  </ul>
                </div>

             
              </div>
            </section>

            <hr class="mb-4" />

            <section class="">
              <p class="d-flex justify-content-center align-items-center">
                <span class="me-3 text-color">Login from here</span>
                <Link to="/user/login" class="active">
                  <button
                    type="button"
                    class="btn btn-outline-light btn-rounded bg-color custom-bg-text"
                  >
                    Log in
                  </button>
                </Link>
              </p>
            </section>

            <hr class="mb-4" />
          </div>

          <div class="text-center">
            © 2024 Copyright:
            <a class="text-color-3" href="#">
              etohfa.com
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
