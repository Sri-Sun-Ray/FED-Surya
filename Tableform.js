import React,{Component} from 'react'
class Tableform extends Component{
    constructor(props)
    {
        super(props);
        this.state={studentdata:[
            {sid:1,sname:'Ram',sadd:'Guntur'},
            {sid:2,sname:'Sam',sadd:'Vijayawada'},
            {sid:3,sname:'Tom',sadd:'Tenali'}
        ]}
        
    }
    render(){
        const {studentdata}=this.state;
        return(
            <div>
                <table>
                    
                    <tr>
                        <th>SID</th>
                        <th>Sname</th>
                        <th>Saddress</th>
                    </tr>
                    {studentdata.length>0&&studentdata.map((student)=>{
                        return(
                            <tr>
                                <td>{student.sid}</td>
                                <td>{student.sname}</td>
                                <td>{student.sadd}</td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        )
    }
}
export default Tableform;