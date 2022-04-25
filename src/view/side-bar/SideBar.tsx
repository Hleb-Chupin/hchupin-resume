import React from "react";
import "./SideBar.scss"
import face from "../../resources/face-cropped.jpg"

const NANE_SURNAME = "Hleb Chupin"
const SOFTWARE_ENGINEER = "software engineer"
const DOMAIN_EXPERIENCE = "domain experience"
const BUSINESS_EXPERIENCE = "business experience"
const WORK_ACADEMY = "work / academy"


function SideBar() {
    return (
        <div className="side-bar">
            <img src={face} className="my-face card-img-top" alt="logo"/>
            <div className="container p-3">
                <div className="row py-1">

                    <h2 className="heading-text golder">
                        {NANE_SURNAME.toUpperCase()}
                    </h2>
                    <h5>
                        {SOFTWARE_ENGINEER.toUpperCase()}
                    </h5>
                </div>
                <div className="row py-1">
                    <h5 className="golder">
                        {DOMAIN_EXPERIENCE.toUpperCase()}
                    </h5>
                    <h6 className="sub-title golder ps-4">
                        INSURANCE
                    </h6>
                    <ul className="px-4 mb-2">
                        <li>
                            World's leading Insurtech company offering SAAS solution for insurance companies
                        </li>
                    </ul>
                    <h6 className="sub-title golder ps-4">
                        TRANSPORT
                    </h6>
                    <ul className="px-4 mb-2">
                        <li>
                            Port of Klaipeda - freight web app
                        </li>
                        <li>
                            Government-owned railway company of Finland - railway maintenance web app
                        </li>
                    </ul>
                    <h6 className="sub-title golder ps-4">
                        STATISTICS
                    </h6>
                    <ul className="px-4 mb-2">
                        <li>
                            The Department of Statistics of Lithuania - statistics web app
                        </li>
                    </ul>
                </div>
                <div className="row py-1">
                    <h5 className="golder">
                        {BUSINESS_EXPERIENCE.toUpperCase()}
                    </h5>
                    <ul className="px-4 mb-2">
                        <li>
                            Design and development of billing and payment specific micro services
                        </li>
                        <li>
                            Development of complicated enterprise document flow systems
                        </li>
                        <li>
                            Full stack development of GIS systems
                        </li>
                        <li>
                            Work experience with client: communication, onsite presentations
                        </li>
                    </ul>
                </div>
                <div className="row py-1">
                    <h5 className="golder">
                        {WORK_ACADEMY.toUpperCase()}
                    </h5>
                    <h6 className="sub-title golder ps-4 fw-normal">
                        WORK SUMMARY
                    </h6>
                    <div className="container work-summary">
                        <div className="row px-4">
                            <div className="col-1 px-0">
                                EIS
                            </div>
                            <div className="col-5 px-2 d-inline-flex">
                                <div className="vr"></div>
                                <p className="mb-0 px-2">
                                    2021 - now
                                </p>
                                <div className="vr"></div>
                            </div>
                            <div className="col-6 px-0">
                                Software engineer
                            </div>
                        </div>
                        <div className="row px-4">
                            <div className="col-1 px-0">
                                CGI
                            </div>
                            <div className="col-5 px-2 d-inline-flex">
                                <div className="vr"></div>
                                <p className="mb-0 px-2">
                                    2019 - 2021
                                </p>
                                <div className="vr"></div>
                            </div>
                            <div className="col-6 px-0">
                                Software engineer
                            </div>
                        </div>
                        <div className="row px-4">
                            <div className="col-1 px-0">
                                UTVT
                            </div>
                            <div className="col-5 px-2 d-inline-flex">
                                <div className="vr"></div>
                                <p className="mb-0 px-2">
                                    2014 - 2019
                                </p>
                                <div className="vr"></div>
                            </div>
                            <div className="col-6 px-0">
                                Regional Export and
                                e-commerce manager
                            </div>
                        </div>
                    </div>
                    <h6 className="sub-title golder ps-4 fw-normal">
                        ACADEMIC SUMMARY
                    </h6>
                    <div className="container work-summary">
                        <div className="row px-4">
                            <div className="col-1 px-0">
                                EHU
                            </div>
                            <div className="col-5 px-2 d-inline-flex">
                                <div className="vr"></div>
                                <p className="mb-0 px-2">
                                    2013 - 2015
                                </p>
                                <div className="vr"></div>
                            </div>
                            <div className="col-6 px-0">
                                Master of Laws (LLM)
                            </div>
                        </div>
                        <div className="row px-4">
                            <div className="col-1 px-0">
                                EHU
                            </div>
                            <div className="col-5 px-2 d-inline-flex">
                                <div className="vr"></div>
                                <p className="mb-0 px-2">
                                    2009 - 2013
                                </p>
                                <div className="vr"></div>
                            </div>
                            <div className="col-6 px-0">
                                Bachelor of Laws
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default SideBar