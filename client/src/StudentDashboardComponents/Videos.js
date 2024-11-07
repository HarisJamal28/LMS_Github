import React from "react";
import video from "./videoassests/dumy.mp4";
import { categoryData } from "../CoursesComponents/CourseList";

import "video.js/dist/video-js.css";
import videojs from "video.js";
import { useEffect, useRef } from "react";

function Videos() {
  const videoRef = useRef(null);
  let player = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (videoRef.current) {
        player.current = videojs(videoRef.current, {
          controls: true,
          autoplay: false,
         
        });
      }
    }, 100);

    return () => {
      if (player.current) {
        player.current.dispose();
        player.current = null;
      }
      clearTimeout(timer);
    };
  }, []);

  return (
    <div class="container">
      <div class="page-inner">
        <div class="row">
          <div class="col-md-12">
            <div class="card card-round">
              <div class="card-header">
                <div class="card-head-row">
                  <div class="card-title">Lectures Videos</div>
                </div>
              </div>
              <div class="card-body">
                <div class="chart-container  " style={{ "min-height": "75px" }}>
                  <div className="row g-4 marginonsmallscree">
                    {categoryData.map((e, index) => (
                      <div className="col-sm-6 col-md-4 col-xl-6">
                        <div className="card  card-body bg-danger bg-opacity-10 text-center position-relative btn-transition p-4">
                          <div data-vjs-player>
                            <video
                              ref={videoRef}
                              className="video-js rounded-3 mb-3"
                              controls
                              height="200"
                              data-setup="{}"
                              style={{ width: "100%" }}
                            >
                              <source src={video} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          </div>
                          <h5 className="mb-2">
                            <a className="stretched-link">
                              Description of Video
                            </a>
                          </h5>
                          <h6 className="mb-0"> Courses Name</h6>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Videos;
