import { createGlobalStyle } from 'styled-components'

export const DarkMode = createGlobalStyle`
    body {
        background-color: rgb(20, 19, 19);
    }
    button {
        bakground-color: '#e3e3e3'
    }
    `
export const ButtonDark = createGlobalStyle`
    button {
        bakground-color: '#e3e3e3'
    }
`

export const LightMode = createGlobalStyle`
    body {
        background-color: rgb(233, 236, 236);
    }
    `
export const ButtonLight = createGlobalStyle`
    button {
        bakground-color: '#616161'
    }
`
