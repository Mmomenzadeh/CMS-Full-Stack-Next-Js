import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faCashRegister,
//   faFile,
//   faTag,
//   faUser,
// } from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/Modal.module.css";
import { useState } from "react";

import swal from "sweetalert";

const AddCourseModal = ({ hideAddCourseModal , fetchAllCuress }) => {
  const [curess, setCuress] = useState({
    title: "",
    time: "",
  });

  const createCuress = async () => {
    try {
      await fetch("http://localhost:3000/api", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(curess),
      })
        .then((res) => {
          if (res.status === 201) {
            hideAddCourseModal()
            setCuress({ title: "", time: "" });
            swal({
              title: "created",
              icon: "success",
              buttons: "ok",
            });
            fetchAllCuress()
          }
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.modal_container} id="add-new-course-modal">
      <div className={styles.modal_bg} onClick={hideAddCourseModal}></div>
      <div className={styles.modal_content}>
        <h1 className={styles.modal_title}>اضافه کردن دوره جدید</h1>
        <form action="#" className={styles.edit_user_form}>
          <div className={styles.input_field}>
            <span>
              {/* <FontAwesomeIcon icon={faTag} /> */}
            </span>
            <input
              value={curess.title}
              onChange={(e) => setCuress({ ...curess, title: e.target.value })}
              type="text"
              placeholder="نام دوره"
              spellcheck="false"
            />
          </div>
          <div className={styles.input_field}>
            <span>
              {/* <FontAwesomeIcon icon={faCashRegister} />{" "} */}
            </span>
            <input
              value={curess.time}
              onChange={(e) => setCuress({ ...curess, time: e.target.value })}
              type="text"
              placeholder="تایم دوره"
              spellcheck="false"
            />
          </div>
          {/* <div className={styles.input_field}>
                        <span><FontAwesomeIcon icon={faUser} /></span>
                        <input
                            type="text"
                            placeholder="مدرس دوره"
                            spellcheck="false"
                        />
                    </div> */}
          {/* <div className={styles.input_field}>
                        <span><FontAwesomeIcon icon={faFile} /></span>
                        <input type="file" name="" id="" />
                    </div> */}

          <button
            type="submit"
            className={styles.update_btn}
            onClick={createCuress}
          >
            ایجاد دوره
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCourseModal;
