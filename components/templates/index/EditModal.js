import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faCashRegister,
//   faTag,
//   faUser,
// } from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/Modal.module.css";

const EditModal = ({
  hideEditModal,
  setUpdateCuress,
  updateCuress,
  editCuress,
}) => {
  return (
    <div className={styles.modal_container} id="edit-modal">
      <div className={styles.modal_bg} onClick={hideEditModal}></div>
      <div className={styles.modal_content}>
        <h1 className={styles.modal_title}>اطلاعات جدید را وارد کنید</h1>
        <form action="#" className={styles.edit_user_form}>
          <div className={styles.input_field}>
            <span>
              {/* <FontAwesomeIcon icon={faTag} /> */}
            </span>
            <input
              type="text"
              placeholder="نام دوره"
              spellcheck="false"
              value={updateCuress.title}
              onChange={(e) =>
                setUpdateCuress({ ...updateCuress, title: e.target.value })
              }
            />
          </div>
          <div className={styles.input_field}>
            <span>
              {/* <FontAwesomeIcon icon={faCashRegister} />{" "} */}
            </span>
            <input
              type="text"
              placeholder="تایم دوره"
              spellcheck="false"
              value={updateCuress.time}
              onChange={(e) =>
                setUpdateCuress({ ...updateCuress, time: e.target.value })
              }
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

          <button
            type="submit"
            className={styles.update_btn}
            onClick={editCuress}
          >
            اپدیت دوره
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
