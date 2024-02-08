interface TimerProps {
  time: number;
  type: string;
}
const Timer = ({ time, type }: TimerProps) => {
  return (
    <span className="bg-blue-300 text-white flex-col px-3 mt-6 rounded-xl min-h-[100px] flex items-center justify-center">
      <p className="text-5xl mb-3 pt-6 px-2 rounded-xl ">{time}</p>
      <p className="uppercase text-md">{type}</p>
    </span>
  );
};

export default Timer;
