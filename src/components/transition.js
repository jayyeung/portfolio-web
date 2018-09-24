import React, { PureComponent } from 'react';
import posed, { PoseGroup } from 'react-pose';

class Transition extends PureComponent {
    render() {
        const { children, location } = this.props;
        const RouteWrapper = posed.div({
            enter: { opacity: 1, delay: 300, beforeChildren: true },
            exit: { opacity: 0 },
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