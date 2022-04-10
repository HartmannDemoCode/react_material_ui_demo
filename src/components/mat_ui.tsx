import { useState } from 'react';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import DeleteIcon from '@mui/icons-material/Delete';
import LoginIcon from '@mui/icons-material/Login';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';

import RatingsDemo from './RatingsDemo';
import SelectDemo from './SelectDemo';
import SelectDemo2 from './SelectDemo2';
import SliderDemo from './SliderDemo';
import SwitchDemo from './SwitchDemo';
import TextDemo from './TextFieldDemo';
import ToggleButtonGroupDemo from './ToggleButtonGroupDemo';
import AvatarDemo from './AvatarDemo';
import DividerDemo from './DividerDemo';
import CustomTableDemo from './TableDemo';
import BasicTableDemo from './BasicTableDemo';
import SnackBar from './SnackBarAlertDemo';
import Card from './CardDemo';

// https://mui.com/components/
export default function App() {
    // const top100Films: string[] = ["ho", "hi", "hu"];
    const top100Films = ["ho", "hi", "hu"]
    const [state, setState] = useState({ chk1: true, chk2: false });
    const [val, setVal] = useState('female');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setVal((event.target as HTMLInputElement).value);
    };
    return (
        <div>

            <CustomTableDemo />
            <BasicTableDemo />
            {/* create a button with a login icon */}
            <Button startIcon={<LoginIcon />} color="primary" size="small" variant="contained" endIcon={<LoginIcon />}> Click Me </Button>
            <Button startIcon={<LogoutIcon />} color="secondary" variant="contained"> Logout </Button>

            {/* create a button group */}
            <br /><br /><ButtonGroup variant="contained">
                <Button endIcon={<LoginIcon />} color="primary"> Login </Button>
                <Button startIcon={<LogoutIcon />} color="secondary"> Logout </Button>
            </ButtonGroup>
            <br /><br /><ButtonGroup variant="contained" orientation="vertical">
                <Button endIcon={<DeleteIcon />} color="primary"> Delete </Button>
                <Button startIcon={<LogoutIcon />} color="secondary"> Logout </Button>
            </ButtonGroup>
            Tooltip: 
            <Tooltip title="Delete">
                <IconButton>
                    <DeleteIcon />
                </IconButton>
            </Tooltip>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Movie" />}
            />
<h2>Box</h2>

<p>
The Box component serves as a wrapper component for most of the CSS utility needs.
</p>
            <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
                <FormControlLabel
                    label="Child 1"
                    control={<Checkbox checked={state.chk1} onChange={handleChange} name="chk1" />}
                />
                <FormControlLabel
                    label="Child 2"
                    control={<Checkbox checked={state.chk2} onChange={handleChange} name="chk2" />}
                />
                <Fab size="medium" color="secondary" aria-label="add"> <EditIcon /> </Fab>
                <Fab size="medium" color="primary" aria-label="add"> <AddIcon /> </Fab>
                <br />
                <Stack direction="row" spacing={2}>
                    <Button variant="outlined" color="error"> Error </Button>

                    <FormControl>
                        <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={val}
                            onChange={handleChange2}
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl>
                </Stack>

            </Box>
            <RatingsDemo />
            <SelectDemo />
            <SelectDemo2 />
            <SliderDemo />
            <SwitchDemo />
            <TextDemo />
            <ToggleButtonGroupDemo />
            <AvatarDemo />
            <DividerDemo />
            <SnackBar/>
            <Card/>
        </div>

    );

}