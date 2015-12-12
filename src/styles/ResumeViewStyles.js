import {
  MasterTheme
}
from 'styles/MasterTheme';

const font = MasterTheme.muli;
const merriweather = MasterTheme.merriweather;
const resumePaperWidth = 612; // 8.5" @ 72dpi
const viewMultiplier = 1.5; // this adjusts resumePaper dimensions and container height

export const styles = {
  container: {
    backgroundColor: MasterTheme.lightGray,
    height: (resumePaperWidth * viewMultiplier * 1.45).toString() + 'px',
    width: '100%',
    fontFamily: font
  },
  headerContainer: {
    textAlign: 'center',
    width: '90%',
    marginBottom: '10px',
    fontFamily: font
  },
  themeSelectDropdown: {
    backgroundColor: MasterTheme.white,
    fontFamily: font,
    paddingTop: '0',
    display: 'block'
  },
  menuItemStyle: {
    color: MasterTheme.orange,
    fontWeight: MasterTheme.light
  },
  resumeTitle: {
    display: 'block',
    backgroundColor: MasterTheme.white
  },
  buttonLabelStyle: {
    textTransform: 'none'
  },
  leftNav: {
    paddingTop: '58px',
    width: '150px'
  },
  paperLeftNavButton: {
    marginTop: '30px'
  },
  paperLeftNavThemeButton: {

  },
  paperLeftNavLabel: {
    color: MasterTheme.orange,
    font: font,
    marginBottom: '10px'
  },
  exportButton: {
    margin: '5px',
    float: 'right',
    marginTop: '40px',
    marginBottom: '0',
    marginRight: '17px',
    padding: '0 0px'
  },
  textCenter: {
    margin: '20px',
    backgroundColor: MasterTheme.lightGray
  },
  marginTop: {
    height: '20px'
  },
  resumeContainer: {
    marginLeft: '20px',
    marginRight: '20px',
    fontFamily: merriweather
  },
  marginBottom: {
    height: '20px'
  },
  resumePaper: {
    height: (resumePaperWidth * (11 / 8.5) * viewMultiplier).toString() + 'px',
    width: (resumePaperWidth * viewMultiplier).toString() + 'px',
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative'
  },
  underlineStyle: {
    borderColor: MasterTheme.white,
    borderWidth: '0px'
  },
  underlineFocusStyle: {
    borderColor: MasterTheme.orange,
    borderWidth: '1px'
  },
  hintStyle: {
    color: MasterTheme.lightGray,
    paddingLeft: '20px',
    border: 'solid',
    borderColor: MasterTheme.orange,
    borderRadius: '6px',
    padding: '10px'
  },
  floatingLabelStyle: {
    color: MasterTheme.orange,
    fontFamily: font,
    fontWeight: MasterTheme.light
  },
  errorMessageStyle: {
    color: MasterTheme.orange,
    fontFamily: font,
    fontWeight: MasterTheme.bold,
    textAlign: 'center',
    marginTop: '10px'
  },
  bulletContainer: {      // This controls the visual paper effect of DnD bullets.
    position: 'relative'  // Leave this here; it's controls behavior, not visible print style.
  },
  editorField: {
    cursor: 'text',
    display: 'inline-block'
  },
  handle: {
    cursor: 'move',
    position: 'absolute',
    right: '10px',
    height: '20px',
    top: '-2px',
    opacity: 0.4
  },
  bulletMinusIconImage: {
    opacity: 0.4,
    width: '18px',
    position: 'absolute',
    right: '30px',
    display: 'inline-block'
  },
  bulletPlusIconImage: {
    opacity: 0.4,
    width: '18px',
    position: 'absolute',
    right: '50px',
    top: '20px',
    display: 'inline-block'
  },
  blockMinusIconImage: {
    opacity: 0.2,
    width: '30px',
    position: 'absolute',
    left: '-50px',
    top: '10px',
    display: 'inline-block'
  },
  thesaurusResults: {
    color: MasterTheme.black,
    paddingTop: '5px'
  },
  wordCount: {
    color: MasterTheme.lightGray
  },
  wordList: {
    color: MasterTheme.darkGray,
    textAlign: 'left'
  },
  wordType: {
    color: MasterTheme.orange,
    fontStyle: 'italic'
  }
};
