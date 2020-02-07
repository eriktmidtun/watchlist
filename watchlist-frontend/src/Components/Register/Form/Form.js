import React, { Component } from 'react';
import classNames from 'classnames';
import './Form.css';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            nameValid: false,
            email: '',
            emailValid: false,
            phone: '',
            phoneValid: false,
            areacode: '',
            areacodeValid:false,
            comment: '',
            submited: false,
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(event) {
        
        
        console.log("test");

        // er input valid?
        if (this.state.nameValid && this.state.emailValid && this.state.phoneValid && this.state.areacode) {

            /* const data = new FormData(event.target) */ // fikk ikke formdata til å funke helt, valgte å bruke JSON isteded
            //data som skal sjekkes på backend
            const data = {
                "name": this.state.name,
                'applicant': 'Erik Turøy Midtun',
                "email": this.state.email,
                "phone": this.state.phone,
                "areacode": this.state.areacode,
                "comment": this.state.comment
            }
            
            console.log(data)
            fetch('http://localhost:5000/', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
              }).then(response => response.json())
                .then(data => console.log(data));
        }
        else {
            // gir feilmelding i form av farger på inputboks
            this.setState({submited:true})
            /* console.log("Input not valid") */
        }
        event.preventDefault();
    }

    /* Tar inn keyboard event, validerer input og oppdaterer states  */
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        console.log(name,value);
        this.setState({
          [name]: value
        });
        //trenger ingen validering på textarea
        if (target.type !== 'textarea') {
            //regexp patterns
            const patterns = {
                name: /[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{0,100}$/, //stor bokstav som første bokstav i hvert navn
                phone: /^\d{8,10}$/,
                areacode: /^\d{4}$/,
                email: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
                //regexp med unicode support, siden vi er i norge og kan bruke ø æ å
            };
            //oppdater valideringene
            this.setState({[name + 'Valid']: patterns[name].test(value)});
            /* console.log(patterns[name].test(value)) 
            console.log(classNames({vtrue: this.state.nameValid , vfalse: !this.state.nameValid}));  */
        }
    }
    /* gir rett classnames til de ulike inputene basert på states */
    handleClassNames(input) {
        const emptyInput = this.state[input].length === 0;
        return classNames('input',{
            vtrue: this.state[input + 'Valid'] && !emptyInput ,
            vfalse: (!this.state[input + 'Valid'] && !emptyInput) || (emptyInput && this.state.submited)
        });
    }

    render() {
        return (
        <div className={"container"}>
            <h2>Informasjon</h2>
            <form className={"form"} onSubmit={this.handleSubmit}>
                <label>Navn</label>
                <input className={this.handleClassNames('name')} 
                        type="text" name="name" value={this.state.name} onChange={this.handleInputChange} placeholder="Ola Nordmann" />
                <input type="hidden" name="applicant" value="Erik Turøy Midtun" />
                <label>E-post</label>
                <input className={this.handleClassNames('email')} 
                        type="email" name="email" value={this.state.email} onChange={this.handleInputChange} placeholder="navn@domene.no" />
                <label>Telefon</label>
                <input className={this.handleClassNames('phone')} 
                        type="tel" name="phone" value={this.state.phone} onChange={this.handleInputChange} placeholder="XXXXXXXX" />
                <label>Postnummer</label>
                <input className={this.handleClassNames('areacode')} 
                        type="number" name="areacode" value={this.state.areacode} onChange={this.handleInputChange} max="9999" placeholder="1234"/>
                <label>Kommentar</label>
                <textarea name="comment" value={this.state.comment} onChange={this.handleInputChange} ></textarea>
                <button className={"button"} type="submit">Send inn!</button>
            </form>
            <p className="error">{this.state.submited? 'En eller flere av feltene har en feil': ' '}</p>
        </div>
        );
    };
  
}

export default Form;