import DeleteModal from "@/components/templates/index/DeleteModal";
import EditModal from "@/components/templates/index/EditModal";
import { useState } from "react";
import styles from "@/styles/Course.module.css";

import swal from "sweetalert";
const CoursesItem = ({ title, time, _id, image ,fetchAllCuress }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const hideEditModal = () => setShowEditModal(false);
  const hideDeleteModal = () => setShowDeleteModal(false);
  const [updateCuress, setUpdateCuress] = useState({ title, time });

  const deleteCuress = async () => {
    await fetch(`http://localhost:3000/api/${_id}`, { method: "DELETE" })
      .then((res) => {
        if (res.status === 200) {
          setShowDeleteModal(false);
          swal({
            title: "Delete",
            icon: "success",
            buttons: "ok",
          });
          fetchAllCuress()
        }
      })
      .catch((err) => console.log({ "err => ": err }));
  };

  const editCuress = async () => {
    try {
      await fetch(`http://localhost:3000/api/${_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updateCuress),
      }).then((res) => {
        if (res.status === 200) {
          setShowEditModal(false);
          swal({
            title: "update",
            icon: "success",
            buttons: "ok",
          });
          fetchAllCuress()
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <li className={styles.courses_item}>
        <div className={styles.courses_img_title}>
          <img
            src={image}
            alt="course-item-img"
            className={styles.courses_img}
          />
          <h5 className={styles.courses_name}>{title}</h5>
        </div>
        <div className={styles.courses_btns}>
          <a
            href="#"
            className={styles.courses_btn_edit}
            onClick={() => setShowEditModal(true)}
          >
            {" "}
            ویرایش{" "}
          </a>
          <a
            href="#"
            className={styles.courses_btn_delete}
            onClick={() => setShowDeleteModal(true)}
          >
            {" "}
            حذف{" "}
          </a>
        </div>
      </li>
      {showEditModal && (
        <EditModal
          hideEditModal={hideEditModal}
          editCuress={editCuress}
          setUpdateCuress={setUpdateCuress}
          updateCuress={updateCuress}
        />
      )}
      {showDeleteModal && (
        <DeleteModal
          hideDeleteModal={hideDeleteModal}
          deleteCuress={deleteCuress}
        />
      )}
    </>
  );
};

export default CoursesItem;
