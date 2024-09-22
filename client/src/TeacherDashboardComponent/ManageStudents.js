import profile from "../arashmil.jpg"
const ManageStudents = () => {
    return ( <>
    <div className="Box-margin">
        <div className="m-3">

            
    <div className="col-xl-9">
  <div className="card border bg-transparent rounded-3">
    <div className="card-header bg-transparent border-bottom">
      <h3 className="mb-0">My Students List</h3>
    </div>

    <div className="card-body">
      <div className="row g-3 align-items-center justify-content-between mb-4">
        <div className="col-md-8">
          <form className="rounded position-relative">
            <input
              className="form-control pe-5 bg-transparent"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset"
              type="submit"
            >
              <i className="fas fa-search fs-6 "></i>
            </button>
          </form>
        </div>

        
      </div>

      <div className="table-responsive border-0">
        <table className="table table-dark-gray align-middle p-4 mb-0 table-hover">
          <thead>
            <tr>
              <th scope="col" className="border-0 rounded-start">Student name</th>
              <th scope="col" className="border-0">Progress</th>
              <th scope="col" className="border-0">Courses</th>
              <th scope="col" className="border-0">Enrolled date</th>
              <th scope="col" className="border-0 rounded-end">Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <div className="d-flex align-items-center position-relative">
                  <div className="avatar avatar-md mb-2 mb-md-0">
                    <img src={profile} className="rounded avatar" alt=""/>
                  </div>
                  <div className="mb-0 ms-2">
                    <h6 className="mb-0"><a href="#" className="stretched-link">Lori Stevens</a></h6>
                    <span className="text-body small"><i className="fas fa-fw fa-map-marker-alt me-1 mt-1"></i>Berlin</span>
                  </div>
                </div>
              </td>

              <td className="text-center text-sm-start">
                <div className="overflow-hidden">
                  <h6 className="mb-0">85%</h6>
                  <div className="progress progress-sm bg-primary bg-opacity-10">
                    <div
                      className="progress-bar bg-primary aos aos-init aos-animate"
                      role="progressbar"
                      data-aos="slide-right"
                      data-aos-delay="200"
                      data-aos-duration="1000"
                      data-aos-easing="ease-in-out"
                      style={{ width: '85%' }}
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    />
                  </div>
                </div>
              </td>

              <td>10</td>

              <td>4/1/2023</td>

              <td>
                <a href="#" className="btn btn-success-soft btn-round me-1 mb-0" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Message" data-bs-original-title="Message"><i className="far fa-envelope"></i></a>
                <button className="btn btn-danger-soft btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Block" data-bs-original-title="Block"><i className="fas fa-ban"></i></button>
              </td>
            </tr>

            {/* Additional student rows... */}
          </tbody>
        </table>
      </div>

      <div className="d-sm-flex justify-content-sm-between align-items-sm-center mt-4 mt-sm-3">
        <p className="mb-0 text-center text-sm-start">Showing 1 to 8 of 20 entries</p>
        <nav className="d-flex justify-content-center mb-0" aria-label="navigation">
          <ul className="pagination pagination-sm pagination-primary-soft d-inline-block d-md-flex rounded mb-0">
            <li className="page-item mb-0">
              <a className="page-link" href="#" tabIndex="-1">
                <i className="fas fa-angle-left"></i>
              </a>
            </li>
            <li className="page-item mb-0"><a className="page-link" href="#">1</a></li>
            <li className="page-item mb-0 active"><a className="page-link" href="#">2</a></li>
            <li className="page-item mb-0"><a className="page-link" href="#">3</a></li>
            <li className="page-item mb-0">
              <a className="page-link" href="#">
                <i className="fas fa-angle-right"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</div>


</div>
</div>
    </> );
}
 
export default ManageStudents;