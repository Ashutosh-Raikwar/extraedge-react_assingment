import { useState, useEffect } from 'react';
import Cards from '../Cards';
import { Row, Col } from 'antd';
import Spinner from './Spinner';
import PopUp from '../PopUp/PopUp';

function Cardlist() {
    const grid ={xs: 8, sm: 16, md: 24, lg: 32 }
    const [state, setState] = useState([])

    const datafetch = () => {
        fetch(" https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setState(data))
    }

    useEffect(() => {
        return () => {
            datafetch()
        }
    }, [])

    return ( state.length!=0?
        <>
        <PopUp />
        <div className='block featureBlock bgGold' style={{marginLeft:"2%",marginRight:"2%"}} >
            <div className='container-fluid'>
                <Row gutter={grid.sm} justify="space-evenly">

                    {state.map((item) => {
                        return (<Col span={6}  >
                            <Cards key={item.id} 
                            name={item.name} 
                            email={item.email} 
                            phone={item.phone}
                            website={item.website}
                            />
                        </Col>)
                    })}

                </Row>
            </div>
        </div>
        </>
        :

        <Spinner />
    )
}

export default Cardlist;