import {createMuiTheme} from "@material-ui/core/styles"
import {deepPurple, amber, } from "@material-ui/core/colors"

const font = "'Belleza', sans-serif";



const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#CDC2D6",
    },

    secondary: {
      main: amber[500],
      contrastText: deepPurple[900],
    },
  },
typography:{

  fontFamily: font

}
 


});


export default theme;