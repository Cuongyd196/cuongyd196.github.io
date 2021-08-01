import React, {useEffect, useState} from 'react';
import  {getById}  from '../../services/tintuc/tintucService'

function TinTucChiTiet({...props}) {
  const [data, setData] = useState([]);
  useEffect(() =>{
    getDataDetail()
  },[])
  async function getDataDetail(){
    let id = ''
    id = this.props.match.params.id
    console.log(this.props.match.params, ' param')
    const data = await getById(id)
    if (data){
      console.log(data)
      setData(data)
    }
  }
    // Declare a new state variable, which we'll call "count"
  return (
    <div>
      <h2> Trang chi tiết tin tức</h2>

      {/*<p>You clicked {count} times</p>*/}
      {/*<button onClick={() => setCount(count + 1)}>*/}
      {/*  Click me*/}
      {/*</button>*/}
    </div>
  );
}

export default TinTucChiTiet