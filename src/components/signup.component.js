import React, {Component} from "react";
import Select from "react-select";
import axios from "axios";


export default class SignUp extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectOptions: [],
            selectStates: [],
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
                    "name": d,
                    "abbreviation": d

                }))

                this.setState({selectStates: options})

            })

    }

    handleChange(e) {
        this.setState({occupations: e.occupations})
        this.setState({states:e.abbreviation})

    }

    componentDidMount() {
        this.getOptions()
        this.getStateOptions()
    }

    // render() {
    //     console.log(this.state.selectOptions)
    //     return (
    //         <div>
    //             <Select options={this.state.selectOptions} onChange={this.handleChange.bind(this)} />
    //             <p>You have selected <strong>{this.state.name}</strong> whose id is <strong>{this.state.id}</strong></p>
    //         </div>
    //     )
    // }
    render() {
        // const [cookies, setCookieCount] = useState('');
        // const endpoint = 'https://frontend-take-home.fetchrewards.com/form';

        console.log(this.state.selectOptions)
        console.log(this.state.getStateOptions)


        return (
            <form>
                <h3>Register</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name"/>
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name"/>
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email"/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password"/>
                </div>

                <div className="form-group">
                    <label>Choose an Occupation</label>
                    <Select options={this.state.selectOptions} onChange={this.handleChange.bind(this)}/>
                </div>

                <div className="form-group">
                    <label>Choose a State</label>
                    <Select options={this.state.selectStates} onChange={this.handleChange.bind(this)}/>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>

            </form>
        );
    }
}