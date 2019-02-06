import React, { useState } from 'react';

const handleInputValue = initialValue => {
    const [value, setValue] = useState(initialValue);

    return {
        value,
        onChange: e => setValue(e.target.value),
        resetValue: () => setValue(''),
    };
};

export default function Form({ onSubmitCb }) {
    const { resetValue, ...handleTextInput } = handleInputValue('');

    return (
        <form
            onSubmit={e => {
                onSubmitCb(handleTextInput.value);
                resetValue();
                e.preventDefault();
            }}
        >
            <input {...handleTextInput} />
        </form>
    );
}
