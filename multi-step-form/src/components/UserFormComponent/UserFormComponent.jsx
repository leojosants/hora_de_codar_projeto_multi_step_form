import './UserFormComponent.css';

const UserFormComponent = (props) => {
    const { data, updateFieldHandler } = props;

    return (
        <div>
            <div className='class-form-control'>
                <label htmlFor='id-name'>Nome</label>
                <input
                    type='text'
                    name='name'
                    id='id-name'
                    placeholder='Digite o nome...'
                    value={data.name || ''}
                    onChange={(event) => updateFieldHandler('name', event.target.value)}
                    required
                />
            </div>

            <div className='class-form-control'>
                <label htmlFor='id-email'>E-mail</label>
                <input
                    type='email'
                    name='email'
                    id='id-email'
                    placeholder='email@email.com'
                    value={data.email || ''}
                    onChange={(event) => updateFieldHandler('email', event.target.value)}
                    required
                />
            </div>
        </div>
    );
};

export default UserFormComponent;