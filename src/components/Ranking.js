import React, { Component } from 'react'
import axios from 'axios'
import Badge from 'material-ui/Badge';
import FooterApp from './FooterApp';

class Ranking extends Component {
    constructor(props) {
        super(props)

        this.state = {
            participantes: []
        }
        this.getParticipants = this.getParticipants.bind(this)

        this.getParticipants()
    }

    getParticipants() {
        const BASE_URL = 'https://wcbet-br.mybluemix.net'
        const BASE_URL_DEV = 'http://localhost:6003'
        const url = `${BASE_URL_DEV}/api/participante/lista`

        axios.get(url)
            .then(result => {
                this.setState({
                    participantes: result.data
                })
            })
    }

    render() {
        console.log(this.state.participantes[0])
        return (
            <div>
                <h2>Rankings <i class="material-icons">face</i></h2>
                <ul>
                    {
                        this.state.participantes.map(user => {
                            return <li key={user.IDPARTICIPANTES}>
                                <Badge badgeContent={user.PONTOS} primary={true}>
                                    {user.NOME}
                                </Badge>
                            </li>
                        })
                    }
                </ul>
                <FooterApp />
            </div>
        )
    }
}

export default Ranking