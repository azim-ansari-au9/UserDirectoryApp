import React, { Component } from 'react';

class Search extends Component{
    constructor(){
        super()
        this.state={
            searchData:null,
            noData:false,
        }
    }
    search(key){
        console.log(key)
        fetch(`http://localhost:5000/users?q=`+key).then((data=>{
            data.json().then((res)=>{
                console.log('res',res);
                if(res.length>0){
                    this.setState({searchData:res,noData:false})
                }else{
                    this.setState({noData:true,searchData:null})
                }
            })
        }))
    }
    render(){
        return (
            <div className='showData'>
                <h6>Search</h6>
                <input type='text'className='' placeholder='Enter Any text..' onChange={(event)=>{
                    this.search(event.target.value)
                }}/>
                <div>
                    {
                        this.state.searchData?
                        <div>
                        {
                            this.state.searchData.map((item,index)=>
                            <div key={index.id}>
                                {item['Full Name']}
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

export default Search;
