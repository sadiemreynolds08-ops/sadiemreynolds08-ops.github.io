function updateDateTime() {
  const now = new Date();
  document.getElementById("year").textContent = now.getFullYear();

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
  };
  document.getElementById("datetime").textContent =
    now.toLocaleString(undefined, options);
}

updateDateTime();
setInterval(updateDateTime, 1000);