/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: 'jit' ,
  theme: {
    extend: {
      color: {
        blue: "#2CBCE9",
        red: "#DC4492" ,
        yellow: "#FDCC49" ,
        gray: "#ededed",
        "deep-blue": "#010026" ,
        "dark-gray": "#757575",
        "ope-black" : "rgba(0,0,0,0.35)"
      }
    },
    backgroundImage: (theme) => ({
      "gradient-rainbow":
      "liner-gradient(81.66deg ,#00B5EE 7.21% , #FF45A4 45.05% , #FFBA00 78.07% )",
      "gradient-rainblue":
      "liner-gradient(90deg ,#24CBFF 14.53% , #FC59FF 69.36% , #FFBD0C 117.73% )",

    }),
    fontFamily: {
      playfair: ["Playfair Display" , "serif"]
      opensans: ["Open Sans" , "sans-serif"]
    },
    content: {
      brush: "url('./assets/brush.png')",
      person1: "url('./assets/person-1.png')",
      person2: "url('./assets/person-2.png')",
      person3: "url('./assets/person-3.png')",
    },
    screens: {
      xs: "480px" ,
      sm: "768px" , 
      md: "1060px",
    }
  },
  plugins: [],
};
