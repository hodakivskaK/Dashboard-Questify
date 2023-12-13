

export const levelsStyles = {

    singleValue: styles => ({
      ...styles,
      color: "black",
      fontFamily: "HelveticaNeueCyr, sans-serif",
      fontSize: "16px",
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
      border: '1px solid #00D7FF',
      borderRadius: '14px',
  
      transition: "0.2s",
      backgroundColor: '#fff',
      color: '#121417',
        width: '150px',
        height: '48px',
        '&:hover': {
          border: '1px solid #0198b3',
        },
    
    }),
    dropdownIndicator: (styles, { isFocused }) => ({
      ...styles,
      transition: '500ms ease',
      color:  '#00D7FF' ,
      '&:hover': {
        color: '#0198b3',
        transform: "rotate(180deg)",
      },
    }),
    option: (styles, { isFocused }) => ({
      ...styles,
      color: isFocused ? '#121417' : '#838383',
      fontWeight: isFocused ? '400' : '600',
      fontSize: '14px',
      backgroundColor: 'transparent',
      fontFamily: 'Manrope, sans-serif',
      fontWeight: '400',
      cursor: 'pointer',
      lineHeight: '18px',
      transition: '200ms ease',
      '&:hover': {
        backgroundColor: '#dddbdb',
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
    }),

 
  };
  


  export const categoriesStyles = {

    singleValue: styles => ({
      ...styles,
      color: "black",
      fontFamily: "HelveticaNeueCyr, sans-serif",
      fontSize: "16px",
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
      border: '1px solid #00a3c2',
      borderRadius: '14px',
  
      transition: "0.2s",
      backgroundColor: 'white',
      color: '#121417',
        width: '150px',
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
      color: isFocused ? '#121417' : '#838383',
      fontSize: '14px',
      backgroundColor: 'transparent',
      fontFamily: 'Manrope, sans-serif',
      fontWeight: '400',
      cursor: 'pointer',
      lineHeight: '18px',
      transition: '200ms ease',
      '&:hover': {
        backgroundColor: '#dddbdb',
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
    }),

  
  };
  