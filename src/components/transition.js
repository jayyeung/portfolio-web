import React, { PureComponent } from 'react';
import posed, { PoseGroup } from 'react-pose';

class Transition extends PureComponent {
    render() {
        const { children, location } = this.props;
        const RouteWrapper = posed.div({
            enter: { opacity: 1, staggerChildren: 500, beforeChildren: true },
            exit: { opacity: 0, afterChildren: true }
        });

        return (
            <PoseGroup>
                <RouteWrapper key={location.pathname}> 
                    {children}
                </RouteWrapper>
            </PoseGroup>
        )
    }
}

export default Transition;