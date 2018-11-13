import React, {Component} from 'react';

//引入组件


class Layout extends Component {
    render() {
        return (
            <div>

                {this.props.children}
            </div>
        );
    }
}

export default Layout;