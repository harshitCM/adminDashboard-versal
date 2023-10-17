// import HeaderSection from "@aio/components/HeaderSection";
import HeaderSection from "../../ui-components/HeaderSection";
import { FaUserAlt } from "react-icons/fa";
// import Statistics from "../Statistics";

const Profile = (props) => {
  return (
    <>
      <HeaderSection
        heading={"Hello Codemetrics"}
        subHeading={"Lets check your stats today!"}
      />
      <HeaderSection
        // heading={"Hello Codemetrics"}
        subHeading={
          "Our dedication to sustainability, ethical business practices, and community engagement sets us apart as a socially responsible company. We believe in not only contributing to the success of our clients but also making a positive impact on the world around us.!"
        }
        title={"Hello Codemetrics hello world"}
      />
    </>
  );
};

export default Profile;
