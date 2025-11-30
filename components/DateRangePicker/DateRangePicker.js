import React from 'react';
import { Grid } from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

function DateRangePicker({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
  startLabel = 'Desde',
  endLabel = 'Hasta',
  disabled,
  disablePast
}) {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container spacing={1} style={{marginBlock: 0}} >
        <Grid item xs={6}>
          <KeyboardDatePicker
            disablePast={disablePast}            
            disabled={disabled}
            margin="none"
            label={startLabel}
            format="yyyy-MM-dd"
            value={startDate}
            onChange={onStartDateChange}
            fullWidth
            KeyboardButtonProps={{ 'aria-label': 'change start date' }}
          />
        </Grid>
        <Grid item xs={6}>
          <KeyboardDatePicker
            disablePast={disablePast}
            disabled={disabled}
            margin="none"
            label={endLabel}
            format="yyyy-MM-dd"
            value={endDate}
            onChange={onEndDateChange}
            fullWidth
            KeyboardButtonProps={{ 'aria-label': 'change end date' }}
          />
        </Grid>
      </Grid>
    </MuiPickersUtilsProvider>
  );
}

export default DateRangePicker;
