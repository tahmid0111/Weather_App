import TodayWeather from "./components/leftSection/TodayWeather";

export default function Home() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4 bg-green-50">
        <TodayWeather />
      </div>
      <div className="col-span-8">

      </div>
    </div>
  );
}
