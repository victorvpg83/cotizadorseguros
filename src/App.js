import React, {useState} from 'react';
import Header from './components/Header'
import Form from './components/Form'
import Resume from './components/Resume'
import styled from '@emotion/styled'
import Result from './components/Result'
import Spinner from './components/Spinner'

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`
const ContainerForm = styled.div`
  background-color: #FFF;
  padding: 3rem;
`

function App() {

  const [resume, saveResume] = useState({
    cotization: 0,

  })

  const [loading, saveLoading] = useState(false)
 
  const {cotization, data} =resume

  return (
    <Container>
      <Header title='Cotizador de seguros'/>
      <ContainerForm>
        <Form saveResume={saveResume} saveLoading={saveLoading} />
        {loading ? <Spinner />:null}
        {data? <Resume data={data} /> : null}
        {data? <Result cotization={cotization} />: null}
         
      </ContainerForm>
    </Container>
  );
}

export default App;
