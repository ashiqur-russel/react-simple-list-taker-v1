export const reducer = (state,action)=>{
        if(action.type ==='ADD_ITEM'){
            const newItem = [...state.person,action.payload];
            return {
                ...state,
                person:newItem,
                isModalOpen:true,
                modalContent:'Item Added'
            };
        }
        if(action.type==='NO_VALUE'){
            return {
                ...state, 
                isModalOpen:true,
                modalContent:'Please Enter Item'
            };
        }
        if(action.type==='CLOSE_MODAL'){
            return{
                    ...state,
                    isModalOpen:false
            }
        }
        if(action.type==='REMOVE_ITEM'){
            const newItem = state.person.filter((person)=>person.id !=action.payload);
            return{
                ...state,
                person:newItem,
                isModalOpen:true,
                modalContent:'Item Deleted'
            }
        }
        
        throw new Error ('No Matching found');
}

