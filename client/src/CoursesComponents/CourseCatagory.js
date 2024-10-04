import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function CourseCategory() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/courses/categories');
                setCategories(response.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);

    const images = [
        "https://eduport.webestica.com/assets/images/element/music.svg", // Artificial Intelligence
        "https://eduport.webestica.com/assets/images/element/online.svg", // Python
        "https://eduport.webestica.com/assets/images/element/coding.svg", // Natural Language Processing
        "https://eduport.webestica.com/assets/images/element/artist.svg", // Generative AI
        "https://eduport.webestica.com/assets/images/element/coding.svg", // Machine Learning
        "https://eduport.webestica.com/assets/images/element/artist.svg", // Deep Learning
        "https://eduport.webestica.com/assets/images/element/music.svg", // Cyber Security
        "https://eduport.webestica.com/assets/images/element/online.svg", // Computer Forensics (CHFI)
        "https://eduport.webestica.com/assets/images/element/music.svg", // Security Operations Center (SOC)
        "https://eduport.webestica.com/assets/images/element/online.svg", // Graphic Designing
        "https://eduport.webestica.com/assets/images/element/coding.svg", // Wordpress
        "https://eduport.webestica.com/assets/images/element/artist.svg", // Digital Marketing
        "https://eduport.webestica.com/assets/images/element/music.svg", // Full Stack Developer
        "https://eduport.webestica.com/assets/images/element/online.svg", // Cisco Certified Network Associate (CCNA)
        "https://eduport.webestica.com/assets/images/element/coding.svg"  // Cisco Certified Network Professional (CCNP)
    ];

    return (
        <section>
            <div className="container" style={{minHeight:'100vh'}}>
                {/* Title */}
                <div className="row mb-4">
                    <div className="col-lg-8 mx-auto text-center">
                        <h2>Choose a Category</h2>
                        <p className="mb-0">Perceived end knowledge certainly day sweetness why cordially</p>
                    </div>
                </div>

                <div className="row g-4 marginonsmallscree">
                    {categories.map((category, index) => (
                        <div className="col-sm-6 col-md-4 col-xl-3" key={index}>
                            <div style={{ height: '170px' }} className="card card-body bg-success bg-opacity-10 text-center position-relative btn-transition p-4">
                                <div className="icon-xl bg-body mx-auto rounded-circle mb-3">
                                <img src={images[index]} alt={category.title} /> 
                                </div>
                                <h5 className="mb-2">
                                    <Link to='/Courses'><span className="stretched-link">
                                        {category}
                                    </span></Link>
                                </h5>
                                {/* <h6 className="mb-0">You can fetch course count based on category hereCourses</h6> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CourseCategory;
