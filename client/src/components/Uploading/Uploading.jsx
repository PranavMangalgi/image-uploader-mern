import styles from "./uploading.module.css";

function Uploading() {
  return (
    <div className="bg-white p-4 font-['Poppins']">
      <p className="ml-10 font-thin text-[#4F4F4F] md:ml-0 md:text-lg">
        Uploading...
      </p>
      <div className={styles["loader-line"]}></div>
    </div>
  );
}

export default Uploading;
