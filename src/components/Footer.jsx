import githubIcon from "../assets/github-icon.svg";
import twitterIcon from "../assets/twitter-icon.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <a
        href="https://twitter.com/kaitakami_/"
        target="_blank"
        className="footer-rss"
      >
        <img src={twitterIcon} />
      </a>
      <a
        href="https://github.com/kaitakami"
        target="_blank"
        className="footer-rss"
      >
        <img src={githubIcon} />
      </a>
    </footer>
  );
};

export default Footer;
