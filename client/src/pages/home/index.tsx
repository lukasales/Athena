import React from "react";
import { HomeContainer } from './styles';
import { LogoCITi } from '../../assets';


export const Home: React.FC = () => {
    return (<>
        <HomeContainer>
            <img src={LogoCITi} alt="" />
            <h1>Aspirante Giulyano Santos</h1>
            <p>
                Made with
                {' '}
                <strong>&lt; &#x0002F; &gt;</strong>
                {' '}
                and
                {' '}
                <strong>&hearts;</strong>
                {' '}
                by Giulyano Santos
            </p> 
          
        </HomeContainer>
       <h1>Teste</h1>
    </>);
}