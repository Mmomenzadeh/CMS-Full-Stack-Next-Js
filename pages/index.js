import Course from "@/components/templates/index/Course";
import model from "@/model/curess";
import conectToDB from "@/utils/conectToDb";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ courses }) {
  return <Course data={courses} />;
}

export async function getStaticProps(context) {
  conectToDB();
  const curesss = await model.find({});
  return {
    props: {
      courses: JSON.parse(JSON.stringify(curesss)),
    },
    revalidate: 60 * 60 * 1,
  };
}
