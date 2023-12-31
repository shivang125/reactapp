import { useState } from 'react';
import ReactLoading from 'react-loading';
import { useParams } from 'react-router-dom';
import Category from '../components/Category/Category';

const CategoryView = () => {
    const param = useParams()
    const [ Items, setItems ] = useState()
    // const [ womenItems, setWomenItems ] = useState()
    // const [ kidsItems, setKidsItems ] = useState()
    const [ loading , setLoading ] = useState(true) 

    // useEffect(() => {
    //     axios.get("https://shema-backend.vercel.app/api/items")
    //         .then(res => {
    //             setMenItems(res.data.filter((item) => item.category === "men"))
    //             setKidsItems(res.data.filter((item) => item.category === "kids" ))
    //             setWomenItems(res.data.filter((item) => item.category === "women")) 
    //             setLoading(false)
    //         })
    //         .catch(err => console.log(err))

    //     window.scrollTo(0, 0)
    // }, [param.id])
    
    return ( 
        <div className='d-flex min-vh-100 w-100 justify-content-center align-items-center m-auto'>
            {loading && <ReactLoading type="balls" color='#FFE26E' height={100} width={100} className='m-auto'/>}
            { Items && param.id === 'men' && <Category name="Men's Fashion" items={Items} category="jewelry"/>}
            {/* { womenItems && param.id === 'kids' && <Category name="Kids Fashion" items={kidsItems} category="perls"/>}
            { kidsItems && param.id === 'women' && <Category name="Women's Fashion" items={womenItems} category="perls"/>} */}
        </div>
     );
}
 
export default CategoryView;