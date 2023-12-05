javascript: (function() {
  const errorPrefixes = [
    'Uh oh, something goofed up... ',
    'Oops, we have a problem... ',
    'Warning, malfunction ahead... ',
    'Well, that didn\'t work out... ',
    'Looks like there\'s a hiccup... ',
    'Whoopsie, something went wrong... ',
    'Hmm, something unexpected happened... ',
    'Error time! But let\'s stay positive... ',
    'Oh no, an error occurred... ',
    'Warning, critical failure detected... ',
    'Error: Something\'s not right... ',
    'Oopsie, something went awry... ',
    'Error detected... Stay calm, we can fix this! ',
    'Error detected, initiating troubleshooting protocol... ',
    'Oops, sorry about that... ',
    'Warning, something fishy happened... ',
    'Error message incoming... but don\'t panic! ',
    'Mayday, mayday, we have an error... but it\'s not the end of the world... ',
    'Error detected, please stand by... ',
    'This isn\'t good... we have an error. But let\'s stay hopeful... ',
    'Error detected, please reboot and try again... ',
    'Critical error detected... but we\'ll figure it out... ',
    'Sorry about that, please try again... We\'ll make it up to you. ',
    'Error alert, please wait while we fix things... ',
    'Error detected, system is working on it... ',
    'Appears we have a bug... please be patient while we squash it... ',
    'Something went wrong, please try again later... ',
    'Error detected, please contact support... we\'re here to help. ',
    'We have a problem, please wait while we resolve it... ',
    'Oopsie, system overload... wait, no, just a silly message... ',
    'What in the world, an error occurred... but we\'ll find a solution. ',
    'Error message incoming... but don\'t worry, we can fix this. '
  ];

  const bookmarkletAlreadyOpened = window.bookmarkletAlreadyOpened;

  try {
    if (!bookmarkletAlreadyOpened) {
      console.log('Bookmarklet set to opened');
      window.bookmarkletAlreadyOpened = true;
  var styles = `
      .EgoMenuHoverArea {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 8vmax;
          height: 8vmax;
          background-color: transparent;
          z-index: 9999;
          transition: background-color 0.3s, width 0.3s, height 0.3s;
      }
      .EgoMenuContainer {
          position: fixed;
          bottom: -20vw;
          left: 10px;
          background-color: #333333b5;
          border: 1vmin solid #444;
          padding: 10px;
          text-align: center;
          z-index: 9999;
          transition: bottom 0.3s;
          color: #fff;
          width: 25vmax;
          height: 16vmax;
          border-radius: 5mm;
          box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
          backdrop-filter: blur(1.5vmin);
      }
      .EgoMenuContainer.active {
          bottom: 1vw;
          transform: rotate3d(1, 1, 1, 360deg);
      }
      .EgoMenuButton {
        background-color: #5b9258;
        box-shadow: inset 1mm -1mm 0 #00000096, -0.2mm 0.2mm 0 0.3mm #000000;
        border: none;
        color: white;
        padding: 1.5mm 1mm;
        cursor: pointer;
        border-radius: 1.1vmin;
        font-size: 2vmin;
        margin: 1.2mm;
        text-overflow: ellipsis;
        width: 15vmax;
        z-index: 10;
        position: relative;
        overflow: hidden;
        line-height: normal;
    }
    .EgoMenuButton:active {
      box-shadow: inset 1mm -1mm 0 #000000c7, -0.3mm 0.3mm 0 0 #000000, -1mm 2mm 1mm 0mm #000000b5 !important;
      transform: translate(-0.2mm, 0mm) !important;
      background-color: #417f3e;
  }
  .EgoMenuButton:hover {
    box-shadow: inset 1mm -1mm 0 #0000001f, -1mm 1mm 0 0.3mm #000000, -1mm 2mm 1mm 0mm #0000006b;
    transform: translate(1mm, -1mm);
    background-color: #75b472;
}
      .EgoMenuContainer.active + .EgoMenuHoverArea {
          width: 15vmax;
          height: 15vmax;
      }
      .EgoPopupContainer {
        position: fixed;
        bottom: -200px;
        left: 5mm;
        padding: 10px;
        width: 25vmax;
        z-index: 9998;
        transition: bottom 0.3s;
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-wrap: nowrap;
        align-content: center;
        justify-content: center;
        border-bottom: none;
    }
.EgoPopupContainer.active {
    bottom: 20vh;
}
      .EgoPopup {
        background-color: rgb(0 0 0 / 71%);
        backdrop-filter: blur(1.5vmin);
        color: #fff;
        border: 1px solid #444;
        padding: 10px;
        min-width: 110%;
        width: max-content;
        max-width: 115%;
        left: 2vmin;
        position: relative;
        border-radius: 3mm;
        box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px 20px, rgba(0, 0, 0, 0.3) 0px 30px 60px 20px, inset 1vmin -1vmin 0px 1vmin #00000061;
    }
      .EgoInput {
          width: 90%;
          padding: 2vmin;
          margin-bottom: 10px;
          background-color: grey;
          border: black 1mm solid;
          border-radius: 5mm;
      }
      .EgoSubmitButton {
          background-color: #3498db;
          color: #fff;
          border: none;
          padding: 5px 10px;
          cursor: pointer;
          border-radius: 5px;
      }
      .EgoCancelButton {
          background-color: #e74c3c;
          color: #fff;
          border: none;
          padding: 5px 10px;
          cursor: pointer;
          border-radius: 5px;
      }
      .EgoXButton {
        background-color: #000000b3;
        color: #fff;
        border: black 1mm solid;
        padding: 0.6mm 3mm;
        cursor: pointer;
        border-radius: 1mm;
        position: absolute;
        margin: 0;
        right: 0%;
        top: -4.1vmin;
        transform: skewX(-10deg);
    }
    button.EgoXButton.EgoMinimizeButton {
      right: 9%;
  }
  .EgoPopup.minimized {
    transform: translateX(-27rem);
}
    .EgoLogo {
      background-image: url("https://cdn.glitch.global/efbbe251-937e-4c16-898c-cdfb9e3d65f4/fullLogo?v=1697857559723");
      background-size: 4vmax;
      background-repeat: no-repeat;
      background-position: center;
      height: 3vmax;
      position: relative;
      background-position-x: center;
      margin: 0vmin !important;
      top: -1vmin;
      margin-bottom: -1vmin !important;
      right: 0;
      left: 0;
      width: 100%;
      transform: none !important;
      font-size: 0;
      font-weight: normal;
      line-height: normal;
  }
      .EgoSmallImage {
          position: fixed;
          bottom: 1vmin;
          left: 1vmin;
          background-image: url("https://cdn.glitch.global/efbbe251-937e-4c16-898c-cdfb9e3d65f4/smallE?v=1697857602944");
          background-size: 95%;
          background-repeat: no-repeat;
          background-position: left;
          width: 4vmax;
          height: 4vmax;
          display: none;
          z-index: 999;
      }
      .EgoSwitchContainer {
        display: flex;
        justify-content: center;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: stretch;
        align-items: center;
        gap: 1mm;
    }
      .EgoSwitch {
          display: inline-block;
          position: relative;
          width: 60px;
          height: 34px;
      }
      .EgoSwitch input {
          opacity: 0;
          width: 0;
          height: 0;
      }
      .EgoSwitch .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #ccc;
          -webkit-transition: .4s;
          transition: .4s;
          border-radius: 10mm;
      }
      .EgoSwitch .slider:before {
          position: absolute;
          content: "";
          height: 26px;
          width: 26px;
          left: 4px;
          bottom: 4px;
          background-color: white;
          -webkit-transition: .4s;
          transition: .4s;
          border-radius: 45mm;
      }
      .EgoSwitch input:checked + .slider {
          background-color: #2196F3;
      }
      .EgoSwitch input:focus + .slider {
          box-shadow: 0 0 1px #2196F3;
      }
      .EgoSwitch input:checked + .slider:before {
          -webkit-transform: translateX(26px);
          -ms-transform: translateX(26px);
          transform: translateX(26px);
      }
      @keyframes slideOut {
          from {
              transform: translateX(0);
          }
          to {
              transform: translateX(-100%);
          }
      }
      @keyframes slideIn {
        from {
            transform: translate3d(-100%, 0, 0);
        }
        to {
            transform: translate3d(0, 0, 0);
        }
    }
      .EgoCalculatorButtons {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-gap: 5px;
          margin-top: 10px;
      }
      .EgoCalculatorButtons button {
          padding: 1vmin;
          font-size: 3vmin;
          text-align: center;
      }
      .EgoCalculatorButtons button.operators {
          background-color: orange;
          border-radius: 25mm;
          border: .2vmin black solid;
      }
      .EgoCalculatorButtons button.numbers {
          background-color: black;
          color: white;
          border-radius: 25mm;
          border: .2vmin solid white;
      }
      .EgoMenuIcon {
        display: inline-block;
        text-align: left;
        transform: rotate(90deg) scalex(1.4);
        font-size: 2vmax;
        cursor: pointer;
        filter: drop-shadow(0px 0px 5px grey) drop-shadow(0px 0px 5px grey) drop-shadow(0px 0px 5px grey);
        left: 2vmax;
        top: 1vmin;
        position: absolute;
        z-index: 99999;
        letter-spacing: normal;
        font-weight: bolder;
        font-family: serif !important;
    }
    .EgoMenuIcon:hover {
      cursor: pointer;
      filter: drop-shadow(0px 0px 3px grey);
      transform: rotate(90deg) scalex(1);
      color: #c1c1c1;
  }
      .EgoMenuIcon:active {
        cursor: pointer;
        filter: drop-shadow(0px 0px 3px #a6ff9e) drop-shadow(0px 0px 3px #a6ff9e);
        transform: rotate(90deg) scalex(0.8);
        color: #5e5e5e;
    }
    .EgoMenuContent {
      position: fixed;
      top: 0;
      width: 10vmax;
      height: 100%;
      left: -0.3vmax;
      background-color: #212121cc;
      backdrop-filter: blur(3mm);
      z-index: 9998;
      transform-origin: left;
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      border-radius: 5mm;
      align-content: center;
      justify-content: center;
      align-items: flex-start;
      transform: scaleX(0);
      filter: drop-shadow(0vmax 0vmax 0vmax black);
  }
    .EgoMenuContent button {
      padding-top: 1vmin;
      padding-bottom: 1vmin;
      position: relative;
      background-color: #21212182;
      font-size: 1vmax;
      border-radius: .5mm;
      margin: 0;
      width: 10vmax;
  }
  .EgoMenuContent button:hover {
    position: relative;
    background-color: #585858e0;
    color: white;
    font-size: 1vmax;
    transform: scale(1.05) translate(1mm, -1mm);
}
.EgoMenuContent button:active {
  transform: scale(0.9) translate(-1mm, 1mm);
  background-color: #00000059;
}
.EgoMenuContent--open {
  transform: scaleX(1);
  filter: drop-shadow(4vmax 0vmax 5vmax black);
}
.EgoPage {
  display: none;
  height: 88%;
  overflow-x: hidden;
  overflow-y: auto;
}
        #EgoPage1 {
          display: block;
        }
        .EgoMenuHoverArea.glow-effect {
          z-index: 1;
      }
        .EgoMenuHoverArea.glow-effect::before {
          content: "";
          position: absolute;
          bottom: 0vmin;
          left: 0mm;
          width: calc(100% + 20px);
          height: calc(100% + 20px);
          border-radius: 5mm;
          background-color: #b0ffb06e;
          filter: drop-shadow(1px -1px 15px #b0ffb06e) drop-shadow(1px -1px 15px #b0ffb06e) drop-shadow(1px -1px 15px #b0ffb06e) drop-shadow(1px -1px 15px #b0ffb06e);
          opacity: 0;
          transition: all 0.8s ease-in-out;
      }


        .EgoMenuHoverArea.glow-effect.fade-in::before {
          opacity: 1;
        }
        .EgoMenuHoverArea.glow-effect.fade-out::before {
          opacity: 0;
        }
        
        .rps button {
          background-color: #00cc00;
          padding: 0;
          font-size: 6vmin;
          border: #81ff81 solid 1mm;
          border-radius: 100%;
          filter: drop-shadow(0px 0px 10px green) drop-shadow(0px 0px 10px green) drop-shadow(0px 0px 10px green);
      }
      .user-rps button {
        background-color: #00cc00;
        padding: 0;
        font-size: 6vmin;
        border: #81ff81 solid 1mm;
        border-radius: 100%;
        filter: drop-shadow(0px 0px 10px green) drop-shadow(0px 0px 10px green) drop-shadow(0px 0px 10px green);
    }
      .rps {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-content: center;
        justify-content: center;
        gap: 0;
        align-items: flex-start;
        width: 10vmin;
    }
      button.rps-win {
          background-color: green;
          color: white;
        }
        
        button.rps-loss {
          background-color: #ac0000;
          padding: 0;
          font-size: 6vmin;
          border: #ff6464 solid 1mm;
          border-radius: 100%;
          filter: drop-shadow(0px 0px 10px red) drop-shadow(0px 0px 10px red) drop-shadow(0px 0px 10px red);
      }
        
      button.rps-draw {
          background-color: #c17d00;
          padding: 0;
          font-size: 6vmin;
          border: #ffc04d solid 1mm;
          border-radius: 100%;
          filter: drop-shadow(0px 0px 10px orange) drop-shadow(0px 0px 10px orange) drop-shadow(0px 0px 10px orange);
      }
      
      * {
          transition: all 0.4s ease;
      }
      .rps-disabled {
        opacity: 0.5;
        cursor: default;
      }
      .rps-announcement {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        color: white;
        font-size: 2em;
        font-weight: bold;
        text-align: center;
        z-index: 10;
      }
      .rps-game-result {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        color: white;
        font-size: 3em;
        font-weight: bold;
        text-align: center;
        z-index: 10;
        visibility: hidden;
      }
      .rps.rps-robot {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-content: center;
        justify-content: center;
        align-items: flex-end;
    }
    .rps-robot {
      font-size: 4rem;
      opacity: 0;
      transform: scale(0);
      transition: opacity 0.3s ease, transform 0.3s ease;
    }
    
    .rps-robot-visible {
      opacity: 1;
      transform: scale(1);
    }
    .rpsHolder {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-content: center;
      justify-content: space-evenly;
      align-items: center;
  }
  .rps-btn.rps-selected {
    transform: scale(1.2);
  }
  
  .rps-robot .rps-btn {
    transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out;
    background-color: #919191;
    border: white solid 1mm;
    filter: drop-shadow(0px 0px 10px grey) drop-shadow(0px 0px 10px grey) drop-shadow(0px 0px 10px grey);
}
.robot-rps button {
  transform: scale(0);
  opacity: 0;
  transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out;
  background-color: #919191;
  border: white solid 1mm;
  filter: drop-shadow(0px 0px 10px grey) drop-shadow(0px 0px 10px grey) drop-shadow(0px 0px 10px grey);
}
  .rps-robot .rps-btn.rps-selected {
    transform: scale(1);
    opacity: 1;
  }
  .rps-chosen {
    transform: scale(1.1);
  }
  .rps-hidden {
    transform: scale(0);
}
.rps-result {
  font-size: 2rem;
  line-height: 1.5;
  text-align: center;
  margin-bottom: 1.5rem;
  opacity: 0;
  transform: scale(0);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.rps-result-visible {
  opacity: 1;
  transform: scale(1);
}
#ego-message-form {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
  position: absolute;
  bottom: -5mm;
  left: 50%;
  transform: translateX(-50%);
}
#ego-message-form input,
#ego-message-form button {
  margin: 5px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}
#ego-message-form input {
  width: 15vmax;
  background-color: black;
  color: white;
}
#ego-message-form button {
  background-color: #3f9034;
  color: white;
  border-radius: 60mm;
}
div#username {
  font-size: 2vmin;
  position: relative;
  background-color: black;
  padding: 1mm;
  border-radius: 5mm;
}
div#ego-stream-container {
  background-color: #4b4b4b;
  width: 95%;
  left: 50%;
  position: absolute;
  border-radius: 5mm;
  transform: translateX(-50%);
  padding: 1vmin;
  height: 12rem;
  z-index: 0;
  scroll-behavior: smooth;
  overflow-y: auto;
  overflow-x: hidden;
  margin: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 1vmax;
}
.EgoMenuContentDIV {
  width: 100%;
  height: 100%;
}
.ego-others-message {
  background-color: #282828;
  width: 10vmax;
  border-radius: 5vmax;
  padding: 1vmin;
  border-bottom-left-radius: 1vmax;
  text-align: left;
}
.ego-your-message {
  background-color: #005a00;
  border-radius: 5vmax;
  border-bottom-right-radius: 1vmax;
  padding: 1vmin;
  width: 10vmax;
  left: 54%;
  position: relative;
  text-align: right;
}
.ego-your-time {
  padding: 0 !important;
  margin: 0 !important;
  font-size: 3mm;
  right: 6mm;
  position: absolute;
  font-weight: 300;
  bottom: -3mm;
}
.ego-your-username {
  padding: 0 !important;
  margin: 0 !important;
  font-size: 3mm;
  left: 3vmin;
  position: absolute;
  font-weight: 1000;
  bottom: -3mm;
}
.ego-others-username {
  padding: 0;
  margin: 7mm;
  font-size: 3mm;
  left: 9vmin;
  position: absolute;
  font-weight: 1000;
}
.ego-others-time {
  padding: 0 !important;
  margin: 0 !important;
  font-size: 3mm;
  left: 4mm;
  position: absolute;
  font-weight: 300;
}
.EgoWindowPopoutTitle {
  position: absolute;
  background-color: black;
  padding: 1mm;
  top: -4vmin;
  transform: translateX(-50%) skewx(-10deg);
  left: 50%;
  width: 30vmin;
  font-size: 2vmin;
  border-radius: 1mm;
  text-align: center;
  font-weight: bolder;
  font-family: monospace;
}
div#egoCookieClickerContainer {
  width: 95%;
  left: 50%;
  transform: translateX(-50%);
  height: 15vmax;
  background-color: #6c6c6c;
  position: relative;
  border-radius: 1vmax;
  box-shadow: inset 5px -5px 0px 5px #00000040;
}
.egoButtonHolder {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: max-content;
  max-height: max-content;
  overflow-x: hidden;
  border-radius: 2vmin;
  align-content: stretch;
  padding-top: 1vmax;
  padding-bottom: 0vmax;
  flex-wrap: wrap;
  justify-content: space-evenly;
  justify-items: center;
  align-items: stretch;
}
.tooltip {
  padding: 1mm;
  visibility: hidden;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  border-radius: 5px;
  opacity: 0;
  transition: opacity 0.3s, visibility 0.3s, transform 0.3s;
  z-index: 999999;
  font-size: 1.1vmax;
  text-align: left;
  pointer-events: none;
  width: max-content;
  max-width: 20vmax;
  font-family: monospace !important;
}
.tooltip.show {
  visibility: visible;
  opacity: 1;
  transform: translate(-3.2vmax, 1vmin);
  filter: drop-shadow(-3px 3px 2px green) drop-shadow(1px 1px 0px white);
}
.matched {
  transform: translate(0vmin, -1vmin) scale(1.2);
}
.egoSearchInput {
  width: 65%;
  background-color: #5c5c5ca8;
  border: 1mm black solid;
  border-radius: 3vmin;
  padding: 2mm;
}

iframe#dressUpIframe {
  width: 100%;
  height: 25vmax;
  border-radius: 2vmax;
  border: none;
}
img.egoCoLogo {
  width: 12rem;
  bottom: 0vmax;
  position: relative;
  animation: egoSnakeSway cubic-bezier(0.88, -1.9, 0, 3.26) infinite 3s;
  animation-delay: 2s;
}
button.egoActiveMinimizedPrompt {
  left: 115%;
}
@keyframes egoSnakeSway {
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(10px); /* Adjust the distance of the sway */
  }
}
.egooHTMLHeader {
  font-family: monospace;
  font-size: 1.5vmax;
  font-weight: bolder;
  padding: 0;
  margin: 0;
}
.egoHTMLHeader2 {
  font-family: monospace;
  font-size: 1.2vmax;
  margin-top: 3vmin;
  font-weight: bold;
  margin-bottom: 1vmin;
}
.egoHTMLHeader3 {
  font-family: monospace;
  font-size: 2vmin;
  text-align: left;
  padding: 2vmin;
}
.matched {
  transform: translate(0vmin, -1vmin) scale(1.2);
  filter: hue-rotate(35deg) contrast(1.5) saturate(1.5);
}
button.EgoXButton.EgoPopupDragButton {
  right: -8%;
  transform: scaleY(11.5) scaleX(-1.5);
  top: 45%;
  border-left: .1px solid black;
  border-right: 0.1px solid black;
  border-top: 0.1px solid black;
  border-bottom: 0.1pt solid black;
  font-weight: bolder;
  padding-left: 3px;
  padding-right: 4px;
  padding-top: 1px;
  padding-bottom: 1px;
  border-radius: 0;
  text-align: center;
  letter-spacing: -2px;
}
.correct-ego-bookmarklet {
  background-color: #46ff46 !important;
}
.incorrect-ego-bookmarklet {
  background-color: #ff4a4a !important;
}
.blooketInstructionsEgo {
  font-size: 1rem;
  padding: 1rem;
}
  `;



  var styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
  var hoverArea = document.createElement("div");
  hoverArea.className = "EgoMenuHoverArea";
  var menuContainer = document.createElement("div");
  menuContainer.className = "EgoMenuContainer";
  var menuContent = document.createElement("div");
  menuContent.className = "EgoMenuContentDIV";
  menuContent.innerHTML = `
      <div class="EgoMenu">
      <div class="EgoWindowPopoutTitle">Ego Menu</div>
      <div class="tooltip"></div>


      <div class="EgoMenuIcon" data-text="Open/close page menu" >&#124;&#124;&#124;</div>
      <div class="EgoMenuContent">
      
          <button class="EgoMenuButton" data-text="Useful tools, main page" id="EgoButton1">Home</button>
          <button class="EgoMenuButton" data-text="Cheat and hacks for school" id="EgoButton2">Hacks/Cheats</button>
          <button class="EgoMenuButton" data-text="Unblocked sites or unblockers" id="EgoButton3">Unblocked</button>
          <button class="EgoMenuButton" data-text="Unblocked games/custom games" id="EgoButton4">Games</button>
          <button class="EgoMenuButton" data-text="Downloadable HTML's" id="EgoButton6">HTML's</button>

          <button class="EgoMenuButton" data-text="Information about Ego Menu" id="EgoButton5">Info</button>
          
      </div>
      </div>
      <h2 class="EgoLogo"></h2>
      <div class="EgoPage" id="EgoPage1">
        <input class="egoSearchInput" type="text" id="searchInput" placeholder="Search...">
      
        <div class="egoButtonHolder">
          <button class="EgoMenuButton" id="egoToggleChatroom">Ego chatroom</button>
          <button class="EgoMenuButton" id="floodingOption">Flood History</button>
          <button class="EgoMenuButton" id="calculatorOption">Calculator</button>
          <button class="EgoMenuButton" id="AutoClickerOption">Autoclicker</button>
          <button onclick="var faviconurl = prompt("Favicon URL"); var title = prompt("Page Title");  var l = document.querySelector("link[rel*='icon']") || document.createElement('link');    l.type = 'image/x-icon';    l.rel = 'shortcut icon';    l.href = faviconurl;    document.getElementsByTagName('head')[0].appendChild(l);    document.title = title;" class="EgoMenuButton" id="TabCloackOption">Tab Cloaker</button>
        </div>
        
        <div class="EgoSwitchContainer">
        <label class="EgoSwitch">
          <input type="checkbox" id="editPageSwitch">
          <span class="slider round"></span>
        </label>
        Edit Page
        <label class="EgoSwitch">
          <input type="checkbox" id="toggleCheckbox">
          <span class="slider round"></span>
        </label>
        Show logo
        <label class="EgoSwitch">
          <input type="checkbox" id="panicKeySwitch">
          <span class="slider round"></span>
        </label>
        Panic Key
      </div>
          </div>
          <div class="EgoPage" id="EgoPage2">
      <input class="egoSearchInput" type="text" id="searchInput" placeholder="Search...">

      <div class="egoButtonHolder">

      <button class="EgoMenuButton" id="fetchButton">EdPuzzle Hacks</button>
      <button class="EgoMenuButton" id="blooketHacksButton">Blooket Hacks</button>
      <button class="EgoMenuButton" id="egoKahootHacks">Kahoot Hacks</button>

      </div>
      </div>
      <div class="EgoPage" id="EgoPage3">
      <input class="egoSearchInput" type="text" id="searchInput" placeholder="Search...">

      <div class="egoButtonHolder">

      <button class="EgoMenuButton" id="unblockedMovieShows" data-text="movie-web.app by mobie-web">Movies and Shows</button>

      <button class="EgoMenuButton" id="unblockedYouTube" data-text="Unblocked YouTube">Unblocked YouTube</button>
      <button class="EgoMenuButton" id="unblockerNebula" data-text="nebulaproxy.io">nebulaproxy.io</button>
      <button class="EgoMenuButton" id="unblockerHolyUnblocker" data-text="holyubofficial.net">holyubofficial.net</button>
      <button class="EgoMenuButton" id="unblockerKazwire" data-text="kazwire.com">kazwire.com</button>
      <button class="EgoMenuButton" id="unblockerTotallyScience" data-text="totallyscience.co/apps.php">totallyscience.co/apps.php</button>
      <button class="EgoMenuButton" id="unblockerMetallic" data-text="metallic.xyz.wf">metallic.xyz.wf</button>
      <button class="EgoMenuButton" id="unblockerMetallic2" data-text="metalli.zc.al">metalli.zc.al</button>
      <button class="EgoMenuButton" id="unblockerGalaxy" data-text="galaxy.lag.tf">galaxy.lag.tf</button>
      <button class="EgoMenuButton" id="unblockerHammerhead" data-text="typeracer.gq by @binary-person">Hammer</button>
      <button class="EgoMenuButton" id="unblockerHammerhead2" data-text="quizlet.gq by @binary-person">Rammerhead</button>
      <button class="EgoMenuButton" id="unblockerHammerhead3" data-text="flipgrid.cf by @binary-person">Rammerhead</button>
      <button class="EgoMenuButton" id="unblockerHammerhead4" data-text="r.pluralsight.gq by @binary-person">Rammerhead</button>
      <button class="EgoMenuButton" id="unblockerHammerhead5" data-text="coursera.cf by @binary-person">Rammerhead</button>
      <button class="EgoMenuButton" id="unblockerDogeSurf" data-text="Dogesurf.app by @DodgeNetwork">Doge Surf</button>
      <button class="EgoMenuButton" id="unblockerMocha" data-text="mocha.proudparrot2.tech by @Cafe-Labs">Mocha</button>
      <button class="EgoMenuButton" id="unblockerHydrogen" data-text="The Hydrogen Proxy!">Hydrogen</button>
      <button class="EgoMenuButton" id="unblockerShadowTabbed" data-text="phantom.lol by Shadow Network">Shadow Tabbed</button>

      
      <button class="EgoMenuButton" id="regularYoutube" data-text="Sometimes all you need in a diff URL">Regular Youtube</button>
      <button class="EgoMenuButton" id="regularDiscord" data-text="Sometimes all you need in a diff URL">Regular Discord</button>

      
      
      
      </div>
      </div>
      <div class="EgoPage" id="EgoPage4">
      <input class="egoSearchInput" type="text" id="searchInput" placeholder="Search...">

      <div class="egoButtonHolder">
      <button class="EgoMenuButton" id="UnblockedGamesWorld">Unblocked Games World</button>
      <button class="EgoMenuButton" id="slopeCityPortal">Slope City</button>
      <button class="EgoMenuButton" data-text="Selenite.cc by @skysthelimitt / skysthelimit.dev"id="egoSelenite">Selenite</button>

      <button class="EgoMenuButton" id="BreakoutGame">Breakout</button>
      <button class="EgoMenuButton" id="AsteroidGame">Asteroid</button>
      <button class="EgoMenuButton" id="DinoGameCloaked">Dino Game (cloaked)</button>
      
      <button class="EgoMenuButton" id="CookieClickeGamer">Clicker Game</button>
      <button class="EgoMenuButton" id="EgoGuessTheNumberGame">Guess The Number!</button>

      <button class="EgoMenuButton" id="RockPaperScissors">Rock/Paper/Scissors</button>
      <button class="EgoMenuButton" id="TotallyScienceGame">totallyscience.co</button>
      <button class="EgoMenuButton" id="egoSlopeGame">Slope</button>
      <button class="EgoMenuButton" id="egoDressUpGame">Dress Up Game</button>
      <button class="EgoMenuButton" id="egoAmongUsOffline">Among Us (offline)</button>
      <button class="EgoMenuButton" id="egoConnectFour">Connect Four</button>
      <button class="EgoMenuButton" id="egoMobileGames">Mobile Games (yad)</button>
      <button class="EgoMenuButton" id="egoUnblockedGames66">Unblocked Games 66</button>

      <button class="EgoMenuButton" id="egoMidTierGames">Yiv Games</button>
      <button class="EgoMenuButton" id="egoRun3">Run 3</button>
      <button class="EgoMenuButton" id="egoPacMan">Pac Man</button>
      <button class="EgoMenuButton" id="egoCheckers">Checkers</button>
      <button class="EgoMenuButton" id="egoChess">Chess</button>
      <button class="EgoMenuButton" id="egoFNAFWeb">FNAF Web</button>
      <button class="EgoMenuButton" id="egoFNAF1PORT">FNAF Port</button>
      <button class="EgoMenuButton" id="egoFNAF2">FNAF 2</button>
      <button class="EgoMenuButton" id="egoFNAF3">FNAF 3</button>
      <button class="EgoMenuButton" id="egoFNAF4">FNAF 4</button>
      <button class="EgoMenuButton" id="egoFNAFSL">FNAF Sister Location</button>

      <button class="EgoMenuButton" id="egoFNAFUCN">FNAF UCN</button>
      <button class="EgoMenuButton" id="egoTicTacToe">Tic Tac Toe</button>

      <button class="EgoMenuButton" id="egoOfficialCookieClicker">Cookie Clicker</button>
      <button class="EgoMenuButton" id="egoMobileEmulator">Mobile Emulator</button>


      

      </div>
      </div>
      <div class="EgoPage" id="EgoPage5">
      <div>Made by ego. <a href="https://yeahbread.github.io/#ego-menu" target="_blank">Project page</a>.</div>
      <img class="egoCoLogo" src="https://github.com/yeahbread/Ego-Menu-Bookmarklets/blob/main/ego(itterationOne).png?raw=true" alt="ego logo">

      </div>
      <div class="EgoPage" id="EgoPage6">

      <div class="egooHTMLHeader">Downloadable HTML's</div>
      <div class="egoHTMLHeader2">How do they work?</div>
      <div class="egoHTMLHeader3">
      Download HTML files from the URLs below. Run the downloaded HTML files to open local webpages. No internet connection is required.!
  </div>

    
      <button class="EgoMenuButton" data-text="⭐️ 7.3/10 (IMDb)" id="egoFNAF1HTML">FNAF 1</button>
      <button class="EgoMenuButton" data-text="⭐️ 7.2/10 (IMDb)" id="egoFNAF2HTML">FNAF 2</button>
      <button class="EgoMenuButton" data-text="⭐️ 6.4/10 (IMDb)" id="egoFNAF3HTML">FNAF 3</button>
      <button class="EgoMenuButton" data-text="⭐️ 7.1/10 (IMDb)" id="egoFNAF4HTML">FNAF 4</button>
      <button class="EgoMenuButton" data-text="⭐️ 7.3/10 (IMDb)" id="egoFNAFSLHTML">FNAF Sister Location</button>
      <button class="EgoMenuButton" data-text="Fruit game :3" id="egoSuikaHTML">Suika Game 🍉</button>

      <button class="EgoMenuButton" data-text="(RECOMMENDED) Checkout Eaglercraft.com!" id="egoEaglerCraftOffline">Minecraft</button>
      <button class="EgoMenuButton" data-text="Checkout Eaglercraft.com!" id="egoEaglerCraftUltimateOffline">Minecraft Online</button>

       </div>
    

  `;
  menuContainer.appendChild(menuContent);
  document.body.appendChild(hoverArea);
  document.body.appendChild(menuContainer);
  var smallImage = document.createElement("div");
  smallImage.className = "EgoSmallImage";
  document.body.appendChild(smallImage);
  var showSmallImage = false;
  smallImage.addEventListener("click", function() {
      showSmallImage = !showSmallImage;
      smallImage.style.display = showSmallImage ? "block" : "none";
  });
  var toggleCheckbox = document.getElementById("toggleCheckbox");
  toggleCheckbox.addEventListener("change", function() {
      showSmallImage = toggleCheckbox.checked;
      smallImage.style.display = showSmallImage ? "block" : "none";
  });




  var popupContainer = document.createElement("div");
  popupContainer.className = "EgoPopupContainer";
  document.body.appendChild(popupContainer);
  var currentPopup = null;
  var currentPopupContent = null;
  var menuCloseTimer;
  var minimizeButton;
  var dragButton;
  
  var offset = { x: 0, y: 0 };
  var draggableOffsetX = 0; 
  var draggableOffsetY = window.innerHeight * -0.25; 
  
  var originalAnimation = window.getComputedStyle(popupContainer).animation; 
  
  var closePopup = function () {
      if (currentPopup) {
          currentPopup.style.animation = "slideOut 0.3s";
          currentPopup.style.left = -currentPopup.offsetWidth + "px";
          currentPopup.addEventListener("animationend", function () {
              popupContainer.removeChild(currentPopup);
              currentPopup = null;
              currentPopupContent = null;
              popupContainer.classList.remove("active");
          });
      }
  };
  
  var togglePopup = function (content) {
      if (currentPopupContent === content) {
          closePopup();
      } else if (currentPopup) {
          closePopup();
          setTimeout(function () {
              createPopup(content);
          }, 0); 
      } else {
          createPopup(content);
      }
  };
  
  var createPopup = function (content) {
      var popup = document.createElement("div");
      popup.className = "EgoPopup";
      popup.innerHTML = content;
  
      dragButton = document.createElement("button");
      dragButton.className = "EgoXButton EgoPopupDragButton";
      dragButton.innerText = " | | | ";
      dragButton.addEventListener("mousedown", startDragging);
      popup.appendChild(dragButton);
  
      minimizeButton = document.createElement("button");
      minimizeButton.className = "EgoXButton EgoMinimizeButton";
      minimizeButton.innerText = "-";
      minimizeButton.addEventListener("click", function () {
          resetPopupPosition();
          toggleMinimize();
      });
      popup.appendChild(minimizeButton);
  
      var popupCloseButton = document.createElement("button");
      popupCloseButton.className = "EgoXButton";
      popupCloseButton.innerText = "X";
      popupCloseButton.addEventListener("click", function () {
          resetPopupPosition();
          closePopup();
      });
      popup.appendChild(popupCloseButton);
      popupContainer.appendChild(popup);
      currentPopup = popup;
      currentPopupContent = content;
      setTimeout(function () {
          popupContainer.classList.add("active");
      }, 0);
  };
  
  var toggleMinimize = function () {
      if (currentPopup) {
          var isMinimized = currentPopup.classList.contains("minimized");
  
          if (isMinimized) {
              currentPopup.classList.remove("minimized");
              minimizeButton.innerText = "-";
              minimizeButton.classList.remove("egoActiveMinimizedPrompt");
              dragButton.style.display = "inline-block";
          } else {
              currentPopup.classList.add("minimized");
              minimizeButton.innerText = "+";
              minimizeButton.classList.add("egoActiveMinimizedPrompt");
              dragButton.style.display = "none";
          }
      }
  };
  
  var isDragging = false;
  
  var startDragging = function (e) {
      if (!currentPopup.classList.contains("minimized")) {
          isDragging = true;
          offset.x = e.clientX - currentPopup.getBoundingClientRect().left - draggableOffsetX;
          offset.y = e.clientY - currentPopup.getBoundingClientRect().top - draggableOffsetY;
  
          document.addEventListener("mousemove", handleDragging);
          document.addEventListener("mouseup", stopDragging);
  
          popupContainer.style.transition = "all 0s ease-in-out";
      }
  };
  
  var handleDragging = function (e) {
      if (isDragging) {
          var newX = e.clientX - offset.x;
          var newY = e.clientY - offset.y;
  
          newX = Math.max(newX, 0);
          newY = Math.max(newY, 0);
          newX = Math.min(newX, window.innerWidth - currentPopup.offsetWidth);
          newY = Math.min(newY, window.innerHeight - currentPopup.offsetHeight);
  
          currentPopup.style.left = newX + "px";
          currentPopup.style.top = newY + "px";
          currentPopup.style.transition = "all 0s ease-in-out";

      }
  };
  
  var stopDragging = function () {
      isDragging = false;
      document.removeEventListener("mousemove", handleDragging);
      document.removeEventListener("mouseup", stopDragging);
  
      popupContainer.style.transition = "all 0.4s ease";
    };
  
  hoverArea.addEventListener("mouseenter", function () {
      clearTimeout(menuCloseTimer);
      menuContainer.classList.add("active");
  });
  
  hoverArea.addEventListener("mouseleave", function () {
      if (!menuContainer.contains(event.relatedTarget)) {
          menuCloseTimer = setTimeout(function () {
              menuContainer.classList.remove("active");
              if (!currentPopup || !popupContainer.contains(currentPopup)) {
                  closePopup();
              }
          }, 1000);
      }
  });
  
  menuContainer.addEventListener("mouseenter", function () {
      clearTimeout(menuCloseTimer);
  });
  
  menuContainer.addEventListener("mouseleave", function () {
      menuCloseTimer = setTimeout(function () {
          menuContainer.classList.remove("active");
          if (!currentPopup || !popupContainer.contains(currentPopup)) {
              closePopup();
          }
      }, 1000);
  });
  
  var resetPopupPosition = function () {
      if (currentPopup) {
          currentPopup.style.left = "0";
          currentPopup.style.top = "0";
          currentPopup.style.transition = "all 0.4s ease";

      }
  };
  
  
  

  




  

  
  document.getElementById("floodingOption").addEventListener("click", function() {
      var content = `
      <div class="EgoWindowPopoutTitle">Flood History</div>
          <div>Flood History</div>
          <label for="numOfTimes">How many times do you want this page to show up in your history?</label>
          <label for="numOfTimes">(higher numbers might take longer)</label>
          <input type="number" id="numOfTimes" class="EgoInput">
          <br>
          <button id="submitFlood" class="EgoSubmitButton">Submit</button>
      `;
      togglePopup(content);
      var submitButton = document.getElementById("submitFlood");
      var inputField = document.getElementById("numOfTimes");
      var cancelButton = document.getElementById("cancelFlood");
      submitButton.addEventListener("click", function() {
          var num = inputField.value;
          if (!isNaN(num) && num > 0) {
              var x = window.location.href;
              var done = false;
              for (var i = 1; i <= num; i++) {
                  history.pushState(0, 0, i === num ? x : i.toString());
                  if (i === num) {
                      done = true;
                  }
              }
              if (done) {
                  var successPopup = document.createElement("div");
                  successPopup.className = "EgoPopup";
                  successPopup.innerHTML = `
                      History Flooding Successful! <br> ${window.location.href} <br> Now Appears In Your History ${num}${num === 1 ? " time." : " Times."} <br> Made By: Utopia
                  `;
                  popupContainer.appendChild(successPopup);
              }
              closePopup();
          }
      });
  });
  document.getElementById("calculatorOption").addEventListener("click", function() {
      var content = `
          <div>Calculator</div>
          <div class="EgoWindowPopoutTitle">Calculator</div>

          <input type="text" id="calcInput" class="EgoInput">
          <div class="EgoCalculatorButtons">
              <button class="numbers" id="btn7">7</button>
              <button class="numbers" id="btn8">8</button>
              <button class="numbers" id="btn9">9</button>
              <button class="operators" id="btnAdd">+</button>
              <button class="numbers" id="btn4">4</button>
              <button class="numbers" id="btn5">5</button>
              <button class="numbers" id="btn6">6</button>
              <button class="operators" id="btnSubtract">-</button>
              <button class="numbers" id="btn1">1</button>
              <button class="numbers" id="btn2">2</button>
              <button class="numbers" id="btn3">3</button>
              <button class="operators" id="btnMultiply">*</button>
              <button class="numbers" id="btn0">0</button>
              <button class="EgoCancelButton" id="btnClear">C</button>
              <button class="operators" id="btnEquals">=</button>
              <button class="operators" id="btnDivide">/</button>
          </div>
      `;
      togglePopup(content);
      var calcInput = document.getElementById("calcInput");
      var calculatorButtons = document.querySelectorAll(".EgoCalculatorButtons button");
      calculatorButtons.forEach(function(button) {
          button.addEventListener("click", function() {
              var inputValue = calcInput.value;
              if (button.id === "btnClear") {
                  calcInput.value = "";
              } else if (button.id === "btnEquals") {
                  try {
                      var result = eval(inputValue);
                      calcInput.value = result;
                  } catch (error) {
                      calcInput.value = "Error";
                  }
              } else {
                  calcInput.value = inputValue + button.textContent;
              }
          });
      });
  });
  var editPageSwitch = document.getElementById("editPageSwitch");
  editPageSwitch.addEventListener("change", function() {
      if (editPageSwitch.checked) {
          document.body.contentEditable = 'true';
          document.designMode = 'on';
          console.log("ON")
      } else {
          document.body.contentEditable = 'false';
          document.designMode = 'off';
          console.log("OFF")
      }
  });
  var fetchButton = document.getElementById("fetchButton");
  fetchButton.addEventListener("click", function() {
      fetch("https://cdn.jsdelivr.net/gh/ading2210/edpuzzle-answers@latest/script.js")
          .then(r => r.text())
          .then(r => eval(r));
  });
 




  
  function openBlankPage(url) {
    try {
      var win = window.open();
      if (win === null) {
        throw new Error("Unable to open a new window");
      }
      win.document.body.style.margin = "0";
      win.document.body.style.height = "100vh";
      var iframe = win.document.createElement("iframe");
      iframe.style.border = "none";
      iframe.style.width = "100%";
      iframe.style.height = "100%";
      iframe.style.margin = "0";
      iframe.referrerpolicy = "no-referrer";
      iframe.allow = "fullscreen";
      iframe.src = url;
      win.document.body.appendChild(iframe);
    } catch (error) {
      console.log("Error opening blank page:", error);
      window.open(url, '_blank');
    }
  }
  
  

  
  var sites = [
    { id: "#unblockerNebula", url: "https://nebulaproxy.io/" },
    { id: "#unblockedYouTube", url: "https://piped.kavin.rocks/" },
    { id: "#unblockerHolyUnblocker", url: "https://holyubofficial.net/" },
    { id: "#unblockerTotallyScience", url: "https://totallyscience.co/apps.php" },
    { id: "#TotallyScienceGame", url: "https://totallyscience.co/" },
    { id: "#unblockerMetallic", url: "https://metallic.xyz.wf" },
    { id: "#unblockerMetallic2", url: "https://metalli.zc.al" },
    { id: "#unblockerHammerhead", url: "https://www.typeracer.gq/" },
    { id: "#unblockerHammerhead2", url: "https://www.quizlet.gq/" },
    { id: "#unblockerHammerhead3", url: "https://flipgrid.cf/" },
    { id: "#unblockerHammerhead4", url: "https://r.pluralsight.gq" },
    { id: "#unblockerHammerhead5", url: "https://www.coursera.cf/" },
    { id: "#unblockerHammerhead6", url: "https://search.mugmovies.pics/" },
    { id: "#unblockerDogeSurf", url: "https://dogesurf.app/" },
    { id: "#unblockerMocha", url: "https://mocha.proudparrot2.tech/" },
    { id: "#regularYoutube", url: "https://youtube.com/" },
    { id: "#regularDiscord", url: "https://discord.com/" },
    { id: "#unblockerHydrogen", url: "https://brrrrrr.pages.dev/" },

   


    { id: "#unblockerGalaxy", url: "https://galaxy.lag.tf" }
  ];
  
  sites.forEach(function (site) {
    var elements = document.querySelectorAll(site.id);
    elements.forEach(function (element) {
      element.addEventListener("click", function () {
        openBlankPage(site.url);
      });
    });
  });
  
  document.getElementById("unblockedMovieShows").addEventListener("click", function(e) {
    openBlankPage("https://movie-web.app/", "_blank");
  });

  document.getElementById("egoKahootHacks").addEventListener("click", function(e) {
    openBlankPage("https://mem.rip/kahoot/", "_blank");
    });
  document.getElementById("unblockerKazwire").addEventListener("click", function(e) {
    openBlankPage("https://kazwire.com/", "_blank");
  });
  document.getElementById("unblockerHydrogen").addEventListener("click", function (e) {
    openBlankPage("https://brrrrrr.pages.dev/");
  });
  

  document.getElementById("unblockerShadowTabbed").addEventListener("click", function(e) {
    openBlankPage("https://phantom.lol/", "_blank");
  });

  var searchInputs = document.querySelectorAll('.egoSearchInput');
  var egoPages = document.getElementsByClassName('EgoPage');
  
  searchInputs.forEach(function(searchInput) {
    searchInput.addEventListener('input', function() {
      var searchValue = this.value.toLowerCase();
      var egoPage = this.closest('.EgoPage');
      var egoMenuButtons = egoPage.querySelectorAll('.egoButtonHolder .EgoMenuButton');
      var matchedButtons = [];
      var unmatchedButtons = [];
  
      for (var i = 0; i < egoMenuButtons.length; i++) {
        var menuButton = egoMenuButtons[i];
        var buttonText = menuButton.textContent.toLowerCase();
        var defaultOrder = menuButton.getAttribute('data-default-order');
  
        if (searchValue === '') {
          menuButton.classList.remove('matched');
          menuButton.style.order = defaultOrder;
        } else if (buttonText.includes(searchValue)) {
          matchedButtons.push(menuButton);
          menuButton.classList.add('matched');
        } else {
          unmatchedButtons.push(menuButton);
          menuButton.classList.remove('matched');
          menuButton.style.order = defaultOrder;
        }
      }
  
      if (searchValue !== '') {
        Array.from(matchedButtons).sort(function(a, b) {
          var aText = a.textContent.toLowerCase();
          var bText = b.textContent.toLowerCase();
  
          var aMatchCount = (aText.match(new RegExp(searchValue, 'gi')) || []).length;
          var bMatchCount = (bText.match(new RegExp(searchValue, 'gi')) || []).length;
  
          return bMatchCount - aMatchCount;
        }).forEach(function(button) {
          button.style.order = -1;
        });
      }
    });
  });
  
  searchInputs.forEach(function(searchInput) {
    searchInput.addEventListener('input', function() {
      var searchValue = this.value.toLowerCase();
      var egoPage = this.closest('.EgoPage');
      var egoMenuButtons = egoPage.querySelectorAll('.egoButtonHolder .EgoMenuButton');
  
      if (searchValue === '') {
        for (var i = 0; i < egoMenuButtons.length; i++) {
          var menuButton = egoMenuButtons[i];
          var defaultOrder = menuButton.getAttribute('data-default-order');
          menuButton.style.order = defaultOrder;
        }
      }
    });
  });

  






  function downloadBlooketGUI() {
    window.open("https://cdn.jsdelivr.net/gh/05Konz/Blooket-Cheats/cheats/Bookmarklets.html", "_blank");
  }


    
    const blooketHacksButton = document.getElementById("blooketHacksButton");
    
    blooketHacksButton.addEventListener("click", () => {
      const popupContent = `
        <div class="EgoWindowPopoutTitle"><a href="https://play.blooket.com/play" target="_blank" style="
        color: white;
        text-underline-offset: 1mm;
        font-weight: bolder;
    ">Blooket</a> Hacks</div>
<div class="blooketInstructionsEgo">
<div style="padding: .2rem;margin: 0;text-align: center;font-weight: bolder;color: #ffffff6b;margin-bottom: -2rem;">⚠️Fair Warning⚠️: exploits like auto-answer may result in an account suspend/ban (learned this the hard way). Use simpler exploits.</div>        <br><br>

        <div>Blooket hacks GUI has to be downloaded a different way, first install the GUI.</div>


        <button id="egoBlooketUI" data-text="by @05konz, AN INCREDIBLE GUI." class="EgoMenuButton">Open Blooket GUI</button>
        <div>Press CTRL + S or CMD + S to save the file.</div>

        <div>After installing the GUI, head to  </div>
        <br>
        chrome://settings/importData 
        <br>
        <br>

        <div>Finally, click "Choose File", then locate the downloaded GUI.</div>
        <br><br>
        <div>To load the cheats, click the newly added bookmarklet. Happy cheating 😈. </div>
        </div>

      `;
      togglePopup(popupContent, true);
    
      const egoBlooketUIButton = document.getElementById("egoBlooketUI");
      egoBlooketUIButton.addEventListener("click", downloadBlooketGUI);
    });
    

  
const slopeGameBtn = document.getElementById("egoSlopeGame");

slopeGameBtn.addEventListener("click", () => {
  const popupContent = `
    <div class="EgoWindowPopoutTitle">Slope</div>

    <iframe id="slopeGameIframe" src="https://slope-1.runningfred333.repl.co/" frameborder="0" style="width: 100vw; height: 100vh; transform: scale(0.45) translate(-22vmax, 10vmin); margin: -16vmax; overflow: clip;"></iframe>

    <button id="showSlopeGameSource" class="EgoMenuButton">Show Frame Source</button>
    <button id="toggleSlopeFullScreen" class="EgoMenuButton">Full Screen</button>
  `;
  togglePopup(popupContent, true);

  const showSlopeGameIframeSource = document.getElementById("showSlopeGameSource");
  showSlopeGameIframeSource.addEventListener("click", () => {
    window.open("https://slope-1.runningfred333.repl.co/", "_blank");
  });

  const toggleFullScreenBtn = document.getElementById("toggleSlopeFullScreen");
  const slopeGameIframe = document.getElementById("slopeGameIframe");

  toggleFullScreenBtn.addEventListener("click", () => {
    if (slopeGameIframe.requestFullscreen) {
      slopeGameIframe.requestFullscreen();
    } else if (slopeGameIframe.mozRequestFullScreen) { 
      slopeGameIframe.mozRequestFullScreen();
    } else if (slopeGameIframe.webkitRequestFullscreen) { 
      slopeGameIframe.webkitRequestFullscreen();
    } else if (slopeGameIframe.msRequestFullscreen) { 
      slopeGameIframe.msRequestFullscreen();
    }
  });
});



const egoDressUpGameBtn = document.getElementById("egoDressUpGame");

egoDressUpGameBtn.addEventListener("click", () => {
  const popupContent = `
    <div class="EgoWindowPopoutTitle">Dress Up (Community)</div>

    <iframe id="dressUpIframe" src="https://www.figma.com/embed?embed_host=astra&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FEzUheSPueQG16xmy20lvP7%2FDress-Up-Game-(Community)%3Fnode-id%3D1%253A3%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D1%253A3%26show-proto-sidebar%3Dtrue&chrome=DOCUMENTATION" allowfullscreen></iframe>
    <button id="showDressUpSource" class="EgoMenuButton">Show Frame Source</button>
    <button id="toggleDressUpGameFullscreen" class="EgoMenuButton">Full Screen</button>
  `;
  togglePopup(popupContent, true);

  const showDressUpSource = document.getElementById("showDressUpSource");
  showDressUpSource.addEventListener("click", () => {
    window.open("https://www.figma.com/proto/EzUheSPueQG16xmy20lvP7/Dress-Up-Game-(Community)?chrome=DOCUMENTATION&embed_host=astra&kind=&node-id=1-3&page-id=0%3A1&scaling=scale-down&starting-point-node-id=1%3A3", "_blank");
  });

  const toggleDressUpGameFullscreen = document.getElementById("toggleDressUpGameFullscreen");
  const dressUpIframe = document.getElementById("dressUpIframe");

  toggleDressUpGameFullscreen.addEventListener("click", () => {
    if (dressUpIframe.requestFullscreen) {
      dressUpIframe.requestFullscreen();
    } else if (dressUpIframe.mozRequestFullScreen) { 
      dressUpIframe.mozRequestFullScreen();
    } else if (dressUpIframe.webkitRequestFullscreen) { 
      dressUpIframe.webkitRequestFullscreen();
    } else if (dressUpIframe.msRequestFullscreen) { 
      dressUpIframe.msRequestFullscreen();
    }
  });
});








const egoTicTacToe = document.getElementById("egoTicTacToe");

egoTicTacToe.addEventListener("click", () => {
  window.open("https://playtictactoe.org/", "_blank");
});
      


const amongUsBtn = document.getElementById("egoAmongUsOffline");

amongUsBtn.addEventListener("click", () => {
  const popupContent = `
    <div class="EgoWindowPopoutTitle">Among Us</div>

    <iframe id="amongUsIframe" src="https://webglmath.github.io/among-us/" frameborder="0" style="width: 100%; height: 15rem; border-radius: 2vmin;"></iframe>
    <button id="showAmongUsFrameSrc" class="EgoMenuButton">Show Frame Source</button>
    <button id="toggleFullScreen" class="EgoMenuButton">Full Screen</button>
  `;
  togglePopup(popupContent, true);

  const showAmongUsFrameSource = document.getElementById("showAmongUsFrameSrc");
  showAmongUsFrameSource.addEventListener("click", () => {
    window.open("https://webglmath.github.io/among-us/", "_blank");
  });

  const toggleFullScreenBtn = document.getElementById("toggleFullScreen");
  const amongUsIframe = document.getElementById("amongUsIframe");

  toggleFullScreenBtn.addEventListener("click", () => {
    if (amongUsIframe.requestFullscreen) {
      amongUsIframe.requestFullscreen();
    } else if (amongUsIframe.mozRequestFullScreen) { 
      amongUsIframe.mozRequestFullScreen();
    } else if (amongUsIframe.webkitRequestFullscreen) { 
      amongUsIframe.webkitRequestFullscreen();
    } else if (amongUsIframe.msRequestFullscreen) { 
      amongUsIframe.msRequestFullscreen();
    }
  });
});



const egoConnectFour = document.getElementById("egoConnectFour");

egoConnectFour.addEventListener("click", () => {
  const popupContent = `
    <div class="EgoWindowPopoutTitle">Connect Four</div>

    <iframe id="connectFourFrame" src="https://www.yiv.com/games/Connect-4/index.html?yad" frameborder="0" style="width: 100%; height: 15rem; border-radius: 2vmin;"></iframe>
    <button id="showConnectFourSrc" class="EgoMenuButton">Show Frame Source</button>
    <button id="toggleConnectFourFullScreen" class="EgoMenuButton">Full Screen</button>
  `;
  togglePopup(popupContent, true);

  const showConnectFourSrc = document.getElementById("showConnectFourSrc");
  showConnectFourSrc.addEventListener("click", () => {
    window.open("https://www.yiv.com/games/Connect-4/index.html?yad", "_blank");
  });

  const toggleConnectFourFullScreen = document.getElementById("toggleConnectFourFullScreen");
  const connectFourFrame = document.getElementById("connectFourFrame");

  toggleConnectFourFullScreen.addEventListener("click", () => {
    if (connectFourFrame.requestFullscreen) {
      connectFourFrame.requestFullscreen();
    } else if (connectFourFrame.mozRequestFullScreen) { 
      connectFourFrame.mozRequestFullScreen();
    } else if (connectFourFrame.webkitRequestFullscreen) { 
      connectFourFrame.webkitRequestFullscreen();
    } else if (connectFourFrame.msRequestFullscreen) { 
      connectFourFrame.msRequestFullscreen();
    }
  });
});





const egoMobileGames = document.getElementById("egoMobileGames");

egoMobileGames.addEventListener("click", () => {
  const popupContent = `
    <div class="EgoWindowPopoutTitle">Yad</div>

    <iframe id="mobileGameFrame" src="https://www.yad.com/" frameborder="0" style="width: 100%;height: 20rem;border-radius: 2vmin;"></iframe>
    <button id="showMobileGamesSrc" class="EgoMenuButton">Show Page</button>
    <button id="toggleMobileGamesFullscreen" class="EgoMenuButton">Full Screen</button>
    <div id="errorDiv" style="display: none;color: #ff7272;font-weight: bold;padding: 3vmin;font-family: monospace;font-size: 3vmin;">Error: The iframe failed to load.</div>
  `;
  togglePopup(popupContent, true);

  const showMobileGamesSrc = document.getElementById("showMobileGamesSrc");
  showMobileGamesSrc.addEventListener("click", () => {
    window.open("https://www.yad.com/", "_blank");
  });

  const toggleMobileGamesFullscreen = document.getElementById("toggleMobileGamesFullscreen");
  const mobileGameFrame = document.getElementById("mobileGameFrame");
  const errorDiv = document.getElementById("errorDiv");

  toggleMobileGamesFullscreen.addEventListener("click", () => {
    if (mobileGameFrame.requestFullscreen) {
      mobileGameFrame.requestFullscreen();
    } else if (mobileGameFrame.mozRequestFullScreen) { 
      mobileGameFrame.mozRequestFullScreen();
    } else if (mobileGameFrame.webkitRequestFullscreen) { 
      mobileGameFrame.webkitRequestFullscreen();
    } else if (mobileGameFrame.msRequestFullscreen) { 
      mobileGameFrame.msRequestFullscreen();
    }
  });

  mobileGameFrame.addEventListener("load", () => {
    errorDiv.style.display = "none";
    mobileGameFrame.style.display = "block";
  });

  mobileGameFrame.onerror = () => {
    errorDiv.style.display = "block";
    mobileGameFrame.style.display = "none";
  };
  
  window.addEventListener("message", (event) => {
    if (event.origin === "https://www.yad.com") {
      if (event.data === "errorDivVisible") {
        errorDiv.style.display = "block";
        mobileGameFrame.style.display = "none";
      }
    }
  });
});







const egoUnblockedGames66 = document.getElementById("egoUnblockedGames66");
egoUnblockedGames66.addEventListener("click", () => {
  window.open("https://sites.google.com/view/classroom66", "_blank");
});




const egoMidTierGames = document.getElementById("egoMidTierGames");

egoMidTierGames.addEventListener("click", () => {
  const popupContent = `
    <div class="EgoWindowPopoutTitle">Yiv Games</div>

    <iframe id="egoMidTierGameFrame" src="https://www.yiv.com/" frameborder="0" style="width: 100%;height: 20rem;border-radius: 2vmin;"></iframe>
    <button id="showMidTierGameSource" class="EgoMenuButton">Show Page</button>
    <button id="toggleMidTierGameFullScreen" class="EgoMenuButton">Full Screen</button>
  `;
  togglePopup(popupContent, true);

  const showMidTierGameSource = document.getElementById("showMidTierGameSource");
  showMidTierGameSource.addEventListener("click", () => {
    window.open("https://www.yiv.com/", "_blank");
  });

  const toggleMidTierGameFullScreen = document.getElementById("toggleMidTierGameFullScreen");
  const egoMidTierGameFrame = document.getElementById("egoMidTierGameFrame");

  toggleMidTierGameFullScreen.addEventListener("click", () => {
    if (egoMidTierGameFrame.requestFullscreen) {
      egoMidTierGameFrame.requestFullscreen();
    } else if (egoMidTierGameFrame.mozRequestFullScreen) { 
      egoMidTierGameFrame.mozRequestFullScreen();
    } else if (egoMidTierGameFrame.webkitRequestFullscreen) { 
      egoMidTierGameFrame.webkitRequestFullscreen();
    } else if (egoMidTierGameFrame.msRequestFullscreen) { 
      egoMidTierGameFrame.msRequestFullscreen();
    }
  });
});




const egoRun3 = document.getElementById("egoRun3");

egoRun3.addEventListener("click", () => {
  const popupContent = `
    <div class="EgoWindowPopoutTitle">Run 3</div>

    <iframe id="egoRun3Iframe" src="https://lekug.github.io/tn6pS9dCf37xAhkJv/" frameborder="0" style="width: 100%;height: 20rem;border-radius: 2vmin;"></iframe>
    <button id="showRun3Source" class="EgoMenuButton">Show Frame Source</button>
    <button id="toggleRun3Fullscreen" class="EgoMenuButton">Full Screen</button>
  `;
  togglePopup(popupContent, true);

  const showRun3Source = document.getElementById("showRun3Source");
  showRun3Source.addEventListener("click", () => {
    window.open("https://lekug.github.io/tn6pS9dCf37xAhkJv/", "_blank");
  });

  const toggleRun3Fullscreen = document.getElementById("toggleRun3Fullscreen");
  const egoRun3Iframe = document.getElementById("egoRun3Iframe");

  toggleRun3Fullscreen.addEventListener("click", () => {
    if (egoRun3Iframe.requestFullscreen) {
      egoRun3Iframe.requestFullscreen();
    } else if (egoRun3Iframe.mozRequestFullScreen) { 
      egoRun3Iframe.mozRequestFullScreen();
    } else if (egoRun3Iframe.webkitRequestFullscreen) { 
      egoRun3Iframe.webkitRequestFullscreen();
    } else if (egoRun3Iframe.msRequestFullscreen) { 
      egoRun3Iframe.msRequestFullscreen();
    }
  });
});




const egoPacMan = document.getElementById("egoPacMan");

egoPacMan.addEventListener("click", () => {
  let isLocalStorageAllowed = true;
  try {
    localStorage.setItem("test", "test");
    localStorage.removeItem("test");
  } catch (error) {
    isLocalStorageAllowed = false;
  }

  const popupContent = `
    <div class="EgoWindowPopoutTitle">Pac Man</div>
    
    ${isLocalStorageAllowed ? `
      <iframe id="egoPacManIframe" src="https://masonicgit.github.io/pacman/" frameborder="0" style="width: 100%;height: 20rem;border-radius: 2vmin;"></iframe>
      <button id="showPacManSource" class="EgoMenuButton">Show Frame Source</button>
      <button id="togglePacManFullscreen" class="EgoMenuButton">Full Screen</button>
    ` :
    `<div id="errorDiv" style="color: #ff7272;font-weight: bold;padding: 3vmin;font-family: monospace;font-size: 3vmin;">Error: LocalStorage is not allowed on this webpage. Try running this on a different page.</div>`
    }
  `;
  
  togglePopup(popupContent, true);

  if (isLocalStorageAllowed) {
    const showPacManSource = document.getElementById("showPacManSource");
    showPacManSource.addEventListener("click", () => {
      window.open("https://masonicgit.github.io/pacman/", "_blank");
    });

    const togglePacManFullscreen = document.getElementById("togglePacManFullscreen");
    const egoPacManIframe = document.getElementById("egoPacManIframe");

    togglePacManFullscreen.addEventListener("click", () => {
      if (egoPacManIframe.requestFullscreen) {
        egoPacManIframe.requestFullscreen();
      } else if (egoPacManIframe.mozRequestFullScreen) { 
        egoPacManIframe.mozRequestFullScreen();
      } else if (egoPacManIframe.webkitRequestFullscreen) { 
        egoPacManIframe.webkitRequestFullscreen();
      } else if (egoPacManIframe.msRequestFullscreen) { 
        egoPacManIframe.msRequestFullscreen();
      }
    });
  }
});




const egoCheckers = document.getElementById("egoCheckers");

egoCheckers.addEventListener("click", () => {
  const popupContent = `
    <div class="EgoWindowPopoutTitle">Checkers</div>

    <iframe id="egoCheckersIframe" src="https://kschuetz.github.io/checkers/" frameborder="0" style="width: 190%;height: 35vmax;border-radius: 2vmin;display: block;transform: scale(0.52) translate(-15vw, 10vh);margin: -5vmax;margin-bottom: -5vmax;margin-top: -10vmax;"></iframe>
    <button id="showEgoCheckersSource" class="EgoMenuButton">Show Page</button>
    <button id="toggleEgoCheckersFullscreen" class="EgoMenuButton">Full Screen</button>
    <div style="
    text-align: left;
    padding: 2mm;
    font-family: monospace;
    font-size: 2vmin;
">When game doesn't load. Webpage must be blocking it. Retry on a different site."</div>
    <div id="egoCheckersErrorDiv" style="display: none;color: #ff7272;font-weight: bold;padding: 3vmin;font-family: monospace;font-size: 3vmin;">Error: The iframe failed to load.</div>
  `;
  togglePopup(popupContent, true);

  const showEgoCheckersSource = document.getElementById("showEgoCheckersSource");
  showEgoCheckersSource.addEventListener("click", () => {
    window.open("https://kschuetz.github.io/checkers/", "_blank");
  });

  const toggleEgoCheckersFullscreen = document.getElementById("toggleEgoCheckersFullscreen");
  const egoCheckersIframe = document.getElementById("egoCheckersIframe");
  const egoCheckersErrorDiv = document.getElementById("egoCheckersErrorDiv");

  toggleEgoCheckersFullscreen.addEventListener("click", () => {
    if (egoCheckersIframe.requestFullscreen) {
      egoCheckersIframe.requestFullscreen();
    } else if (egoCheckersIframe.mozRequestFullScreen) { 
      egoCheckersIframe.mozRequestFullScreen();
    } else if (egoCheckersIframe.webkitRequestFullscreen) { 
      egoCheckersIframe.webkitRequestFullscreen();
    } else if (egoCheckersIframe.msRequestFullscreen) { 
      egoCheckersIframe.msRequestFullscreen();
    }
  });

  egoCheckersIframe.addEventListener("load", () => {
    egoCheckersErrorDiv.style.display = "none";
    egoCheckersIframe.style.display = "block";
  });

  egoCheckersIframe.onerror = () => {
    egoCheckersErrorDiv.style.display = "block";
    egoCheckersIframe.style.display = "none";
  };
  
  window.addEventListener("message", (event) => {
    if (event.origin === "https://kschuetz.github.io/checkers/") {
      if (event.data === "errorDivVisible") {
        egoCheckersErrorDiv.style.display = "block";
        egoCheckersIframe.style.display = "none";
      }
    }
  });
});


const egoChess = document.getElementById("egoChess");

egoChess.addEventListener("click", () => {
  const popupContent = `
    <div class="EgoWindowPopoutTitle">Chess</div>

    <iframe id="egoChessIframe" src="https://mhonert.github.io/chess/" frameborder="0" style="width: 100%;height: 20rem;border-radius: 2vmin;display: block;"></iframe>
    <button id="showChessSource" class="EgoMenuButton">Show Page</button>
    <button id="toggleChessFullscreen" class="EgoMenuButton">Full Screen</button>
    <div id="egoChessErrorDiv" style="display: none;color: #ff7272;font-weight: bold;padding: 3vmin;font-family: monospace;font-size: 3vmin;">Error: The iframe failed to load.</div>
  `;
  togglePopup(popupContent, true);

  const showChessSource = document.getElementById("showChessSource");
  showChessSource.addEventListener("click", () => {
    window.open("https://mhonert.github.io/chess/", "_blank");
  });

  const toggleChessFullscreen = document.getElementById("toggleChessFullscreen");
  const egoChessIframe = document.getElementById("egoChessIframe");
  const egoChessErrorDiv = document.getElementById("egoChessErrorDiv");

  toggleChessFullscreen.addEventListener("click", () => {
    if (egoChessIframe.requestFullscreen) {
      egoChessIframe.requestFullscreen();
    } else if (egoChessIframe.mozRequestFullScreen) { 
      egoChessIframe.mozRequestFullScreen();
    } else if (egoChessIframe.webkitRequestFullscreen) { 
      egoChessIframe.webkitRequestFullscreen();
    } else if (egoChessIframe.msRequestFullscreen) { 
      egoChessIframe.msRequestFullscreen();
    }
  });

  egoChessIframe.addEventListener("load", () => {
    egoChessErrorDiv.style.display = "none";
    egoChessIframe.style.display = "block";
  });

  egoChessIframe.onerror = () => {
    egoChessErrorDiv.style.display = "block";
    egoChessIframe.style.display = "none";
  };
  
  window.addEventListener("message", (event) => {
    if (event.origin === "https://mhonert.github.io/chess/") {
      if (event.data === "errorDivVisible") {
        egoChessErrorDiv.style.display = "block";
        egoChessIframe.style.display = "none";
      }
    }
  });
});





const egoFNAFWeb = document.getElementById("egoFNAFWeb");

egoFNAFWeb.addEventListener("click", () => {
  let isLocalStorageAllowed = true;
  try {
    localStorage.setItem("test", "test");
    localStorage.removeItem("test");
  } catch (error) {
    isLocalStorageAllowed = false;
  }

  const errorDivContent = `
    <div id="errorDiv" style="color: #ff7272;font-weight: bold;padding: 3vmin;font-family: monospace;font-size: 3vmin;">
      Error: LocalStorage is not allowed on this webpage. Try running this on a different page.
    </div>
  `;
  
  const popupContent = `
    <div class="EgoWindowPopoutTitle">FNAF Web</div>

    ${isLocalStorageAllowed ? `
      <iframe id="FNAFWebFrame" src="https://dorukyum.github.io/FNAF-Web/" frameborder="0" style="width: 100%;height: 20rem;border-radius: 2vmin;"></iframe>
      <button id="showFNAFWebSource" class="EgoMenuButton">Show Page</button>
      <button id="toggleFNAFWebFullscreen" class="EgoMenuButton">Full Screen</button>
      <div id="FNAFWebErrorDiv" style="display: none;color: #ff7272;font-weight: bold;padding: 3vmin;font-family: monospace;font-size: 3vmin;">Error: The iframe failed to load.</div>
    ` :
    errorDivContent
    }
  `;
  togglePopup(popupContent, true);

  if (isLocalStorageAllowed) {
    const showFNAFWebSource = document.getElementById("showFNAFWebSource");
    showFNAFWebSource.addEventListener("click", () => {
      window.open("https://dorukyum.github.io/FNAF-Web/", "_blank");
    });

    const toggleFNAFWebFullscreen = document.getElementById("toggleFNAFWebFullscreen");
    const FNAFWebFrame = document.getElementById("FNAFWebFrame");
    const FNAFWebErrorDiv = document.getElementById("FNAFWebErrorDiv");

    toggleFNAFWebFullscreen.addEventListener("click", () => {
      if (FNAFWebFrame.requestFullscreen) {
        FNAFWebFrame.requestFullscreen();
      } else if (FNAFWebFrame.mozRequestFullScreen) { 
        FNAFWebFrame.mozRequestFullScreen();
      } else if (FNAFWebFrame.webkitRequestFullscreen) { 
        FNAFWebFrame.webkitRequestFullscreen();
      } else if (FNAFWebFrame.msRequestFullscreen) { 
        FNAFWebFrame.msRequestFullscreen();
      }
    });

    FNAFWebFrame.addEventListener("load", () => {
      FNAFWebErrorDiv.style.display = "none";
      FNAFWebFrame.style.display = "block";
    });

    FNAFWebFrame.onerror = () => {
      FNAFWebErrorDiv.style.display = "block";
      FNAFWebFrame.style.display = "none";
    };
    
    window.addEventListener("message", (event) => {
      if (event.origin === "https://dorukyum.github.io/FNAF-Web/") {
        if (event.data === "errorDivVisible") {
          FNAFWebErrorDiv.style.display = "block";
          FNAFWebFrame.style.display = "none";
        }
      }
    });
  }
});

const egoFNAF1PORT = document.getElementById("egoFNAF1PORT");

egoFNAF1PORT.addEventListener("click", () => {
  const popupContent = `
    <div class="EgoWindowPopoutTitle">FNAF</div>

    <iframe id="egoFNAF1PORTIframe" src="https://ubg98.github.io/FNAF/" frameborder="0" style="width: 100%;height: 20rem;border-radius: 2vmin;display: block;"></iframe>
    <button id="showFNAF1PORTSource" class="EgoMenuButton">Show Page</button>
    <button id="toggleFNAF1PORTFullscreen" class="EgoMenuButton">Full Screen</button>
    <div id="egoFNAF1PORTErrorDiv" style="display: none;color: #ff7272;font-weight: bold;padding: 3vmin;font-family: monospace;font-size: 3vmin;">Error: The iframe failed to load.</div>
  `;
  togglePopup(popupContent, true);

  const showFNAF1PORTSource = document.getElementById("showFNAF1PORTSource");
  showFNAF1PORTSource.addEventListener("click", () => {
    window.open("https://ubg98.github.io/FNAF/", "_blank");
  });

  const toggleFNAF1PORTFullscreen = document.getElementById("toggleFNAF1PORTFullscreen");
  const egoFNAF1PORTIframe = document.getElementById("egoFNAF1PORTIframe");
  const egoFNAF1PORTErrorDiv = document.getElementById("egoFNAF1PORTErrorDiv");

  toggleFNAF1PORTFullscreen.addEventListener("click", () => {
    if (egoFNAF1PORTIframe.requestFullscreen) {
      egoFNAF1PORTIframe.requestFullscreen();
    } else if (egoFNAF1PORTIframe.mozRequestFullScreen) { 
      egoFNAF1PORTIframe.mozRequestFullScreen();
    } else if (egoFNAF1PORTIframe.webkitRequestFullscreen) { 
      egoFNAF1PORTIframe.webkitRequestFullscreen();
    } else if (egoFNAF1PORTIframe.msRequestFullscreen) { 
      egoFNAF1PORTIframe.msRequestFullscreen();
    }
  });

  egoFNAF1PORTIframe.addEventListener("load", () => {
    egoFNAF1PORTErrorDiv.style.display = "none";
    egoFNAF1PORTIframe.style.display = "block";
  });

  egoFNAF1PORTIframe.onerror = () => {
    egoFNAF1PORTErrorDiv.style.display = "block";
    egoFNAF1PORTIframe.style.display = "none";
  };
  
  window.addEventListener("message", (event) => {
    if (event.origin === "https://ubg98.github.io/FNAF/") {
      if (event.data === "errorDivVisible") {
        egoFNAF1PORTErrorDiv.style.display = "block";
        egoFNAF1PORTIframe.style.display = "none";
      }
    }
  });
});



const egoFNAF2 = document.getElementById("egoFNAF2");

egoFNAF2.addEventListener("click", () => {
  const popupContent = `
    <div class="EgoWindowPopoutTitle">FNAF 2</div>

    <iframe id="egoFNAF2Iframe" src="https://run3.io/popgame/fnaf/fnaf2.html" frameborder="0" style="width: 100%;height: 20rem;border-radius: 2vmin;display: block;"></iframe>
    <button id="showFNAF2Source" class="EgoMenuButton">Show Page</button>
    <button id="toggleFNAF2Fullscreen" class="EgoMenuButton">Full Screen</button>
    <div id="egoFNAF2ErrorDiv" style="display: none;color: #ff7272;font-weight: bold;padding: 3vmin;font-family: monospace;font-size: 3vmin;">Error: The iframe failed to load.</div>
  `;
  togglePopup(popupContent, true);

  const showFNAF2Source = document.getElementById("showFNAF2Source");
  showFNAF2Source.addEventListener("click", () => {
    window.open("https://run3.io/popgame/fnaf/fnaf2.html", "_blank");
  });

  const toggleFNAF2Fullscreen = document.getElementById("toggleFNAF2Fullscreen");
  const egoFNAF2Iframe = document.getElementById("egoFNAF2Iframe");
  const egoFNAF2ErrorDiv = document.getElementById("egoFNAF2ErrorDiv");

  toggleFNAF2Fullscreen.addEventListener("click", () => {
    if (egoFNAF2Iframe.requestFullscreen) {
      egoFNAF2Iframe.requestFullscreen();
    } else if (egoFNAF2Iframe.mozRequestFullScreen) { 
      egoFNAF2Iframe.mozRequestFullScreen();
    } else if (egoFNAF2Iframe.webkitRequestFullscreen) { 
      egoFNAF2Iframe.webkitRequestFullscreen();
    } else if (egoFNAF2Iframe.msRequestFullscreen) { 
      egoFNAF2Iframe.msRequestFullscreen();
    }
  });

  egoFNAF2Iframe.addEventListener("load", () => {
    egoFNAF2ErrorDiv.style.display = "none";
    egoFNAF2Iframe.style.display = "block";
  });

  egoFNAF2Iframe.onerror = () => {
    egoFNAF2ErrorDiv.style.display = "block";
    egoFNAF2Iframe.style.display = "none";
  };
  
  window.addEventListener("message", (event) => {
    if (event.origin === "https://run3.io/popgame/fnaf/fnaf2.html") {
      if (event.data === "errorDivVisible") {
        egoFNAF2ErrorDiv.style.display = "block";
        egoFNAF2Iframe.style.display = "none";
      }
    }
  });
});




const egoFNAF3 = document.getElementById("egoFNAF3");

egoFNAF3.addEventListener("click", () => {
  const popupContent = `
    <div class="EgoWindowPopoutTitle">FNAF 3</div>

    <iframe id="egoFNAF3Iframe" src="https://run3.io/popgame/fnaf/fnaf3.html" frameborder="0" style="width: 100%;height: 20rem;border-radius: 2vmin;display: block;"></iframe>
    <button id="showFNAF3Source" class="EgoMenuButton">Show Page</button>
    <button id="toggleFNAF3Fullscreen" class="EgoMenuButton">Full Screen</button>
    <div id="egoFNAF3ErrorDiv" style="display: none;color: #ff7272;font-weight: bold;padding: 3vmin;font-family: monospace;font-size: 3vmin;">Error: The iframe failed to load.</div>
  `;
  togglePopup(popupContent, true);

  const showFNAF3Source = document.getElementById("showFNAF3Source");
  showFNAF3Source.addEventListener("click", () => {
    window.open("https://run3.io/popgame/fnaf/fnaf3.html", "_blank");
  });

  const toggleFNAF3Fullscreen = document.getElementById("toggleFNAF3Fullscreen");
  const egoFNAF3Iframe = document.getElementById("egoFNAF3Iframe");
  const egoFNAF3ErrorDiv = document.getElementById("egoFNAF3ErrorDiv");

  toggleFNAF3Fullscreen.addEventListener("click", () => {
    if (egoFNAF3Iframe.requestFullscreen) {
      egoFNAF3Iframe.requestFullscreen();
    } else if (egoFNAF3Iframe.mozRequestFullScreen) { 
      egoFNAF3Iframe.mozRequestFullScreen();
    } else if (egoFNAF3Iframe.webkitRequestFullscreen) { 
      egoFNAF3Iframe.webkitRequestFullscreen();
    } else if (egoFNAF3Iframe.msRequestFullscreen) { 
      egoFNAF3Iframe.msRequestFullscreen();
    }
  });

  egoFNAF3Iframe.addEventListener("load", () => {
    egoFNAF3ErrorDiv.style.display = "none";
    egoFNAF3Iframe.style.display = "block";
  });

  egoFNAF3Iframe.onerror = () => {
    egoFNAF3ErrorDiv.style.display = "block";
    egoFNAF3Iframe.style.display = "none";
  };
  
  window.addEventListener("message", (event) => {
    if (event.origin === "https://run3.io/popgame/fnaf/fnaf3.html") {
      if (event.data === "errorDivVisible") {
        egoFNAF3ErrorDiv.style.display = "block";
        egoFNAF3Iframe.style.display = "none";
      }
    }
  });
});






const egoFNAF4 = document.getElementById("egoFNAF4");

egoFNAF4.addEventListener("click", () => {
  const popupContent = `
    <div class="EgoWindowPopoutTitle">FNAF 4</div>

    <iframe id="egoFNAF4Iframe" src="https://run3.io/popgame/fnaf/fnaf4.html" frameborder="0" style="width: 100%;height: 20rem;border-radius: 2vmin;display: block;"></iframe>
    <button id="showFNAF4Source" class="EgoMenuButton">Show Page</button>
    <button id="toggleFNAF4Fullscreen" class="EgoMenuButton">Full Screen</button>
    <div id="egoFNAF4ErrorDiv" style="display: none;color: #ff7272;font-weight: bold;padding: 3vmin;font-family: monospace;font-size: 3vmin;">Error: The iframe failed to load.</div>
  `;
  togglePopup(popupContent, true);

  const showFNAF4Source = document.getElementById("showFNAF4Source");
  showFNAF4Source.addEventListener("click", () => {
    window.open("https://run3.io/popgame/fnaf/fnaf4.html", "_blank");
  });

  const toggleFNAF4Fullscreen = document.getElementById("toggleFNAF4Fullscreen");
  const egoFNAF4Iframe = document.getElementById("egoFNAF4Iframe");
  const egoFNAF4ErrorDiv = document.getElementById("egoFNAF4ErrorDiv");

  toggleFNAF4Fullscreen.addEventListener("click", () => {
    if (egoFNAF4Iframe.requestFullscreen) {
      egoFNAF4Iframe.requestFullscreen();
    } else if (egoFNAF4Iframe.mozRequestFullScreen) { 
      egoFNAF4Iframe.mozRequestFullScreen();
    } else if (egoFNAF4Iframe.webkitRequestFullscreen) { 
      egoFNAF4Iframe.webkitRequestFullscreen();
    } else if (egoFNAF4Iframe.msRequestFullscreen) { 
      egoFNAF4Iframe.msRequestFullscreen();
    }
  });

  egoFNAF4Iframe.addEventListener("load", () => {
    egoFNAF4ErrorDiv.style.display = "none";
    egoFNAF4Iframe.style.display = "block";
  });

  egoFNAF4Iframe.onerror = () => {
    egoFNAF4ErrorDiv.style.display = "block";
    egoFNAF4Iframe.style.display = "none";
  };
  
  window.addEventListener("message", (event) => {
    if (event.origin === "https://run3.io/popgame/fnaf/fnaf4.html") {
      if (event.data === "errorDivVisible") {
        egoFNAF4ErrorDiv.style.display = "block";
        egoFNAF4Iframe.style.display = "none";
      }
    }
  });
});





const egoOfficialCookieClicker = document.getElementById("egoOfficialCookieClicker");

egoOfficialCookieClicker.addEventListener("click", () => {
  const popupContent = `
    <div class="EgoWindowPopoutTitle">Cookie Clicker</div>

    <iframe id="egoCookieClickerIframe" src="https://the.deconstructors.co.uk/tmm-cookieclicker/" frameborder="0" style="width: 100%;height: 20rem;border-radius: 2vmin;display: block;"></iframe>
    <button id="showCookieClickerSource" class="EgoMenuButton">Show Page</button>
    
    <button id="toggleCookieClickerFullscreen" class="EgoMenuButton">Full Screen</button>
    <div id="CoookieClickerErrorDiv" style="display: none;color: #ff7272;font-weight: bold;padding: 3vmin;font-family: monospace;font-size: 3vmin;">Error: The iframe failed to load.</div>

  `;
  togglePopup(popupContent, true);

  const showCookieClickerSource = document.getElementById("showCookieClickerSource");
  showCookieClickerSource.addEventListener("click", () => {
    window.open("https://the.deconstructors.co.uk/tmm-cookieclicker/", "_blank");
  });

  const toggleCookieClickerFullscreen = document.getElementById("toggleCookieClickerFullscreen");
  const egoCookieClickerIframe = document.getElementById("egoCookieClickerIframe");
  const CoookieClickerErrorDiv = document.getElementById("CoookieClickerErrorDiv");

  toggleCookieClickerFullscreen.addEventListener("click", () => {
    if (egoCookieClickerIframe.requestFullscreen) {
      egoCookieClickerIframe.requestFullscreen();
    } else if (egoCookieClickerIframe.mozRequestFullScreen) { 
      egoCookieClickerIframe.mozRequestFullScreen();
    } else if (egoCookieClickerIframe.webkitRequestFullscreen) { 
      egoCookieClickerIframe.webkitRequestFullscreen();
    } else if (egoCookieClickerIframe.msRequestFullscreen) { 
      egoCookieClickerIframe.msRequestFullscreen();
    }
  });

  egoCookieClickerIframe.addEventListener("load", () => {
    CoookieClickerErrorDiv.style.display = "none";
    egoCookieClickerIframe.style.display = "block";
  });

  egoCookieClickerIframe.onerror = () => {
    CoookieClickerErrorDiv.style.display = "block";
    egoCookieClickerIframe.style.display = "none";
  };
  
  window.addEventListener("message", (event) => {
    if (event.origin === "https://the.deconstructors.co.uk/tmm-cookieclicker/") {
      if (event.data === "errorDivVisible") {
        CoookieClickerErrorDiv.style.display = "block";
        egoCookieClickerIframe.style.display = "none";
      }
    }
  });
});


document.getElementById("egoMobileEmulator").addEventListener("click", function(e) {
  window.open("https://now.gg/play/aptoide/1440/aptoide", "_blank");
});


const egoFNAFSL = document.getElementById("egoFNAFSL");

egoFNAFSL.addEventListener("click", () => {
  const popupContent = `
    <div class="EgoWindowPopoutTitle">FNAF Sister Location</div>

    <iframe id="egoFNAFSLIframe" src="https://run3.io/popgame/fnaf/fnafsl.html" frameborder="0" style="width: 100%;height: 20rem;border-radius: 2vmin;display: block;"></iframe>
    <button id="showFNAFSLSource" class="EgoMenuButton">Show Page</button>
    <button id="toggleFNAFSLFullscreen" class="EgoMenuButton">Full Screen</button>
    <div id="egoFNAFSLErrorDiv" style="display: none;color: #ff7272;font-weight: bold;padding: 3vmin;font-family: monospace;font-size: 3vmin;">Error: The iframe failed to load.</div>
  `;
  togglePopup(popupContent, true);

  const showFNAFSLSource = document.getElementById("showFNAFSLSource");
  showFNAFSLSource.addEventListener("click", () => {
    window.open("https://run3.io/popgame/fnaf/fnafsl.html", "_blank");
  });

  const toggleFNAFSLFullscreen = document.getElementById("toggleFNAFSLFullscreen");
  const egoFNAFSLIframe = document.getElementById("egoFNAFSLIframe");
  const egoFNAFSLErrorDiv = document.getElementById("egoFNAFSLErrorDiv");

  toggleFNAFSLFullscreen.addEventListener("click", () => {
    if (egoFNAFSLIframe.requestFullscreen) {
      egoFNAFSLIframe.requestFullscreen();
    } else if (egoFNAFSLIframe.mozRequestFullScreen) { 
      egoFNAFSLIframe.mozRequestFullScreen();
    } else if (egoFNAFSLIframe.webkitRequestFullscreen) { 
      egoFNAFSLIframe.webkitRequestFullscreen();
    } else if (egoFNAFSLIframe.msRequestFullscreen) { 
      egoFNAFSLIframe.msRequestFullscreen();
    }
  });

  egoFNAFSLIframe.addEventListener("load", () => {
    egoFNAFSLErrorDiv.style.display = "none";
    egoFNAF4Iframe.style.display = "block";
  });

  egoFNAFSLIframe.onerror = () => {
    egoFNAFSLErrorDiv.style.display = "block";
    egoFNAFSLIframe.style.display = "none";
  };
  
  window.addEventListener("message", (event) => {
    if (event.origin === "https://run3.io/popgame/fnaf/fnafsl.html") {
      if (event.data === "errorDivVisible") {
        egoFNAFSLErrorDiv.style.display = "block";
        egoFNAFSLIframe.style.display = "none";
      }
    }
  });
});



const egoFNAFUCN = document.getElementById("egoFNAFUCN");

egoFNAFUCN.addEventListener("click", () => {
  const popupContent = `
    <div class="EgoWindowPopoutTitle">FNAF UCN</div>

    <iframe id="egoFNAFUCNIframe" src="https://kdata1.com/2022/01/customnight.html" frameborder="0" style="width: 100%;height: 20rem;border-radius: 2vmin;display: block;"></iframe>
    <button id="showFNAFUCNSource" class="EgoMenuButton">Show Page</button>
    <button id="toggleFNAFUCNFullscreen" class="EgoMenuButton">Full Screen</button>
    <div id="egoFNAFUCNErrorDiv" style="display: none;color: #ff7272;font-weight: bold;padding: 3vmin;font-family: monospace;font-size: 3vmin;">Error: The iframe failed to load.</div>
  `;
  togglePopup(popupContent, true);

  const showFNAFUCNSource = document.getElementById("showFNAFUCNSource");
  showFNAFUCNSource.addEventListener("click", () => {
    window.open("https://kdata1.com/2022/01/customnight.html", "_blank");
  });

  const toggleFNAFUCNFullscreen = document.getElementById("toggleFNAFUCNFullscreen");
  const egoFNAFUCNIframe = document.getElementById("egoFNAFUCNIframe");
  const egoFNAFUCNErrorDiv = document.getElementById("egoFNAFUCNErrorDiv");

  toggleFNAFUCNFullscreen.addEventListener("click", () => {
    if (egoFNAFUCNIframe.requestFullscreen) {
      egoFNAFUCNIframe.requestFullscreen();
    } else if (egoFNAFUCNIframe.mozRequestFullScreen) { 
      egoFNAFUCNIframe.mozRequestFullScreen();
    } else if (egoFNAFUCNIframe.webkitRequestFullscreen) { 
      egoFNAFUCNIframe.webkitRequestFullscreen();
    } else if (egoFNAFUCNIframe.msRequestFullscreen) { 
      egoFNAFUCNIframe.msRequestFullscreen();
    }
  });

  egoFNAFUCNIframe.addEventListener("load", () => {
    egoFNAFUCNErrorDiv.style.display = "none";
    egoFNAFUCNIframe.style.display = "block";
  });

  egoFNAFUCNIframe.onerror = () => {
    egoFNAFUCNErrorDiv.style.display = "block";
    egoFNAFUCNIframe.style.display = "none";
  };
  
  window.addEventListener("message", (event) => {
    if (event.origin === "https://kdata1.com/2022/01/customnight.html") {
      if (event.data === "errorDivVisible") {
        egoFNAFUCNErrorDiv.style.display = "block";
        egoFNAFUCNIframe.style.display = "none";
      }
    }
  });
});









document.getElementById("UnblockedGamesWorld").addEventListener("click", function(e) {
  window.open("https://sites.google.com/site/thegamecompilation/home", "_blank");
});

document.getElementById("slopeCityPortal").addEventListener("click", function(e) {
  e.preventDefault();
  var page = new ABC({
    "type": "blank",
    "url": "https://slope-city.github.io/"
  });
  page.open();
});



document.getElementById("egoSelenite").addEventListener("click", function(e) {
  e.preventDefault();
  var page = new ABC({
    "type": "blank",
    "url": "https://selenite.cc/"
  });
  page.open();
});
      const breakoutButton = document.querySelector('#BreakoutGame');

      breakoutButton.addEventListener('click', () => {
        const confirmMessage = "WARNING: When the game ends, the page WILL refresh forcefully.";
        if(confirm(confirmMessage)) {
          const scriptUrl = 'https://raw.githubusercontent.com/dragon731012/-WORKING-bookmarklets-and-games/main/games/breakout%20(by%20me).js';
          fetch(scriptUrl)
            .then(response => response.text())
            .then(scriptContent => {
              console.log('Script content:', scriptContent);
              eval(scriptContent);
            });
        }
      });
      
      
      
    function startGame() {
      const confirmation = window.confirm(
        'WARNING: Starting the game will break some site elements and may require a page refresh to restore them. Are you sure you want to start the game?'
      );

      if (confirmation) {
        const s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = 'https://blog.roysolberg.com/js/dom2.min.js';
        s.onerror = (event) => {
          console.error('Error loading script:', event);
          alert('Failed to load the script. The site\'s Content Security Policy might be blocking it. Feel free to try again later.');
        };
        document.body.appendChild(s);
      }
    }

    const AsteroidGame = document.querySelector('#AsteroidGame');
    AsteroidGame.addEventListener('click', startGame);


    function openNewTabWithHTML(html, width = 800, height = 600) {
      const newTab = window.open('about:blank', '_blank');
      newTab.document.write(html);
      newTab.document.close();
      newTab.resizeTo(width, height);
    }
    
    const dinoGameButton = document.querySelector('#DinoGameCloaked');
    
    dinoGameButton.addEventListener('click', () => {
      const gameUrl = 'https://yeahbread.github.io/Ego-Menu-Bookmarklets/ChromeDino(dragon731012).html';
      const htmlContent = `<iframe src="${gameUrl}" style="border:0;width:100%;height:100%"></iframe>`;
      const width = 800;
      const height = 600;
    
      openNewTabWithHTML(htmlContent, width, height);
    });



      var AutoClickerOption = document.getElementById("AutoClickerOption");
      AutoClickerOption.addEventListener("click", function() {
        var DELAY = 1;
        var autoClickerStyleElement = document.createElement("style");
        autoClickerStyleElement.innerHTML = "*{cursor: crosshair !important;}";
        document.body.appendChild(autoClickerStyleElement);
      
        var content = `
        <div class="EgoWindowPopoutTitle">Auto Clicker</div>

          <div>Auto Clicker</div>
          <label for="delayInput">Enter Delay (in milliseconds):</label>
          <input type="number" id="delayInput" class="EgoInput" min="1" value="${DELAY}">
          <div>Status: <span id="statusIndicator">Inactive</span></div>
          <div>Press "." to start the autoclicker, and "," to stop it.</div>
        `;
        togglePopup(content);
      
        var autoclickerEnabled = false;
      
        document.addEventListener("keydown", function(e) {
          if (e.key == ".") {
            if (!autoclickerEnabled) {
              autoclickerEnabled = true;
              DELAY = document.getElementById("delayInput").value;
              document.body.addEventListener("click", addClicker, 0);
              document.body.style.cursor = "crosshair";
              document.getElementById("statusIndicator").textContent = "[🟢]Active";
            }
          } else if (e.key == ",") {
            if (autoclickerEnabled) {
              autoclickerEnabled = false;
              document.body.removeEventListener("click", addClicker);
              document.body.style.cursor = "";
              document.getElementById("statusIndicator").textContent = "[🔴]Inactive";
            }
          }
        });
      
        function addClicker(e) {
          if (!e.isTrusted) {
            return;
          }
      
          if (e.target.classList.contains("auto-clicker-target")) {
            e.target.classList.remove("auto-clicker-target");
          } else {
            e.target.classList.add("auto-clicker-target");
          }
      
          if (autoclickerEnabled) {
            e.preventDefault();
            autoClick(e.target);
          }
        }
      
        function autoClick(element) {
          if (element.classList.contains("auto-clicker-target") && autoclickerEnabled) {
            element.click();
            setTimeout(function() {
              autoClick(element);
            }, DELAY);
          }
        }
      });




      document.getElementById("egoFNAF1HTML").addEventListener("click", function(e) {
        window.open("https://drive.google.com/file/d/1wCBqyINiCQXFXLExLYd_TYBDa-xjh19h/view?usp=sharing", "_blank");
      });
      
      document.getElementById("egoFNAF2HTML").addEventListener("click", function(e) {
        window.open("https://drive.google.com/file/d/1xklHvuaSM0OVA3bSDLWJHrnhnabVKK3a/view?usp=sharing", "_blank");
      });
      
      document.getElementById("egoFNAF3HTML").addEventListener("click", function(e) {
        window.open("https://drive.google.com/file/d/1_zmSphmX1NB663ySvY568FptzN7KpdCL/view?usp=sharing", "_blank");
      });

      document.getElementById("egoFNAF4HTML").addEventListener("click", function(e) {
        window.open("https://drive.google.com/file/d/1S9PPLJNPG_xY1ZD5wbJa36qfZM3mPi1V/view?usp=sharing", "_blank");
      });
      
      document.getElementById("egoFNAFSLHTML").addEventListener("click", function(e) {
        window.open("https://drive.google.com/file/d/1ne82rZjyPkN0Ynlv1UCO80oNU3nRliNV/view?usp=sharing", "_blank");
      });
      
      document.getElementById("egoSuikaHTML").addEventListener("click", function(e) {
        window.open("https://drive.google.com/file/d/1o-CSA2D8vCEirC-p9-awtItWxcP4K3jz/view?usp=sharing", "_blank");
      });

      document.getElementById("egoEaglerCraftOffline").addEventListener("click", function(e) {
        window.open("https://bafybeihqzktptevgim3shzanqnwcdnstac2ud6rqe5zrtudcuo3gnzhsui.ipfs.dweb.link/?filename=Offline_Download_Version.zip", "_blank");
      });

      document.getElementById("egoEaglerCraftUltimateOffline").addEventListener("click", function(e) {
        window.open("https://bafybeicagzvkpu3wr7l2jklo54lqu7l5f3lqpqhevp54uekqpsdft2kjvy.ipfs.dweb.link/?filename=EaglercraftX_1.8_Ultimate_Offline.zip", "_blank");
      });
      
      
      

      let isClassroomCovered = false;
      let originalTitle = document.title;
      let originalFavicon;
      let coverKey = "`";
      let isSiteMuted = false;
      
      const coverClassroom = () => {
        const coverDiv = document.createElement("div");
        const coverImage = document.createElement("img");
        const selectedImage = document.querySelector(
          "input[name=egoPanicKeyRadio]:checked"
        );
      
        const coverImageSrc =
          selectedImage && selectedImage.value !== "other"
            ? selectedImage.dataset.src
            : undefined || "https://github.com/yeahbread/Ego-Menu-Bookmarklets/blob/main/disconnect.png?raw=true";
      
        coverDiv.id = "classroom-cover";
        coverDiv.style.width = "100vw";
        coverDiv.style.height = "100vh";
        coverDiv.style.position = "fixed";
        coverDiv.style.top = "0";
        coverDiv.style.left = "0";
        coverDiv.style.backgroundColor = "#fff";
        coverDiv.style.zIndex = "9999999999999999999999999";
        coverDiv.style.padding = "0";
        coverDiv.style.margin = "0";
      
        coverImage.src =
          coverImageSrc || "https://github.com/yeahbread/Ego-Menu-Bookmarklets/blob/main/disconnect.png?raw=true";
        coverImage.style.width = "100%";
        coverImage.style.height = "100%";
        coverImage.style.position = "absolute";
        coverImage.style.top = "0";
        coverImage.style.left = "0";
        coverImage.style.zIndex = "1";
      
        coverDiv.appendChild(coverImage);
      
        if (isClassroomCovered) {
          document.body.style.overflow = "auto";
          document.getElementById("classroom-cover").remove();
          document.title = originalTitle;
          isClassroomCovered = false;
      
          const currentFavicon = document.querySelector('link[rel="icon"]');
          if (originalFavicon && currentFavicon) {
            document.head.removeChild(currentFavicon);
            document.head.appendChild(originalFavicon);
          }
          if (isSiteMuted) {
            const allVideos = Array.from(document.querySelectorAll('video'));
            allVideos.forEach(video => video.muted = false);
            const allAudio = Array.from(document.querySelectorAll('audio'));
            allAudio.forEach(audio => audio.muted = false);
            isSiteMuted = false;
          }
        } else {
          const currentFavicon = document.querySelector('link[rel="icon"]');
          if (currentFavicon) {
            originalFavicon = currentFavicon.cloneNode(true);
            document.head.removeChild(currentFavicon);
          }
      
          const favicon = document.createElement("link");
          favicon.rel = "icon";
          favicon.href =
            "https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png";
          document.head.appendChild(favicon);
      
          document.title = "Error";
          document.body.style.overflow = "hidden";
          document.body.appendChild(coverDiv);
          isClassroomCovered = true;
          if (!isSiteMuted) {
            const allVideos = Array.from(document.querySelectorAll('video'));
            allVideos.forEach(video => video.muted = true);
            const allAudio = Array.from(document.querySelectorAll('audio'));
            allAudio.forEach(audio => audio.muted = true);
            isSiteMuted = true;
          }
        }
      };
      
      const openClassroom = () => {
        window.open("https://classroom.google.com", "_blank");
      };
      
      const handleKeyDown = (event) => {
        if (event.key === coverKey) {
          if (document.activeElement.tagName === "INPUT") {
            return;
          }
          const selectedImage = document.querySelector(
              "input[name=egoPanicKeyRadio]:checked"
          );
          if (!selectedImage || selectedImage.value !== "other") {
            coverClassroom();
          } else {
            openClassroom();
          }
        }
      };
      
      const enableEventListeners = () => {
        document.addEventListener("keydown", handleKeyDown);
      };
      
      const disableEventListeners = () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
      
      disableEventListeners();
      
      const panicKeySwitch = document.getElementById("panicKeySwitch");
      
      panicKeySwitch.addEventListener("change", (event) => {
        if (event.target.checked) {
          const popupContent = `
            <div class="EgoWindowPopoutTitle">Panic Settings</div>
      
            <div>Choose a cover method:</div>
            <div class="EgoInputContainer egoPanicKeyRadios">
              <div>
                <input type="radio" id="disconnectRadio" name="egoPanicKeyRadio" data-src="https://github.com/yeahbread/Ego-Menu-Bookmarklets/blob/main/disconnect.png?raw=true" checked>
                <label for="disconnectRadio">Disconnect</label>
              </div>
              <div>
                <input type="radio" id="resetRadio" name="egoPanicKeyRadio" data-src="https://github.com/yeahbread/Ego-Menu-Bookmarklets/blob/main/reset.png?raw=true" >
                <label for="resetRadio">Reset</label>
              </div>
              <div>
                <input type="radio" id="siteRadio" name="egoPanicKeyRadio" data-src="" value="other">
                <label for="siteRadio">Open google classroom</label>
              </div>
            </div>
      
            <div class="EgoInputContainer">
              <label for="coverKeyInput">Enter Panic Key (case sensitive):</label>
              <input type="text" id="coverKeyInput" class="EgoInput" value="` +
            coverKey +
            `">
            </div>
      
          `;
          togglePopup(popupContent);
      
          const coverKeyInput = document.getElementById("coverKeyInput");
          coverKeyInput.addEventListener("input", () => {
            coverKey = coverKeyInput.value.slice(0, 2);
          });
      
          const coverImageRadios = document.querySelectorAll(
            "input[name='egoPanicKeyRadio']"
          );
          for (let coverImageRadio of coverImageRadios) {
            if (coverImageRadio.dataset.src) {
              const coverImage = new Image();
              coverImage.src = coverImageRadio.dataset.src;
            }
      
            coverImageRadio.addEventListener("change", () => {
              const selectedImage = document.querySelector(
                "input[name=egoPanicKeyRadio]:checked"
              );
              if (selectedImage.dataset.src) {
                const coverImage = new Image();
                coverImage.src = selectedImage.dataset.src;
              }
            });
          }
      
          enableEventListeners();
        } else {
          disableEventListeners();
        }
      });
      
      const coverImages = document.querySelectorAll(
        "input[name='egoPanicKeyRadio'][data-src]"
      );
      for (let coverImage of coverImages) {
        const image = new Image();
        image.src = coverImage.dataset.src;
      }








    
  document.querySelectorAll("[data-text]").forEach(function(element) {
    var timeoutId;
  
    element.addEventListener("mouseover", function() {
      var tooltip = document.querySelector(".tooltip");
      var text = element.getAttribute("data-text");
      tooltip.innerText = text;
  
      timeoutId = setTimeout(function() {
        var rect = element.getBoundingClientRect();
        tooltip.style.bottom = window.innerHeight - rect.top + "px";
        tooltip.style.left = rect.left + rect.width / 2 + "px";
        tooltip.classList.add("show");
      }, 150); 
  
    });
  
    element.addEventListener("mouseleave", function() {
      var tooltip = document.querySelector(".tooltip");
      clearTimeout(timeoutId);
      tooltip.classList.remove("show");
    });
  });


      
      const rockPaperScissorsButton = document.querySelector("#RockPaperScissors");

      rockPaperScissorsButton.addEventListener("click", () => {
        let userScore = 0;
        let robotScore = 0;
        let gameCount = 1;
        
        const content = `
        <div class="EgoWindowPopoutTitle">Rock Paper Scissors</div>

          <div>Rock Paper Scissors</div>
          <div>Best of 3 - Choose your weapon:</div>
          <div class="rps-container">
            <div class="user-rps">
              <button id="rock-btn" class="rps-btn">🪨</button>
              <button id="paper-btn" class="rps-btn">📄</button>
              <button id="scissors-btn" class="rps-btn">✂️</button>
            </div>
            <div id="robot" class="rps-robot"></div>
            <div id="result" class="rps-result"></div>
            <div id="score" class="rps-score">You: ${userScore} - Robot: ${robotScore}</div>
          </div>
        `;
        togglePopup(content);
        
        const userRpsEl = document.querySelector(".user-rps");
        const userButtons = Array.from(userRpsEl.querySelectorAll(".rps-btn"));
        const resultEl = document.querySelector("#result");
        const scoreEl = document.querySelector("#score");
        const robotEl = document.querySelector("#robot");
        
        function resetGame() {
          userRpsEl.classList.remove("rps-disabled");
          userButtons.forEach(button => {
            button.classList.remove("rps-selected");
            button.disabled = false;
            button.classList.remove("rps-hidden");
          });
          resultEl.classList.remove("rps-result-visible");
          resultEl.innerHTML = `
          <div></div>
        `;
          robotEl.classList.remove("rps-robot-visible");
        }
        
        function showResult(result, userSelection, robotSelection) {
          let resultText = "";
          if (result === "draw") {
            resultText = "Draw!";
          } else if (result === "user") {
            userScore++;
            resultText = "You win!";
          } else {
            robotScore++;
            resultText = "Robot wins!";
          }
          let robotEmoji = "";
          if (robotSelection === "rock") {
            robotEmoji = "🪨";
          } else if (robotSelection === "paper") {
            robotEmoji = "📄";
          } else {
            robotEmoji = "✂️";
          }
          
          robotEl.innerHTML = `
            <div>${robotEmoji}</div>
          `;
          robotEl.classList.add("rps-robot-visible");
          
          setTimeout(() => {
            resultEl.innerHTML = `
              <div>${resultText}</div>
            `;
            resultEl.classList.add("rps-result-visible");
            scoreEl.textContent = `You: ${userScore} - Robot: ${robotScore}`;
            
            if (gameCount >= 3) {
              setTimeout(() => {
                const winnerText = userScore > robotScore ? `👑 You win the Best of 3 (${userScore}-${robotScore})!` :
                  robotScore > userScore ? `Robot wins the Best of 3 (${robotScore}-${userScore})!` :
                  `The Best of 3 is a tie (${userScore}-${robotScore})!`;
                togglePopup(`
                  <div>Rock Paper Scissors</div>
                  <div>${winnerText}</div>
                `);
              }, 2000);
            } else {
              setTimeout(() => {
                resultEl.classList.remove("rps-result-visible");
                robotEl.classList.remove("rps-robot-visible");
                resetGame();
              }, 2000);
            }
            
            gameCount++;
          }, 600);
        }
      
        userButtons.forEach((button) => {
          button.addEventListener("click", () => {
            const selectedOption = button.id.replace("-btn", "");
            userButtons.forEach(button => {
              if (button.id !== `${selectedOption}-btn`) {
                button.classList.add("rps-hidden");
              } else {
                button.classList.add("rps-selected");
              }
            });
            let selectedRandomOption = "";
            setTimeout(() => {
              const randomOption = Math.floor(Math.random() * 3);
              const options = ["rock", "paper", "scissors"];
              selectedRandomOption = options[randomOption];
              const result = selectedOption === selectedRandomOption ? "draw" :
                    selectedOption === "rock" && selectedRandomOption === "scissors" ||
                    selectedOption === "paper" && selectedRandomOption === "rock" ||
                    selectedOption === "scissors" && selectedRandomOption === "paper" ? "user" : "robot";
              showResult(result, selectedOption, selectedRandomOption);
            }, Math.floor(Math.random() * 601 + 700));
        
            userButtons.forEach((button) => {
              button.disabled = true;
            });
          });
        });
      
        resetGame();
      });








      var GuessTheNumberButton = document.getElementById('EgoGuessTheNumberGame');
      GuessTheNumberButton.addEventListener('click', function(event) {
        event.preventDefault();
        
        var randomNumber = Math.floor(Math.random() * 100) + 1;
        var userGuess = null;
        var numGuesses = 0;
        var startTime = new Date().getTime();
      
        var content = `
          <div class="EgoWindowPopoutTitle">Guess The Number</div>
      
          <div>Guess The Number</div>
          <div>Guess a number between 1 and 100.</div>
          <label for="guessInput">Your Guess:</label>
          <input type="number" id="guessInput" class="EgoInput">
          <div>Status: <span id="statusIndicator"></span></div>
        `;
      
        togglePopup(content);
      
        var guessInput = document.getElementById('guessInput');
        var statusIndicator = document.getElementById('statusIndicator');
      
        function checkGuess() {
          userGuess = parseInt(guessInput.value);
          numGuesses++;
      
          if (userGuess === randomNumber) {
            var elapsedTime = (new Date().getTime() - startTime) / 1000;
            var congratsContent = `
              <div class="EgoWindowPopoutTitle">Congratulations!</div>
              <div> 👑You correctly guessed the number ${randomNumber} in ${numGuesses} tries and ${elapsedTime.toFixed(1)} seconds! 🐍 </div>
            `;
            togglePopup(congratsContent, false);
          } else {
            var difference = randomNumber - userGuess;
            if (difference > 0) {
              if (difference < 5) {
                statusIndicator.innerText = 'Hotter! Go Higher!';
                statusIndicator.style.color = 'red';
              } else if (difference < 10) {
                statusIndicator.innerText = 'Getting Warm! Go Higher!';
                statusIndicator.style.color = 'orange';
              } else if (difference < 20) {
                statusIndicator.innerText = 'Luke Warm... Try Going Higher.';
                statusIndicator.style.color = 'yellow';
              } else if (difference < 30) {
                statusIndicator.innerText = 'Chilly... Try Going Higher.';
                statusIndicator.style.color = 'cyan';
              } else if (difference < 40) {
                statusIndicator.innerText = 'Really Cold... Go Higher Please.';
                statusIndicator.style.color = 'blue';
              } else {
                statusIndicator.innerText = 'Freezing... You Definitely Need to Go Higher.';
                statusIndicator.style.color = 'purple';
              }
            } else {
              if (Math.abs(difference) < 5) {
                statusIndicator.innerText = 'Hotter! Go Lower!';
                statusIndicator.style.color = 'red';
              } else if (Math.abs(difference) < 10) {
                statusIndicator.innerText = 'Getting Warm! Go Lower!';
                statusIndicator.style.color = 'orange';
              } else if (Math.abs(difference) < 20) {
                statusIndicator.innerText = 'Luke Warm... Try Going Lower.';
                statusIndicator.style.color = 'yellow';
              } else if (Math.abs(difference) < 30) {
                statusIndicator.innerText = 'Chilly... Try Going Lower.';
                statusIndicator.style.color = 'cyan';
              } else if (Math.abs(difference) < 40) {
                statusIndicator.innerText = 'Really Cold... Go Lower Please.';
                statusIndicator.style.color = 'blue';
              } else {
                statusIndicator.innerText = 'Freezing... You Definitely Need to Go Lower.';
                statusIndicator.style.color = 'purple';
              }
            }
          }
          
          guessInput.value = '';
        }
      
        guessInput.addEventListener('keydown', function(event) {
          if (event.key === 'Enter') {
            event.preventDefault();
            checkGuess();
          }
        });
      });
      










      const toggleChatroom = () => {
        const popupContent = `
          <div class="EgoWindowPopoutTitle">Ego Chatroom</div>
          <iframe src="https://organizations.minnit.chat/420306182754595/c/Lobby?embed&nickname=" style="border:none;width:100%;height:30vmax;max-height:90vh;" allowTransparency="true"></iframe>
        `;
        togglePopup(popupContent);
      };
      
      const egoToggleChatroomButton = document.getElementById("egoToggleChatroom");
      egoToggleChatroomButton.addEventListener("click", toggleChatroom);



      const cookieClickerButton = document.querySelector('#CookieClickeGamer');

      cookieClickerButton.addEventListener('click', () => {
        const content = `
          <div class="EgoWindowPopoutTitle">Clicker Game</div>
          <div id="egoCookieClickerContainer"></div>
          <div style="display: flex; align-items: center; justify-content: center;">
            <div>Time: <span id="timer"></span></div>
            <div style="margin-left: 20px;">Score: <span id="score">0</span></div>
          </div>
          <div style="display: flex; align-items: center; justify-content: center; margin-top: 20px;">
            <div>Total clicked: <span id="totalCookiesClicked">0</span></div>
            <div style="margin-left: 20px;">Click status: <span id="clickStatus">-</span></div>
          </div>
          <div style="display: flex; align-items: center; justify-content: center; margin-top: 20px;">
            <button id="resetGameButton">Reset Game</button>
          </div>
        `;
        
        togglePopup(content);
      
        const MIN_SCORE = 10;
        const MAX_SCORE = 20;
        const COOKIE_SIZE = 50;
      
        let startTime = Date.now();
        let score = 0;
        let totalCookiesClicked = 0;
        let gameInterval;
        let cookieElement;
        let prevClickTimestamp = null;
        let totalClickDelayMs = 0;
        let clickCount = 0;
        let clickStatus = '-';
      
        const egoCookieClickerContainer = document.querySelector('#egoCookieClickerContainer');
        const scoreElement = document.querySelector('#score');
        const timerElement = document.querySelector('#timer');
        const resetGameButton = document.querySelector('#resetGameButton');
        const totalCookiesClickedElement = document.querySelector('#totalCookiesClicked');
        const clickStatusElement = document.querySelector('#clickStatus');
      
        function spawnCookie() {
          const randomX = Math.floor(Math.random() * (egoCookieClickerContainer.offsetWidth - COOKIE_SIZE));
          const randomY = Math.floor(Math.random() * (egoCookieClickerContainer.offsetHeight - COOKIE_SIZE));
          const cookie = document.createElement('div');
          cookie.setAttribute('class', 'cookie-element egoCookieClass');
          cookie.style.cssText = `
          position: absolute;
          top: ${randomY}px;
          left: ${randomX}px;
          width: ${COOKIE_SIZE}px;
          height: ${COOKIE_SIZE}px;
          background-color: #00e361;
          border-radius: 6vmax;
          box-shadow: -5px 3px 2mm 0px black, 
                      4px -5px 0mm 0px rgb(11 102 4 / 62%) inset, 
                      -8px 6px 2mm 0px rgb(170 255 162) inset;
          cursor: pointer;
          user-select: none;
      `;
          cookieElement = cookie;
          egoCookieClickerContainer.appendChild(cookieElement);
        }
      
        function startGame() {
          gameInterval = setInterval(() => {
            let elapsedTimeMs = Date.now() - startTime;
            let elapsedTimeStr = formatElapsedTime(elapsedTimeMs);
            timerElement.textContent = elapsedTimeStr;
          }, 100);
          spawnCookie();
        }
      
        function formatElapsedTime(ms) {
          const minutes = Math.floor(ms / 60000);
          const seconds = Math.floor((ms % 60000) / 1000);
          const milliseconds = Math.floor((ms % 1000) / 10);
      
          const minutesStr = String(minutes).padStart(2, '0');
          const secondsStr = String(seconds).padStart(2, '0');
          const millisecondsStr = String(milliseconds).padStart(2, '0');
      
          const elapsedTimeStr = `${minutesStr}:${secondsStr}:${millisecondsStr}`;
      
          return elapsedTimeStr;
        }
      
        function endGame() {
          clearInterval(gameInterval);
          egoCookieClickerContainer.removeChild(cookieElement);
          alert(`Game over! Your score is ${score}.`);
          resetGame();
        }
      
        function resetGame() {
          clearInterval(gameInterval);
          egoCookieClickerContainer.innerHTML = '';
          startTime = Date.now();
          score = 0;
          totalCookiesClicked = 0;
          clickStatus = '-';
          prevClickTimestamp = null;
          totalClickDelayMs = 0;
          clickCount = 0;
          scoreElement.textContent = score;
          totalCookiesClickedElement.textContent = totalCookiesClicked;
          clickStatusElement.textContent = clickStatus;
          startGame();
        }
      
        function updateClickStatus(clickDelayMs) {
          let hue = 0;
          const statusCount = 13;
          const hueStep = 120 / (statusCount - 1);
          if (clickDelayMs < 250) {
            clickStatus = 'Hacker!';
            hue = 120;
          } else if (clickDelayMs < 350) {
            clickStatus = 'Perfect!';
            hue = hueStep * 11;
          } else if (clickDelayMs < 450) {
            clickStatus = 'Awesome!';
            hue = hueStep * 10;
          } else if (clickDelayMs < 550) {
            clickStatus = 'Alright!';
            hue = hueStep * 9;
          } else if (clickDelayMs < 650) {
            clickStatus = 'Okay!';
            hue = hueStep * 8;
          } else if (clickDelayMs < 750) {
            clickStatus = 'Sure!';
            hue = hueStep * 7;
          } else if (clickDelayMs < 850) {
            clickStatus = 'Oh!';
            hue = hueStep * 6;
          } else if (clickDelayMs < 950) {
            clickStatus = 'K!';
            hue = hueStep * 5;
          } else if (clickDelayMs < 1050) {
            clickStatus = 'Um...';
            hue = hueStep * 4;
          } else if (clickDelayMs < 1150) {
            clickStatus = 'Yikes!';
            hue = hueStep * 3;
          } else if (clickDelayMs < 1250) {
            clickStatus = 'Sucks!';
            hue = hueStep * 2;
          } else if (clickDelayMs < 1350) {
            clickStatus = 'Horrible!';
            hue = hueStep * 1;
          } else {
            clickStatus = 'Terrible!';
            hue = 0;
          }
          const saturation = '80%';
          const lightness = '50%';
          clickStatusElement.style.color = `hsl(${hue}, ${saturation}, ${lightness})`;
          clickStatusElement.textContent = clickStatus;
        }

        startGame();
      
        egoCookieClickerContainer.addEventListener('mousedown', (event) => {
          if (event.target.classList.contains('egoCookieClass')) {
            egoCookieClickerContainer.removeChild(event.target);
            totalCookiesClicked++;
            totalCookiesClickedElement.textContent = totalCookiesClicked;
            score += Math.floor(Math.random() * (MAX_SCORE - MIN_SCORE) + MIN_SCORE);
            scoreElement.textContent = score;
            const cookies = document.querySelectorAll('.egoCookieClass');
            for (let i = 0; i < cookies.length; i++) {
              cookies[i].dataset.spawnTime = Date.now();
            }
            spawnCookie();
      
            clickCount++;
            const clickTimestamp = Date.now();
            if (prevClickTimestamp !== null) {
              const clickDelayMs = clickTimestamp - prevClickTimestamp;
              totalClickDelayMs += clickDelayMs;
              const averageClickDelayMs = totalClickDelayMs / clickCount;
              updateClickStatus(clickDelayMs);
              clickStatus += ` (${clickDelayMs}ms, average: ${averageClickDelayMs.toFixed(2)}ms)`;
              clickStatusElement.textContent = clickStatus;
            }
            prevClickTimestamp = clickTimestamp;
          }
        });
      
        resetGameButton.addEventListener('click', () => {
          resetGame();
        });
      });










      




      




      


  const egoMenuIcon = document.querySelector('.EgoMenuIcon');
  const egoMenuContent = document.querySelector('.EgoMenuContent');

  egoMenuIcon.addEventListener('click', () => {
  egoMenuContent.classList.toggle('EgoMenuContent--open');
  });

  const egoButton1 = document.querySelector('#EgoButton1');
  const egoButton2 = document.querySelector('#EgoButton2');
  const egoButton3 = document.querySelector('#EgoButton3');
  const egoButton4 = document.querySelector('#EgoButton4');
  const egoButton5 = document.querySelector('#EgoButton5');
  const egoPage1 = document.querySelector('#EgoPage1');
  const egoPage2 = document.querySelector('#EgoPage2');
  const egoPage3 = document.querySelector('#EgoPage3');
  const egoPage4 = document.querySelector('#EgoPage4');
  const egoPage5 = document.querySelector('#EgoPage5');
  const egoButton6 = document.querySelector('#EgoButton6');
const egoPage6 = document.querySelector('#EgoPage6');
  const fadeInDuration = 500;
  const fadeOutDuration = 300;
  
  function fadeIn(element, duration) {
    element.style.opacity = 0;
    element.style.display = 'block';
  
    let start = performance.now();
  
    function animate(timestamp) {
      let elapsed = timestamp - start;
      element.style.opacity = Math.min(1, (elapsed / duration));
      if (elapsed < duration) {
        requestAnimationFrame(animate);
      }
    }
  
    requestAnimationFrame(animate);
  }
  
  function fadeOut(element, duration) {
    element.style.opacity = 1;
  
    let start = performance.now();
  
    function animate(timestamp) {
      let elapsed = timestamp - start;
      element.style.opacity = Math.max(0, (1 - (elapsed / duration)));
      if (elapsed < duration) {
        requestAnimationFrame(animate);
      } else {
        element.style.display = 'none';
      }
    }
  
    requestAnimationFrame(animate);
  }
  
  egoButton1.addEventListener('click', () => {
    fadeOut(egoPage2, fadeOutDuration);
    fadeOut(egoPage3, fadeOutDuration);
    fadeOut(egoPage4, fadeOutDuration);
    fadeOut(egoPage5, fadeOutDuration);
    fadeOut(egoPage6, fadeOutDuration);
    fadeIn(egoPage1, fadeInDuration);
  });
  
  egoButton2.addEventListener('click', () => {
    fadeOut(egoPage1, fadeOutDuration);
    fadeOut(egoPage3, fadeOutDuration);
    fadeOut(egoPage4, fadeOutDuration);
    fadeOut(egoPage5, fadeOutDuration);
    fadeOut(egoPage6, fadeOutDuration);
    fadeIn(egoPage2, fadeInDuration);
  });
  
  egoButton3.addEventListener('click', () => {
    fadeOut(egoPage1, fadeOutDuration);
    fadeOut(egoPage2, fadeOutDuration);
    fadeOut(egoPage4, fadeOutDuration);
    fadeOut(egoPage5, fadeOutDuration);
    fadeOut(egoPage6, fadeOutDuration);
    fadeIn(egoPage3, fadeInDuration);
  });
  
  egoButton4.addEventListener('click', () => {
    fadeOut(egoPage1, fadeOutDuration);
    fadeOut(egoPage2, fadeOutDuration);
    fadeOut(egoPage3, fadeOutDuration);
    fadeOut(egoPage5, fadeOutDuration);
    fadeOut(egoPage6, fadeOutDuration);
    fadeIn(egoPage4, fadeInDuration);
  });
  
  egoButton5.addEventListener('click', () => {
    fadeOut(egoPage1, fadeOutDuration);
    fadeOut(egoPage2, fadeOutDuration);
    fadeOut(egoPage3, fadeOutDuration);
    fadeOut(egoPage4, fadeOutDuration);
    fadeOut(egoPage6, fadeOutDuration);
    fadeIn(egoPage5, fadeInDuration);
  });
  egoButton6.addEventListener('click', () => {
    fadeOut(egoPage1, fadeOutDuration);
    fadeOut(egoPage2, fadeOutDuration);
    fadeOut(egoPage3, fadeOutDuration);
    fadeOut(egoPage4, fadeOutDuration);
    fadeOut(egoPage5, fadeOutDuration);
    fadeIn(egoPage6, fadeInDuration);
  });

  
  var hoverAreaClass = "EgoMenuHoverArea";
  var hoverArea = document.querySelector("." + hoverAreaClass);
  
  hoverArea.classList.add("glow-effect", "fade-in");
  
  setTimeout(function() {
    hoverArea.classList.remove("fade-in");
    hoverArea.classList.add("fade-out");
    setTimeout(function() {
      hoverArea.classList.remove("glow-effect");
      hoverArea.classList.remove("fade-out");
    }, 800);
  }, 800);


} else {
  const errorPrefixes = [
    'Are you dumb? ',
    'Ummmm... ',
    'Seriously? ',
    'Sigh... ',
    'Oops! ',
    'Wait, what? ',
    'Well, well, well... ',
    'Nice one... ',
    'Use some braincells... ',
    'Did you leave your brain at home? ',
    'Yikes... ',
    'Uh... ',
    'Hello? ',
    'What the... ',
    'Are you kidding me? ',
    'I give up... ',
    'Never mind... ',
    'Oh, dear... ',
    'You\'re not serious... ',
    'Brace yourself... ',
    'I think I\'m going to be sick... ',
    'This is terrible... ',
    'What a mess... ',
    'Oh, no... ',
    'You\'re not helping... ',
    'Just great... ',
    'I can\'t believe this... ',
    'This is insane... ',
    'You\'re impossible... ',
    'Why can\'t you just leave me alone? ',
    'You\'re the worst... ',
    'I\'m going to die of embarrassment... ',
    'This is too much... ',
    'You\'re making me crazy... ',
    'I don\'t know what to do... ',
    'I\'m not sure I want to know... ',
    'Plz wait... forever!'
  ]; 
  
  const randomPrefix = errorPrefixes[Math.floor(Math.random() * errorPrefixes.length)];
  const errorMessage = randomPrefix + 'Ego Menu is already active. Hover over the bottom left corner for the Ego Menu to popup.';
  alert(errorMessage);
  return;
}
  
} catch (error) {
  const errorMessage = errorPrefixes[Math.floor(Math.random() * errorPrefixes.length)] + error.message;
  window.bookmarkletAlreadyOpened = false;

  const errorLocation = error.stack.match(/<anonymous>:(\d+):\d+/)[1]; 
  console.log("Error at line:", errorLocation);
  alert(errorMessage + "                                                                                                                                                                                           Most strict websites are SO LAME that they won't let 👁️Ego Menu load correctly. Try using a different website. 🤷‍♂️");
}
})();
