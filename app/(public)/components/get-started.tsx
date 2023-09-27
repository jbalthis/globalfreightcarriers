import HeroStyles from "@/styles/hero.style";
import { ArrowUp } from "lucide-react";

const styles = HeroStyles;
const bg_blue_gradient = 'bg-gradient-to-br from-lime-400 via-blue-200 to-blue-800';
const text_gradient = 'bg-gradient-to-br from-lime-400 via-blue-200 to-blue-900 text-transparent bg-clip-text';
const GetStarted = () => (
  <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full ${bg_blue_gradient} p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className={text_gradient}>Get</span>
        </p>
        <ArrowUp className="w-[24px] h-[24px] ml-1 text-white" />
      </div>
      <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        <span className={text_gradient}>Started</span>
      </p>
    </div>
  </div>
);
export default GetStarted;