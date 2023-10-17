import Image from "next/image";
import styles from "./UserIcon.module.css";

const UserIcon = ({ onClick = () => {} }) => {
  return (
    <div onClick={onClick} className={styles.container}>
      <Image src={`/profile-user.png`} width={"35"} height={"35"} alt="user" />
    </div>
  );
};

export default UserIcon;
