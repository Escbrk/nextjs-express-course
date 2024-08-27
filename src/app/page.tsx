import Image from "next/image";
import styles from "./page.module.css";
import cousre from "./course.json";

export default function Home() {
  return (
    <main className={styles.main}>
      <ul>
        {cousre.lessons.map((lesson) => (
          <li key={lesson.name}>
            <h2 style={{ marginTop: "10px" }}>{lesson.title} </h2>
            <ul>
              {lesson.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </main>
  );
}
