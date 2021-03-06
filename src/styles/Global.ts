import { createGlobalStyle, DefaultStyledComponent } from "styled-components";
import { CurrentModalType } from "../stores/UiStore";

interface GlobalProps extends DefaultStyledComponent {
    lockscroll?: CurrentModalType;
}

export const Global = createGlobalStyle<GlobalProps>`
@font-face {
    font-family: "Dodo";
    src: url("/assets/fonts/Dodo/dodo.woff2");
}
html,
body {
    height: 100%;
    width: 100%;
    color: ${(props) => props.theme.palette.text.primary};
    background-color: ${(props) => props.theme.palette.background.default};
    font-family: ${(props) => props.theme.fonts.main};
    scroll-behavior: smooth;
    background: ${(props) => props.theme.palette.background.default} none repeat scroll 0% 0%;
    overflow-y: ${(props) => props.lockscroll == 'cart' ? 'hidden' : 'unset'};
}

* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: Dodo;
    font-weight: inherit;
    font-size: inherit;
    color: inherit;
}
`