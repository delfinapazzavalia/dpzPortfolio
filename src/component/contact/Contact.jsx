import React from 'react';
import '../contact/Contact.css';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    // por ejemplo, haciendo una solicitud HTTP o ejecutando alguna función
    // para procesar los datos ingresados.
    console.log('Formulario enviado:', this.state);
    // Luego, puedes reiniciar el estado del formulario
    this.setState({
      name: '',
      email: '',
      message: '',
    });
  };

  render() {
    return (
      <div className="contact-form">
        <h2>Contacto</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />

          <label htmlFor="message">Mensaje:</label>
          <textarea
            id="message"
            name="message"
            value={this.state.message}
            onChange={this.handleInputChange}
          ></textarea>

          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}

export default Contact;
