import React, { useContext } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
// @material-ui/icons
import Clear from "@material-ui/icons/Clear";
import Check from "@material-ui/icons/Check";
// core components
import styles from "assets/jss/nextjs-material-dashboard/components/customInputStyle.js";
import { ThemeContext } from "../../context/ThemeContextProvider";
import { useState } from "react";
import { IconButton, InputAdornment } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import CustomInput from "components/CustomInput/CustomInput.js";

export default function CustomPasswordInput({ password, setPassword, inputName, handleChangeHook, ...rest }) {
  const useStyles = makeStyles(styles);

  const { theme, setTheme } = useContext(ThemeContext);

  const classes = useStyles(theme);

  const handleClickShowPassword = () => {
    setShowPassword(prev => !prev);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event) => {
    if (handleChangeHook)
      handleChangeHook();

    if (setPassword)
      setPassword(event.target.value);
  };

  return (
    <CustomInput
      formControlProps={{
        fullWidth: true,
      }}
      inputProps={{
        type: showPassword ? 'text' : 'password',
        value: password,
        name: inputName,
        key: inputName,
        onChange: handleChange,
        endAdornment:
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
      }}
      {...rest}
    />
  );
}

CustomPasswordInput.propTypes = {
  labelText: PropTypes.node,
  labelProps: PropTypes.object,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  formControlProps: PropTypes.object,
  error: PropTypes.bool,
  success: PropTypes.bool,
};
