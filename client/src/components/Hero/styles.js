import {makeStyles} from "@material-ui/core/styles"
import HeroIMG  from "../../assets/heroimg.jpg"



export default makeStyles({
  HeroImage: {
    position: "relative",
    backgroundImage: `url(${HeroIMG})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: 300,
    flexGrow: 1,
    display: "flex",
    flexWrap: "wrap",
    alignContent: "flex-start",
  },

  aboutSection: {
    position: "relative",
    backgroundColor: "#FEEEC2",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: 300,
    flexGrow: 1,
    display: "flex",
    flexWrap: "wrap",
    alignContent: "flex-start",
  },

  profileSection: {
    position: "relative",
    backgroundColor: "secondary",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: 300,
    flexGrow: 1,
    display: "flex",
    flexWrap: "wrap",
    alignContent: "flex-start",
  },
});