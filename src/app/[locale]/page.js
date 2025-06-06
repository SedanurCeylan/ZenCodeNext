import React from 'react'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

function HomePage () {
  return (
    <div>
      <Navbar />
      <section className='bg-black text-white text-center py-10 min-vh-100 d-flex flex-column justify-content-center align-items-center'>
        <p className='border border-opacity-25 border-white rounded-5 px-3 py-2 fs-6'>
          macOS Sequoia now supported
        </p>
        <div className='container d-flex flex-column justify-content-center align-items-center'>
          <h1 className='display-4 fw-semibold fs-70'>
            İşe alım süreçlerinde <br />
            yeni bir dönem
          </h1>
          <p className='lead opacity-75'>
            Yetenekleri keşfedin, ekibinizi büyütün, şirketinizi bir adım öne
            taşıyın.
          </p>
          <a href='#services' className='btn btn-primary btn-lg mt-3'>
            Şimdi Deneyin
          </a>
          <img src='1.png' />
        </div>
      </section>

      {/* getting started */}
      <section className='bg-black text-white text-center py-10 min-vh-100 d-flex flex-column justify-content-center align-items-center'>
        <p className='border border-opacity-25 border-white rounded-5 px-3 py-2 fs-6'>
          How it works
        </p>
        <div className='container d-flex flex-column justify-content-center align-items-center'>
          <h1 className='display-4 fw-semibold fs-55'>
            Getting started is simple.
          </h1>
          <p className='lead opacity-75 fs-18 mb-5'>
            Yetenekleri keşfedin, ekibinizi büyütün, şirketinizi bir adım öne
            taşıyın.
          </p>
        </div>
        <div className='container'>
          <div className='row row-cols-1 row-cols-md-3 g-4'>
            <div className='col'>
              <div className='card h-100 bg-white text-white bg-opacity-5 border border-white border-opacity-10 rounded-4'>
                <img src='/cardzen.png' className='card-img-top' alt='...' />
                <div className='card-body'>
                  <h5 className='card-title text-start mb-3 fs-2'>
                    Install Simplicity
                  </h5>
                  <p className='card-text text-start fs-4'>
                    Get up and running in minutes—download and install the app
                    to start simplifying your workflow immediately.
                  </p>
                </div>
              </div>
            </div>

            <div className='col'>
              <div className='card h-100 bg-white text-white bg-opacity-5 border border-white border-opacity-10 rounded-4'>
                <img src='/cardzen.png' className='card-img-top' alt='...' />
                <div className='card-body'>
                  <h5 className='card-title text-start mb-3 fs-2'>
                    Install Simplicity
                  </h5>
                  <p className='card-text text-start fs-4'>
                    Get up and running in minutes—download and install the app
                    to start simplifying your workflow immediately.
                  </p>
                </div>
              </div>
            </div>

            <div className='col'>
              <div className='card h-100 bg-white text-white bg-opacity-5 border border-white border-opacity-10 rounded-4'>
                <img src='/cardzen.png' className='card-img-top' alt='...' />
                <div className='card-body'>
                  <h5 className='card-title text-start mb-3 fs-2'>
                    Install Simplicity
                  </h5>
                  <p className='card-text text-start fs-4'>
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
      <section className='bg-black text-white text-center py-10 min-vh-100 d-flex flex-column justify-content-center align-items-center'>
        <p className='border border-opacity-25 border-white rounded-5 px-3 py-2 fs-6'>
          Testimonials
        </p>
        <div className='container d-flex flex-column justify-content-center align-items-center'>
          <h1 className='display-4 fw-semibold fs-55'>
            What others are saying.
          </h1>
          <p className='lead opacity-75 fs-18 mb-5'>
            Trusted by founders and creatives who value simplicity and results.
          </p>
        </div>
        <div className='container'>
          <div className='row row-cols-1 row-cols-md-3 g-4'>
            <div className='col'>
              <div className='card h-100 bg-white text-white bg-opacity-5 border border-white border-opacity-10 rounded-4 p-2'>
                <div className='card-body'>
                  <div className='d-flex pb-4 pt-1'>
                    {[1, 2, 3, 4, 5].map(i => (
                      <i key={i} className='fa-solid fa-star'></i>
                    ))}
                  </div>
                  <p className='card-text text-start fs-4 opacity-75 mb-4'>
                    "Simplicity keeps my workday organized with out the hassle.
                    It’s the easiest task manager I’ve used."
                  </p>
                  <div className='d-flex align-items-center'>
                    <Image
                      src='/user.png'
                      alt='User 1'
                      width={40}
                      height={40}
                      className='rounded-circle me-3'
                    />
                    <div className='text-start'>
                      <h5 className='p-0 m-0 fs-4'>Sarah Johnson</h5>
                      <p className='opacity-75 mb-0 fs-5'>
                        Co-founder of Monday
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col'>
              <div className='card h-100 bg-white text-white bg-opacity-5 border border-white border-opacity-10 rounded-4 p-2'>
                <div className='card-body'>
                  <div className='d-flex pb-4 pt-1'>
                    {[1, 2, 3, 4, 5].map(i => (
                      <i key={i} className='fa-solid fa-star'></i>
                    ))}
                  </div>
                  <p className='card-text text-start fs-4 opacity-75 mb-4'>
                    "Simplicity keeps my workday organized with out the hassle.
                    It’s the easiest task manager I’ve used."
                  </p>
                  <div className='d-flex align-items-center'>
                    <Image
                      src='/user.png'
                      alt='User 1'
                      width={40}
                      height={40}
                      className='rounded-circle me-3'
                    />
                    <div className='text-start'>
                      <h5 className='p-0 m-0 fs-4'>Sarah Johnson</h5>
                      <p className='opacity-75 mb-0 fs-5'>
                        Co-founder of Monday
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col'>
              <div className='card h-100 bg-white text-white bg-opacity-5 border border-white border-opacity-10 rounded-4 p-2'>
                <div className='card-body'>
                  <div className='d-flex pb-4 pt-1'>
                    {[1, 2, 3, 4, 5].map(i => (
                      <i key={i} className='fa-solid fa-star'></i>
                    ))}
                  </div>
                  <p className='card-text text-start fs-4 opacity-75 mb-4'>
                    "Simplicity keeps my workday organized with out the hassle.
                    It’s the easiest task manager I’ve used."
                  </p>
                  <div className='d-flex align-items-center'>
                    <Image
                      src='/user.png'
                      alt='User 1'
                      width={40}
                      height={40}
                      className='rounded-circle me-3'
                    />
                    <div className='text-start'>
                      <h5 className='p-0 m-0 fs-4'>Sarah Johnson</h5>
                      <p className='opacity-75 mb-0 fs-5'>
                        Co-founder of Monday
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col'>
              <div className='card h-100 bg-white text-white bg-opacity-5 border border-white border-opacity-10 rounded-4 p-2'>
                <div className='card-body'>
                  <div className='d-flex pb-4 pt-1'>
                    {[1, 2, 3, 4, 5].map(i => (
                      <i key={i} className='fa-solid fa-star'></i>
                    ))}
                  </div>
                  <p className='card-text text-start fs-4 opacity-75 mb-4'>
                    "Simplicity keeps my workday organized with out the hassle.
                    It’s the easiest task manager I’ve used."
                  </p>
                  <div className='d-flex align-items-center'>
                    <Image
                      src='/user.png'
                      alt='User 1'
                      width={40}
                      height={40}
                      className='rounded-circle me-3'
                    />
                    <div className='text-start'>
                      <h5 className='p-0 m-0 fs-4'>Sarah Johnson</h5>
                      <p className='opacity-75 mb-0 fs-5'>
                        Co-founder of Monday
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col'>
              <div className='card h-100 bg-white text-white bg-opacity-5 border border-white border-opacity-10 rounded-4 p-2'>
                <div className='card-body'>
                  <div className='d-flex pb-4 pt-1'>
                    {[1, 2, 3, 4, 5].map(i => (
                      <i key={i} className='fa-solid fa-star'></i>
                    ))}
                  </div>
                  <p className='card-text text-start fs-4 opacity-75 mb-4'>
                    "Simplicity keeps my workday organized with out the hassle.
                    It’s the easiest task manager I’ve used."
                  </p>
                  <div className='d-flex align-items-center'>
                    <Image
                      src='/user.png'
                      alt='User 1'
                      width={40}
                      height={40}
                      className='rounded-circle me-3'
                    />
                    <div className='text-start'>
                      <h5 className='p-0 m-0 fs-4'>Sarah Johnson</h5>
                      <p className='opacity-75 mb-0 fs-5'>
                        Co-founder of Monday
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col'>
              <div className='card h-100 bg-white text-white bg-opacity-5 border border-white border-opacity-10 rounded-4 p-2'>
                <div className='card-body'>
                  <div className='d-flex pb-4 pt-1'>
                    {[1, 2, 3, 4, 5].map(i => (
                      <i key={i} className='fa-solid fa-star'></i>
                    ))}
                  </div>
                  <p className='card-text text-start fs-4 opacity-75 mb-4'>
                    "Simplicity keeps my workday organized with out the hassle.
                    It’s the easiest task manager I’ve used."
                  </p>
                  <div className='d-flex align-items-center'>
                    <Image
                      src='/user.png'
                      alt='User 1'
                      width={40}
                      height={40}
                      className='rounded-circle me-3'
                    />
                    <div className='text-start'>
                      <h5 className='p-0 m-0 fs-4'>Sarah Johnson</h5>
                      <p className='opacity-75 mb-0 fs-5'>
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

      <section id='services' className='container my-5'>
        <h2 className='text-center mb-4 text-primary font-weight-bold'>
          Hizmetlerimiz
        </h2>
        <p className='text-center mb-5 text-muted'>
          İhtiyaçlarınıza özel çözümlerle, dijital dünyada güçlü bir varlık
          oluşturmanıza yardımcı oluyoruz.
        </p>
        <div className='row'>
          <div className='col-md-4 mb-4'>
            <div className='card shadow-lg border-0 rounded-3'>
              <img
                src='https://bairesdev.mo.cloudinary.net/blog/2023/09/How-Many-Web-Developers-in-the-World-1.jpg?tx=w_1920,q_auto'
                alt='Web Geliştirme'
                className='card-img-top rounded-3'
              />
              <div className='card-body text-center'>
                <h4 className='card-title text-dark'>Web Geliştirme</h4>
                <p className='card-text text-muted'>
                  Özel tasarlanmış, mobil uyumlu ve hızlı web siteleri
                  geliştiriyoruz. Kullanıcı odaklı, SEO uyumlu çözümler sunarak,
                  çevrimiçi varlığınızı güçlendiriyoruz.
                </p>
                <a href='#web' className='btn btn-primary'>
                  Detayları Gör
                </a>
              </div>
            </div>
          </div>

          <div className='col-md-4 mb-4'>
            <div className='card shadow-lg border-0 rounded-3'>
              <img
                src='https://www.simplilearn.com/ice9/free_resources_article_thumb/Building-a-career-in-Mobile-App-Development.jpg'
                alt='Mobil Uygulamalar'
                className='card-img-top rounded-3'
              />
              <div className='card-body text-center'>
                <h4 className='card-title text-dark'>Mobil Uygulamalar</h4>
                <p className='card-text text-muted'>
                  iOS ve Android platformlarında kullanıcı dostu uygulamalar
                  oluşturuyoruz. Hem işlevsel hem de şık tasarımlar ile mobil
                  deneyimi mükemmelleştiriyoruz.
                </p>
                <a href='#mobile' className='btn btn-primary'>
                  Detayları Gör
                </a>
              </div>
            </div>
          </div>

          <div className='col-md-4 mb-4'>
            <div className='card shadow-lg border-0 rounded-3'>
              <img
                src='https://www.devopsinstitute.com/wp-content/uploads/2021/05/iStock-1277731016-scaled.jpg'
                alt='Bulut Çözümleri'
                className='card-img-top rounded-3'
              />
              <div className='card-body text-center'>
                <h4 className='card-title text-dark'>Bulut Çözümleri</h4>
                <p className='card-text text-muted'>
                  Güvenli ve ölçeklenebilir bulut altyapıları sağlıyoruz. İş
                  süreçlerinizi hızlandıracak ve verilerinizi güvenli bir
                  şekilde yönetebileceksiniz. Hizmetimize göz atın!
                </p>
                <a href='#cloud' className='btn btn-primary'>
                  Detayları Gör
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-light py-5'>
        <div className='container text-center'>
          <h2 className='display-4 text-primary font-weight-bold mb-4'>
            Hakkımızda
          </h2>
          <p className='lead text-muted mb-5'>
            ZenCode, modern yazılım teknolojileriyle işletmelere değer katan
            çözümler sunan bir teknoloji şirketidir. Yılların deneyimi ve uzman
            ekibimizle, en iyi çözümleri sağlamak için çalışıyoruz.
          </p>

          <div className='row mt-4'>
            <div className='col-md-6 mb-4'>
              <div className='card shadow-sm border-0 rounded-3'>
                <div className='card-body'>
                  <h4 className='card-title text-primary'>Vizyonumuz</h4>
                  <p className='card-text text-muted'>
                    Dijital dünyada sürdürülebilir ve yenilikçi yazılım
                    çözümleri geliştirerek teknolojiye yön vermek.
                  </p>
                </div>
              </div>
            </div>

            <div className='col-md-6 mb-4'>
              <div className='card shadow-sm border-0 rounded-3'>
                <div className='card-body'>
                  <h4 className='card-title text-primary'>Misyonumuz</h4>
                  <p className='card-text text-muted'>
                    İş ortaklarımıza en yüksek kaliteli yazılım hizmetlerini
                    sunarak, iş süreçlerini dijitalleştirmek ve verimliliği
                    artırmak.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='container my-5'>
        <h2 className='text-center mb-4 text-primary font-weight-bold'>
          Müşteri Yorumları
        </h2>

        <div
          id='customerReviewsCarousel'
          className='carousel slide'
          data-ride='carousel'
        >
          <div className='carousel-inner'>
            <div className='carousel-item active'>
              <div className='card p-4 shadow-sm border-0 rounded-3 text-center'>
                <p className='text-muted'>
                  "ZenCode ekibi sayesinde işletmemizin dijital dönüşümünü
                  başarıyla tamamladık! Profesyonel ve güvenilir bir ekip."
                </p>
                <h5 className='font-weight-bold'>- Cansu Çevik</h5>
              </div>
            </div>
            <div className='carousel-item'>
              <div className='card p-4 shadow-sm border-0 rounded-3 text-center'>
                <p className='text-muted'>
                  "Hızlı, kaliteli ve müşteri odaklı bir hizmet anlayışları var.
                  Harika bir deneyimdi!"
                </p>
                <h5 className='font-weight-bold'>- Emirhan Körhan</h5>
              </div>
            </div>
            <div className='carousel-item'>
              <div className='card p-4 shadow-sm border-0 rounded-3 text-center'>
                <p className='text-muted'>
                  "Mobil uygulamamız için harika bir iş çıkardılar. Kullanıcı
                  deneyimi mükemmel!"
                </p>
                <h5 className='font-weight-bold'>- Sedanur Ceylan</h5>
              </div>
            </div>
          </div>
          <a
            className='carousel-control-prev'
            href='#customerReviewsCarousel'
            role='button'
            data-slide='prev'
          >
            <span
              className='carousel-control-prev-icon'
              aria-hidden='true'
            ></span>
            <span className='sr-only'>Önceki</span>
          </a>
          <a
            className='carousel-control-next'
            href='#customerReviewsCarousel'
            role='button'
            data-slide='next'
          >
            <span
              className='carousel-control-next-icon'
              aria-hidden='true'
            ></span>
            <span className='sr-only'>Sonraki</span>
          </a>
        </div>
      </section>

      <section className='container my-5'>
        <h2 className='text-center mb-4 text-primary font-weight-bold'>
          Bize Ulaşın
        </h2>
        <form className='w-75 mx-auto p-4 border rounded shadow-sm bg-light'>
          <div className='mb-3'>
            <label className='form-label' htmlFor='name'>
              Adınız
            </label>
            <input
              type='text'
              className='form-control form-control-lg'
              id='name'
              placeholder='Adınızı girin'
            />
          </div>

          <div className='mb-3'>
            <label className='form-label' htmlFor='email'>
              E-posta
            </label>
            <input
              type='email'
              className='form-control form-control-lg'
              id='email'
              placeholder='E-posta adresinizi girin'
            />
          </div>

          <div className='mb-3'>
            <label className='form-label' htmlFor='message'>
              Mesajınız
            </label>
            <textarea
              className='form-control form-control-lg'
              id='message'
              rows='4'
              placeholder='Mesajınızı yazın'
            ></textarea>
          </div>

          <div className='text-center'>
            <button type='submit' className='btn btn-primary btn-lg w-100'>
              Gönder
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default HomePage
