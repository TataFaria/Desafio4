import styles from './Project.module.css'
import Card from '../elements/Card'
import FristPage from '../imagens/FristPage.svg'
import Challenge1 from '../imagens/Challenge1.svg'
import Challenge2 from '../imagens/Challenge2.svg'

function Project() {
    return (
       <div className={styles.Project} id='Project'>
            <h1>Projetos</h1>
            <Card
               img={FristPage} 
               title='LP-DNC'
               tech='HTML,CSS e JS'
               description='Meu primeiro projeto de programação foi uma página web simples que desenvolvi como parte do meu curso introdutório de programação. 
                            Utilizei HTML para estruturar o conteúdo da página, CSS para estilizar e dar um design atraente. '
               repor='https://github.com/TataFaria/projeto-lading-page'
               site='https://projeto-lading-page.vercel.app/'
            />
            <Card
                img={Challenge1} 
                title='Primeiro Desafio'
                tech='HTML,CSS e JS'
                description='O meu primeiro desafio avaliativo no curso de programação foi uma experiência emocionante e desafiadora.
                            Foi a primeira vez que tive a oportunidade de aplicar os conhecimentos adquiridos de forma independente, sem a orientação 
                            direta do instrutor. O desafio consistia em construir uma landing page para uma empresa de arquitetura. '
                repor='https://github.com/TataFaria/projeto-desafio1'
               site='https://projetodesafio1-dnc.netlify.app/'
            />
            <Card
                img={Challenge2} 
                title='Segundo Desafio'
                tech='HTML,CSS e JS'
                description='No segundo desafio avaliativo do curso, fomos desafiados a explorar o mundo das APIs 
                            para resolver um problema específico: coletar informações do CEP e obter previsões meteorológicas com 
                            base na latitude e longitude fornecidas. Foi uma experiência empolgante e enriquecedora, pois nos permitiu 
                            aplicar nossas habilidades de programação de forma prática e realista.'
                repor='https://github.com/TataFaria/Desafio2-Dnc'
                site='https://desafio2-dnc-omega.vercel.app/'
            /> 
       </div>
    )
}

export default Project