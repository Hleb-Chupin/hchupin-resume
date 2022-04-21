import React from "react";
import "./SideBar.scss"
import face from "../../resources/face-cropped.jpg"


function SideBar() {
    return (
        <div className="side-bar">
            <img src={face} className="my-face card-img-top" alt="logo"/>
            <div className="p-4">
                <h2 className="heading-text">
                    HLEB CHUPIN
                </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dolores facere maxime nihil
                    praesentium recusandae repellat sed, ut. Ab consectetur deserunt dicta et illum maxime, modi
                    necessitatibus nemo nisi odio!
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dolores facere maxime nihil
                    praesentium recusandae repellat sed, ut. Ab consectetur deserunt dicta et illum maxime, modi
                    necessitatibus nemo nisi odio!
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dolores facere maxime nihil
                    praesentium recusandae repellat sed, ut. Ab consectetur deserunt dicta et illum maxime, modi
                    necessitatibus nemo nisi odio!
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dolores facere maxime nihil
                    praesentium recusandae repellat sed, ut. Ab consectetur deserunt dicta et illum maxime, modi
                    necessitatibus nemo nisi odio!
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dolores facere maxime nihil
                    praesentium recusandae repellat sed, ut. Ab consectetur deserunt dicta et illum maxime, modi
                    necessitatibus nemo nisi odio!
                </p>
            </div>
        </div>
    );
}

export default SideBar