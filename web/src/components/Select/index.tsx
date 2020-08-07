import React, { SelectHTMLAttributes } from 'react';

import './style.css';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label: string,
    name: string,
    options: Array<{
        value: string,
        label: string
    }>,
    firstOption: string
}


const Select: React.FC<SelectProps> = ({ label, name, options, firstOption, ...rest }) => {
    return (
        <div className="select-block">
            <label htmlFor={name}>{label}</label>
            <select id={name} {...rest}>
                <option value="" disabled selected hidden>{firstOption}</option>
                {options.map((option) => {
                    return <option value={option.value}>{option.label}</option>
                })
                }
            </select>
        </div>
    )

}

export default Select;