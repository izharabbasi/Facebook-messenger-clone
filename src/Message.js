import { Card, CardContent, Typography } from "@material-ui/core";
import React, {forwardRef} from "react";
import "./Message.css";

const Message = forwardRef(({message , username }, ref) => {
    const isUser = username === message.username;
    return (
        <div ref={ref} className={`message ${isUser && 'message_user'}`}>
            <Card className={isUser ? 'message_userCard' : "message_guestCard"}>
                <CardContent>
                <Typography
                    clore="white"
                    color="textSecondary"
                    component="h2"
                >
                    {!isUser && `${message.username || 'unknown username'} : `}   {message.message}
                </Typography>
                </CardContent>
            </Card>
        </div>
    );
})

export default Message;
