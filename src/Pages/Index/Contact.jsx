import React, { useEffect, useState } from "react";
import SpotifyLogo from "../../assets/spotify.svg";
import { Link, useSearchParams } from "react-router-dom";
import getNowPlayingItem from "../../utils/spotify";
import SpotifyAnimatedBars from "../../Components/Spotify/SpotifyAnimatedBars";

const Contact = () => {
  const [loading, setLoading] = useState(true);
  const [song, setSong] = useState({});

  useEffect(() => {
    Promise.all([getNowPlayingItem()]).then((results) => {
      console.log(results);
      const songData = {
        artist: results[0].artist,
        title: results[0].title,
        songStreamLink: results[0].songUrl,
      };

      setSong(songData);

      if (results[0].isPlaying == true) {
        setLoading(false);
      } else {
        setLoading(true);
      }
    });
  }, [song]);

  return (
    <section className="contactSection">
      <div className="top">
        <p className="callToWork">Let's work </p>
        <div className="flexCallToWork">
          <p className="callToWork">together </p>
          <svg
            width="18px"
            height="18px"
            viewBox="0 0 18 18"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <title>arrow-up-right</title>
            <g
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g
                id="Artboard"
                transform="translate(-1019.000000, -279.000000)"
                stroke="#aaa"
                stroke-width="1.5"
              >
                <g
                  id="arrow-up-right"
                  transform="translate(1026.000000, 286.000000) rotate(90.000000) translate(-1026.000000, -286.000000) translate(1020.000000, 280.000000)"
                >
                  <polyline
                    id="Path"
                    points="2.76923077 0 12 0 12 9.23076923"
                  ></polyline>
                  <line x1="12" y1="0" x2="0" y2="12" id="Path"></line>
                </g>
              </g>
            </g>
          </svg>
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
              to="https://twitter.com/blessme_xo"
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
