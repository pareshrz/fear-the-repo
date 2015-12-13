import { MasterTheme } from 'styles/MasterTheme';

const muli = MasterTheme.muli;
const merriweather = MasterTheme.merriweather;

export const styles = {
  mainBody: {
    textAlign: 'center',
    backgroundColor: MasterTheme.white,
    fontFamily: muli
  },
  heroImg: {
    width: '100%',
    position: 'relative',
    zIndex: '5'
    // height: '100%'
  },
  heroDiv: {
    width: '100%',
    height: '100%',
    position: 'relative'
  },
  heroText: {
    color: 'white',
    cursor: 'default',
    fontFamily: muli,
    fontSize: '36px',
    fontWeight: '200',
    textAlign: 'center',
    width: '800px',
    height: '150px',
    letterSpacing: '5px',
    position: 'absolute',
    marginLeft: 'calc(50% - 400px)',
    marginTop: '-50%',
    zIndex: '10'
  },
  callToAction: {
    width: '260px',
    height: '60px',
    cursor: 'pointer',
    borderRadius: '5px',
    position: 'absolute',
    marginLeft: 'calc(50% - 130px)',
    marginTop: '-32%',
    borderColor: MasterTheme.orange,
    borderStyle: 'solid',
    borderWidth: '2px',
    color: MasterTheme.orange,
    textAlign: 'center',
    fontSize: '22px',
    fontWeight: '400',
    fontFamily: muli,
    letterSpacing: '3px',
    padding: '10px',
    zIndex: '10',
    ':hover': {
      backgroundColor: MasterTheme.orange,
      color: MasterTheme.white
    }
  },
  trapezoid: {
    borderColor: MasterTheme.orange,
    borderWidth: '1px',
    borderStyle: 'solid',
    width: '60%',
    height: '600px',
    backgroundColor: MasterTheme.orange,
    marginTop: '3.5%',
    marginLeft: '-22%',
    position: 'absolute',
    transform: 'rotate(71deg)',
    zIndex: '4'
  },
  diagonalLine: {
    borderColor: MasterTheme.orange,
    borderWidth: '1px',
    borderStyle: 'solid',
    width: '100%',
    backgroundColor: MasterTheme.orange,
    marginTop: '-10%',
    marginLeft: '-35.5%',
    position: 'absolute',
    transform: 'rotate(71deg)',
    zIndex: '6'
  },
  getStartedButton: {
    width: '260px',
    height: '60px',
    cursor: 'pointer',
    borderRadius: '5px',
    position: 'absolute',
    marginLeft: 'calc(50% - 130px)',
    marginTop: '-15%',
    borderColor: MasterTheme.orange,
    borderStyle: 'solid',
    borderWidth: '2px',
    color: MasterTheme.orange,
    textAlign: 'center',
    fontSize: '22px',
    fontWeight: '300',
    fontFamily: muli,
    letterSpacing: '3px',
    padding: '10px',
    ':hover': {
      backgroundColor: MasterTheme.orange,
      color: MasterTheme.white
    }
  },
  circle: {
    width: '70px',
    height: '70px',
    borderRadius: '50%',
    position: 'absolute',
    marginLeft: 'calc(50% - 35px)',
    marginTop: '-25%',
    zIndex: '10',
    ':hover': {
      boxSizing: 'border-box',
      WebkitTapHighlightColor: 'rgba(0,0,0,0)',
      boxShadow: '0 1px 6px rgba(0, 0, 0, 0.36), 0 1px 4px rgba(0, 0, 0, 0.48)'
    }
  },
  downArrow: {
    marginTop: '26%',
    zIndex: '10'
  },
  copy: {
    fontFamily: muli,
    textAlign: 'center',
    fontSize: '20pt'
  },
  // grayDivTop: {
  //   backgroundColor: MasterTheme.lightGray,
  //   width: '100%',
  //   height: '120px'
  // },
  grayDivMiddle: {
    backgroundColor: MasterTheme.midGray,
    width: '100%',
    paddingTop: '2%',
    paddingBottom: '80px',
    fontSize: '14pt',
    textAlign: 'center',
    color: MasterTheme.white,
    position: 'relative',
    zIndex: '3'
  },
  grayDivBottom: {
    backgroundColor: MasterTheme.midGray,
    width: '100%',
    // height: '50%',
    paddingTop: '30px',
    paddingBottom: '10px',
    position: 'relative'
  },
  wysiwyg: {
    fontSize: '44px',
    letterSpacing: '3px',
    marginRight: '10%',
    fontWeight: '200',
    textAlign: 'center'
  },
  topCopy: {
    width: '65%',
    marginLeft: 'auto',
    position: 'relative',
    marginRight: 'auto',
    paddingTop: '30px',
    paddingBottom: '30px'
  },
  middleCopy: {
    width: '65%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: '30px',
    paddingBottom: '30px'
  },
  video: {
    borderRadius: '5px',
    borderColor: 'white',
    borderStyle: 'dashed',
    borderWidth: '2px',
    marginLeft: 'auto',
    marginRight: 'auto',
    // marginRight: '10%',
    marginBottom: '20px',
    width: '500px', // vimeo default embed dimensions
    height: '281px',
    marginTop: '20px'
  },
  bottomCopy: {
    marginBottom: '30px',
    color: MasterTheme.white,
    fontFamily: muli
  },
  buttonPaper: {
    width: '300px',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: '5px'
  },
  buttonColor: MasterTheme.orange,
  buttonHoverColor: MasterTheme.white,
  buttonLabelStyle: {
    textTransform: 'none'
  },
  button: {
    width: '100%',
    padding: '8px',
    font: muli,
    fontSize: '24pt',
    // fontStyle: 'italic',
    borderRadius: '5px'
  }
};
