import { TextField } from "@mui/material";
import { LocalizationProvider, StaticDatePicker } from "@mui/x-date-pickers";
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import moment from "moment";
import { useState } from "react";

export default function DateSelectingCalendar() {
  const [value, setValue] = useState(moment())

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <StaticDatePicker 
        displayStaticWrapperAs="desktop"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
