type GreetProps = {
    name: string
    messageCount?: number
    isLoggedIn: boolean
}

export const Greet = (props: GreetProps) => {
    const {messageCount = 0} = props //setting default value for the prop messageCount to 0. above, if you use ?: in the type definition, you can make a type optional
    return (
        <div>
            <h2>
                {
                    props.isLoggedIn 
                    ? `Welcome ${props.name}! You have ${props.messageCount} unread messages`
                    : 'Welcome Guest'
                }
            </h2>
        </div>
    )
}

