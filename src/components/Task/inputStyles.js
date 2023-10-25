const dot = (color = 'red') => ({
    alignItems: 'center',
    display: 'flex',
  
    ':before': {
      backgroundColor: 'red',
      borderRadius: 10,
      content: '" "',
      display: 'block',
      marginRight: 3,
      height: 7,
      width: 7,
    },
  });

export const levelsStyles = {

    singleValue: styles => ({
      ...styles,
      color: "#B9C3C8",
      fontFamily: "HelveticaNeueCyr, sans-serif",
      fontSize: "14px",
      fontWeight: "400",
  
    }),
      valueContainer: styles => ({
      ...styles,
      padding: 0,
      display:"flex",
      alignItems: "center",
      justifyContent: "space-between",
      paddingLeft: "18px",
    
    }),
    control: styles => ({
      ...styles,
      outline: 'none',
      boxShadow: 'none',
      border: 'none',
      borderRadius: '14px',
  
      transition: "0.2s",
      backgroundColor: '#fff',
      color: '#121417',
        width: '140px',
        height: '48px',
    
    }),
    dropdownIndicator: (styles, { isFocused }) => ({
      ...styles,
      transition: '500ms ease',
      color:  '#00D7FF' ,
      '&:hover': {
        color: '#0b44cd',
        transform: "rotate(180deg)",
      },
    }),
    option: (styles, { isFocused }) => ({
      ...styles,
      color: isFocused ? '#121417' : '#12141733',
      fontSize: '14px',
      backgroundColor: 'transparent',
      fontFamily: 'Manrope, sans-serif',
      fontWeight: '400',
      cursor: 'pointer',
      lineHeight: '18px',
      transition: '200ms ease',
      '&:hover': {
        backgroundColor: 'transparent',
        color: '#121417',
        transform: 'scale(1.05)',
      },
    }),
    menuList: styles => ({
      ...styles,
      height: '100%',
      marginBottom: '8px',
      backgroundColor: '#FFFFFF',
      borderRadius: '14px',
      padding: '14px',
      margin: '-1px',
      boxSizing: 'content-box',
      width: '90px',

    }),

    placeholder: (styles) => ({ ...styles, ...dot('#ccc') }),
  };
  