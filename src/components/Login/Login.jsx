import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from "./../common/FormsControls/FormsControls.module.css"

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log("login")
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const LoginForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={"Email"} name={"email"} component={"input"}/>
                </div>
                <div>
                    <Field placeholder={"Password"} type={"password"} name={"password"} component={"input"}/>
                </div>
                <div>
                    <Field type={"checkbox"} name={"rememberMe"} component={"input"}/> remember me
                </div>
                { props.error && <div className={style.formSummaryError}>
                    {props.error}
                </div>
                }
                <div>
                    <button>
                        Login
                    </button>
                </div>
            </form>
        </div>
    )
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect (mapStateToProps, {login}) (Login)
