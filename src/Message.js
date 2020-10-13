import React, { forwardRef} from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import './estilos.sass'



const Message = forwardRef(({ message, name}, ref) => {
    const isUser = name === message.name

    return (
        <div ref={ref} className={`message ${isUser && 'message_user'}`}>
            <Card className={isUser ? "message_guestCard" : "message_useCard"}>
                <CardContent>
                    <Typography className="text-chat"
                        variant="h5"
                        component="h2"
                    >
                         {!isUser && `${message.name} dice:`} {`${message.message}`}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
});

export default Message
