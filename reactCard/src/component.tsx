import * as React from "react";

// export class ReactCircleCard extends React.Component<{}>{
//     render(){
//         return (
//             <div className="circleCard">
//                 Hello, React!
//             </div>
//         )
//     }
// }

// export default ReactCircleCard;


export interface State {
    textLabel: string,
    textValue: string
}

export const initialState: State = {
    textLabel: "",
    textValue: ""
}

export class ReactCircleCard extends React.Component<{}, State>{
    private static updateCallback: (data: object) => void = null;

    public static update(newState: State) {
        if (typeof ReactCircleCard.updateCallback === 'function') {
            ReactCircleCard.updateCallback(newState);
        }
    }

    public state: State = initialState;

    public componentWillMount() {
        ReactCircleCard.updateCallback = (newState: State): void => { this.setState(newState); };
    }

    public componentWillUnmount() {
        ReactCircleCard.updateCallback = null;
    }
    
    constructor(props: any) {
        super(props);
        this.state = initialState;
    }

    render() {
        const { textLabel, textValue } = this.state;

        return (
            <div className="circleCard">
                <p>
                    {textLabel}
                    <br />
                    <em>{textValue}</em>
                </p>
            </div>
        )
    }
}

