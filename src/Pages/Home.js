import React, { Component } from 'react'
import Navjs from '../Components/Navbar'
//import CarouselImages from '../Components/Carousel'
import Footer from '../Components/Footer'
import ComoFuncionamos from '../Components/ComoFuncionamos'
import Que from '../Components/Que_es'
import '../Styles/estiloDetalles2.css'
import '../Styles/Home.css'

import Registrate from './Registrate'
import Comienza from './Comienza'

//para obtener el usuario que esta logeado
import { connect } from 'react-redux'

class Home extends Component {
    render() {
        return (
            <div className="contenedor_total">

                <Navjs id='navibari' home={'home'}></Navjs>
                <div className="subBody">
                    <div className='registro'>
                        {this.props.usuarioLog === '' && (
                            <Registrate />
                        )
                        }
                        {this.props.usuarioLog !== '' && (
                            <Comienza />
                        )
                        }

                    </div>
                    <div className="subsubbody3" >
                        <div className="box" >
                            <div className='box_content_center'>
                                <Que />
                            </div>
                        </div>
                        <div className="box" >
                            <div className='box_content_center'>
                                <ComoFuncionamos />
                            </div>
                        </div>
                        <div className='keren2'>
                            <Footer />
                        </div>
                    </div>


                </div>

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        usuarioLog: state.usuarioLog,
    }
}
export default connect(mapStateToProps)(Home);
