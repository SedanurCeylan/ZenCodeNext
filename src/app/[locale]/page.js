import React from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";

function HomePage() {
  return (
    <div>
      <Navbar />
      <section className="bg-black text-white text-center py-10 min-vh-100 d-flex flex-column justify-content-center align-items-center">
        <p className="border border-opacity-25 border-white rounded-5 px-3 py-2 fs-6">
          macOS Sequoia now supported
        </p>
        <div className="container d-flex flex-column justify-content-center align-items-center">
          <h1 className="display-4 fw-semibold fs-70">
            İşe alım süreçlerinde <br />
            yeni bir dönem
          </h1>
          <p className="lead opacity-75">
            Yetenekleri keşfedin, ekibinizi büyütün, şirketinizi bir adım öne
            taşıyın.
          </p>
          <a href="#services" className="btn btn-primary btn-lg mt-3">
            Şimdi Deneyin
          </a>
          <img src="1.png" />
        </div>
      </section>

      {/* getting started */}
      <section className="bg-black text-white text-center py-10 min-vh-100 d-flex flex-column justify-content-center align-items-center">
        <p className="border border-opacity-25 border-white rounded-5 px-3 py-2 fs-6">
          How it works
        </p>
        <div className="container d-flex flex-column justify-content-center align-items-center">
          <h1 className="display-4 fw-semibold fs-55">
            Getting started is simple.
          </h1>
          <p className="lead opacity-75 fs-18 mb-5">
            Yetenekleri keşfedin, ekibinizi büyütün, şirketinizi bir adım öne
            taşıyın.
          </p>
        </div>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card h-100 bg-white text-white bg-opacity-5 border border-white border-opacity-10 rounded-4">
                <img src="/cardzen.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title text-start mb-3 fs-2">
                    Install Simplicity
                  </h5>
                  <p className="card-text text-start fs-4">
                    Get up and running in minutes—download and install the app
                    to start simplifying your workflow immediately.
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card h-100 bg-white text-white bg-opacity-5 border border-white border-opacity-10 rounded-4">
                <img src="/cardzen.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title text-start mb-3 fs-2">
                    Install Simplicity
                  </h5>
                  <p className="card-text text-start fs-4">
                    Get up and running in minutes—download and install the app
                    to start simplifying your workflow immediately.
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card h-100 bg-white text-white bg-opacity-5 border border-white border-opacity-10 rounded-4">
                <img src="/cardzen.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title text-start mb-3 fs-2">
                    Install Simplicity
                  </h5>
                  <p className="card-text text-start fs-4">
                    Get up and running in minutes—download and install the app
                    to start simplifying your workflow immediately.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* testimonials */}
      <section className="bg-black text-white text-center py-10 min-vh-100 d-flex flex-column justify-content-center align-items-center">
        <p className="border border-opacity-25 border-white rounded-5 px-3 py-2 fs-6">
          Testimonials
        </p>
        <div className="container d-flex flex-column justify-content-center align-items-center">
          <h1 className="display-4 fw-semibold fs-55">
            What others are saying.
          </h1>
          <p className="lead opacity-75 fs-18 mb-5">
            Trusted by founders and creatives who value simplicity and results.
          </p>
        </div>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card h-100 bg-white text-white bg-opacity-5 border border-white border-opacity-10 rounded-4 p-2">
                <div className="card-body">
                  <div className="d-flex pb-4 pt-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <i key={i} className="fa-solid fa-star"></i>
                    ))}
                  </div>
                  <p className="card-text text-start fs-4 opacity-75 mb-4">
                    "Simplicity keeps my workday organized with out the hassle.
                    It’s the easiest task manager I’ve used."
                  </p>
                  <div className="d-flex align-items-center">
                    <Image
                      src="/user.png"
                      alt="User 1"
                      width={40}
                      height={40}
                      className="rounded-circle me-3"
                    />
                    <div className="text-start">
                      <h5 className="p-0 m-0 fs-4">Sarah Johnson</h5>
                      <p className="opacity-75 mb-0 fs-5">
                        Co-founder of Monday
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card h-100 bg-white text-white bg-opacity-5 border border-white border-opacity-10 rounded-4 p-2">
                <div className="card-body">
                  <div className="d-flex pb-4 pt-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <i key={i} className="fa-solid fa-star"></i>
                    ))}
                  </div>
                  <p className="card-text text-start fs-4 opacity-75 mb-4">
                    "Simplicity keeps my workday organized with out the hassle.
                    It’s the easiest task manager I’ve used."
                  </p>
                  <div className="d-flex align-items-center">
                    <Image
                      src="/user.png"
                      alt="User 1"
                      width={40}
                      height={40}
                      className="rounded-circle me-3"
                    />
                    <div className="text-start">
                      <h5 className="p-0 m-0 fs-4">Sarah Johnson</h5>
                      <p className="opacity-75 mb-0 fs-5">
                        Co-founder of Monday
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card h-100 bg-white text-white bg-opacity-5 border border-white border-opacity-10 rounded-4 p-2">
                <div className="card-body">
                  <div className="d-flex pb-4 pt-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <i key={i} className="fa-solid fa-star"></i>
                    ))}
                  </div>
                  <p className="card-text text-start fs-4 opacity-75 mb-4">
                    "Simplicity keeps my workday organized with out the hassle.
                    It’s the easiest task manager I’ve used."
                  </p>
                  <div className="d-flex align-items-center">
                    <Image
                      src="/user.png"
                      alt="User 1"
                      width={40}
                      height={40}
                      className="rounded-circle me-3"
                    />
                    <div className="text-start">
                      <h5 className="p-0 m-0 fs-4">Sarah Johnson</h5>
                      <p className="opacity-75 mb-0 fs-5">
                        Co-founder of Monday
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card h-100 bg-white text-white bg-opacity-5 border border-white border-opacity-10 rounded-4 p-2">
                <div className="card-body">
                  <div className="d-flex pb-4 pt-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <i key={i} className="fa-solid fa-star"></i>
                    ))}
                  </div>
                  <p className="card-text text-start fs-4 opacity-75 mb-4">
                    "Simplicity keeps my workday organized with out the hassle.
                    It’s the easiest task manager I’ve used."
                  </p>
                  <div className="d-flex align-items-center">
                    <Image
                      src="/user.png"
                      alt="User 1"
                      width={40}
                      height={40}
                      className="rounded-circle me-3"
                    />
                    <div className="text-start">
                      <h5 className="p-0 m-0 fs-4">Sarah Johnson</h5>
                      <p className="opacity-75 mb-0 fs-5">
                        Co-founder of Monday
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card h-100 bg-white text-white bg-opacity-5 border border-white border-opacity-10 rounded-4 p-2">
                <div className="card-body">
                  <div className="d-flex pb-4 pt-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <i key={i} className="fa-solid fa-star"></i>
                    ))}
                  </div>
                  <p className="card-text text-start fs-4 opacity-75 mb-4">
                    "Simplicity keeps my workday organized with out the hassle.
                    It’s the easiest task manager I’ve used."
                  </p>
                  <div className="d-flex align-items-center">
                    <Image
                      src="/user.png"
                      alt="User 1"
                      width={40}
                      height={40}
                      className="rounded-circle me-3"
                    />
                    <div className="text-start">
                      <h5 className="p-0 m-0 fs-4">Sarah Johnson</h5>
                      <p className="opacity-75 mb-0 fs-5">
                        Co-founder of Monday
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card h-100 bg-white text-white bg-opacity-5 border border-white border-opacity-10 rounded-4 p-2">
                <div className="card-body">
                  <div className="d-flex pb-4 pt-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <i key={i} className="fa-solid fa-star"></i>
                    ))}
                  </div>
                  <p className="card-text text-start fs-4 opacity-75 mb-4">
                    "Simplicity keeps my workday organized with out the hassle.
                    It’s the easiest task manager I’ve used."
                  </p>
                  <div className="d-flex align-items-center">
                    <Image
                      src="/user.png"
                      alt="User 1"
                      width={40}
                      height={40}
                      className="rounded-circle me-3"
                    />
                    <div className="text-start">
                      <h5 className="p-0 m-0 fs-4">Sarah Johnson</h5>
                      <p className="opacity-75 mb-0 fs-5">
                        Co-founder of Monday
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq bg-black text-white text-center py-10 min-vh-100 d-flex flex-column justify-content-center align-items-center">
       
          <p className="border border-opacity-25 border-white rounded-5 px-3 py-2 fs-6">
            Frequently Asked Questions
          </p>
          <div className="container d-flex flex-column justify-content-center align-items-center">
            <h1 className="display-4 fw-semibold fs-55">
              Everything you need to know
            </h1>
            <p className="lead opacity-75 fs-18 mb-5">
              Got questions? We’ve got answers. Here’s everything you need to
              know before getting started.
            </p>
          </div>
           <div className="container">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item bg-white bg-opacity-5 mb-4 rounded-4 border border-white border-opacity-25">
              <h2 className="accordion-header ">
                <button
                  className="accordion-button bg-white text-white bg-opacity-5  "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  Accordion Item #1
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body bg-white text-white bg-opacity-5 text-start ">
                  <strong>This is the first item’s accordion body.</strong> It
                  is shown by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It’s also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
             <div className="accordion-item bg-white bg-opacity-5 mb-4 rounded-4 border border-white border-opacity-25">
              <h2 className="accordion-header ">
                <button
                  className="accordion-button bg-white text-white bg-opacity-5  "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Accordion Item #2
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body bg-white text-white bg-opacity-5 text-start ">
                  <strong>This is the first item’s accordion body.</strong> It
                  is shown by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It’s also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
             <div className="accordion-item bg-white bg-opacity-5 mb-4 rounded-4 border border-white border-opacity-25">
              <h2 className="accordion-header ">
                <button
                  className="accordion-button bg-white text-white bg-opacity-5  "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Accordion Item #3
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body bg-white text-white bg-opacity-5 text-start ">
                  <strong>This is the first item’s accordion body.</strong> It
                  is shown by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It’s also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </section>



    </div>
  );
}

export default HomePage;
