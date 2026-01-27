import CardHome from "../components/CardHome"

const Home = () => {
  return (
    <div className='container'>
      <h3 className='text-center mt-3 mb-4'>Gerenciamento de Interessados e Matrículas</h3>
      <div className="mx-3 mb-4">
        <div className="row">
          <div className="col-md-6 mb-3">
            <CardHome 
              headline='Interessados' 
              description='Gerencie interessados e veja suas informações'
              color='primary'
              textBtn1='Adicionar'
              textBtn2='Consultar'
              linkBtn1='/add_interessado'
              linkBtn2='/consultar_interessado'
            />
          </div>
          <div className="col-md-6 mb-3">
            <CardHome 
              headline='Matrículas' 
              description='Gerencie matrículas e veja suas informações'
              color='success'
              textBtn1='Adicionar'
              textBtn2='Consultar'
              linkBtn1='/add_matriculado'
              linkBtn2='/consultar_matriculado'
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <CardHome 
              headline='Gráficos de Atendimentos' 
              description='Visualize o número de atendimentos'
              color='primary'
              textBtn1='Atendimentos Totais'
              textBtn2='Atendimentos por Canal'
              linkBtn1='/grafico_total_interessado'
              linkBtn2='/grafico_canal_interessado'
            />
          </div>
          <div className="col-md-6 mb-3">
            <CardHome 
              headline='Gráficos de Matrículas' 
              description='Veja o progresso das matrículas'
              color='success'
              textBtn1='Matrículas Totais'
              textBtn2='Matrículas por Curso'
              linkBtn1='/grafico_total_matriculado'
              linkBtn2='/grafico_curso_matriculado'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home