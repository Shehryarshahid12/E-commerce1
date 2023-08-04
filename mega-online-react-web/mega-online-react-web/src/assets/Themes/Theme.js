import { ThemeProvider } from "styled-components";
import { ConfigProvider } from 'antd';


const lightTheme={
    // bgColors:{
    //     primaryColor:'#ED1B24',
    //     secondaryColor:'#ffffff',
    //     dullSecondaryColor:'#FBFBFB',
    //     deepSecondaryColor:'#E7E7E7',
    //     successColor:'#4CAF50',
    //     thirdColor:'#CA32F0',
    //     forthColor:'#1976D2',
    //     fifthColor:'#ed1b240d',
    //     darkColor: '#272727'
    // },

    colors:{
        primaryColor:'#ED1B24',
        secondaryColor:'#ffffff',
        dullSecondaryColor:'#FBFBFB',
        deepSecondaryColor:'#E7E7E7',
        successColor:'#4CAF50',
        thirdColor:'#CA32F0',
        forthColor:'#1976D2',
        fifthColor:'#ed1b240d',
        sixthColor: '#FDBB26',
        seventhColor: '#949494',
        darkColor: '#272727'
    },
    fonts:{
        fontFamily:'DM Sans'
    },
    fontSizes:{
        xsmall:'0.85rem',
        small:'1.0rem',
        medium:'1.5rem',
        large:'2rem',
        xlarge:'3.5rem'
    },
    fontWeights:{
        light:'400',
        normal:'600',
        bold:'700'
    },
    media:{
        mobile:'768px',
        tab:'900px',
        smallLaptop:'1200px'
    }
}
const SelectedTheme=({children})=>{
    return(
        <ThemeProvider theme={lightTheme}>
            <ConfigProvider theme={{ primaryColor: lightTheme.colors.primaryColor }}>
                {children}
            </ConfigProvider>
        </ThemeProvider>
    )
}
export default SelectedTheme;




