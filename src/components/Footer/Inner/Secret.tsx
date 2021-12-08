import React from 'react'
import styled from 'styled-components'

export default function Secret(): JSX.Element {
    return (
        <SSecret>
            <SecretInner>
                <SecretImage>
                    <svg width="48px" height="50px" viewBox="0 0 48 50" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <defs></defs>
                        <g id="inline-svg-15-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="inline-svg-15-2" transform="translate(-82.000000, -5996.000000)" fill="#ffffff">
                                <g id="inline-svg-15-3" transform="translate(-48.000000, 5989.000000)">
                                    <g id="inline-svg-15-4">
                                        <g id="inline-svg-15-5" transform="translate(130.000000, 7.000000)">
                                            <path d="M23.0757255,25.9598788 C32.9907119,25.9598788 44.4442307,23.7505274 45.469919,21.7621112 C46.4956072,19.7736949 32.7057985,17.1224732 32.7057985,17.1224732 C29.400803,18.6137854 23.0187428,18.6137854 23.0187428,18.6137854 C23.0187428,18.6137854 16.6366826,18.6137854 13.3316871,17.1224732 C13.3316871,17.1224732 -0.401138925,19.8289287 0.624549326,21.8173449 C1.70722026,23.7505274 12.8758257,25.9598788 23.0757255,25.9598788 L23.0757255,25.9598788 Z" id="inline-svg-15-6"></path>
                                            <path d="M31.6253877,13.3672513 C31.6253877,13.3672513 29.6879766,2.65189708 28.2634096,0.553013259 C26.8388426,-1.54587056 24.6735007,3.03853357 22.4511762,3.03853357 C20.2288516,3.03853357 19.7160075,0.111142981 17.7216137,0.000675411877 C15.6702372,-0.109792157 13.6758433,13.3672513 13.6758433,13.3672513 C13.6758433,13.3672513 24.1606566,15.6870703 31.6253877,13.3672513 L31.6253877,13.3672513 Z" id="inline-svg-15-6"></path>
                                            <path d="M13.1629992,27.0645545 C13.1629992,27.0645545 12.2512763,31.1518546 17.7216137,31.2623221 C17.7216137,31.2623221 19.8299729,31.2623221 20.9126438,29.4396072 C21.2545399,28.8872694 21.767384,28.5558667 22.4511762,28.5558667 L22.6791069,28.5558667 C23.3059164,28.5558667 23.8757432,28.8872694 24.2176393,29.4396072 C25.3003102,31.2623221 27.4086694,31.2623221 27.4086694,31.2623221 C32.8790067,31.1518546 31.9672838,27.0645545 31.9672838,27.0645545 C29.4600459,27.8930613 25.5282409,27.8378275 24.1606566,27.7825937 L24.1606566,27.7825937 L23.6478125,27.7825937 L23.6478125,27.7825937 L21.4824706,27.7825937 C21.5394533,27.7273599 16.240064,28.0035288 13.1629992,27.0645545 L13.1629992,27.0645545 Z" id="inline-svg-15-6"></path>
                                            <path d="M11.5105015,26.5674504 L7.29378312,25.9598788 L0,32.0355951 L0.683792167,32.0355951 C3.93180496,32.0355951 12.5361897,34.6868168 12.5361897,34.6868168 L7.97757529,38.4979479 C11.3965361,39.1607533 22.1662628,44.7393656 22.1662628,44.7393656 L23.191951,41.0939358 C14.5875662,34.9629857 11.5105015,26.5674504 11.5105015,26.5674504 L11.5105015,26.5674504 Z" id="inline-svg-15-6"></path>
                                            <path d="M48,31.9251275 L39.1676845,25.9598788 L34.438122,26.5674504 C34.7230354,28.0587626 33.7543298,30.7652181 33.7543298,30.7652181 C20.1354692,40.7625331 22.3577937,49.6551724 22.3577937,49.6551724 C27.7711484,39.2712209 39.6805286,37.8351425 39.6805286,37.8351425 L34.267174,35.3496222 C37.8001002,33.1955046 48,31.9251275 48,31.9251275 L48,31.9251275 Z" id="inline-svg-15-6"></path>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                </SecretImage>
                <SecretDescription>Стань тайным покупателем Додо Пиццы и получи пиццу в подарок</SecretDescription>
                <SecretButton>Заполнить анкету</SecretButton>
            </SecretInner>
        </SSecret>
    )
}

const SSecret = styled.div`
    background-color: rgb(255, 105, 0);
    width: 100%;
    height: 60px;
    margin: 0px;
    display: flex;
    justify-content: center;
`

const SecretInner = styled.div`
    -moz-box-align: center;
    align-items: center;
    display: flex;
    width: 1280px;
    margin: 0px auto;
    box-sizing: border-box;
`

const SecretImage = styled.i`
    display: inline-block;
    width: 48px;
    height: 50px;
    margin-right: 20px;
    text-align: center;
    font-size: 0px;
    line-height: 0;
    font-style: normal;
`

const SecretDescription = styled.div`
    display: block;
    -moz-box-flex: 1;
    flex-grow: 1;
    font-weight: 500;
    font-size: 18px;
    color: rgb(255, 255, 255);
`

const SecretButton = styled.a`
    background-color: rgb(255, 240, 230);
    color: rgb(209, 87, 0);
    height: 40px;
    padding: 8px 20px;
    font-size: 16px;
    line-height: 24px;
    outline: currentcolor none medium;
    border: medium none;
    border-radius: 9999px;
    text-align: center;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-weight: 500;
    text-decoration: none;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    user-select: none;
    transition-property: background-color, color;
    transition-duration: 200ms;
    transition-timing-function: ease-out;
    &:hover{
        background-color: rgb(250, 203, 171);
    }
`