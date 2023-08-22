import './pagina.css'
function Pagina() {

    function primaryRequest() {
        const valores= fetch('https://opentdb.com/api.php?amount=30&category=18').then(arroz=>{

        arroz.json().then(feijao=>{
  
            console.log(feijao.data)
            
            var btn=document.querySelector('#botao')

            btn.addEventListener('click',()=>{
                    var legenda = document.querySelector('#legenda')

                    img.src=feijao.data.infos[Math.floor(Math.random()*100)].url
                    legenda()

            })

        }) 
  
        })
          
    }
    return( 
        <>
        <div class="header">
            <h1>oi</h1>
        </div>

        <div>
            <button onClick={primaryRequest()} id="botao">CLICK !! !!</button>
        </div>

        <div>
            <figure>
                <figcaption id="legenda">oi</figcaption>
            </figure>
                
        </div>
        <div class="Rodape">
            <h1>Felipe Viegas e Prof.Sandra</h1>
        </div>
        </>
    )
}
export default Pagina