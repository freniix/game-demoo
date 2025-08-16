
export default function AskName({ref, ...props }){

    return(
        <>
        <input ref={ ref} {...props} />
        </>
    )
}