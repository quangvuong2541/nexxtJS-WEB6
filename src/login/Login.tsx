import React from "react";
import { onChange, validateForm } from "./utils";

class LoginComponent extends React.Component<any, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            email: { name: "email", value: "", require: true, error: '' },
            password: { name: "password", value: "", require: true, error: '' },
            rememberMe: { name: "rememberMe", value: false, require: false, error: '' }
        }

    }

    render() {
        const { email, password, rememberMe } = this.state;
        return (
            <div className="container-fluid"  >
                <form onSubmit={this.onSubmit} className="login-box bg-light br-3">
                    <div className="row" >
                        <div className="col-12" >
                            <div className="p-3" >
                                <h1 className="font-weight-bold">Login</h1>
                                <p className="mb-0">Login with your </p>
                            </div>
                        </div>
                        <div className="col-12" >
                            <div className="px-3" >
                                <div className="form-group" >
                                    <label >Email</label>
                                    <input
                                        name={email.name}
                                        value={email.value}
                                        onChange={this.onChange}
                                        className={email.error.length > 0 ? "form-control is-invalid" :
                                            (email.value.length > 0 ? "form-control is-valid" : "form-control")
                                        }
                                        type="email"
                                        placeholder="enter your email"
                                    />
                                </div>
                            </div>
                            <div className="form-group" >
                                <label >PassWord</label>
                                <input
                                    name={password.name}
                                    value={password.value}
                                    onChange={this.onChange}
                                    className={password.error.length > 0 ? "form-control is-invalid" :
                                        (password.value.length > 0 ? "form-control is-valid" : "form-control")
                                    }
                                    type="password"
                                    placeholder="enter your password"
                                />
                            </div>
                        </div>
                    </div>
                    <div  >
                        <input type="checkbox"
                            name={rememberMe.name}
                            value={rememberMe.value}
                            onChange={this.onChange}
                            className="form-check-input"

                        />
                        remember me
                    </div>


                    <div className="col-6" >
                        <div className="p-3 text-right" >
                            <button type="submit" className="btn btn-primary" >Submit</button>

                        </div>
                    </div>
                </form>
            </div>
        )
    }
    onChange = (e: any) => {
        const name = e.target.name;
        let value = e.target.value;
        if (name === this.state.rememberMe.name) {
            value = e.target.checked
        }
        onChange(this, name, value)
    }
    onSubmit = (e: any) => {
        e.preventDefault()
        if (validateForm(this)) {
            
            const { email, password, rememberMe } = this.state
            const model = {
                email: email.value,
                password: password.value,
                rememberMe: rememberMe.value
            }
            console.log(model);

        }
    }
}
export default LoginComponent