import './index.css'
import trash from '../../assets/trash.svg'

function NoteContainer({note, id, onDelete}){
    const createdOn = new Date(note.createdOn)
    var date = createdOn.getDate()
    var month = createdOn.getMonth() + 1
    const year = createdOn.getFullYear()
    var hour = createdOn.getHours()
    var min = createdOn.getMinutes()
    if (date < 10) {
        date = `0${date}`
    }
    if (month < 10) {
        month = `0${month}`
    }
    let z= min.toString()
    if(z.length === 1){
        min = `0${min}`
    }

    return(
        <li>
            <div id="header">
                <div id="day">{`${date}/${month}/${year}`}</div>
                <div id="hour">{`${hour}:${min}`}</div>
            </div>
            <div id="content">
                <span id="value">{note.value}</span><div id='delete' onClick={()=> onDelete(id)}><img src={trash} alt='trash' /></div>
            </div>
        </li>
    )
}

export default NoteContainer