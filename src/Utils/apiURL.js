export const apiURL = () => {
    return window.location.hostname === "localhost"
      ? "http://localhost:3000"
      : "https://raffle-backend.fly.dev";
  };
  