/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens:{
      "4xl" : {max:"1800px"} ,
      "3xl" : {max:"1600px"} ,
      "2xl" : {max:"1535px"},
      "xxl" : {max:"1465px"},
      "xl"  : {max:"1279px"},
      "lg"  : {max:"1030px"},
      "l"   : {max:"991px"} ,
      
      "md"  : {max:"807px"} ,
      "sm"  : {max:"639px"} ,
      "mobile":{max:"479px"},
      "xs"  : {max:"400px"} ,
      "xxs" : {max:"360px"},
      
     
       },
  },
  plugins: [],
}

