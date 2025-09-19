import './Cadastro.css'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

function Cadastro() {
    const schema = yup.object({
        name: yup.string().required('O nome é obrigatório!'),
        email: yup.string().email('Informe um email válido!').required('O email é obrigatório!'),
        password: yup.string().min(6, 'Tamanho mínimo: 6 caracteres').required('A senha é obrigatória!')
    }).required()

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })


    function enviar(data) {
        console.log(data)
    }

    
    return (
        <div className='cadastro-container'>
            <form className="cadastro-box" onSubmit={handleSubmit(enviar)}>
                <h2>Cadastrar-se:</h2>

                <div className="input-group">
                    <span className="icon">👤</span>
                    <input type="text" placeholder="Nome:" {...register('name', { required: true })} />
                </div>
                 <span className='ooo'>{errors.name?.message}</span>

                <div className="input-group">
                    <span className="icon">📧</span>
                    <input type="email" placeholder="Email:" {...register('email', { required: true })} />
                </div>
                 <span className='ooo'>{errors.email?.message}</span>

                <div className="input-group">
                    <span className="icon">🔒</span>
                    <input type="password" placeholder="Senha:" {...register('password', { required: true })} />
                </div>
                 <span className='ooo'>{errors.password?.message}</span>

                <button type="submit" className="login-btn">Cadastrar</button>
            </form>
        </div>
    )
}

export default Cadastro
