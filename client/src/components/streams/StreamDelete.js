import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {fetchStream, deleteStream} from '../../actions';

class StreamDelete extends React.Component{

    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }

    renderActions(){
        return(
            <React.Fragment>
            <button onClick={()=>this.props.deleteStream(this.props.match.params.id)} className="ui button negative">Delete</button>
            <Link to="/" className="ui button">Cancel</Link>
        </React.Fragment>
        ); 
        
    }

    renderContent(){
        if(this.props.stream){
            return `Are you sure you want to delete the stream with title ${this.props.stream.title} ?`
        }
        return 'Are you sure you want to delete the stream?'
    }
    
    render(){
        return(
            <div>
                StreamDelete
                <Modal
                title="Stream Delete"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={()=> history.push('/')}/>
            </div>
        );
    }
    
}

const mapStateToProps=(state, ownProps)=>{
    return({stream:state.streams[ownProps.match.params.id]});
}

export default connect(mapStateToProps,{fetchStream, deleteStream})(StreamDelete);