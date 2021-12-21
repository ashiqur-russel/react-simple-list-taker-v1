import { type } from '@testing-library/user-event/dist/type';
import React,{useState,useReducer} from 'react';
import {data} from '../../../data';
import Modal from './Modal';

//reducer
import { reducer } from './reducer';


const defaultState = {
    person : [],
    isModalOpen : false,
    modalContent : ''
}

const UseReduce = () => {
    const [name,setName]= useState('');
    const [state,dispatch]= useReducer(reducer,defaultState )
            const handleSubmit =(e)=>{
                e.preventDefault();
                    const newItem = {id:new Date().getTime().toString(),name};
                    if(name){
                        dispatch({type:'ADD_ITEM',payload:newItem})
                        setName('')
                    }else{
                        dispatch({type:'NO_VALUE'})
                    }
            }
    const closeModal = () =>{
        dispatch({type:'CLOSE_MODAL'})
    }


    return (
        <>
        { state.isModalOpen && <Modal modalContent={state.modalContent} closeModal={closeModal}/>}
    
            <form onSubmit={handleSubmit} className='form'>
                <div>
                    <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}></input>
                </div>
                <button type='submit'>Submit</button>
            </form>       
                <h3>ITEM</h3>
                <h4 className=''></h4>
                {
                    state.person.map((data,index)=>{
                        return(
                            <div key={data.id} className='item'>
                            <h4>{data.name}</h4>
                            <button onClick={()=>dispatch({type:'REMOVE_ITEM',payload:data.id})}>Remove</button>
                            </div>
                        )
                    })
                }
        
    
    
        
        </>

    )
}

export default UseReduce
