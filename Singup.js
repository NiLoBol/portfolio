class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            password: '',
            name: '',
            phone: '',
            isSignup: false
        };
    }

    handleIdChange(e) {
        this.setState({ id: e.target.value });
    }

    handlePasswordChange(e) {
        this.setState({ password: e.target.value });
    }

    handleNameChange(e) {
        this.setState({ name: e.target.value });
    }

    handlePhoneChange(e) {
        this.setState({ phone: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(`Id: ${this.state.id} Password: ${this.state.password}`);
    }

    handleSignup() {
        this.setState({ isSignup: !this.state.isSignup });
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <label>
                        Id:
                        <input
                            type="text"
                            value={this.state.id}
                            onChange={(e) => this.handleIdChange(e)}
                        />
                    </label>
                    <br />
                    <label>
                        Password:
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={(e) => this.handlePasswordChange(e)}
                        />
                    </label>
                    <br />
                    {this.state.isSignup ? (
                        <div>
                            <label>
                                Name:
                                <input
                                    type="text"
                                    value={this.state.name}
                                    onChange={(e) => this.handleNameChange(e)}
                                />
                            </label>
                            <br />
                            <label>
                                Phone:
                                <input
                                    type="text"
                                    value={this.state.phone}
                                    onChange={(e) => this.handlePhoneChange(e)}
                                />
                            </label>
                            <br />
                        </div>
                    ) : null}
                    <button></button>
                </form>
            </div>
        )
    }
}
