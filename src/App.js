import logo from './logo.svg';
import './App.css';
import styled from "@emotion/styled" //<--これ
import { css } from '@emotion/css';//<--これ
import tw from "twin.macro";//<--これ

function App() {
  const EmotionCSSbluetext=css`${tw`text-blue-400`}`;
  const EmotionStyled = styled.p`${tw`text-4xl`}`
  const BaseFontSize =css `${tw`text-sm text-yellow-600 lg:text-4xl`}`//<--これ
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p className={BaseFontSize}>toretate</p>{/*<--これ*/}
        <p className={EmotionCSSbluetext}>EmotionCSSbluetext</p>
<EmotionStyled>EmotionStyled</EmotionStyled>
      </header>
    </div>
  );
}

export default App;
