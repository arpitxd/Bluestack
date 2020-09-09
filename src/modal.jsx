import PropTypes from 'prop-types';
import React from 'react';

import './modal.css';

export default function Modal(props) {
    const {
        modalHeader,
        closeCallback,
        children,
        cancelButtonId,
    } = props;
    return (
        <React.Fragment>
            <div className={'modal'}>
                <div className="overlay"></div>
                <div className="modal_content">
                    <div className="modal_titlebar">
                        <span id="ui-id-1">{modalHeader}</span>
                        <a className="close" id={cancelButtonId} onClick={closeCallback}>
                            <span className="">&#10005;</span>
                        </a>
                    </div>
                    <div className="modal_children">
                        {children}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
Modal.propTypes = {
    closeCallback: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
    children: PropTypes.element,
    cancelButtonId: PropTypes.string,
    modalHeader: PropTypes.string,
    showHeaderCancelButton: PropTypes.bool,
};
Modal.defaultProps = {
    closeCallback: false,
    children: <div></div>,
    cancelButtonId: '',
    modalHeader: '',
    showHeaderCancelButton: true,
};
