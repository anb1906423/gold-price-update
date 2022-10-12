import '../asset/css/login.css';
import { useContext } from 'react';
import { LoginContext } from '../App';

function Login() {
    const { setLoginMount, setLogin } = useContext(LoginContext);
    return (
        <div id="login">
            <div className="login-box">
                <button id="closeBox" className="btn" onClick={() => setLoginMount(false)}>
                    &times;
                </button>
                <div className="login-title">ĐĂNG NHẬP</div>
                <div className="login-form">
                    <form>
                        <div className="form-group">
                            <label className="form-control-label">USERNAME</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label className="form-control-label">PASSWORD</label>
                            <input type="password" className="form-control" />
                        </div>
                        <div class="loginbttm">
                            <div class="login-btm login-text"></div>
                            <div class="login-btm login-button">
                                <button
                                    type="submit"
                                    class="btn btn-outline-primary"
                                    onClick={() => {
                                        setLoginMount(false);
                                        setLogin(true);
                                    }}
                                >
                                    LOGIN
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
