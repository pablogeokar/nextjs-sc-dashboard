import { Container } from './styles'
import { useState } from 'react';
import { useRouter } from 'next/router'

export default function Login() {
  const [signUpMode, setSignUpMode] = useState(false)
  const router = useRouter()

  const preventDefault = f => e => {
    e.preventDefault()
    f(e)
  }

  function handleSignUpMode() {
    setSignUpMode(!signUpMode)
  }

  const handleLogin = preventDefault(() => {
    router.push({
      pathname: '/'
    })
  })

  return (
    <Container>
      <div className={signUpMode ? 'container sign-up-mode' : 'container'}>
        <div className="forms-container">
          <div className="signin-signup">
            <form onSubmit={handleLogin} className="sign-in-form">
              <h2 className="title">Login</h2>
              <div className="input-field">
                <i className="las la-envelope"></i>
                <input type="text" placeholder="E-mail" />
              </div>
              <div className="input-field">
                <i className="las la-lock"></i>
                <input type="password" placeholder="Senha" />
              </div>

              <input type="submit" value="Acessar" className="btn solid" onClick={handleLogin} />
              <p className="social-text">Ou acesse com as redes sociais</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <i className="lab la-facebook-f"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="lab la-twitter"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="lab la-google"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="lab la-linkedin-in"></i>
                </a>
              </div>
            </form>
            <form action="#" className="sign-up-form">
              <h2 className="title">Cadastrar</h2>
              <div className="input-field">
                <i className="las la-user"></i>
                <input type="text" placeholder="Nome" />
              </div>
              <div className="input-field">
                <i className="las la-envelope"></i>
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-field">
                <i className="las la-lock"></i>
                <input type="password" placeholder="Senha" />
              </div>
              <input type="submit" className="btn" value="Cadastrar" />
              <p className="social-text">Ou cadastre-se com as redes sociais</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <i className="lab la-facebook-f"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="lab la-twitter"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="lab la-google"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="lab la-linkedin-in"></i>
                </a>
              </div>
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>Novo por aqui ?</h3>
              <p>
                Faça o seu cadastro rápido e descomplicado
              </p>
              <button className="btn transparent" onClick={handleSignUpMode}>
                Cadastrar
              </button>
            </div>
            <img src="imgs/login/img1.svg" className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>Já é cadastrado ?</h3>
              <p>
                Acesse o formulário de login
              </p>
              <button className="btn transparent" onClick={handleSignUpMode}>
                Sign in
              </button>
            </div>
            <img src="imgs/login/img2.svg" className="image" alt="" />
          </div>
        </div>
      </div>
    </Container>
  )
}
