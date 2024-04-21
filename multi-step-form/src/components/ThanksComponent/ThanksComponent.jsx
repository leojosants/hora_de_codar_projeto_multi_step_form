import {
    BsFillEmojiHeartEyesFill,
    BsFillEmojiSmileFill,
    BsFillEmojiNeutralFill,
    BsFillEmojiFrownFill
} from 'react-icons/bs';

import './ThanksComponent.css';

const emojiData = {
    very_satisfied: <BsFillEmojiHeartEyesFill />,
    satisfied: <BsFillEmojiSmileFill />,
    neutral: <BsFillEmojiNeutralFill />,
    unsatisfied: <BsFillEmojiFrownFill />
};

const ThanksComponent = (props) => {
    const { data } = props;

    return (
        <div className='class-thanks-container'>
            <h2>Falta pouco...</h2>

            <p>
                A sua opinião é muito importante, em breve você receberá um cupom
                de 10% de desconto para a sua próxima compra.
            </p>

            <p>Para concluir a avaliação, clique no botão ENVIAR abaixo</p>

            <h3>
                Aqui está o resumo da sua avaliação: {data.name}
            </h3>

            <p className='class-review-data'>
                <span>Satisfação com o produto:</span>
                {emojiData[data.review]}
            </p>

            <p className='class-review-data'>
                <span>Comentário: </span>
                {data.comment}
            </p>
        </div>
    );
};

export default ThanksComponent;