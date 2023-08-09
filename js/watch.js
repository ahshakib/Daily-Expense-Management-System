function updateDigitalWatch() {
    const digitalWatchElement = document.getElementById("digital-watch");

    const now = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false // Use 24-hour format
    };
    const formattedDateTime = now.toLocaleString(undefined, options);

    digitalWatchElement.textContent = formattedDateTime;
  }


  updateDigitalWatch();

  setInterval(updateDigitalWatch, 1000);