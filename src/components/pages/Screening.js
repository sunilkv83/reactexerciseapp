import React from "react";
import { Field, reduxForm } from "redux-form";
import TextField from "@material-ui/core/TextField";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Checkbox from "@material-ui/core/Checkbox";
import SelectField from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
);

const renderRadioGroup = ({ input, ...rest }) => (
  <Radio
    {...input}
    {...rest}
    valueSelected={input.value}
    onChange={(event, value) => input.onChange(value)}
  />
);

const renderCheckbox = ({ input, label }) => (
  <Checkbox
    label={label}
    checked={input.value ? true : false}
    onCheck={input.onChange}
  />
);
const renderSelectField = ({
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) => (
  <SelectField
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    onChange={(event, index, value) => input.onChange(value)}
    children={children}
    {...custom}
  />
);
const ScreeningForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="currentTemp"
          component={renderTextField}
          label="Current Temparature"
        />
      </div>
      <div>
        <Field
          name="wakingTemp"
          component={renderTextField}
          label="Waking Temparature"
        />
      </div>
      <div>
        <Field name="Temp" component={renderRadioGroup}>
          <Radio value="F" label="F" />
          <Radio value="C" label="C" />
        </Field>
      </div>
      <div>
        <Field
          name="favoriteColor"
          component={renderSelectField}
          label="Favorite Color"
        >
          <MenuItem value="Oral" primaryText="Oral" />
          <MenuItem value="Other" primaryText="Other" />
        </Field>
      </div>
      <div>
        <FormControl component="fieldset">
          <FormLabel component="legend">
            CHECK IF YOU HAVE ANY SYMPTOMS
          </FormLabel>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox name="Fever" />}
              label="Fever"
            />
            <FormControlLabel
              control={<Checkbox name="SOB" />}
              label="Shortness of Breath"
            />
            <FormControlLabel
              control={<Checkbox name="BL" />}
              label="Bluish Lips"
            />
          </FormGroup>
        </FormControl>
      </div>
      <div>
        <button type="submit">Submit</button>
        <button type="button">Clear Values</button>
      </div>
    </form>
  );
};

export default reduxForm({
    form: 'ScreeningForm' // a unique identifier for this form
  })(ScreeningForm);
  
