import React from 'react';

import { Button } from './Button';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Login and user details',
  
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;




export const Login = () => (
  <div>
  <TableContainer>
  Request to be POSTed to uri : /NorenWClientTP/QuickAuth
  <Table>
    <TableHead><p style={{marginTop: "20px"}}>Request Details :</p>
      <TableRow>
        <TableCell>Parameter Name</TableCell>
        <TableCell>Possible value</TableCell>
        <TableCell>Description</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>jData*</TableCell>
        <TableCell></TableCell>
        <TableCell>Should send json object with fields in below list</TableCell>
      </TableRow>
    </TableBody>
  </Table>
  
  <Table>
    <TableHead><p style={{marginTop: "20px"}}>json Fields:</p>
      <TableRow>
        <TableCell>Json Fields</TableCell>
        <TableCell>Possible value</TableCell>
        <TableCell>Description</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>apkversion*</TableCell>
        <TableCell></TableCell>
        <TableCell>Application version.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>uid*</TableCell>
        <TableCell></TableCell>
        <TableCell>User Id of the login user</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>pwd*</TableCell>
        <TableCell></TableCell>
        <TableCell>Sha256 of the user entered password.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>factor2*</TableCell>
        <TableCell></TableCell>
        <TableCell>DOB or PAN as entered by the user. (DOB should be in DD-MM-YYYY)</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>vc*</TableCell>
        <TableCell></TableCell>
        <TableCell>Vendor code provided by noren team, along with connection URLs</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>imei*</TableCell>
        <TableCell></TableCell>
        <TableCell>Send mac if users logs in for desktop, imei is from mobile</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>addldivinf</TableCell>
        <TableCell></TableCell>
        <TableCell>Optional field, Value must be in below format:
        iOS - iosInfo.utsname.machine - iosInfo.systemVersion
        Android - androidInfo.model - androidInfo.version
        examples:
        iOS - iPhone 8.0 - 9.0
        Android - Moto G - 9 PKQ1.181203.01
      </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>ipaddr</TableCell>
        <TableCell></TableCell>
        <TableCell>Optional field</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>source</TableCell>
        <TableCell>API</TableCell>
        <TableCell></TableCell>
      </TableRow>
    </TableBody>
  </Table>
</TableContainer>
  <p style={{marginTop: "30px"}}>This is a paragraph below the table.</p>
</div>
)



export const Logout = Template.bind({});
Logout.args = {

};

export const ForgotPassword = Template.bind({});
ForgotPassword.args = {
  size: 'large',
  label: 'Button',
};

export const ChangePassword = Template.bind({});
ChangePassword.args = {
  size: 'small',
  label: 'Button',
};
