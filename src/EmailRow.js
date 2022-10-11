import { CheckBox } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';
import './EmailRow.css';

function EmailRow({id, title, subject, description, time}) {
  return (
    <div className='emailRow'>
      
      <div className='emailRow__options'>
        <CheckBox />
        <IconButton>
            <StarBorderOutlinedIcon/>
        </IconButton>
        <IconButton>
            <LabelImportantOutlinedIcon/>    
        </IconButton>
      </div>

      <h3 className='emailRow__title'>
        {title}
      </h3>

      <div className='emailRow__message'>
        <h4>{subject}</h4>
      </div>
      <div className='emailRow__description'>

      </div>
    </div>
  )
}

export default EmailRow
