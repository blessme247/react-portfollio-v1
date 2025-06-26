import  { useEffect, useState } from "react";
import SpotifyLogo from "../../assets/spotify.svg";
import { Link } from "react-router-dom";
import getNowPlayingItem from "../../utils/spotify";
import SpotifyAnimatedBars from "../../Components/Spotify/SpotifyAnimatedBars";
import arrowIcon from "../../assets/arrow.svg"

const Contact = () => {
  const [loading, setLoading] = useState(true);
  const [song, setSong] = useState({});

  useEffect(() => {
    Promise.all([getNowPlayingItem()]).then((results) => {
      const songData = {
        artist: results[0].artist,
        title: results[0].title,
        songStreamLink: results[0].songUrl,
      };

      setSong(songData);

      if (results[0].isPlaying) {
        setLoading(false);
      } else {
        setLoading(true);
      }
    });
  }, [song]);

  return (
    <section className="contactSection section">
      <div className="top">
        <p className="callToWork">Let's work </p>
        <div className="flexCallToWork">
          <p className="callToWork">together </p>
          <img src={arrowIcon} alt="arrow" />
        </div>

        <div className="horizontalLine"></div>

        <div className="contactEmailLinkWrapper">
          <a
            className="contactEmailLink"
            href="mailto: solabiabraham@gmail.com"
          >
            solabiabraham@gmail.com
          </a>
        </div>
      </div>

      <footer className="footer container">
        <div className="left">
          {loading ? (
            <img src={SpotifyLogo} alt="spotify logo" />
          ) : (
            <SpotifyAnimatedBars />
          )}

          {loading ? (
            <span>Blessme is Offline</span>
          ) : (
            <>
              <span>{song?.artist}</span>
              <a href={song?.songStreamLink}>{song?.title}</a>
            </>
          )}
        </div>

        <div className="right">
          <p className="rightTop">Socials</p>
          <div className="socialLinksWrapper">
            <Link
              className="socialLink"
              to="https://www.linkedin.com/in/solabi-abraham/"
              target="_blank"
            >
              LinkedIn{" "}
            </Link>
            <Link
              className="socialLink"
              to="https://twitter.com/lifeofblessme"
              target="_blank"
            >
              Twitter{" "}
            </Link>
            <Link
              className="socialLink"
              to="https://github.com/blessme247"
              target="_blank"
            >
              Github{" "}
            </Link>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
