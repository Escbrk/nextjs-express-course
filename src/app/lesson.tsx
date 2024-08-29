"use client";

import { useState } from "react";

type LessonProps = {
  title: string;
  points: string[];
};

type LikeState = "Unset" | "Liked" | "Disliked";

export function Lesson({ title, points }: LessonProps) {
  const [likeState, setLikeState] = useState<LikeState>("Unset");
  const setLike = () => setLikeState("Liked");

  return (
    <div>
      <h2>{title}</h2>
      <button type="button" onClick={setLike}>{likeState === "Unset" ? "like" : likeState}</button>
      <ul>
        {points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </div>
  );
}
