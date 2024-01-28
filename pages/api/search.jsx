import React, { useState } from "react";
import styles from "@/styles/Course.module.css";
import { useRouter } from "next/router";
import model from "@/model/curess";
import CoursesItem from "@/components/modules/coursesItem/CoursesItem";
import conectToDB from "@/utils/conectToDb";

export default function search({ curess }) {
  const [dataCuress, setDataCuress] = useState([...curess]);

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
          <h2 className={styles.courses_title}> نتایج جستجو : </h2>
        </div>
        {dataCuress.length > 0 ? (
          <ul className={styles.courses_list}>
            {dataCuress.map((item) => (
              <CoursesItem
                {...item}
                image="/images/courses/PWA.jpg"
                fetchAllCuress={fetchAllCuress}
              />
            ))}
          </ul>
        ) : (
          <>
            <h1 style={{ textAlign: "center" }}>نتیجه ی یافت نشد </h1>
          </>
        )}
      </section>
    </>
  );
}

export async function getServerSideProps(context) {
  conectToDB();
  const { q } = context.query;
  console.log({ "query => ": q });
  const curess = await model.find({
    title: { $regex: q !== undefined ? q : "" },
  });

  return {
    props: {
      curess: JSON.parse(JSON.stringify(curess)),
    },
  };
}
