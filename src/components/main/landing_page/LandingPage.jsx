import React from "react";
import FirstSection from "./sections/first_section/FirstSection";
import SecondSection from "./sections/second_section/SecondSection";
import ThirdSection from "./sections/third_section/ThirdSection";
import FourthSection from "./sections/fourth_section/FourthSection";

const LandingPage = () => {
    return (
        <div>
            <FirstSection />
            <SecondSection />
            <ThirdSection />
            <FourthSection />
        </div>
    );
};

export default LandingPage;
