/** @type {import('tailwindcss').Config} */
export default {
  darkMode:"selector",
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors :{
        "blue":"rgba(12, 150, 226, 1)",
        "liblack":"rgba(29, 33, 48, 1)",
        "herop":"rgba(67, 73, 91, 1)",
        "educationp":"rgba(152, 162, 179, 1)",
        "purpple":"rgba(88, 63, 188, 1)",
        "darkmodebg":"rgba(29, 33, 48, 1)",
        "gray":"rgba(146, 146, 157, 1)",
        "border":"rgba(190, 192, 191, 1)",
      },
      keyframes :{
      email : {
        "0%"  : {transform: "translateY(0) rotate(0deg);"},
        "50%" : {transform: "translateY(-4px) rotate(20deg);"},
        "100%" :{transform: "translateY(0) rotate(0deg);"}
    },
    ringing :{
      "0%, 20%, 40%, 60%, 80% "  : {transform: "rotate(0deg)"},
      "10%, 30%, 50%, 70%, 90%" : {transform: "rotate(-5deg);"},
      "15%, 35%, 55%, 75%, 95% " :{transform: " rotate(5deg)"}
    },
    location:{
      "0%, 20%, 50%, 80%, 100%"  : {transform: "translateY(0)"},
      "40% " : {transform: "translateY(-8px)"},
      "60%" :{transform: "translateY(-4px)"}
    },
    typing:{
      "0%" :{width:"0ch"},
      "100%":{width:"18ch"}
    },
    color:{
      "0%" : {color : "rgba(12, 150, 226, 1)"},
      "50%" : {color : "rgba(88, 63, 188, 1)"},
      "100%" : {color : " rgba(12, 150, 226, 1)"}
    },
    bounce :{
      "0%":{transform : "translateY(-50px)"},
      "25%":{transform : "translateY(0px)" },
      "50%":{transform : "translateY(-30px)"},
      "75%":{transform : "translateY(0px)"},
      "90%":{transform : "translateY(-10px)"},
      "100%":{transform : "translateY(0px)"},
    }
    },
    animation :{
      email : "email 1.5s infinite",
      ringing :"email 1.5s infinite",
      location:"location 1.5s infinite",
      typing:"typing 2s steps(18) forwards",
      color : "color 2s infinite",
      bounce : "bounce  2s forwards"
    }
    
  },
  plugins: [],
}
}
