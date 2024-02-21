import { useMemo } from "react";
import useTheme from "../../hooks/useTheme";

const styles = {
    bgPrimary: {
        background: (props) => props.colorPrimary
    },
    bgSecondary: {
        background: (props) => props.colorSecondary
    },
    selected: {
        background: (props) => props.colorPrimary,
        "& label": {
            color: "white"
        }
    },
    liDefault: {
        border: (props) => "1px solid " + props.colorPrimary,
        borderBlockWidth: "2px !important"
    },
    liFirst: {
        borderLeftWidth: "2px !important"
    },
    liLast: {
        borderRightWidth: "2px !important"
    }
}

export function CustomRadioGroup({ name, value, setValue, children }) {
    const classes = useTheme(styles);

    const values = useMemo(() => {
        return children.map(({props: radio}) => ({name: radio.name, value: radio.value}));
    }, [children]);

    const getOrderClasses = (elem) => {
        function isFirst() {
            return elem === values[0].value;
        }

        function isLast() {
            return elem === values[values.length - 1].value;
        }

        let arr = [];

        if (isFirst())
            arr.push(classes.liFirst + " rounded-l-xl");

        if (isLast())
            arr.push(classes.liLast + " rounded-r-xl");

        return arr.join(" ");
    }

    return (
        <ul className={`m-0 p-0 flex items-center w-fit text-sm font-medium text-white ${name}`}>
            {values.map((radio) => (
                <li key={radio.value} className={`cursor-pointer w-full ${classes.liDefault} ${getOrderClasses(radio.value)} select-none bg-white ${value === radio.value ? classes.selected : ""}`}>
                    <div className="flex items-center">
                        <input id={`${radio.value}-${name}-radio-id`} type="radio" defaultChecked={value === radio.value} onClick={(e) => setValue(radio.value)} name={`${name}-radio`} className="hidden" />
                        <label htmlFor={`${radio.value}-${name}-radio-id`} className="cursor-pointer w-full text-center py-2 text-sm font-medium text-black">{radio.name}</label>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export function CustomRadio() {
    return "";
}