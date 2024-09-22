import Tnavbar from "./Tnavbar";
import Tsidebar from "./Tsidebar";

const CourseDetails = () => {
  return (

    <>
    
    <Tnavbar/>
    <Tsidebar/>
    <div className="Box-margin">
      <div className="m-3">
      <div className="container mt-4">
      <div className="card">
        <div className="card-header">
          
          <h5 className="card-title">Course details</h5>

        </div>
        <div className="card-body">
          <form>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="courseTitle" className="form-label">Course title</label>
                <input type="text" className="form-control" id="courseTitle" placeholder="Enter course title" />
              </div>
              <div className="col-md-6">
                <label htmlFor="courseLevel" className="form-label">Course level</label>
                <select id="courseLevel" className="form-select">
                  <option defaultValue>Select course level</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="courseCategory" className="form-label">Course category</label>
                <select id="courseCategory" className="form-select">
                  <option defaultValue>Select category</option>
                  <option value="technology">Technology</option>
                  <option value="business">Business</option>
                  <option value="design">Design</option>
                </select>
              </div>
              <div className="col-md-6">
                <label htmlFor="language" className="form-label">Language</label>
                <select id="language" className="form-select">
                  <option defaultValue>Select language</option>
                  <option value="english">English</option>
                  <option value="spanish">Spanish</option>
                  <option value="french">French</option>
                </select>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="courseTime" className="form-label">Course time</label>
                <input type="text" className="form-control" id="courseTime" placeholder="Enter course time" />
              </div>
              <div className="col-md-6">
                <label htmlFor="totalLecture" className="form-label">Total lectures</label>
                <input type="number" className="form-control" id="totalLecture" placeholder="Enter total lecture" />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="coursePrice" className="form-label">Course price</label>
                <input type="text" className="form-control" id="coursePrice" placeholder="Enter course price" />
              </div>
              <div className="col-md-6">
                <label htmlFor="discountPrice" className="form-label">Discount price</label>
                <input type="text" className="form-control" id="discountPrice" placeholder="Enter discount" />
                <div className="form-check mt-2">
                  <input className="form-check-input" type="checkbox" id="enableDiscount" />
                  <label className="form-check-label" htmlFor="enableDiscount">
                    Enable this discount
                  </label>
                </div>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" id="featuredCourse" />
                  <label className="form-check-label" htmlFor="featuredCourse">
                    Check this for featured course
                  </label>
                </div>
              </div>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
      </div>
    </div>
    </>
  );
};

export default CourseDetails;
