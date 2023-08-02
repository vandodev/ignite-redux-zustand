import { Video } from "lucide-react";
import { useDispatch } from "react-redux";
import { play } from "../store/slices/player";

interface LessonProps {
  title: string;
  duration: string;
}

export function Lesson({ title, duration }: LessonProps) {
  const dispatch = useDispatch();

function handlePlayLesson(){
 dispatch(play("teste"));
}

  return (
    <button onClick={handlePlayLesson} className="flex items-center gap-3 text-sm text-zinc-400">
      <Video className="w-4 h-4 text-zinc-500" />
      <span>{title}</span>
      <span className="ml-auto font-mono text-xs text-zinc-500">{duration}</span>
    </button>
  );
}