import { useState, useEffect } from 'react';
import Cards from '../Cards';
import { Row, Space } from 'antd';
import Spinner from './Spinner';

function Cardlist() {

    const [state, setState] = useState([])

    function onDelete(id) {
        console.log(id);
        const filtered = state.filter((item) => {
            return item.id !== id;
        })
        setState(filtered)
    }

    const datafetch = async () => {
        const fetching = await fetch(" https://jsonplaceholder.typicode.com/users")
        const response = await fetching.json();
        setState(response)
    }

    useEffect(() => {
        datafetch()
    }, [])



    return (state.length !== 0 ?
        <>
            <div className='block featureBlock ' style={{ marginLeft: "2%", marginRight: "2%" }} >
                <div className='container-fluid'>
                    <Row gutter={[16, 16]} justify="space-evenly">
                        <Space wrap >

                            {state.map((item, i) => {
                                return (
                                    <Cards key={i}
                                        id={item.id}
                                        name={item.name}
                                        email={item.email}
                                        phone={item.phone}
                                        website={item.website}
                                        onDelete={onDelete}

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