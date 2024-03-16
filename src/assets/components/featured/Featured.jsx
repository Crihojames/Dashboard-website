import './featured.css'
import { ArrowDownward, KeyboardArrowUp, TrendingUp, ArrowUpward } from '@mui/icons-material'

export default function Featured() {
  return (
    <div className='featured'>
        
        <div className='featuredItem'>
            <span className='featuredTitle'>Revenue</span>
            <div className='featuredMoneyContainer'>
                <span className='featuredMoney'>$313545</span>
                <span className='featuredMoneyRate'>-12.4
                <KeyboardArrowUp className='featuredIconUp'/>
                </span>
            </div>
            <span className='featuredSub'>compare to last sales </span>
        </div>

        <div className='featuredItem'>
            <span className='featuredTitle'>Sales</span>
            <div className='featuredMoneyContainer'>
                <span className='featuredMoney'>$313545</span>
                <span className='featuredMoneyRate'>-12.4
                <TrendingUp className='featuredIconUp'/>
                </span>
            </div>
            <span className='featuredSub'>compare to last sales </span>
        </div>

        <div className='featuredItem'>
            <span className='featuredTitle'>Returns</span>
            <div className='featuredMoneyContainer'>
                <span className='featuredMoney'>$574839</span>
                <span className='featuredMoneyRate'>-20.4
                <ArrowDownward className='featuredIconUp negative'/>
                </span>
            </div>
            <span className='featuredSub'>compare to last sales </span>
        </div>

        <div className='featuredItem'>
            <span className='featuredTitle'>Profit</span>
            <div className='featuredMoneyContainer'>
                <span className='featuredMoney'>$9895</span>
                <span className='featuredMoneyRate'>-32.4
                <ArrowUpward className='featuredIconUp positive'/>
                </span>
            </div>
            <span className='featuredSub'>compare to last sales </span>
        </div>

    </div>
  )
}
