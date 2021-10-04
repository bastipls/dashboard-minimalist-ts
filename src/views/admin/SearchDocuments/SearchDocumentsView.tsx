import { TextField } from '@material-ui/core';
import  {Autocomplete}  from '@material-ui/lab';

import { Card } from '../../../components/cards/Card';

export const SearchDocumentsView = () => {
    return (
        <Card className="search-documents__container-search" >
            <h4>Inicia tu búsqueda de documentos</h4>
            
            <Autocomplete 
                getOptionLabel={(option) => option.label}
                fullWidth
                options={[
                    {label:"test"}
                ]}
                renderInput={(params) => <TextField variant="outlined"  {...params} label="Movie" />}
            /> 
        </Card>
    )
}
