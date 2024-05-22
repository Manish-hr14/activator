/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "pagination-bg": "#f1f3f5",
        white: "#f5f5f5",
        darkgray: "#a1a1a1",
        "primary-main": "#2a3958",
        "neutral-1": "#fff",
        "table-bg2": "#f9f9fb",
        "dark-1": "#222",
        "status-text-bg3": "#fee2e2",
        "status-text-refusal": "#991b1b",
        "green-400": "#31c48d",
        "light-1": "#dde0e6",
        "status-text-bg2": "#ffedd5",
        "status-text-waiting": "#9a3412",
        "status-text-bg1": "#dcfce7",
        "status-text-approval": "#166534",
        aliceblue: "#ebeef3",
        gainsboro: "#d7d8da",
        "table-bg": "#eef0f4",
        "dark-11": "#0b101a",
        dimgray: "#5a616a",
        "input-form-error": "#ff4d4f",
        lightgray: "#d1d4d9",
        "input-form-completed": "#b1b4bb",
      },
      spacing: {},
      fontFamily: {
        pretendard: "Pretendard",
      },
      borderRadius: {
        "3xs": "10px",
        "10xs": "3px",
      },
    },
    fontSize: {
      base: "16px",
      xl: "20px",
      sm: "14px",
      "5xl": "24px",
      lgi: "19px",
      inherit: "inherit",
    },
    screens: {
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq1025: {
        raw: "screen and (max-width: 1025px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
      mq343: {
        raw: "screen and (max-width: 343px)",
      },
      mq326: {
        raw: "screen and (max-width: 326px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
