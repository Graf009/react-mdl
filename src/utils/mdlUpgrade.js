import React from 'react';

export default (Component) => {
    class MDLUpgradedComponent extends React.Component {
        componentDidMount() {
            componentHandler.upgradeDom();
        }

        componentWillUnmount() {
            componentHandler.upgradeDom();
        }

        render() {
            return <Component {...this.props} />;
        }
    }

    return MDLUpgradedComponent;
};
