import React from "react";

function HeaderBanner({value}) {
  return <section class="elementor-section-headbar mb-1 d-flex  flex-column align-items-center justify-content-center">

    <h1 className="text-light">{value}</h1> 
    <div aria-label="">
        <span className="text-light"> <a class=" active-link   " aria-current="page"  >Home</a>{" "}/{" "}
        <a class=" text-light"   >{value}</a></span>
    </div>
  </section>;
}

export default HeaderBanner;
