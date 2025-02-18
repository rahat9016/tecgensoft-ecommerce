import HomeForBigScreen from "./HomeForBigScreen";
import HomeForSmallScreen from "./HomeForSmallScreen";

export default function Home() {
  return (
    <div>
      {/* for big screen */}
      <div className="lg:block hidden">
        <HomeForBigScreen />
      </div>
      {/* for small screen */}
      <div className="lg:hidden block">
        <HomeForSmallScreen />
      </div>
    </div>
  );
}
