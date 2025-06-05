export function createInput(Object_, type_, name_, id_, placeholder_ ) {
    let objectAttributes = ''
    if (id_ == '') {
        objectAttributes= {
            type: type_,
            name: name_,
            placeholder: placeholder_
        }    
    } else {
        objectAttributes = {
            type: type_,
            name: name_,
            id: id_,
            placeholder: placeholder_
        }
    }
    

    for (const [key, value] of Object.entries(objectAttributes)) {
        Object_.setAttribute(key, value)
    }
    return Object_
}