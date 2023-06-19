import React, { useEffect, useState } from 'react';
import "./CountDown.css";

const Countdown: React.FC = () => {
  const targetDate = new Date("June 7, 2023 00:00:00");
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      const timeDifference = targetDate.getTime() - currentDate.getTime();

      if (timeDifference < 0) {
        // The target date has already passed
        setCountdown({ days: -1, hours: -1, minutes: -1, seconds: -1 });
        clearInterval(interval);
        return;
      }

      const oneDay = 24 * 60 * 60 * 1000; // milliseconds in a day
      const oneHour = 60 * 60 * 1000; // milliseconds in an hour
      const oneMinute = 60 * 1000; // milliseconds in a minute

      const days = Math.floor(timeDifference / oneDay);
      const hours = Math.floor((timeDifference % oneDay) / oneHour);
      const minutes = Math.floor((timeDifference % oneHour) / oneMinute);
      const seconds = Math.floor((timeDifference % oneMinute) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      {countdown.days < 0 ? (
        <div>
          <h2>The album is released! <br></br>
            Stream on
            <a href="https://music.apple.com/us/album/speak-now-taylors-version/1690839749">Apple Music</a>
            or
            <a href="https://open.spotify.com/album/1fnJ7k0bllNfL1kVdNVW1A?si=81oyFruIQJK5OnJZ7y3hfA">Spotify</a>
          </h2>
        </div>
      ) : (
        <div>
          <h2>{countdown.days} days {countdown.hours} hours {countdown.minutes} minutes {countdown.seconds} seconds</h2>
          <br></br>
        </div>
      )}
    </div>
  );
};

export default Countdown;
