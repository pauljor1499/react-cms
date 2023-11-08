import React from "react";
import "./SecondSection.css";
import BookPenIcon from "../../../../../assets/landing_page/section_2/book-pen.png";
import FilesIcon from "../../../../../assets/landing_page/section_2/files.png";
import BookBulbIcon from "../../../../../assets/landing_page/section_2/book-bulb.png";

const SecondSection = () => {
    return (
        <div className="second-section-content">
            <div className="section2-content">
                <div className="content-header">
                    <div className="content-title">
                        <span>Why choose MathMatters?</span>
                    </div>
                    <div className="content-description">
                        <p>
                            The rise and fall of civilization depends on the level of technological advancement. All technological tools starts with a
                            mathematical idea.
                        </p>
                    </div>
                </div>
                <div className="grid-items">
                    <div className="item">
                        <div className="section1">
                            <div className="circle">
                                <img src={BookPenIcon} alt="book-pen" />
                            </div>
                            <h2>Personalized Learning</h2>
                            <p>
                                Customizable exercises and tests centered on students skill set. Taking into account individual students ability and
                                interest makes learning more meaningful.
                            </p>
                        </div>
                    </div>

                    <div className="item">
                        <div className="section2">
                            <div className="circle">
                                <img src={FilesIcon} alt="files" />
                            </div>
                            <h2>Trusted Content</h2>
                            <p>
                                Created with strong collaboration between classroom teachers, parents, students and state tests writers. Thoroughly
                                reviewed and constantly updated.
                            </p>
                        </div>
                    </div>

                    <div className="item">
                        <div className="section3">
                            <div className="circle">
                                <img src={BookBulbIcon} alt="" />
                            </div>
                            <h2>Tools to Empower Teachers</h2>
                            <p>Allign with state standards and college board identified competencies. Designed for college success.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecondSection;
