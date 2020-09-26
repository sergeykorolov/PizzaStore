import React from "react";
import classNames from 'classnames';

const Button = ({className, children, outline}) => {
    return (
        <button onClick={() => alert(children)} className={classNames('button', className, {
            'button--outline' : outline
        })}>{children}</button>
    )
}

export default Button;