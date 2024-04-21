import {
    BsFillEmojiHeartEyesFill,
    BsFillEmojiSmileFill,
    BsFillEmojiNeutralFill,
    BsFillEmojiFrownFill
} from 'react-icons/bs';

import './ReviewFormComponent.css';

const emojiData = {
    very_satisfied: <BsFillEmojiHeartEyesFill />,
    satisfied: <BsFillEmojiSmileFill />,
    neutral: <BsFillEmojiNeutralFill />,
    unsatisfied: <BsFillEmojiFrownFill />
};

const ReviewFormComponent = (props) => {
    const { data, updateFieldHandler } = props;

    return (
        <div className='class-review-form'>
            <div className='class-form-control class-score-container'>
                <label className='class-radio-container'>
                    <input
                        type='radio'
                        name='review'
                        value='unsatisfied'
                        checked={data.review === 'unsatisfied'}
                        onChange={(event) => updateFieldHandler('review', event.target.value)}
                        required
                    />
                    {emojiData.unsatisfied}
                    <p>Insatisfeito</p>
                </label>

                <label className='class-radio-container'>
                    <input
                        type='radio'
                        name='review'
                        value='neutral'
                        checked={data.review === 'neutral'}
                        onChange={(event) => updateFieldHandler('review', event.target.value)}
                        required
                    />
                    {emojiData.neutral}
                    <p>Poderia ser melhor</p>
                </label>

                <label className='class-radio-container'>
                    <input
                        type='radio'
                        name='review'
                        value='satisfied'
                        checked={data.review === 'satisfied'}
                        onChange={(event) => updateFieldHandler('review', event.target.value)}
                        required
                    />
                    {emojiData.satisfied}
                    <p>Satisfeito</p>
                </label>

                <label className='class-radio-container'>
                    <input
                        type='radio'
                        name='review'
                        value='very_satisfied'
                        checked={data.review === 'very_satisfied'}
                        onChange={(event) => updateFieldHandler('review', event.target.value)}
                        required
                    />
                    {emojiData.very_satisfied}
                    <p>Muio satisfeito</p>
                </label>
            </div>

            <div className='class-form-control'>
                <label htmlFor='id-comment'>Comentário</label>
                <textarea
                    name='id-comment'
                    id='id-comment'
                    placeholder='Conte como foi a sua experiência com o produto...'
                    value={data.comment || ''}
                    onChange={(event) => updateFieldHandler('comment', event.target.value)}
                    required
                ></textarea>
            </div>
        </div>
    );
};

export default ReviewFormComponent;