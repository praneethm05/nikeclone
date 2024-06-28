import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import brand from './jordanlogo.jpg'



export default function Footer() {
  return (
    <div style={{ color: 'white', marginTop: '10px' }}>
      <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
        <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
          <div className='me-5 d-none d-lg-block'>
            <span><img src={brand} className='jordan'></img></span>
          </div>

          <div>
            <a href='https://www.facebook.com/Nike' className='me-4 text-reset'>
              <MDBIcon fab icon='facebook-f' />
            </a>
            <a href='https://twitter.com/nike' className='me-4 text-reset'>
              <MDBIcon fab icon='twitter' />
            </a>
            <a href='https://www.instagram.com/nike/' className='me-4 text-reset'>
              <MDBIcon fab icon='instagram' />
            </a>
          </div>
        </section>

        <section className=''>
          <MDBContainer className='text-center text-md-start mt-5'>
            <MDBRow className='mt-3'>
              <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>
                  <MDBIcon icon='gem' className='me-3' />
                  About Nike
                </h6>
                <p>
                  Nike is a global sports brand offering athletic footwear, apparel, and accessories.
                </p>
              </MDBCol>

              <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                <p>
                  <a href='#!' className='text-reset'>
                    Shoes
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Apparel
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Accessories
                  </a>
                </p>
              </MDBCol>

              <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                <p>
                  <a href='#!' className='text-reset'>
                    Contact Us
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    FAQ
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Careers
                  </a>
                </p>
              </MDBCol>

              <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                <p>
                  <MDBIcon icon='home' className='me-2' />
                  Beaverton, Oregon, United States
                </p>
                <p>
                  <MDBIcon icon='envelope' className='me-3' />
                  info@nike.com
                </p>
                <p>
                  <MDBIcon icon='phone' className='me-3' /> +1 800 344 6453
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          © {new Date().getFullYear()} Nike. All rights reserved.
        </div>
      </MDBFooter>
    </div>
  );
}
