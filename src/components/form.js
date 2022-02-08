import React, {Component} from "react";
import Select from "react-select";
import axios from "axios";


export default class Form extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectOptions: [],
            selectStates: [],
            fullName: "",
            email: "",
            password: "",
            occupation: "",
            state: "",
        }
    }

    getOptions() {
        axios.get('https://frontend-take-home.fetchrewards.com/form')
            .then((res) => {

                const occ = res.data?.occupations;

                const options = occ && occ.map(d => ({
                    "value": d,
                    "label": d

                }))

                console.log(options)

                this.setState({selectOptions: options})

            })

    }

    getStateOptions() {
        axios.get('https://frontend-take-home.fetchrewards.com/form')
            .then((res) => {

                const states = res.data?.states;

                const options = states && states.map(d => ({
                    "value": d.name,
                    "label": d.name

                }))

                console.log(options);

                this.setState({selectStates: options})

            })

    }

    handleChange = (name, value) => {
        this.setState({[name]: value});
        console.log(name, value)

    }

    handleSubmit = event => {
        event.preventDefault();

        const data = {
            name: this.state.fullName,
            email: this.state.email,
            password: this.state.password,
            occupation: this.state.occupation,
            state: this.state.state,
        };
        axios.post(`https://frontend-take-home.fetchrewards.com/form`, data)
            .then(res => {
                console.log(res);
                console.log(res.data);
                // return(res.data);
            })
        console.log(data)

    }

    componentDidMount() {
        this.getOptions()
        this.getStateOptions()
    }

    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Create User</h3>

                <div className="form-group">
                    <label>Full name</label>
                    <input type="text"
                           name="fullName"
                           value={this.state.name}
                           className="form-control"
                           placeholder="Full name"
                           onChange={(e) => this.handleChange(e.target.name, e.target.value)}/>
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email"
                           name="email"
                           className="form-control"
                           placeholder="Enter email"
                           value={this.state.name}
                           onChange={(e) => this.handleChange(e.target.name, e.target.value)}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password"
                           name="password"
                           className="form-control"
                           placeholder="Enter password"
                           value={this.state.name}
                           onChange={(e) => this.handleChange(e.target.name, e.target.value)}/>
                </div>

                <div className="form-group">
                    <label>Choose your Occupation</label>
                    <Select options={this.state.selectOptions}
                            value={this.state.name}
                            onChange={(e) => this.handleChange("occupation", e.value)}/>
                </div>

                <div className="form-group">
                    <label>Choose your State</label>
                    <Select options={this.state.selectStates}
                            value={this.state.name}
                            onChange={(e) => this.handleChange("state", e.value)}/>
                </div>

                <button type="submit" onSubmit={this.handleSubmit} className="btn btn-dark btn-lg btn-block">Submit
                </button>

            </form>
        );
    }
}