import './orderWidget.css'

export default function OrderWidget() {
    const Button =({type})=>{
        return <button className={'orderButton' + type}>{type}</button>
    }
  return (
    <div className='orderContainer'>
        <h3 className='orderTitle'>Latest Transaction</h3>
        <table className='orderTable'>
            <tr className='orderTr'>
                <th className='orderTh'>Customer</th>
                <th className='orderTh'>DAte</th>
                <th className='orderTh'>Product</th>
                <th className='orderTh'>Amount</th>
                <th className='orderTh'>Location</th>
                <th className='orderTh'>Status</th>
            </tr>
            <tr className='orderTr'>
                <td className='orderUser'>
                    <img src="https://s.alicdn.com/@sc04/kf/H03ae7475a47644b9b317f80d50fb54b8C.jpg_350x350.jpg" alt="" />
                    <span className='orderName'>Professional Dj Sound</span>
                </td>
                <td className='orderDate'>4 jan 2024</td>
                <td className='orderDate'>Samsung earphone</td>
                <td className='orderDate'>$404</td>
                <td className='orderDate'>USA</td>
                <td className='orderDate'><Button type='Approved'/></td>
            </tr>
            <tr className='orderTr'>
                <td className='orderUser'>
                    <img src="https://s.alicdn.com/@sc04/kf/Hede575430dc145b287814b3df9864ebdl.jpg_250x250xz.jpg" alt="" />
                    <span className='orderName'>earphone</span>
                </td>
                <td className='orderDate'>4 jan 2024</td>
                <td className='orderDate'>Samsung earphone</td>
                <td className='orderDate'>$404</td>
                <td className='orderDate'>USA</td>
                <td className='orderDate'><Button type='Approved'/></td>
            </tr>
            <tr className='orderTr'>
                <td className='orderUser'>
                    <img src="https://s.alicdn.com/@sc04/kf/H2820524b03e24c4da60dee9b0871c938z.jpg_250x250xz.jpg" alt="" />
                    <span className='orderName'>earphone</span>
                </td>
                <td className='orderDate'>4 jan 2024</td>
                <td className='orderDate'>Samsung earphone</td>
                <td className='orderDate'>$404</td>
                <td className='orderDate'>USA</td>
                <td className='orderDate'><Button type='Approved'/></td>
            </tr>
            <tr className='orderTr'>
                <td className='orderUser'>
                    <img src="https://s.alicdn.com/@sc04/kf/H031373d2ef8f4701a46b2b5f801deaa6P.jpg_350x350.jpg" alt="" />
                    <span className='orderName'>earphone</span>
                </td>
                <td className='orderDate'>4 jan 2024</td>
                <td className='orderDate'>Samsung earphone</td>
                <td className='orderDate'>$404</td>
                <td className='orderDate'>USA</td>
                <td className='orderDate'><Button type='Approved'/></td>
            </tr>
            <tr className='orderTr'>
                <td className='orderUser'>
                    <img src="https://s.alicdn.com/@sc04/kf/H306168eeb3264757b1c4a85cb5b3bf54l.png_350x350.jpg" alt="" />
                    <span className='orderName'>earphone</span>
                </td>
                <td className='orderDate'>4 jan 2024</td>
                <td className='orderDate'>Samsung earphone</td>
                <td className='orderDate'>$404</td>
                <td className='orderDate'>USA</td>
                <td className='orderDate'><Button type='Approved'/></td>
            </tr>
            <tr className='orderTr'>
                <td className='orderUser'>
                    <img src="https://s.alicdn.com/@sc04/kf/Ha4b2bf7271344502a63d3f6eee03c7a00.jpg_350x350.jpg" alt="" />
                    <span className='orderName'>earphone</span>
                </td>
                <td className='orderDate'>4 jan 2024</td>
                <td className='orderDate'>Samsung earphone</td>
                <td className='orderDate'>$404</td>
                <td className='orderDate'>USA</td>
                <td className='orderDate'><Button type='Approved'/></td>
            </tr>
            <tr className='orderTr'>
                <td className='orderUser'>
                    <img src="https://s.alicdn.com/@sc04/kf/A3388d2ad5184443c8c4293a4b785b5f9R.jpg_350x350.jpg" alt="" />
                    <span className='orderName'>earphone</span>
                </td>
                <td className='orderDate'>4 jan 2024</td>
                <td className='orderDate'>Samsung earphone</td>
                <td className='orderDate'>$404</td>
                <td className='orderDate'>USA</td>
                <td className='orderDate'><Button type='Approved'/></td>
            </tr>
            <tr className='orderTr'>
                <td className='orderUser'>
                    <img src="https://s.alicdn.com/@sc04/kf/U5ff8f10f1d08415fbf4e75c5198944124.jpg_350x350.jpg" alt="" />
                    <span className='orderName'>earphone</span>
                </td>
                <td className='orderDate'>4 jan 2024</td>
                <td className='orderDate'>Samsung earphone</td>
                <td className='orderDate'>$404</td>
                <td className='orderDate'>USA</td>
                <td className='orderDate'><Button type='Approved'/></td>
            </tr>
        </table>
    </div>
  )
}
