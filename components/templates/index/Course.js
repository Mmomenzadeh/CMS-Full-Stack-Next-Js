import CoursesItem from "@/components/modules/coursesItem/CoursesItem";
import { useState } from "react";
import AddCourseModal from "./AddCourseModal";
import styles from "@/styles/Course.module.css";

const Course = ({ data }) => {
  const [dataCuress, setDataCuress] = useState([...data]);  
  const [showAddCourseModal, setShowAddCourseModal] = useState(false);

  const hideAddCourseModal = () => setShowAddCourseModal(false);

  const fetchAllCuress = async () => {
    try {
      const curess = await fetch("http://localhost:3000/api");
      const result = await curess.json();

      if (curess.status === 200) {
        setDataCuress([...result]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className={styles.courses}>
        <div className={styles.courses_top}>
          <h2 className={styles.courses_title}>دوره ها</h2>
          <a
            href="#"
            className={styles.new_course_btn}
            onClick={() => setShowAddCourseModal(true)}
          >
            اضافه کردن دوره جدید
          </a>
        </div>
        <ul className={styles.courses_list}>
          {dataCuress.map((item) => (
            <CoursesItem {...item} image="/images/courses/PWA.jpg" fetchAllCuress={fetchAllCuress} />
          ))}
        </ul>
      </section>

      {showAddCourseModal && (
        <AddCourseModal
          hideAddCourseModal={hideAddCourseModal}
          fetchAllCuress={fetchAllCuress}
        />
      )}
    </>
  );
};

export default Course;
