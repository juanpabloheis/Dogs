import { useDispatch, useSelector } from 'react-redux'
import { filterBy, orderBy } from '../../Actions/Index';
import './Filters.css'

export default function Filters() {
    const dispatch = useDispatch();
    const temperaments = useSelector(state => state.temperaments);

    function handleChangeFilter(e) {
        console.log({ 'Dispatch filterBy Comp Filter': e.target.value })
        dispatch(filterBy(e.target.value))
    }

    function handleChangeOrder(e) {
        console.log({ 'Dispatch orderBy Comp Filter': e.target.value })
        dispatch(orderBy(e.target.value))
    }

    return (
        <div className='containerFilter'>
            <div className='divFilter'>
                <label>Filter by: </label>
                <div>
                    <label>TEMPERAMENTS: </label>
                    <select className='inputFilter' onChange={handleChangeFilter} >
                        <option value='All temperaments' >All temperaments</option>
                        {
                            temperaments?.map((temp, index) => {
                                return (
                                    <option value={temp} key={index}>{temp}</option>
                                )
                            })
                        }
                    </select>
                </div>

                <div>
                    <label>ORIGIN: </label>
                    <select className='inputFilter' onChange={handleChangeFilter} >
                        <option value='All Dogs'>All dogs</option>
                        <option value='API'>API</option>
                        <option value='Created by User'>Created by User</option>
                    </select>
                </div>
            </div>

            <div className='divOrder'>
                <div>
                    <label>Order by: </label>
                    <label>ABC: </label>
                    <select className='inputOrder' onChange={handleChangeOrder} >
                        <option value='A-Z'>A-Z</option>
                        <option value='Z-A'>Z-A</option>
                    </select>
                </div>

                <div>
                    <label>WEIGHT: </label>
                    <select className='inputOrder' onChange={handleChangeOrder}>
                        <option value='- a +'>- a +</option>
                        <option value='+ a -'>+ a -</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

