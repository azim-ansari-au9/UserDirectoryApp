import React, { Component } from 'react';

class Filter extends Component{
    constructor(){
        super()
        this.state={
            filterData:null,
            noData:false,
        }
    }
    filter(key){
        console.log(key)
        fetch(`http://localhost:5000/users?q=`+key).then((data=>{
            data.json().then((res)=>{
                console.log('res',res);
                if(res.length>0){
                    this.setState({filterData:res,noData:false})
                }else{
                    this.setState({noData:true,filterData:null})
                }
            })
        }))
    }
    render(){
        return (
            <div className='filtershow col-md-12'>
                <h6>filter</h6>
                <input type='text' className='col-md-12' placeholder='Enter Country name' onChange={(event)=>{
                    this.filter(event.target.value)
                }}/>
                <div>
                    {
                        this.state.filterData?
                        <div>
                        {
                            this.state.filterData.map((item,index)=>
                            <div key={index.id}>
                                {item.country}
                            </div>)
                        }
                        </div>
                        :""
                    }
                    {
                        this.state.noData?<h3>No data found</h3>:null
                    }
                </div>
            </div>
        );
    }
}

export default Filter;
