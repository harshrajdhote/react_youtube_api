import React,{Component} from 'react'
// const SearchBar = ()=>{
//     return <input/>   //functional component becoz it is a function
// };
class SearchBar extends  Component{
   constructor(props){
      super(props);
      this.state = {term : ''}; //obj assignment to state
   }
   //control input changes automatically when state changes
     render(){
        return (
           <div className="search-bar">
        <input
        value={this.state.term}  
        onChange={(event)=> this.onInputChange(event.target.value )}/> 
             </div>
        )
      }
      //here we are changing value from state not from keyboard rerendering occurs
      //every class has render function
      //rerendering here when ever state is changing
     onInputChange(term){ //event describe context of event and more info
        this.setState({term});
        this.props.onSearchTermChange(term);
     }

}
export default SearchBar; //when exporting the file this is default one
//class component is used when we wanna a component to have some type of internal record keeping

//State of Component
//each component has a state 
//whenever the component state changes, comp is rerendered 
//also the its childs