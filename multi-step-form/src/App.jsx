import {
  GrFormNext,
  GrFormPrevious
} from 'react-icons/gr';

import { FiSend } from 'react-icons/fi';

import StepsComponent from './components/StepsComponent/StepsComponent.jsx';
import UserFormComponent from './components/UserFormComponent/UserFormComponent.jsx';
import ReviewFormComponent from './components/ReviewFormComponent/ReviewFormComponent.jsx';
import ThanksComponent from './components/ThanksComponent/ThanksComponent.jsx';

import { UserFormCustomHook } from './customHooks/UserFormCustomHook.jsx';
import { useState } from 'react';

import './App.css';

const formTemplate = {
  name: '',
  email: '',
  review: '',
  comment: ''
};

function App() {
  const [data, setData] = useState(formTemplate);

  const updateFieldHandler = (key, value) => {
    setData(
      (prev) => {
        return {
          ...prev,
          [key]: value
        }
      }
    );
  };

  const formComponents = [
    <UserFormComponent
      data={data}
      updateFieldHandler={updateFieldHandler}
    />,

    <ReviewFormComponent
      data={data}
      updateFieldHandler={updateFieldHandler}
    />,

    <ThanksComponent
      data={data}
    />
  ];

  const {
    currentStep,
    currentComponent,
    changesStep,
    isFisrtStep,
    isLastStep
  } = UserFormCustomHook(formComponents);

  return (
    <div className='class-app'>
      <div className='class-header'>
        <h2>Deixe sua avaliação</h2>

        <p>
          Ficamos felizes com a sua compra, utilize o formulário para avaliar o produto.
        </p>
      </div>

      <div className='class-form-container'>
        <StepsComponent currentStep={currentStep} />

        <form onSubmit={(event) => changesStep(currentStep + 1, event)}>
          <div className='class-inputs-container'>
            {currentComponent}
          </div>

          <div className='class-actions'>
            {
              !isFisrtStep && (
                <button type='button' onClick={() => changesStep(currentStep - 1)}>
                  <GrFormPrevious />
                  <span>Voltar</span>
                </button>
              )
            }

            {
              !isLastStep
                ? (
                  <button type='submit'>
                    <span>Avançar</span>
                    <GrFormNext />
                  </button>
                )
                : (
                  <button type='button'>
                    <span>Enviar</span>
                    <FiSend />
                  </button>
                )
            }
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;