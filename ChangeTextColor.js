import React,{Component} from 'react'
class ChangeTextColor extends Component{

    constructor(props){
        super(props);
        this.state={
            color:'grey'
        }
    }
    RedHandler=()=>{
        this.setState({color:'red'});
    }
    GreenHandler=()=>{
        this.setState({color:'green'});
    }
    BlueHandler=()=>{
        this.setState({color:'blue'});
    }
    render(){
        return(
            <div>
                <h1 style={{color:this.state.color}}>Text Color is Changed</h1>
                <button type="button" onClick={this.RedHandler}>RED</button>&nbsp;
                <button type="button" onClick={this.GreenHandler}>GREEN</button>&nbsp;
                <button type="button" onClick={this.BlueHandler}>BLUE</button>&nbsp;
            </div>
        )
    }
}
export default ChangeTextColor;