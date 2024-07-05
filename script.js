

const p4 = React.createElement("p",{class:""},"CSS is the language that we use to control our web content's style and layout, as well as adding behavior like animation. This topic provides comprehensive coverage of CSS.")
const anchorTag3 = React.createElement("a",{href:"#" , class:"text-blue-500 textDecoration: underline"},"CSS-Styling the web")
const p3 = React.createElement("p",{class:""},"HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail.")
const anchorTag2 = React.createElement("a",{href:"#" ,class:"text-blue-500 textDecoration: underline"},"HTML — Structuring the web")
const p2 = React.createElement("p",{class:""},"Provides a practical introduction to web development for complete beginners.")
const anchorTag1 = React.createElement("a",{href:"#" ,class:"text-blue-500 textDecoration: underline"},"Getting started with the web")
const p1 = React.createElement("p",{class:""},"The following is list of all the topics we cover in the MDN learning area")

const h1 = React.createElement("h1",{class: " text-center m-5 text-[23px] font-bold"},"Topic Covered")

const div = React.createElement("div",{class:""},[h1,p1,anchorTag1,p2,anchorTag2,p3,anchorTag3,p4])

ReactDOM.render(div,document.getElementById("root"))