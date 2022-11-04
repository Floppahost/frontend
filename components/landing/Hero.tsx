import styles from "../../styles/Home.module.scss";
import Button from "../core/button";
import { RiDiscordFill } from "react-icons/ri";
const Hero = () => {
  return (
    <section id="hero" className={styles.hero__wrapper}>
      <div id="hero__first">
        <div id="hero__header" className={styles.hero__header}>
          <h1>The file hosting service</h1>
          <div className="flex gap-2">
            <h1>you</h1>
            <div>
              <span className={styles.hero__animation}>deserve</span>
              <span className={styles.hero__text__animation}>deserve</span>
              <span className={styles.hero__text__animation__two}>deserve</span>
            </div>
          </div>
        </div>
        <p className="pt-2 max-w-xl">
          Floppa.host let you upload your files safely and has amazing features.
          You can customize your URL, modify Discord's Embed and much more!
        </p>
        <div className="flex gap-2 pt-2">
          <Button color="danger">Login</Button>
          <Button color="warning">Register</Button>
          <Button>
            <RiDiscordFill />
            Discord
          </Button>
        </div>
      </div>

      <div className="hero__second">
        <div className="bg-gray-700 rounded w-96 h-32">cool gif here</div>
      </div>
    </section>
  );
};
export default Hero;
