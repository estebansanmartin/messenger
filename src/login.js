import React from 'react'
import { Card, CardContent, Button, CardActions } from '@material-ui/core'
import GoogleLogin from 'react-google-login'

function Login() {
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');

    const responseGoogle = response => {
        setName(response.profileObj.name);
        setUrl(response.profileObj.imageUrl);
      }
    return (
        <div>
            <Card>
                <CardContent>
                    <h3>Benvenuti a Clone Messenger</h3>
                     <GoogleLogin
                        clientId="240698097252-aoe3t7e9egtfiiain0q2053sge87b2ln.apps.googleusercontent.com"
                        buttonText="Login con Google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                </CardContent>
            </Card>
        </div>
    )
};

export default Login;
