import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';
import _ from 'lodash';

class StreamEdit extends React.Component{

    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit = (formvalues) =>{
       this.props.editStream(this.props.match.params.id,formvalues);
    }

    render(){
        if(!this.props.stream){
            return(<div>Loading..</div>);
        }
        return(
            <div>
                <h3>EDIT A STREAM</h3>
                <StreamForm initialValues={_.pick(this.props.stream,'title','description')} onSubmit={this.onSubmit}/>
            </div>
        );
    }
    
}

const mapStateToProps=(state,ownProps)=>{
    return{
        stream: state.streams[ownProps.match.params.id]
    };
}

export default connect(mapStateToProps, {fetchStream, editStream})(StreamEdit);