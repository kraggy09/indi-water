import { useEffect, useState } from "react";
import construction from "/under_construction.jpg";

import Timer from "./Timer";

interface TimeState {
  hour: number;
  min: number;
  sec: number;
}

const UnderConstruction = () => {
  const deadline: Date = new Date("2024-02-18T23:59:59"); // Replace with your deadline

  const calculateTimeRemaining = (): TimeState => {
    const now = new Date();
    const diff = deadline.getTime() - now.getTime();
    const remainingSeconds = Math.max(0, Math.floor(diff / 1000));

    const hours = Math.floor(remainingSeconds / 10000);
    const min = Math.floor((remainingSeconds % 3600) / 60);
    const sec = remainingSeconds % 60;
    return { hour: hours, min, sec };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  const [time, setTimer] = useState<TimeState>({ hour: 0, min: 0, sec: 0 });
  return (
    <div className="relative flex items-center justify-center flex-col">
      <p className="md:text-4xl text-3xl">COMING SOON</p>
      <img
        className="md:max-h-[400px] max-h-[350px] my-3 rounded-2xl"
        src={construction}
        alt="Construction of the website "
      />

      <p className="text-2xl">We are under construction 🚧</p>
      <div className="flex min-w-full justify-around">
        <Timer time={time.hour} type="hours" />
        <Timer time={time.min} type="minutes" />
        <Timer time={time.sec} type="seconds" />
      </div>
    </div>
  );
};

export default UnderConstruction;
