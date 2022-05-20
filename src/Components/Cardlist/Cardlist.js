import { useState, useEffect } from 'react';
import Cards from '../Cards';
import { Row,Space } from 'antd';
import Spinner from './Spinner';
import PopUp from '../PopUp/PopUp';


function Cardlist() {
    
    const [state, setState] = useState([])
    
    const datafetch = async() => {
        const fetching = await fetch(" https://jsonplaceholder.typicode.com/users")
        const response =await fetching.json();
        setState(response)
    }

    useEffect(() => {
        datafetch()
        
    }, [])

    return ( state.length!==0?
        <>
        <PopUp />
        <div className='block featureBlock ' style={{marginLeft:"2%",marginRight:"2%"}} >
            <div className='container-fluid'>
                <Row gutter={[16, 16]} justify="space-evenly">
                <Space wrap >
                
                    {state.map( (item,i) => {
                        return(
                            <Cards key={i}
                            name={item.name} 
                            email={item.email} 
                            phone={item.phone}
                            website={item.website}
                            />
                            )
                    })}
                    
                    </Space>
                </Row>
            </div>
        </div>
        </>
        :

        <Spinner />
    )
}

export default Cardlist;