import React, {Component} from 'react';
import Number from './Number.js'


export default class Sum extends Component {
    state = {
        number: ""
    }
 
    render() {
        const numList = this.props.numbers.map((dict, index)=>
            <Number {...dict} key ={index} index= {index} numb= {dict} deleteNum={this.props.deleteNum} sumNumbers= {this.props.sumNumbers}/>
        )
        return (
            <div className="Sum">
                <form onSubmit={(event)=>{
                    event.preventDefault()
                    this.props.addNumber(this.state.number)
                    this.props.sumNumbers()
                    this.forceUpdate()
                }}>    
                    {<input id = "number" name="number" placeholder="number" value={this.state.number}
                        onChange={(event)=> {
                            this.setState({
                                number : event.target.value
                            })
                        }} />}

                    <input type="submit" value="Add number"/>
                </form>
                <div>
                    {numList}
                </div>
                sum:{this.props.sum}
            </div>
        );
    }
}