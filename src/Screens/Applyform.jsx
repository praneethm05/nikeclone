import React from 'react'
import './ScreenStyle.css'

export default function ApplyForm() {
  return (
    <div className='applyformdesign'>


    <div >
      <h2 className='nikelove' style={{marginTop: '100px'}}>Submit your Resume Here</h2>
      <div className='formwrap'>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPhone1" className="form-label">Phone No</label>
            <input type="tel" className="form-control" id="exampleInputPhone1"></input>
            <div id="phoneHelp" className="form-text">We'll never share your phone number with anyone else.</div>
          </div>
          <div className="mb-3">
            <label className="form-label">Gender :</label>
            <div>
              <input type="radio" id="male" name="gender" value="male"></input>
              <label htmlFor="male" style={{marginRight: '10px', marginLeft: '5px'}}>Male</label>
              <input type="radio" id="female" name="gender" value="female"></input>
              <label htmlFor="female" style={{marginLeft: '5px'}}>Female</label>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPhone1" className="form-label">Upload Resume</label>
            <input type="file" className="form-control" id="exampleInputPhone1"></input>
            <div id="phoneHelp" className="form-text">Resume Might be Reviewed by Officials for Verification.</div>
          </div>

          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
            <label className="form-check-label" htmlFor="exampleCheck1">I confirm all the details provided above is True.</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
    </div>
  )
}
