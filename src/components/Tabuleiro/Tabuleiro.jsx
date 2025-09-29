import './Tabuleiro.css'
import Quadrado from "../Quadrado/Quadrado";
import { useState } from "react";
import FotoX from "../../assets/FotoX.png";
import FotoO from "../../assets/FotoO.png";

export default function Tabuleiro(){
    const [quadrados, setQuadrados] = useState(Array(9).fill(null));
    const [xProximo, setXProximo] = useState(true);

    function handleClick(i){

        if (quadrados[i] || vencedor(quadrados)) {
        return;
        }

        const nextQuadrado = quadrados.slice();

        if (xProximo){
            nextQuadrado[i] = "X";
        }else{
            nextQuadrado[i] = "O";
        }

        
        setQuadrados(nextQuadrado);
        setXProximo(!xProximo)
    }

    const venceu = vencedor(quadrados)
    let status;

    if (venceu){
        status = (
            <div className='titulo'>
                <h1>Vencedor é: </h1>
                <img 
                    className='imagemTitulo'
                    src={venceu === 'X' ? FotoX : FotoO} 
                    alt={'Vencedor ' + venceu}
                />
            </div>
        );
    } else {
        status = (
            <div className='titulo'>
                <h1>Agora é a vez do: </h1>
                <img 
                    className='imagemTitulo'
                    src={xProximo ? FotoX : FotoO} 
                    alt={xProximo ? "Player X" : "Player O"} 
                />
            </div>
        );
    }

    return(
        <main> 
            <h1>{status}</h1>
            <div className='tabuleiro'>             
                <div className="linha">
                    <Quadrado value={quadrados[0]}  onQuadrado={() => handleClick(0)}/>
                    <Quadrado value={quadrados[1]}  onQuadrado={() => handleClick(1)}/>
                    <Quadrado value={quadrados[2]}  onQuadrado={() => handleClick(2)}/>
                </div>
                <div className="linha">
                    <Quadrado value={quadrados[3]}  onQuadrado={() => handleClick(3)}/>
                    <Quadrado value={quadrados[4]}  onQuadrado={() => handleClick(4)}/>
                    <Quadrado value={quadrados[5]}  onQuadrado={() => handleClick(5)}/>
                </div>
                <div className="linha">
                    <Quadrado value={quadrados[6]}  onQuadrado={() => handleClick(6)}/>
                    <Quadrado value={quadrados[7]}  onQuadrado={() => handleClick(7)}/>    
                    <Quadrado value={quadrados[8]}  onQuadrado={() => handleClick(8)}/>
                </div>
            </div>
        </main>
    )
}

function vencedor(quadrados){
    const linhas = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    for (let i = 0; i < linhas.length; i++){
        const [a,b,c] = linhas[i];

        if (quadrados [a] && quadrados[a] === quadrados[b] && quadrados[a] === quadrados[c]){
            return quadrados[a];
        }
    }
    return null;
}