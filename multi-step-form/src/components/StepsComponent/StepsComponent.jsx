import {
    AiOutlineUser,
    AiOutlineStar,
} from 'react-icons/ai';

import { FiSend } from 'react-icons/fi';

import './StepsComponent.css';

const StepsComponent = (props) => {
    const { currentStep } = props;

    return (
        <div className='class-steps'>
            <div className='class-step class-active'>
                <AiOutlineUser />
                <p>Identificação</p>
            </div>

            <div className={`class-step ${currentStep >= 1 ? 'class-active' : ''}`}>
                <AiOutlineStar />
                <p>Avaliação</p>
            </div>

            <div className={`class-step ${currentStep >= 2 ? 'class-active' : ''}`}>
                <FiSend />
                <p>Envio</p>
            </div>
        </div>
    );
};

export default StepsComponent;