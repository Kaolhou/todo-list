import './index.css'

function NoteContainer({note, id, onDelete}){
    const createdOn = new Date(note.createdOn)
    let date = createdOn.getDate()
    let month = createdOn.getMonth() + 1
    const year = createdOn.getFullYear()

    if (date < 10) {
        date = `0${date}`
      }
      if (month < 10) {
        month = `0${month}`
      }

    return(
        <li>
            <div id="header">
                {`${date}/${month}/${year}`}
                <span onClick={()=> onDelete(id)}>delete</span>
            </div>
            <div id="content">
                {note.value}
            </div>
            <div>
                
            </div>
        </li>
    )
}

export default NoteContainer