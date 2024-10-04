const CreateAssigment = () => {
  return (
    <>
      <div className="Box-margin">
        <br />
        <br />
        <br />
        <div className="m-3">
          <div class="container mb-0 text-end">
          <button type="button" class="apply-btn btns mt-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Add New Quiz
</button>

<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Add Quiz</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">

              <form className="row text-start g-3">
                <div className="col-12">
                  <label className="form-label">Question</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Write a question"
                  />
                </div>

                <div className="col-6">
                  <label className="form-label">Option 1</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Write a option"
                  />
                </div>

                <div className="col-6">
                  <label className="form-label">Option 2</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Write a option"
                  />
                </div>

                <div className="col-6">
                  <label className="form-label">Option 3</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Write a option"
                  />
                </div>

                <div className="col-6">
                  <label className="form-label">Option 4</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Write a option"
                  />
                </div>
              </form>
            
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-success">Save changes</button>
      </div>
    </div>
  </div>
</div>

            <div className="col-xl-9">
              <div className="card border bg-transparent rounded-3">
                <div class="card-header bg-transparent border-bottom px-3">
                  <div class="row g-4 align-items-center">
                    <div class="col-md-2">
                      <img
                        src="https://itsolera.com/wp-content/uploads/2024/05/IT-Solera-LOGO.png"
                        class="rounded-2"
                        alt="Card image"
                        width="150"
                      />
                    </div>
                    <div class="col-md-10">
                      <h3 class=" text-center">
                        <a href="#">Create Quiz</a>
                      </h3>
                    </div>
                  </div>
                </div>

                <div class="card-body p-4">
                  <div
                    class="accordion accordion-icon accordion-bg-light"
                    id="accordionExample"
                  >
                    <div class="accordion-item mb-3">
                      <h6 class="accordion-header" id="headingOne">
                        <button
                          class="accordion-button rounded collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          <span class="text-secondary fw-bold me-3">01</span>
                          <span class="fw-bold">
                            How do you protect your business against
                            cyber-crime?
                          </span>
                        </button>
                      </h6>
                      <div
                        id="collapseOne"
                        class="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body mt-3 text-start">
                          <p class="mb-3">
                            <b class="text-dark">A</b> We have cybersecurity
                            insurance coverage
                          </p>
                          <p class="mb-3">
                            <b class="text-dark">B</b> Our dedicated staff will
                            protect us
                          </p>
                          <p class="mb-3">
                            <b class="text-dark">C</b> We give regular training
                            for best practices
                          </p>
                          <p class="mb-3">
                            <b class="text-dark">D</b> Third-party vendor
                            protection
                          </p>

                          <a
                            href="#"
                            class="btn btn-sm btn-success-soft mb-0"
                            data-bs-toggle="modal"
                            data-bs-target="#editQuestion"
                          >
                            Edit
                          </a>
                          <button class="btn btn-danger-soft btn-sm mb-0">
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>

                    <div class="accordion-item mb-3 text-start">
                      <h6 class="accordion-header" id="headingTwo">
                        <button
                          class="accordion-button rounded collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          <span class="text-secondary fw-bold me-3">02</span>
                          <span class="fw-bold">What is SEO?</span>
                        </button>
                      </h6>
                      <div
                        id="collapseTwo"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body mt-3">
                          <p class="mb-3">
                            <b class="text-dark">A</b> We have cybersecurity
                            insurance coverage
                          </p>
                          <p class="mb-3">
                            <b class="text-dark">B</b> Our dedicated staff will
                            protect us
                          </p>
                          <p class="mb-3">
                            <b class="text-dark">C</b> We give regular training
                            for best practices
                          </p>
                          <p class="mb-3">
                            <b class="text-dark">D</b> Third-party vendor
                            protection
                          </p>

                          <a
                            href="#"
                            class="btn btn-sm btn-success-soft mb-0"
                            data-bs-toggle="modal"
                            data-bs-target="#editQuestion"
                          >
                            Edit
                          </a>
                          <button class="btn btn-danger-soft btn-sm mb-0">
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>

                    <div class="accordion-item mb-3 text-start">
                      <h6 class="accordion-header" id="headingThree">
                        <button
                          class="accordion-button rounded collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          <span class="text-secondary fw-bold me-3">03</span>
                          <span class="fw-bold">
                            Who should join this course?
                          </span>
                        </button>
                      </h6>
                      <div
                        id="collapseThree"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body mt-3">
                          <p class="mb-3">
                            <b class="text-dark">A</b> We have cybersecurity
                            insurance coverage
                          </p>
                          <p class="mb-3">
                            <b class="text-dark">B</b> Our dedicated staff will
                            protect us
                          </p>
                          <p class="mb-3">
                            <b class="text-dark">C</b> We give regular training
                            for best practices
                          </p>
                          <p class="mb-3">
                            <b class="text-dark">D</b> Third-party vendor
                            protection
                          </p>

                          <a
                            href="#"
                            class="btn btn-sm btn-success-soft mb-0"
                            data-bs-toggle="modal"
                            data-bs-target="#editQuestion"
                          >
                            Edit
                          </a>
                          <button class="btn btn-danger-soft btn-sm mb-0">
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>

                    <div class="accordion-item text-start">
                      <h6 class="accordion-header" id="headingFour">
                        <button
                          class="accordion-button rounded collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                        >
                          <span class="text-secondary fw-bold me-3">04</span>
                          <span class="fw-bold">
                            What are the T&amp;C for this program?
                          </span>
                        </button>
                      </h6>
                      <div
                        id="collapseFour"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingFour"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body mt-3">
                          <p class="mb-3">
                            <b class="text-dark">A</b> We have cybersecurity
                            insurance coverage
                          </p>
                          <p class="mb-3">
                            <b class="text-dark">B</b> Our dedicated staff will
                            protect us
                          </p>
                          <p class="mb-3">
                            <b class="text-dark">C</b> We give regular training
                            for best practices
                          </p>
                          <p class="mb-3">
                            <b class="text-dark">D</b> Third-party vendor
                            protection
                          </p>

                          <a
                            href="#"
                            class="btn btn-sm btn-success-soft mb-0"
                            data-bs-toggle="modal"
                            data-bs-target="#editQuestion"
                          >
                            Edit
                          </a>
                          <button class="btn btn-danger-soft btn-sm mb-0">
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        
        </div>
      </div>
    </>
  );
};

export default CreateAssigment;
