import Tnavbar from "./Tnavbar";
import Tsidebar from "./Tsidebar";
import React, { useState } from "react";
import axiosInstance from "../api/axiosConfig";

const CourseDetails = () => {
  const [courseTitle, setCourseTitle] = useState("");
  const [courseLevel, setCourseLevel] = useState("");
  const [courseCategory, setCourseCategory] = useState("");
  const [courseTime, setCourseTime] = useState("");
  const [totalLecture, setTotalLecture] = useState("");
  const [coursePrice, setCoursePrice] = useState("");
  const [discountPrice, setDiscountPrice] = useState("");
  const [featured, setFeatured] = useState(false);
  const [enableDiscount, setEnableDiscount] = useState(false);
  const [instructor, setInstructor] = useState("");
  const [description, setDescription] = useState("");
  const [courseImage, setCourseImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log('Selected file:', file);
      setCourseImage(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('level', courseLevel);
    formData.append('title', courseTitle);
    formData.append('duration', courseTime);
    formData.append('lectures', totalLecture);
    formData.append('price', coursePrice);
    formData.append('category', courseCategory);
    formData.append('description', description);
    formData.append('instructor', instructor); // Ensure this gets populated correctly
    formData.append('featured', featured);
    // formData.append('discountPrice', enableDiscount ? discountPrice : null);
    
    if (enableDiscount && discountPrice) {
      formData.append('discountPrice', discountPrice); // Only append if discount is enabled and valid
  } else {
      formData.append('discountPrice', ''); // Append empty string or remove it
  }

    if (courseImage) {
      formData.append('image', courseImage); // Correctly append the image
    }

    for (let [key, value] of formData.entries()) {
      console.log(key, value);
  }

    try {
      const response = await axiosInstance.post('/api/courses/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Course created:', response.data);
      // Reset form fields
      setCourseTitle("");
      setCourseLevel("");
      setCourseCategory("");
      setCourseTime("");
      setTotalLecture("");
      setCoursePrice("");
      setDiscountPrice("");
      setFeatured(false);
      setEnableDiscount(false);
      setDescription("");
      setInstructor(""); // Reset the instructor field
      setCourseImage(null); // Reset the image field
    } catch (error) {
      console.error('Error creating course:', error.response.data);
    }
  };

  return (
    <>
      <Tnavbar />
      <Tsidebar />
      <br />
      <br />
      <br />
      <br />
      <div className="Box-margin">
      <h2 className="text-center">Create a New Course</h2>

        <div className="m-3">
          <div className="container mt-4">
            <div className="card">
              {/* <div className="card-header">
                <h5 className="card-title">Course details</h5>
              </div> */}
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  {/* Course Title */}
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="courseTitle" className="form-label">Course title</label>
                      <input type="text" className="form-control" id="courseTitle" placeholder="Enter course title" 
                          value={courseTitle} 
                          onChange={(e) => setCourseTitle(e.target.value)} 
                      />
                    </div>
                    {/* Course Level */}
                    <div className="col-md-6">
                      <label htmlFor="courseLevel" className="form-label">Course level</label>
                      <select id="courseLevel" className="form-select"
                          value={courseLevel} 
                          onChange={(e) => setCourseLevel(e.target.value)}
                      >
                        <option defaultValue>Select course level</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                      </select>
                    </div>
                  </div>

                  {/* Course Category and Language */}
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="courseCategory" className="form-label">Course category</label>
                      <select id="courseCategory" className="form-select"
                          value={courseCategory} 
                          onChange={(e) => setCourseCategory(e.target.value)}
                      >
                        <option defaultValue>Select category</option>
                        <option value="Technology">Technology</option>
                        <option value="Business">Business</option>
                        <option value="Design">Design</option>
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

                  {/* Course Time and Total Lectures */}
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="courseTime" className="form-label">Course time</label>
                      <input type="text" className="form-control" id="courseTime" placeholder="Enter course time"
                                    value={courseTime} 
                                    onChange={(e) => setCourseTime(e.target.value)} 
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="totalLecture" className="form-label">Total lectures</label>
                      <input type="number" className="form-control" id="totalLecture" placeholder="Enter total lectures"
                          value={totalLecture} 
                          onChange={(e) => setTotalLecture(e.target.value)} 
                      />
                    </div>
                  </div>

                  {/* Course Price and Discount Price */}
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="coursePrice" className="form-label">Course price</label>
                      <input type="text" className="form-control" id="coursePrice" placeholder="Enter course price"
                          value={coursePrice} 
                          onChange={(e) => setCoursePrice(e.target.value)} 
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="discountPrice" className="form-label">Discount price</label>
                      <input type="text" className="form-control" id="discountPrice" placeholder="Enter discount" 
                           value={discountPrice} 
                           onChange={(e) => setDiscountPrice(e.target.value)} 
                      />
                    </div>
                  </div>

                  {/* Description */}
                  <div className="row mb-3">
                    <div className="col-md-12">
                      <label htmlFor="description" className="form-label">Description</label>
                      <textarea
                        id="description"
                        className="form-control"
                        placeholder="Enter course description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows={3}
                      />
                    </div>
                  </div>

                  {/* Course Image */}
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="courseImage" className="form-label">Course Image</label>
                      <input 
                        type="file" 
                        className="form-control" 
                        id="courseImage" 
                        name='image'
                        accept="image/*" 
                        onChange={handleImageChange} 
                      />
                    </div>
                  </div>

                  {/* Other Options */}
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <div className="form-check mt-2">
                        <input className="form-check-input" type="checkbox" id="enableDiscount"
                            checked={enableDiscount}
                            onChange={(e) => setEnableDiscount(e.target.checked)} 
                        />
                        <label className="form-check-label" htmlFor="enableDiscount">
                          Enable this discount
                        </label>
                      </div>
                      <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" id="featuredCourse"
                                      checked={featured}
                                      onChange={(e) => setFeatured(e.target.checked)} 
                        />
                        <label className="form-check-label" htmlFor="featuredCourse">
                          Check this for featured course
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
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
