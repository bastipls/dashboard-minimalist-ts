import { faFilePdf } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText } from "@material-ui/core"
import moment from 'moment';
interface PropsPropertiesFile{
    file:File
}

export const ProperitesFile = ({file}:PropsPropertiesFile) => {
    return (
        <List
            className="components-modal__modal-preview-document-list"
            >
            <ListItem className="components-modal__modal-preview-list-item">
                <ListItemAvatar>
                <Avatar>
                    <FontAwesomeIcon icon={faFilePdf} />
                </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Nombre" color="#000" secondary={file.name} />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem className="components-modal__modal-preview-list-item">
                <ListItemAvatar>
                <Avatar>
                <FontAwesomeIcon icon={faFilePdf} />
                </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Tamaño" secondary={`${(file.size / (1024*1024)).toFixed(2)} MB`} />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem className="components-modal__modal-preview-list-item">
                <ListItemAvatar>
                <Avatar>
                <FontAwesomeIcon icon={faFilePdf} />
                </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Ultima modificación" secondary={`${moment(file.lastModified).format('DD/MM/YYYY')}`} />
            </ListItem>
            <Divider variant="inset" component="li" />
        </List>
    )
}
