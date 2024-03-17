import Chart from '../../components/chart/Chart'
import Featured from '../../components/featured/Featured'
import './home.css'

export default function Home() {
  return (
    <div className="homeContainer">
        <Featured/>
        <div className='chartAnalyticWidget'>
          <Chart/>
        </div>
    </div>
  )
}
