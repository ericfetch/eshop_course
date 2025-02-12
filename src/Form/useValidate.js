import React from "react"

export default function useValidate(Component, rules) {
    const [errors, setErrors] = React.useState({});
    const [value, setValue] = React.useState("");

    const newComponent = React.cloneElement(Component, {
        onChange: (e) => {
            const { value } = e.target
            setValue(value)
            const errors = {}
            for (const rule in rules) {
                switch (rule) {
                    case "required":
                        if (value.trim() === "") {
                            errors[rule] = "This field is required"
                        }
                        break
                    case "minLength":
                        if (value.length < rules[rule]) {
                            errors[rule] = `This field must be at least ${rules[rule]} characters`
                        }
                        break
                    case "maxLength":
                        if (value.length > rules[rule]) {
                            errors[rule] = `This field must be at most ${rules[rule]} characters`
                        }
                        break
                    case "email":
                        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                        if (!emailRegex.test(value)) {
                            errors[rule] = "Please enter a valid email address"
                        }
                        break
                    case "creditCard":
                        const creditCardRegex = /^[0-9]{16}$/
                        if (!creditCardRegex.test(value)) {
                            errors[rule] = "Please enter a valid credit card number"
                        }
                        break;
                    default:
                        break
                }
                setErrors(errors)
            }
        },
        value: value,
    })

    return [newComponent, value, errors]
}