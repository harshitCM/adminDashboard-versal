import styles from "./fullbutton.module.css";

const FullButton = ({ label = "" }) => {
  const onclick = () => {
    alert("Login SuccessFull");
  };

  return (
    <div className={styles["btn-container"]}>
      <button className={styles["btn-style"]} onClick={onclick}>
        {label}
      </button>
    </div>
  );
};

export default FullButton;
