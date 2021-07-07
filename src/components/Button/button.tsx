import React from 'react';
import classNames from 'classnames';

//定义Button大小
export enum ButtonSize {
    Large = 'lg',
    Small = 'sm'

}

//定义Button类型
export enum ButtonType {
    Primary = 'primary',
    Default = 'default',
    Danger = 'danger',
    Link = 'link'
}

//定义接口Props
interface BaseButtonProps {
    className?: string,
    disabled?: boolean,
    size?: ButtonSize,
    btnType?: ButtonType,
    children?: React.ReactNode,
    href?: string
}

type NativeButtionProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtionProps & AnchorButtonProps>

const Button: React.FC<ButtonProps> = (props) => {
    
    const {className, btnType, disabled, size, children, href, ...restProps} = props
    
    //默认添加btn classname
    const classes = classNames('btn', className, {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        'disabled': (btnType === ButtonType.Link) && disabled,
    });

    if(btnType === ButtonType.Link && href){
        return (<a className={classes} href={href} {...restProps}>{children}</a>)
    }else{
        return (<button className={classes} disabled={disabled} {...restProps}>{children}</button>)
    }   
}

//默认的props
Button.defaultProps = {
    disabled: false,
    btnType: ButtonType.Default
}

export default Button;