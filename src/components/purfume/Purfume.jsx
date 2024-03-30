import {Link} from "react-router-dom";


export function Purfume () {
    return (
      <section className="flex mt-20 mb-20">
          <div className="purfume-left">
              <button className="purfume-left-btn">ПАРФЮМ</button>
              <h3 className="purfume-left-title">Maison <br/>
                  Francis Kurkdjian <br/> Baccarat Rouge 540</h3>
              <div  className="purfume-left-text border-solid border-b border-gray-32 ">
                  <Link to={'#'}>смотреть</Link>
              </div>
          </div>
          <div className="purfume-right">
              <button className="purfume-right-btn">запах месяца</button>
              <h3 className="purfume-right-title">Dr.Vranjes <br/>
                  Rosso Nibile</h3>
              <div className="purfume-right-text border-solid border-b border-gray-32 ">
                  <Link to={'#'}>смотреть</Link>
              </div>
          </div>
      </section>
    )
}