import { useState } from "react"

export default function useRadioGroup() {
    const instanceStore = []
    const [checked, setChecked] = useState(null)
    const [value, setValue] = useState(null)

    const handleRadioChange = (id) => {
        setChecked(id)
        setValue(instanceStore.indexOf(id))
    }

    const register = () => {
        const id = 'radio-' + instanceStore.length
            instanceStore.push(id)
            const propsTemp = {
                id,
                onChange: () => {
                    handleRadioChange(id)
                },
                checked: id===checked
            }

        
        return propsTemp

    }
    return [register,value ]
}