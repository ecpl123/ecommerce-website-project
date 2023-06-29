type PersonListProps = {
    names: {
        first: string
        last: string
    }[]
}

export const PersonList = (props: PersonListProps) => {
    return(
        <div>
            {props.names.map(bunda => { //.map allows me to access the objects in the array
                return(
                    <h2 key={bunda.first}>
                        {bunda.first} {bunda.last}
                    </h2>
                )
            })}
        </div>
    )
}