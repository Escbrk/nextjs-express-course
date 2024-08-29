import styles from "./page.module.css";
import dynamic from "next/dynamic";



const ClientComponent = dynamic(() => import("./some-component"), {
  ssr: false,
});

export default async function Home() {
  return (
    <main className={styles.main}>
      <h1>React</h1>
      <ClientComponent />
      {/* <ul>
        {courses.lessons.map((lesson) => (
          <li key={lesson.name}>
            <Lesson title={lesson.title} points={lesson.points} />
          </li>
        ))}
      </ul> */}
    </main>
  );
}
