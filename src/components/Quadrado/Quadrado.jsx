import './Quadrado.css';
import FotoX from '../../assets/FotoX.png';
import FotoO from '../../assets/FotoO.png';

export default function Quadrado({ value, onQuadrado }) {
    return (
        <button className="quadrado" onClick={onQuadrado}>
            {value === 'X' && <img src={FotoX} alt="X" className='imagemQuadrado'/>}
            {value === 'O' && <img src={FotoO} alt="O" className='imagemQuadrado'/>}
        </button>
    );
}