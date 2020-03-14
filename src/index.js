/* here we write components that produces html code*/
//take this comp's generated HTML and put it
//on the page (in DOM) 
//react is split up into two parts react core and react Dom here we have to use react dom
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import VideoDetail from './component/video_detail';
import YTSearch from 'youtube-api-search';
import SearchBar from './component/search_bar' ;
import VideoList from './component/video_list';
/*searchBar is user defined name it can be whatever*/
const API_KEY = 'AIzaSyDFbWiMRLA6K7qDkvPlT892zqzC1QZCmAk';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {videos : [],selectedVideo:null };
        YTSearch({key: API_KEY,term: 'WceSangli'},(videos)=>{
            this.setState({videos:videos,
            selectedVideo:videos[0]});
        });
    }
   render(){
    return (<div>
        <SearchBar />
        <VideoDetail video = {this.state.selectedVideo}/>
        <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        videos={this.state.videos}/>
        </div>); 
        } 
}
//in class based component props can be access by this.props
//we are passing video as prop to videolist component
//here return val is jsx looks like html but behind the seens js
ReactDOM.render(<App/>,document.querySelector('.container'));  //we need to pass instance of App <App/>
//here we have to pass where to render the component on which element by providing second argument
//babel and webpack translates the ES6 js into browser compatible js
