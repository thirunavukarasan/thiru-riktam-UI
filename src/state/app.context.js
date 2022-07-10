import * as React from "react";
export const appContext = React.createContext();

class AppContextProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            children: props.children,
            name: "App State",
            selectedContact: "",
            messages: [],
            insight: {
                time: "13h",
                atendeed: "188",
                meetings: "199",
                rejected: "42"
            },
            setSelectedContact: this.setSelectedContact,
            setMessages: this.setMessages,
            setInsight: this.setInsight
        };
    }

    setSelectedContact = (selectedContact) => {
        this.setState({ selectedContact });
    };


    setMessages = (messages) => {
        this.setState({ messages });
    };

    setInsight = (insight) => {
        this.setState({ insight });
    }

    render() {
        return (
            <appContext.Provider value={this.state}>
                {this.state.children}
            </appContext.Provider>
        );
    }
}

export default AppContextProvider;
