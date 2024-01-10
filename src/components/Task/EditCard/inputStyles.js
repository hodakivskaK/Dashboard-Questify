export const levelsStyles = {
    singleValue: styles => ({
      ...styles,
      color: "white",
      fontFamily: "HelveticaNeueCyr, sans-serif",
      fontSize: "14px",
      fontWeight: "400",
      padding: '5px 0',
      
  
    }),
    control: styles => ({
      ...styles,
      minHeight: '23px',
      outline: 'none',
      boxShadow: 'none',
      border: 'none',
      transition: "0.2s",
      backgroundColor: 'transparent',
      color: '#121417',
        width: '100px',
        height: '28px',
    
    
    }),
    indicatorSeparator: (styles) => ({
      ...styles,
      backgroundColor: "transparent"
    }),
    dropdownIndicator: (styles) => ({
      ...styles,
      padding: "0",
      paddingRight: "12px",
      transition: '500ms ease',
      color:  '#00D7FF' ,
      '&:hover': {
        color: '#0198b3',
      },
    }),
    menu: (styles) => ({
      ...styles,
      marginTop: '5px',
      width: '90px',
      borderRadius: '10px',
      
    }),
    option: (styles, { isFocused }) => ({
      ...styles,
      color: isFocused ? '#fff' : '#838383',
      fontWeight: '600',
      fontSize: '14px',
      backgroundColor: 'transparent',
    
      fontFamily: 'Manrope, sans-serif',
      cursor: 'pointer',
      lineHeight: '18px',
      transition: '0.5s ease',
      '&:hover': {
        color: '#fff',
      },
    }),
    menuList: styles => ({
      ...styles,
      height: '100%',
      width: '90px',
      marginBottom: '8px',
      backgroundColor: '#0e253b',
      padding: '14px',
      margin: '-1px',
      boxSizing: 'content-box',
      borderRadius: '10px',
    }),
  };
  


  export const categoriesStyles = {
    singleValue: styles => ({
      ...styles,
      color: "white",
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
      paddingLeft: '20px',

    }),
    control: styles => ({
      ...styles,
      minHeight: '23px',
      outline: 'none',
      boxShadow: 'none',
      border: 'none',
      transition: "0.2s",
      backgroundColor: '#0e253b',
      marginLeft: "-20px",
      color: '#121417',
      width: '150px',
      height: '25px',
      borderTopRightRadius: "18px",
      borderBottomRightRadius: "18px",
    
        '&:hover': {
          backgroundColor: '#0e253b',
        },
    
    }),
    indicatorSeparator: (styles) => ({
      ...styles,
      backgroundColor: "transparent"
    }),
    dropdownIndicator: (styles) => ({
      ...styles,
      padding: "0",
      paddingRight: "12px",
      transition: '500ms ease',
      color:  '#00D7FF' ,
      '&:hover': {
        color: '#0198b3',
      },
    }),
    menu: (styles, { isFocused }) => ({
      ...styles,
      zIndex: '1000',
      marginLeft: '-18px',
      marginTop: '-200px',
      width: '140px',
      borderRadius: '10px',
      
    }),
    option: (styles, { isFocused }) => ({
      ...styles,
      color: isFocused ? '#fff' : '#838383',
      fontWeight: '600',
      fontSize: '14px',
      backgroundColor: 'transparent',
    
      fontFamily: 'Manrope, sans-serif',
      cursor: 'pointer',
      lineHeight: '18px',
      transition: '0.5s ease',
      '&:hover': {
        color: '#fff',
      },
    }),
    menuList: styles => ({
      ...styles,
      height: '100%',
      width: '140px',
      marginBottom: '8px',
      backgroundColor: '#0e253b',
      padding: '14px',
      margin: '-1px',
      boxSizing: 'content-box',
      borderRadius: '10px',
    }),

  };
  